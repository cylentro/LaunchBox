import { NextResponse } from 'next/server';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

export async function GET(request: Request) {
  try {
    // Ensure your GOOGLE_GEMINI_API_KEY is set in .env.local
    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      throw new Error("GOOGLE_GEMINI_API_KEY not found in environment variables.");
    }
    // Ensure your GOOGLE_GEMINI_MODEL is set in .env.local
    if (!process.env.GOOGLE_GEMINI_MODEL) {
      throw new Error("GOOGLE_GEMINI_MODEL not found in environment variables.");
    }
    
    const llm = new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GEMINI_API_KEY,
      model: process.env.GOOGLE_GEMINI_MODEL, // Or your preferred Gemini model
      maxOutputTokens: 2048,
      temperature: 0.7, // Adjust for creativity
    });

    const prompt = "In one short sentence, what is the key to building a successful AI-powered portfolio website?";
    
    const response = await llm.invoke(prompt);

    // The response from Gemini might be directly the text or in a structured object
    // For ChatGoogleGenerativeAI, response.content is typically the text
    const thought = response.content; 

    return NextResponse.json({ naitResponse: thought });

  } catch (error) {
    console.error("Error interacting with Gemini:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Failed to get a thought from Nait.", details: errorMessage }, { status: 500 });
  }
}