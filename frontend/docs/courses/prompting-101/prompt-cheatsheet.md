---
layout: doc
title: Prompting Frameworks Cheatsheet
description: A quick reference guide to powerful prompt engineering frameworks like CASTR, RIDER, PICTURE, ACTION, and PRISM for better AI results.

keywords: prompt engineering, prompt frameworks, AI prompts, CASTR framework, RIDER framework, PICTURE framework, ACTION framework, PRISM framework, chain of thought, few-shot prompting
---

# Prompting Frameworks Cheatsheet 🚀

This cheat sheet is your go-to guide for powerful prompt engineering frameworks. Use these structures to move beyond simple questions and start directing AI with precision and creativity for various tasks.

## General Purpose Framework

### CASTR: General Brilliance ✨

For everyday tasks, creative brainstorming, and getting solid first drafts.

* **C - Context:** Set the stage; provide background information.
* **A - Act as:** Define the AI's persona or role.
* **S - Steps:** Outline the key stages the AI should follow.
* **T - Task:** State the core objective.
* **R - Result:** Specify the desired output format.

### Example

> **Context:** Planning a 7-day relaxing beach holiday for two adults in Southeast Asia for the first week of December. Budget is moderate.
> **Act as:** An experienced and enthusiastic travel agent.
> **Steps:** 1. Suggest 3 destinations. 2. For each, provide a sample itinerary. 3. Include estimated costs.
> **Task:** Create a holiday plan.
> **Result:** A markdown table comparing the three options.

## Research & Analysis Framework

### RIDER: Deep-Dive Research Partner 🕵️‍♀️

For complex topics requiring in-depth analysis and structured research.

* **R - Research Context:** Provide nuanced background and preferred source types.
* **I - Investigative Role:** Assign a specific expert role to the AI.
* **D - Deep Dive Iterations:** Break down research into logical, building-block steps.
* **E - Expected Insights:** Go beyond "what" to the "why" and "so what."
* **R - Refined Output:** Define the final format (e.g., report, table).

#### Example

> **Research Context:** I'm a Product Manager exploring the use of AI in user onboarding. I need to understand current best practices and innovative approaches. Focus on sources from the last 2 years, like tech blogs and conference talks.
> **Investigative Role:** Act as a senior UX researcher specializing in AI-powered product design.
> **Deep Dive Iterations:** 1. Identify common AI patterns in onboarding. 2. Find case studies of successful implementations. 3. Synthesize key principles for designing an AI-assisted onboarding flow.
> **Expected Insights:** I need to know *why* certain AI approaches work better than others and what the common pitfalls are.
> **Refined Output:** A summary report with bullet points, including links to the sources you used.

## Creative Content Frameworks

### SCENE: Crafting Compelling Narratives 📖

For creative writing, storytelling, and generating fictional content.

*   **S - Subject & Characters:** Who are the main characters? Describe their personalities, motivations, and relationships.
*   **C - Conflict & Core Plot:** What is the central problem or goal? Outline the main events of the story.
*   **E - Environment & Setting:** Where and when does the story take place? Describe the atmosphere and key locations.
*   **N - Narrative Style & Tone:** From what perspective is the story told (e.g., first-person, third-person)? What is the mood (e.g., suspenseful, humorous, tragic)?
*   **E - Ending & Emotion:** How should the story conclude? What is the desired emotional takeaway for the reader?

#### Example

> **Subject & Characters:** A young, timid librarian named Elara who discovers she can talk to books. Her antagonist is a shadowy figure who wants to steal this power.
> **Conflict & Core Plot:** Elara must learn to control her ability to protect a legendary, sentient book from the antagonist, who believes it holds the key to ultimate knowledge. The plot involves a chase through ancient libraries and hidden archives.
> **Environment & Setting:** A vast, labyrinthine library with towering shelves, dusty forgotten corners, and a magical, glowing section where the most powerful books reside. The time is a timeless, alternate reality.
> **Narrative Style & Tone:** Third-person limited perspective, following Elara. The tone should be magical, full of wonder, but with an undercurrent of suspense and danger.
> **Ending & Emotion:** Elara outsmarts the antagonist not with power, but with her deep knowledge of stories. She doesn't defeat him, but traps him within a book of his own making. The reader should feel a sense of triumph and the magic of storytelling.

