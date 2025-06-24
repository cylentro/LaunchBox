// File: api/src/app/api/nait/summarize/route.ts
import { NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
	HumanMessage,
	SystemMessage,
	BaseMessageChunk,
} from "@langchain/core/messages";
import { TextLoader } from "langchain/document_loaders/fs/text";
import path from "path";
import fs from "fs";

// --- Initialize LLM (ensure this is outside the POST handler if not already) ---
if (!process.env.GOOGLE_GEMINI_API_KEY) {
	throw new Error("GOOGLE_GEMINI_API_KEY not found in environment variables.");
}
if (!process.env.GOOGLE_GEMINI_MODEL) {
	throw new Error("GOOGLE_GEMINI_MODEL not found in environment variables.");
}

const llm = new ChatGoogleGenerativeAI({
	apiKey: process.env.GOOGLE_GEMINI_API_KEY,
	model: process.env.GOOGLE_GEMINI_MODEL,
	temperature: 0.3,
	maxOutputTokens: 1024,
	streaming: true,
});

export async function POST(request: Request) {
	try {
		const { pagePath } = await request.json();

		if (!pagePath || typeof pagePath !== "string") {
			return NextResponse.json(
				{ error: "Invalid 'pagePath' provided. It must be a string." },
				{ status: 400 },
			);
		}

		const basePath = process.cwd();
		const docsRoot = path.join(basePath, "..", "frontend", "docs");
		const fullFilePath = path.join(docsRoot, pagePath);

		if (!fs.existsSync(fullFilePath)) {
			console.error(`Summarize Error: File not found at ${fullFilePath}`);
			return NextResponse.json(
				{ error: `Content for page '${pagePath}' not found.` },
				{ status: 404 },
			);
		}

		let documentContent = "";
		try {
			const loader = new TextLoader(fullFilePath);
			const docs = await loader.load();
			if (docs.length > 0 && docs[0].pageContent) {
				documentContent = docs[0].pageContent;
			} else {
				console.error(
					`Summarize Error: No content loaded from ${fullFilePath}`,
				);
				return NextResponse.json(
					{ error: `Could not load content from '${pagePath}'.` },
					{ status: 500 },
				);
			}
		} catch (loadError) {
			console.error(
				`Summarize Error: Error loading file ${fullFilePath}:`,
				loadError,
			);
			return NextResponse.json(
				{ error: `Error processing page content for '${pagePath}'.` },
				{ status: 500 },
			);
		}

		if (documentContent.trim() === "") {
			documentContent =
				"This page appears to be empty or contains only whitespace.";
		}

		const fileNameWithoutExt = path.parse(path.basename(pagePath)).name;

		// Convert camelCase/PascalCase/snake_case/kebab-case to a more readable "Title Case" like string.
		// Example: "promptFramework" -> "Prompt Framework", "my-page" -> "My Page"
		// Note: This won't split all-lowercase combined words like "aboutme" into "About Me"
		// or "promptframework" into "Prompt Framework" without more complex dictionary-based logic,
		// as there are no casing or delimiter cues in such strings for simple programmatic splitting.
		const words = fileNameWithoutExt
			.replace(/([a-z])([A-Z])/g, "$1 $2") // Add space for camelCase: myFile -> my File
			.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Add space for PascalCase with acronyms: MYFile -> MY File
			.replace(/[_-]+/g, " ") // Replace underscores or hyphens with spaces
			.split(/\s+/) // Split by any sequence of whitespace
			.filter((word) => word.length > 0); // Remove empty strings that might result from multiple spaces

		let formattedPageName = words
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter, lowercase rest
			.join(" ");
		if (!formattedPageName && fileNameWithoutExt) {
			// Fallback for empty result (e.g. if filename was just "-")
			formattedPageName =
				fileNameWithoutExt.charAt(0).toUpperCase() +
				fileNameWithoutExt.slice(1);
		}

		const SUMMARIZE_SYSTEM_PROMPT = `You are an expert summarization assistant.
Your task is to create a concise and informative summary of the provided document content from the page titled "${formattedPageName}".

The summary MUST start *exactly* with the phrase: "Summary of ${formattedPageName}: \n\n".
Do not add any other preamble or introductory text before this exact phrase.

After the starting phrase "Summary of ${formattedPageName}: \n\n", follow these instructions for the rest of the summary:
1.  Focus on extracting the key information that best represents the core content of this page.
2.  The summary should be easy to understand and highlight the most important aspects relevant to Christian's professional profile.
3.  Aim for a total of 3-4 sentences for the summary content (after the starting phrase), unless the document is very extensive.
4.  Ensure the summary is based *only* on the provided text. Do not add any external information or opinions.
5.  If the provided text is very short (e.g., "This page appears to be empty...") or lacks clear substance for a detailed summary, then after the required starting phrase "Summary of ${formattedPageName}: ", you should state something like "This page contains minimal content for a detailed summary." or "This page appears to be empty."`;

		const messagesForLlm = [
			new SystemMessage(SUMMARIZE_SYSTEM_PROMPT),
			// The human message now only needs to provide the content, as the system prompt handles context and formatting.
			new HumanMessage(
				`Document content to summarize:\n\n---\n${documentContent}\n---`,
			),
		];

		const stream = await llm.stream(messagesForLlm);

		const encoder = new TextEncoder();
		const readableStream = new ReadableStream({
			async start(controller) {
				for await (const chunk of stream) {
					const chunkContent = (chunk as BaseMessageChunk).content;
					let textToStream = "";

					if (typeof chunkContent === "string") {
						textToStream = chunkContent;
					} else if (Array.isArray(chunkContent)) {
						// Handle cases where content is an array of parts (e.g., [{ type: 'text', text: '...' }])
						// and concatenate text from all relevant parts in the chunk.
						textToStream = chunkContent
							.filter(
								(part) => part.type === "text" && typeof part.text === "string",
							)
							.map((part) => (part as { type: "text"; text: string }).text)
							.join("");
					}

					if (textToStream) {
						// Only send if there's actual text content
						controller.enqueue(
							encoder.encode(
								`data: ${JSON.stringify({ text: textToStream })}\n\n`,
							),
						);
					}
				}
				controller.enqueue(
					encoder.encode(
						`data: ${JSON.stringify({ type: "summary_end" })}\n\n`,
					),
				);
				controller.close();
			},
			cancel() {
				console.log("Summarize stream cancelled.");
			},
		});

		return new Response(readableStream, {
			headers: {
				"Content-Type": "text/event-stream",
				"Cache-Control": "no-cache",
				Connection: "keep-alive",
				"X-Accel-Buffering": "no",
			},
		});
	} catch (error) {
		console.error("Error in Nait summarize POST:", error);
		const errorMessage =
			error instanceof Error ? error.message : "An unknown error occurred";
		return NextResponse.json(
			{
				error: "Nait is currently unavailable for summarization.",
				details: errorMessage,
			},
			{ status: 500 },
		);
	}
}
