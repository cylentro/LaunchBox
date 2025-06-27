---
layout: doc

title: Chapter 6 - Staying Safe and Smart - Ethics & Limitations
description: Learn to use AI responsibly. This guide covers critical issues like AI hallucinations, bias, and copyright, providing an essential safety checklist for smart and ethical AI use.

ogTitle: Chapter 6 - Staying Safe and Smart - Ethics & Limitations
ogDescription: Learn to use AI responsibly. This guide covers critical issues like AI hallucinations, bias, and copyright, providing an essential safety checklist for smart and ethical AI use.

prev:
  text: Chapter 5 - A Peek Under the Hood (The Non-Technical "How")
  link: /courses/prompting-101/chapter-5_a-peek-under-the-hood
next:
  text: Chapter 7 - The Future is Now - What's Next?
  link: /courses/prompting-101/chapter-7_the-future-is-now-whats-next
---
# Chapter 6: Staying Safe and Smart: Ethics & Limitations

## Introduction

Generative AI is an incredible tool, but it's not infallible. Like any powerful technology, from a car to the internet, it comes with its own set of risks and limitations that every user needs to understand. Being a smart AI user isn't just about writing good prompts; it's about using the tool responsibly and critically. This module is your **"AI Rulebook."** We will confront the most common problems head-on: when AI makes things up, when it reflects human biases, and the tricky questions around copyright. Learning to spot and handle these issues will make you a truly capable, safe, and ethical AI user.

## Core Concepts: The AI User's Rulebook

Think of these as the three golden rules for navigating the potential pitfalls of Generative AI.

### Problem 1: Hallucinations (When AI Makes Stuff Up)

**What they are:** Because an AI's primary job is to predict the next plausible word, it can sometimes generate responses that are fluent, confident, and completely wrong. These fabrications are known as "hallucinations". An AI might invent facts, create fake historical events, misattribute quotes, or even cite academic papers and web links that don't exist. It does this not to deceive, but because the fabricated information is a statistically probable sequence of words.

**How to Handle It:** Be a Fact-Checker. Never trust AI-generated output for any critical or factual information without verification. For any claim, statistic, date, or fact that matters, you must fact-check it using reliable, independent sources. This means cross-referencing the information with academic databases (like Google Scholar), reputable news organizations, official government or university websites, or peer-reviewed journals. Treat any factual statement from an AI as a claim to be verified, not a fact to be accepted.

::: tip Pro-Tip: Ask for Sources, But Verify Them
A good follow-up prompt when you receive a factual claim is: "Can you provide the sources for that information?" The AI might provide links or references. However, this is a crucial step: you must still verify these sources. Sometimes, an AI will hallucinate sources that look real but aren't (e.g., a non-existent URL or a fake book title). This technique helps you quickly separate claims with potential backing from pure fabrications.
:::

### Problem 2: Bias (The AI's Inherited Prejudices)

**What it is:** The "library" that AI learns from—the internet—is a reflection of human society, complete with all of its historical and social biases related to gender, race, culture, and more. The AI model learns these biases as patterns and can therefore reproduce and even amplify them in its outputs. For example, if an AI is asked to generate an image of a "doctor," it might disproportionately generate images of men due to biases present in its training data.

**How to Handle It:** Be a Critical Thinker. A helpful analogy is to think of AI as a "mirror and a magnifying glass". It reflects the biases present in society, but because of its scale and speed, it can magnify them. Be aware that AI outputs may contain stereotypes or unfair representations. Question results that seem to favor one group, ignore another, or rely on outdated clichés. If you see bias in an output, adjust your prompt to be more specific and inclusive (e.g., "Generate an image of a diverse team of doctors").

::: tip Pro-Tip: Use AI to Fight AI Bias
If you suspect an AI's response is one-sided, turn the tool back on itself. Use a follow-up prompt like: "Now, argue for the opposite perspective," or "Rewrite this from the point of view of [a different demographic/role]." Forcing the AI to generate counterarguments or adopt different personas is a powerful way to uncover hidden biases in the initial response and achieve a more balanced understanding of a topic.
:::