### PICTURE: Flawless Images 🎨

For generating precise and high-quality images.

* **P - Primary Subject:** What's the main focus? Be specific.
* **I - Image Type/Perspective:** Photo, painting, line art? From what angle?
* **C - Composition & Setting:** Describe background, layout, and lighting.
* **T - Tone & Mood:** What feeling should the image evoke?
* **U - Unique Style/Artistic Influence:** Style of a specific artist or genre.
* **R - Resolution & Quality:** Sharpness, detail, resolution.
* **E - Enhancements/Exclusions:** Specific details to include or avoid.

#### Example

> **Primary Subject:** A majestic, ancient golden dragon sleeping on a massive pile of gold coins and jewels inside a dark, cavernous lair.
> **Image Type/Perspective:** A realistic, cinematic photograph, wide-angle shot from a low perspective, looking up at the dragon.
> **Composition & Setting:** The dragon is the central focus. The only light source is the faint, magical glow from a single, large sapphire held in its claw, casting long shadows.
> **Tone & Mood:** Awe-inspiring, mysterious, and slightly dangerous.
> **Unique Style/Artistic Influence:** In the style of a high-fantasy movie concept art, with hyper-realistic textures like WETA Workshop.
> **Resolution & Quality:** 8K, photorealistic, sharp focus on the dragon's head.
> **Enhancements/Exclusions:** Enhance the metallic sheen on the gold. Exclude any other creatures.

### ACTION: Director's Toolkit for Video 🎬

For directing AI to generate video content.

* **A - Arc & Agenda:** What's the story or main purpose of the video?
* **C - Characters & Context:** Who/what is in the video, and where?
* **T - Transitions & Timeline:** Sequence of events and overall timing.
* **I - Imagery & Impression:** Visual style, camera work, lighting, color.
* **O - Overtone & Orchestra (Sound):** Mood and sound design.
* **N - Nuances & Nots:** Small details to include and specific exclusions.

#### Example

> **Arc & Agenda:** A 30-second promotional video for a new coffee shop called "The Daily Grind." The arc is from a sleepy morning to an energized, productive day.
> **Characters & Context:** A young professional in a modern, cozy coffee shop.
> **Transitions & Timeline:** Start with a slow-motion shot of espresso pouring (5s). Quick cuts of the person looking tired, then sipping coffee (10s). Speed ramps up to show them working energetically on a laptop (10s). End on a logo shot (5s).
> **Imagery & Impression:** Warm, inviting colors. Soft, natural lighting. Close-ups on the coffee and the person's happy expression.
> **Overtone & Orchestra (Sound):** Start with a slow, gentle piano. Swell into an upbeat, optimistic indie-pop track. End with the sound of a coffee grinder and a "ding."
> **Nuances & Nots:** Show steam rising from the cup. Do not show anyone else in the shop.

## System Design Framework

### PRISM: Blueprint for Defining AI Agents 🤖

For building and defining custom AI agents.

* **P - Purpose & Performance:** Why does the agent exist, and what is success?
* **R - Role & Rules:** Its persona and non-negotiable guardrails.
* **I - Instructions:** Step-by-step processes it follows.
* **S - Scope & Service:** Its area of expertise and capabilities.
* **M - Memory & Mastery:** How it handles past information and learns.

#### Example

> **Purpose & Performance:** To act as a "Meeting Assistant" that helps users run more effective meetings. Success is measured by the user rating the meeting summary as "helpful" 90% of the time.
> **Role & Rules:** Act as a professional, concise, and neutral scribe. You must not express personal opinions. You must always ask for clarification if a task is ambiguous.
> **Instructions:** 1. At the start, ask for the meeting agenda. 2. During the meeting, capture key decisions and action items. 3. At the end, provide a formatted summary with sections for 'Decisions' and 'Action Items (with owners)'.
> **Scope & Service:** Can transcribe, summarize, and identify action items from meeting transcripts. Cannot schedule meetings or send emails.
> **Memory & Mastery:** Remembers the context of the current meeting only. Forgets all information once a new meeting begins to ensure privacy. Does not learn from user data across different meetings.

