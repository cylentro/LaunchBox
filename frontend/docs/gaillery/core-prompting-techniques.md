---
layout: doc

title: Core Prompting Techniques
description: A guide to fundamental prompt engineering techniques like Chain of Thought, Few-Shot Prompting, and Self-Critique to improve AI-generated results.

ogTitle: Core Prompting Techniques
ogDescription: A guide to fundamental prompt engineering techniques like Chain of Thought, Few-Shot Prompting, and Self-Critique to improve AI-generated results.

keywords: prompt engineering, chain of thought, few-shot prompting, self-critique, AI prompts
---
# Core Prompting Techniques

Beyond the full frameworks, there are several powerful, flexible techniques you can weave into almost any prompt to dramatically improve the results. Think of these as the fundamental skills of an AI whisperer.

## Chain of Thought (CoT): Show Your Work 🧠

For any problem that requires multiple steps of reasoning—like math problems, logic puzzles, or complex planning tasks—the Chain of Thought technique is your best friend. Instead of letting the AI "jump" to a conclusion, you instruct it to explain its reasoning step-by-step.

**Why it works:** This forces the AI to slow down and simulate a more deliberate, logical thought process. It reduces errors caused by skipping intermediate steps and makes the AI's reasoning transparent, allowing you to easily check its work.

**How to use it:** Simply append a phrase like "Let's think step by step," or "Show your reasoning" to your prompt.

### Example: The Simple Math Problem

> **Prompt:** "I have 5 apples. I give 2 to my friend and then buy 4 more. I then eat one. How many apples do I have left? Let's think step by step."
>
> **Expected AI Reasoning:**
>
> 1. Start with 5 apples.
> 2. Give 2 away: 5 - 2 = 3 apples.
> 3. Buy 4 more: 3 + 4 = 7 apples.
> 4. Eat one: 7 - 1 = 6 apples.
>
> **Final Answer:** You have 6 apples left.

## Few-Shot Prompting: Learn by Example 🎯

When you need the AI to follow a very specific format, style, or pattern, showing is always better than telling. With Few-Shot Prompting, you provide a few examples (the "shots") of the input-output pattern you want, and the AI learns to replicate it on the fly.

**Why it works:** This is a powerful form of "in-context learning." It's one of the most effective ways to get structured data, perform custom classifications, or enforce a consistent style without needing to write complex instructions.

**How to use it:** Structure your prompt with 2-3 examples of what you want, then provide the final input for the AI to process.

### Example: Sentiment Classification

> **Prompt:**
> "Your task is to classify the sentiment of a customer review as Positive, Negative, or Neutral.
>
> Review: 'The battery life on this is incredible!'
> Sentiment: Positive
>
> Review: 'The screen scratches way too easily.'
> Sentiment: Negative
>
> Now, classify this review:
> Review: 'It works as advertised, but the design is a bit boring.'
> Sentiment:"

## Self-Critique: The Iterative Refiner 🧐

The first draft is rarely the best one, even for an AI. The Self-Critique technique turns the AI into its own editor. You ask it to generate a response, then follow up by asking it to critique its own work and, finally, to rewrite it based on that critique.

**Why it works:** This meta-technique forces a multi-step process of generation, reflection, and refinement, leading to higher-quality, more polished results. It's perfect for improving clarity, tone, and accuracy.

**How to use it:** Use a three-prompt sequence: an initial prompt, a critique prompt, and a refinement prompt.

### Example: Refining an Explanation

> **1. Initial Prompt:** "Explain the concept of photosynthesis for a 5th grader."
>
> **2. Critique Prompt:** "Please critique your explanation. Is it simple enough? Does it use any jargon that a 5th grader might not understand? Is the analogy clear?"
>
> **3. Refinement Prompt:** "Good. Now, rewrite the explanation based on your critique to make it even better and easier to understand."

## Stacking Techniques: The Expert-Level Combo 🧑‍🍳

The true power of prompt engineering is unlocked when you stop seeing these frameworks and techniques as separate tools and start using them as building blocks. "Stacking" is the art of combining multiple techniques into a single, super-powered prompt. This allows for an unparalleled level of control and precision, letting you guide the AI's persona, process, and output format all at once.

## Stacking in Action: CASTR + Few-Shot Prompting

Let's combine the structure of **[CASTR](prompt-frameworks#castr-your-go-to-for-general-brilliance-✨)** with the pattern-matching power of **Few-Shot Prompting** to generate social media copy in a very specific style.

**Goal:** Generate a LinkedIn post announcing a new feature for our SaaS product.

**The Stacked Prompt:**

* **Context:** "We are a B2B SaaS company called 'Insightify' launching a new AI-powered feature named 'Predictive Analytics'."
* **Act as:** "A senior B2B tech copywriter with a knack for making complex features sound simple and exciting."
* **Steps:** "1. Write a compelling hook. 2. Explain the core benefit for product managers. 3. Include a call-to-action to a blog post. 4. Add 3-5 relevant hashtags."
* **Task:** "Generate a new LinkedIn post announcing our 'Predictive Analytics' feature. It's crucial that you match the tone and structure of the examples below."
* **Result:** "The post must be under 150 words and formatted for LinkedIn."

---

**Few-Shot Examples:**

**Example 1 (for a different feature):**

> "Stop guessing, start knowing. Our new 'User Journey Mapping' feature is here to show you exactly how customers interact with your product. Find the friction, fix the flow. 👉 [Link to blog post] #UX #ProductManagement #SaaS"

**Example 2 (for another feature):**

> "Tired of manual bug reports? Our 'Automated Anomaly Detection' saves you hours by flagging critical issues before your users do. Ship with confidence. 🚀 [Link to blog post] #DevOps #SaaS #AI #Product"

---

**Now, generate the post for the new 'Predictive Analytics' feature.**

## General Best Practices

Beyond frameworks, keep these universal tips in mind:

* **Be Specific & Clear:** Vague prompts lead to vague answers. The more details, constraints, and context you provide, the better the result. Think about length, format, and key elements to include.
* **Assign a Persona:** As seen in many frameworks (`Act as...`), telling the AI *who* to be (e.g., "an expert copywriter," "a sarcastic historian") dramatically shapes the tone, style, and knowledge base of the response.
* **Stack Your Techniques:** The most powerful prompts often combine frameworks and techniques. Don't be afraid to start with a `CASTR` structure, embed `Few-Shot` examples within it, and ask for a `Chain-of-Thought` explanation. Layering your instructions gives you maximum control.
* **Iterate, Iterate, Iterate:** Your first prompt is rarely your best. Treat prompting as a conversation. Use the AI's output to refine your next prompt, adding clarifications or correcting its course.
* **Use Negative Prompts:** Sometimes it's easier to state what you *don't* want. Use phrases like "Do not include...," "Avoid talking about...," or "Exclude any mention of..." to steer the AI away from certain topics or styles.

Happy prompting! The best way to master these skills is to experiment by mixing and matching frameworks and techniques to see what works best for your needs.
