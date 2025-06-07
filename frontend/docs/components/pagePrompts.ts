export interface PagePrompts {
  /**
   * Maps a page's relative path (e.g., 'profile/resume.md')
   * to an array of 5-6 specific prompt suggestions for that page.
   */
  [pageRelativePath: string]: string[];
}

export const pageSpecificPrompts: PagePrompts = {
  'profile/resume.md': [
    "What are Christian's core competencies according to this resume?",
    "Summarize Christian's professional experience listed here.",
    "What key projects are highlighted in Christian's resume?",
    "Tell me about Christian's educational background from this page.",
    "What technologies is Christian proficient in based on this resume?",
    "Can you identify the most recent role Christian held?"
  ],
  'gailerry/promptframework.md': [
    "What is the main purpose of the Prompt Framework described here?",
    "How can I use this Prompt Framework effectively?",
    "What are the key components of this framework?",
    "Give me an example of a good prompt using this framework from the document.",
    "What common mistakes should I avoid when writing prompts, according to this page?",
    "How does this framework help in achieving better AI responses?"
  ],
  'about/aboutme.md': [
    "Who is Christian, based on this 'About Me' page?",
    "What is Christian's personal mission or vision as stated here?",
    "Tell me something interesting about Christian from this page.",
    "What are Christian's main interests mentioned in this document?",
    "What are the key skills Christian highlights about themself here?",
    "How does Christian describe their journey or background?"
  ],
};
export const NUMBER_OF_RANDOM_PROMPTS_TO_SHOW = 2;

/**
 * Retrieves the page-specific prompts for a given relative path.
 * Returns undefined if no specific prompts are found or if the page is 'index.md'.
 * @param relativePath The relative path of the page (e.g., 'profile/resume.md')
 * @returns An array of prompts or undefined.
 */
export const getPromptsForPage = (relativePath: string): string[] | undefined => {
  // Explicitly handle index.md to use default/fallback prompts
  if (relativePath === 'index.md') {
    return undefined;
  }
  return pageSpecificPrompts[relativePath];
};