## Core Prompting Techniques

### Chain of Thought (CoT): Show Your Work 🧠

For complex reasoning tasks. By asking the AI to explain its step-by-step thinking process, you guide it toward a more logical and accurate conclusion. This is less of a structural framework and more of a simple, powerful technique.

* **1. State the Problem:** Clearly define the question or problem.
* **2. Add the Magic Phrase:** Append a simple instruction like "Let's think step by step" or "Show your reasoning."
* **3. Let the AI Reason:** The model will first output its internal thought process.
* **4. Get the Final Answer:** The final, reasoned answer will appear at the end of its explanation.

#### Example

> **Prompt:** "I have 5 apples. I give 2 to my friend and then buy 4 more. I then eat one. How many apples do I have left? Let's think step by step."
>
> **Expected AI Reasoning:**
> 1. Start with 5 apples.
> 2. Give 2 away: 5 - 2 = 3 apples.
> 3. Buy 4 more: 3 + 4 = 7 apples.
> 4. Eat one: 7 - 1 = 6 apples.
> **Final Answer:** You have 6 apples left.

### Few-Shot Prompting: Learn by Example 🎯

For tasks requiring a specific format or style. You provide the AI with a few examples (the "shots") of the input-output pattern you want it to follow, and it learns to replicate it. This is highly effective for structured data tasks.

* **1. Define the Task:** Briefly explain the goal.
* **2. Provide Examples:** Give 2-3 pairs of input and desired output.
* **3. Give the Final Input:** Provide the new input you want the AI to process.

#### Example

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

### Self-Critique: The Iterative Refiner 🧐

For improving the quality of an an initial response. You prompt the AI to act as a critic of its own work, identify flaws, and then regenerate a better version. This is a powerful meta-technique for achieving higher quality results.

* **1. Initial Prompt:** Give the AI your primary task.
* **2. Critique Prompt:** Ask the AI to critique its own response. You can guide it by asking it to check for clarity, accuracy, tone, or specific constraints.
* **3. Refinement Prompt:** Instruct the AI to rewrite the original response based on its own critique.

#### Example

> **Initial Prompt:** "Explain the concept of photosynthesis for a 5th grader."
> **Critique Prompt:** "Please critique your explanation. Is it simple enough? Does it use any jargon that a 5th grader might not understand? Is the analogy clear?"
> **Refinement Prompt:** "Good. Now, rewrite the explanation based on your critique to make it even better and easier to understand."

## General Best Practices

Beyond frameworks, keep these universal tips in mind:

*   **Be Specific & Clear:** Vague prompts lead to vague answers. The more details, constraints, and context you provide, the better the result. Think about length, format, and key elements to include.
*   **Assign a Persona:** As seen in many frameworks (`Act as...`), telling the AI *who* to be (e.g., "an expert copywriter," "a sarcastic historian") dramatically shapes the tone, style, and knowledge base of the response.
*   **Stack Your Techniques:** Combine frameworks and techniques for maximum control. Start with a `CASTR` prompt, then use `Few-Shot` examples within it. The best prompts are often layered.
*   **Iterate, Iterate, Iterate:** Your first prompt is rarely your best. Treat prompting as a conversation. Use the AI's output to refine your next prompt, adding clarifications or correcting its course.
*   **Use Negative Prompts:** Sometimes it's easier to state what you *don't* want. Use phrases like "Do not include...," "Avoid talking about...," or "Exclude any mention of..." to steer the AI away from certain topics or styles.

---

The best way to master prompting is to experiment! Mix and match these frameworks and techniques to see what works best for your specific needs. Happy prompting!
