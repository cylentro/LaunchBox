export interface PagePrompts {
	/**
	 * Maps a page's relative path (e.g., 'profile/resume.md')
	 * to an array of 5-6 specific prompt suggestions for that page.
	 */
	[pageRelativePath: string]: string[];
}

export const pageSpecificPrompts: PagePrompts = {
	"about/about-me.md": [
		"What is Christian's mission?",
		"How did Christian start in tech?",
		"What are his analog hobbies?",
		"What was his role at Anteraja?",
		"How did he become a PM?",
		"What's his digital vice?",
	],
	"profile/resume.md": [
		"Key achievements at Anteraja?",
		"Summarize his role at QRIM Express.",
		"What are his main Gen AI projects?",
		"What was his first job?",
		"What are his Gen AI certifications?",
		"Tell me about his mentoring.",
	],
	"profile/projects.md": [
		"What are his professional projects?",
		"Describe the NaniNani Podcast.",
		"Tech stack for LaunchBox & Nait?",
		"What does the Garoupa project do?",
		"Tell me about the Instagram AI agents.",
		"What was the JETExpress Ecosystem?",
	],
	"profile/stacks.md": [
		"What are his PM tools?",
		"What AI tools does he use?",
		"What are his design tools?",
		"What's in his Creative Suite?",
		"What coding languages does he use?",
		"What are his communication tools?",
	],
	"gailerry/ai-showcase.md": [
		"What is the NaniNani Podcast?",
		"AI workflow for NaniNani Podcast?",
		"Why was the Nait assistant built?",
		"What is Nait's tech stack?",
		"Tech behind the Instagram agents?",
		"Purpose of the Instagram agents?",
	],
	"gailerry/prompt-framework.md": [
		"What is the CASTR framework for?",
		"What is the PICTURE framework?",
		"RIDER vs. CASTR framework?",
		"What is the PRISM framework for?",
		"What is the ACTION framework?",
		"Why use prompt frameworks?",
	],
};
export const NUMBER_OF_RANDOM_PROMPTS_TO_SHOW = 2;

/**
 * Retrieves the page-specific prompts for a given relative path.
 * Returns undefined if no specific prompts are found or if the page is 'index.md'.
 * @param relativePath The relative path of the page (e.g., 'profile/resume.md')
 * @returns An array of prompts or undefined.
 */
export const getPromptsForPage = (
	relativePath: string,
): string[] | undefined => {
	// Explicitly handle index.md to use default/fallback prompts
	if (relativePath === "index.md") {
		return undefined;
	}
	return pageSpecificPrompts[relativePath];
};