### Problem 3: Copyright and Ownership (Who Owns the Work?)

**What it is:** This is a complex and rapidly evolving legal field, but there is a core principle to understand. In the United States, for a work to be eligible for copyright protection, it must be the product of human authorship. The U.S. Copyright Office has repeatedly stated that it will not register works generated entirely by a machine without creative human input or intervention.

**How to Handle It:** Be a Responsible Creator.

* You cannot claim copyright over an image or a piece of text that was generated entirely by AI with a simple prompt.
* However, if you use AI as a tool and then significantly modify, arrange, or combine its outputs with your own original work, you may be able to copyright your own creative contributions to the final piece.
* Avoid using AI to mimic the style of a living artist, as this can create ethical and potential legal issues.
* The golden rule is transparency. Don't pass off purely AI-generated work as your own original creation in a formal, academic, or commercial context. You are the pilot, and that means you are ultimately responsible for how you use the content the AI helps you create.

::: tip Pro-Tip: Use AI for Ideation, Not Final Creation
To stay on the right side of copyright, treat AI as your brainstorming partner, not your ghostwriter. Use it to generate a dozen different headline options, a rough outline for a blog post, or a color palette for a design. Then, take those raw ideas and use your own skill, judgment, and creativity to build the final product. The copyright protects your unique expression and arrangement of those ideas, not the raw, unedited output from the machine.
:::

## AI Safety Checklist

Use this simple checklist to evaluate AI-generated content before you use it for anything important.

| Checkpoint                      | Why it Matters                                                  | How to Do It (Simple Action)                                                                                                                         |
| ------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Verify Critical Facts** | AI can "hallucinate" and present false information as fact.     | Cross-reference any important names, dates, stats, or claims with at least two reliable external sources (e.g., Google search, reputable websites).  |
| **Check for Bias**        | AI learns from biased human data and can reproduce stereotypes. | Ask yourself: "Does this output unfairly represent or exclude any group? Does it rely on clichés?" If so, refine your prompt or discard the output. |
| **Consider Copyright**    | Purely AI-generated work generally cannot be copyrighted.       | Use AI as a creative tool, not a replacement for your own authorship. Add your own significant creative input before claiming ownership.             |

## Hands-On Lab 6: The Fact-Checking Mission

In this lab, you'll practice the essential skill of verifying information from an AI. We'll intentionally ask a question that is likely to trigger a common AI hallucination.

* **Objective:** To practice identifying and verifying a potential AI hallucination.
* **Tool:** Your preferred text-generation AI and a web browser for searching.
* **Steps:**
  1. **The Prompt:** Go to your AI tool and ask it the following question: Which U.S. presidents kept alligators as pets in the White House? (This is a common historical myth often associated with John Quincy Adams and Herbert Hoover).
  2. **Analyze the AI's Answer**: The AI will likely state with confidence that John Quincy Adams was given an alligator by the Marquis de Lafayette and kept it in a White House bathroom.
  3. **The Fact-Checking Mission:** Now, open a new browser tab and become a detective.
     * Search for terms like "John Quincy Adams alligator pet myth" or "presidents who owned alligators".
     * Look for results from reliable sources. Good sources would include the official White House Historical Association website, presidential library archives (.gov sites), the Smithsonian Institution, or reputable encyclopedias and history websites (.edu sites).
  4. The Discovery: You will quickly find that while the story is popular, most credible historical sources confirm it is a long-standing myth with no primary evidence to support it. This exercise demonstrates perfectly why you can never take an AI's factual claims at face value.

## Summary & Key Takeaways

Being a smart AI user means being a skeptical and responsible one. Remember these key rules to stay safe and smart:

* AI can **"hallucinate"** or make up facts. **Always verify important information.**
* AI can be **biased** because it learns from biased human data. Be a critical thinker and question its outputs.

You are the pilot. You are ultimately **responsible** for how you use the content that AI generates, both ethically and legally.
