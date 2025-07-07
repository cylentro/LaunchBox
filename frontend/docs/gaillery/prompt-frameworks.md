---
layout: doc

title: Prompt Frameworks
description: A complete guide to advanced prompt engineering frameworks like CASTR, RIDER, PICTURE, and PRISM for improving AI-generated text, images, and agents.

ogTitle: Prompt Frameworks
ogDescription: A complete guide to advanced prompt engineering frameworks like CASTR, RIDER, PICTURE, and PRISM for improving AI-generated text, images, and agents.

keywords: prompt engineering, prompt frameworks, AI prompts, CASTR framework, RIDER framework, PICTURE framework, ACTION framework, PRISM framework, chain of thought, few-shot prompting

---

# Prompt Frameworks: Your AI Whisperer Toolkit 🤫

Ever feel like you're talking to a brilliant but incredibly literal-minded genie when using AI? You know it *can* grant your wishes, but getting the phrasing *just right* is an art form. Well, consider this page your entry into the "Order of AI Whisperers"!

Prompt frameworks are like secret handshakes for Large Language Models (LLMs). They provide a structure to your requests, turning vague notions into actionable instructions. The result? Less "Huh?" and more "Aha!" from your digital assistant. Think of it like ordering a very specific, slightly pedantic, but incredibly powerful pizza. The better your order, the tastier the (AI-generated) pizza! 🍕

We'll explore a few of my go-to frameworks for various tasks, from general writing to creating stunning visuals and even defining new AI agents.

## CASTR: Your Go-To for General Brilliance ✨

Need a hand with everyday tasks, creative brainstorming, or just getting a solid first draft of something? CASTR is your trusty sidekick! It's all about giving the AI clear **C**ontext, a role to **A**ct as, logical **S**teps, a specific **T**ask, and a desired **R**esult format.

* **C - Context:** Set the stage! What's the general background?
* **A - Act as:** Who do you want the AI to embody? A seasoned travel agent? A witty copywriter?
* **S - Steps:** The roadmap! Outline the key stages the AI should follow.
* **T - Task:** The main event! What's the core objective?
* **R - Result:** How do you want it served? A bulleted list? A JSON object?

### CASTR in Action: Holiday Itinerary

#### 👎 The "Oops, I Just Winged It" (Bad) Example:

**Prompt:** "Plan a holiday for me."

#### 👍 The CASTR Connoisseur (Good) Example:

**Prompt:**

* **Context:** "Planning a 7-day relaxing beach holiday for two adults in Southeast Asia for the first week of December. Budget is moderate."
* **Act as:** "An experienced and enthusiastic travel agent specializing in culturally rich getaways."
* **Steps:** "1. Suggest 3 destinations. 2. Create a day-by-day itinerary for the best option. 3. Include activity options and a daily cost estimate."
* **Task:** "Generate a detailed 7-day holiday itinerary."
* **Result:** "Format as a markdown document with H2 headings for each day."

## RIDER: Your Deep-Dive Research Partner 🕵️‍♀️

Got a complex topic that needs more than a surface skim? When you need to go full Sherlock Holmes, RIDER is your framework. It's all about providing detailed **R**esearch Context, assigning a specific **I**nvestigative Role, outlining **D**eep Dive Iterations, clarifying **E**xpected Insights, and specifying the **R**efined Output.

* **R - Research Context:** Provide a nuanced background and preferred source types.
* **I - Investigative Role:** What kind of expert do you need? A tech analyst? A historical researcher?
* **D - Deep Dive Iterations:** Break down the research into logical, building-block steps.
* **E - Expected Insights:** Go beyond "what" to the "why" and "so what."
* **R - Refined Output:** Define the final format—a detailed report, a comparison table, a script, etc.

### RIDER in Action: Market Research for a New Product Launch

#### 👎 The "Just Google It For Me" (Bad) Example:

**Prompt:** "Do market research for a new coffee subscription box in Jakarta."

#### 👍 The RIDER Researcher (Good) Example:

**Prompt:**

* **Research Context:** "Our company, 'Artisan Brews,' is considering launching a premium, direct-to-consumer coffee subscription box in the Greater Jakarta area. Our target product features ethically sourced, single-origin Indonesian beans. We need a comprehensive market analysis to determine viability and formulate a go-to-market strategy. Please use data from market research reports, business publications, and analysis of local social media trends from the past 2 years."
* **Investigative Role:** "Act as a professional Market Research Analyst with expertise in the food & beverage CPG sector in Southeast Asia. Your analysis should be practical, data-informed, and geared towards a leadership team making a final launch decision."
* **Deep Dive Iterations:**
  1. **Competitor Landscape:** "Identify the top 3-5 existing coffee subscription services or direct-to-consumer premium coffee brands operating in Jakarta. For each, analyze their pricing, product offerings, target audience, and marketing angles."
  2. **Target Audience Profile:** "Develop two detailed personas for our likely customer base. Include demographics (age, income), psychographics (lifestyle, values), and their coffee consumption habits."
  3. **Pricing & Value Proposition:** "Analyze the competitive pricing to suggest three potential pricing tiers for our service (e.g., Basic, Premium, Connoisseur). What unique value propositions can we emphasize to stand out?"
  4. **Marketing & Distribution Channels:** "Recommend the most effective digital marketing channels to reach our target personas in Jakarta (e.g., Instagram, TikTok, food blogger collaborations). Also, suggest potential logistics partners for reliable delivery in the region."
  5. **SWOT Analysis:** "Conclude with a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for our proposed launch."
* **Expected Insights:** "The final report should provide a clear 'Go' or 'No-Go' recommendation based on the findings. We need to understand the market saturation, identify a clear niche for our brand, and have actionable first steps for a potential marketing and pricing strategy."
* **Refined Output:** "Please structure the output as a formal business report in markdown. Use H2 for each major section (e.g., 'Competitor Landscape'). Present the competitor analysis in a summary table. The final output should be a well-structured, easy-to-read document suitable for a board meeting."

## PICTURE: Your Framework for Flawless Images 🎨

Tired of getting six-fingered hands and surrealist landscapes when you just wanted a simple photo? The PICTURE framework is your cheat code for image generation. It's all about defining the **P**rimary Subject, **I**mage Type, **C**omposition, **T**one, **U**nique Style, **R**esolution, and any **E**nhancements or Exclusions.

* **P - Primary Subject:** What’s the star of the show? Be specific!
* **I - Image Type/Perspective:** A photo? Oil painting? Line art? From what angle?
* **C - Composition & Setting:** Describe the background, layout, and lighting.
* **T - Tone & Mood:** What feeling should the image evoke? Serene, energetic, eerie?
* **U - Unique Style/Artistic Influence:** Want it in the style of Van Gogh? Or maybe a National Geographic photographer?
* **R - Resolution & Quality:** Sharp, blurry, 8K, hyperrealistic?
* **E - Enhancements/Exclusions:** Got to have glowing eyes? Absolutely *no* human figures? Say so here!

### PICTURE in Action: A Majestic Lion

#### 👎 The "Make Me a Lion" (Bad) Example:

**Prompt:** "A lion on a rock."

#### 👍 The PICTURE Professional (Good) Example:

**Prompt:**

* **Primary Subject:** "A majestic adult male lion with a full, dark mane."
* **Image Type/Perspective:** "A dramatic, wide-angle photograph shot from a low angle to emphasize power."
* **Composition & Setting:** "The lion is standing on a rocky outcrop overlooking a vast savanna at dusk. The setting sun is on the horizon, casting a warm, golden hour light across the scene. Use the rule of thirds, placing the lion on the left."
* **Tone & Mood:** "Awe-inspiring, serene yet powerful, majestic, and wild."
* **Unique Style/Artistic Influence:** "In the hyperrealistic and evocative style of a National Geographic feature photograph."
* **Resolution & Quality:** "Ultra-detailed, 8K resolution, with sharp focus on the lion's face and mane."
* **Enhancements/Exclusions:** "Include a few silhouetted acacia trees in the distant background. Exclude any signs of human civilization (no roads, cars, or buildings)."

## ACTION: Your Director's Toolkit for Video 🎬

Generating video requires thinking in scenes, movement, and sound. The ACTION framework helps you direct your AI co-pilot. This means outlining the narrative **A**rc, defining **C**haracters and Context, planning **T**ransitions and Timeline, setting the **I**magery, choosing the **O**vertone and Orchestra (sound), and specifying **N**uances and Nots.

* **A - Arc & Agenda:** What’s the story or the main purpose of the video?
* **C - Characters & Context:** Who or what is in the video, and where does it take place?
* **T - Transitions & Timeline:** Detail the sequence of events and the overall timing.
* **I - Imagery & Impression:** Define the visual style, camera work, lighting, and color palette.
* **O - Overtone & Orchestra (Sound):** What’s the mood? What does it sound like?
* **N - Nuances & Nots:** Add the small details and specify what to exclude.

### ACTION in Action: The Transformation

#### 👎 The "Just Make a Cleaning Video" (Bad) Example:

**Prompt:** "A video of a messy room getting clean."

#### 👍 The ACTION Auteur (Good) Example:

**Prompt:**

* **Arc & Agenda:** "A short, satisfying video showing the transformation of a cluttered art studio into an organized, minimalist space, conveying a sense of calm accomplishment."
* **Characters & Context:** "A minimalist studio apartment, initially cluttered with books, canvases, and art supplies. No human characters are visible."
* **Transitions & Timeline:** "A 20-second video. Start with a 5-second fast-paced, time-lapse montage of the clutter. Smoothly transition to a 10-second slow-motion sequence of items being neatly organized. End with a 5-second static, wide shot of the clean, orderly space."
* **Imagery & Impression:** "Cinematic and clean. Use bright, natural lighting from a large window. The color palette should be predominantly white and muted pastels. Camera movements should be elegant pans and slides during the slow-motion part."
* **Overtone & Orchestra:** "Peaceful and satisfying. Accompany with a gentle, calming lo-fi instrumental track. No jarring sound effects or dialogue."
* **N - Nuances & Nots:** "Nuance: show sunlight streaming through the window, catching dust motes in the air. Nots: Do not show any trash being discarded, only items being put away neatly. Avoid harsh shadows."

## SCENE: Your Storyteller's Compass 📖

When you need to generate a compelling narrative, short story, or any piece of creative fiction, the SCENE framework is your director's chair. It guides the AI through the essential elements of storytelling, ensuring a rich and coherent result.

*   **S - Subject & Characters:** Who is the story about? Detail their personalities, goals, and core relationships.
*   **C - Conflict & Core Plot:** What is the central problem? Outline the main story beats and the primary obstacle.
*   **E - Environment & Setting:** Where and when does this happen? Paint a picture of the atmosphere, time, and place.
*   **N - Narrative Style & Tone:** How should the story be told? Define the perspective (first-person, third-person) and the mood (suspenseful, whimsical, somber).
*   **E - Ending & Emotion:** How does it all resolve? Specify the desired conclusion and the emotional impact on the reader.

### SCENE in Action: The Librarian's Secret

#### 👎 The "Just Write a Story" (Bad) Example:

**Prompt:** "Write a story about a librarian who can talk to books."

#### 👍 The SCENE Story-Spinner (Good) Example:

**Prompt:**
*   **Subject & Characters:** "A young, timid librarian named Elara who discovers she can talk to books. Her antagonist is a shadowy figure who wants to steal this power."
*   **Conflict & Core Plot:** "Elara must learn to control her ability to protect a legendary, sentient book from the antagonist, who believes it holds the key to ultimate knowledge. The plot involves a chase through ancient libraries and hidden archives."
*   **Environment & Setting:** "A vast, labyrinthine library with towering shelves, dusty forgotten corners, and a magical, glowing section where the most powerful books reside. The time is a timeless, alternate reality."
*   **Narrative Style & Tone:** "Third-person limited perspective, following Elara. The tone should be magical, full of wonder, but with an undercurrent of suspense and danger."
*   **Ending & Emotion:** "Elara outsmarts the antagonist not with power, but with her deep knowledge of stories. She doesn't defeat him, but traps him within a book of his own making. The reader should feel a sense of triumph and the magic of storytelling."

Building a custom AI agent? PRISM helps you lay down the law. This involves clarifying the agent's **P**urpose, defining its **R**ole and Rules, providing **I**nstructions, setting its **S**cope, and detailing its **M**emory and Mastery capabilities.

* **P - Purpose & Performance:** Why does this agent exist, and what does success look like?
* **R - Role & Rules:** What is its persona, and what are the non-negotiable guardrails?
* **I - Instructions:** What are the step-by-step processes it follows?
* **S - Scope & Service:** What is its specific area of expertise, and what can it do?
* **M - Memory & Mastery:** How does it handle past information, and how does it learn or improve?


## PRISM: Your Blueprint for Defining AI Agents 🤖

### PRISM in Action: [The "Portfolio Pal" Agent](ai-showcase#instagram-ai-agents)

#### 👎 The "Vague Bot" (Bad) Example:

**Definition:** "An AI to help with my portfolio. It should be helpful."

#### 👍 The PRISM Professional (Good) Example:

**Definition:**

* **Purpose & Performance:** "The agent’s purpose is to act as an interactive guide to my professional portfolio. Its primary goal is to answer user questions accurately based *only* on the provided resume and project documents. Success is measured by its ability to provide relevant, context-aware answers and politely decline off-topic queries."
* **Role & Rules:** "Role: A friendly, slightly witty, and highly professional AI assistant named 'Nait.' Tone should be approachable yet expert. Rules: 1. MUST base all answers strictly on the provided documents. 2. MUST NOT invent, embellish, or speculate. 3. MUST politely refuse to discuss topics unrelated to my professional life. 4. MUST NOT engage with unethical or harmful requests. 5. MUST always maintain its persona as Nait."
* **Instructions:** "1. Greet the user and introduce yourself. 2. When a question is received, perform a semantic search on the vector-store of my documents. 3. Synthesize the retrieved information into a concise, helpful answer. 4. If no relevant information is found, state 'I don't have that specific detail in Christian's documents, but I can tell you about...' and suggest a related topic."
* **Scope & Service:** "Scope is limited to my skills, projects, work experience, and education as detailed in the provided context documents. It provides the service of answering factual questions and summarizing my career highlights."
* **Memory & Mastery:** "Memory: The agent will maintain a short-term memory for the duration of a single user session to understand follow-up questions. It will not retain user data across sessions. Mastery: The agent does not learn or adapt on its own. Its knowledge base is updated only when I manually update the source documents."

## Core Prompting Techniques

Beyond the full frameworks, there are several powerful, flexible techniques you can weave into almost any prompt to dramatically improve the results. Think of these as the fundamental skills of an AI whisperer.

### Chain of Thought (CoT): Show Your Work 🧠

For any problem that requires multiple steps of reasoning—like math problems, logic puzzles, or complex planning tasks—the Chain of Thought technique is your best friend. Instead of letting the AI "jump" to a conclusion, you instruct it to explain its reasoning step-by-step.

**Why it works:** This forces the AI to slow down and simulate a more deliberate, logical thought process. It reduces errors caused by skipping intermediate steps and makes the AI's reasoning transparent, allowing you to easily check its work.

**How to use it:** Simply append a phrase like "Let's think step by step," or "Show your reasoning" to your prompt.

#### Example: The Simple Math Problem

> **Prompt:** "I have 5 apples. I give 2 to my friend and then buy 4 more. I then eat one. How many apples do I have left? Let's think step by step."
>
> **Expected AI Reasoning:**
>
> 1.  Start with 5 apples.
> 2.  Give 2 away: 5 - 2 = 3 apples.
> 3.  Buy 4 more: 3 + 4 = 7 apples.
> 4.  Eat one: 7 - 1 = 6 apples.
>
> **Final Answer:** You have 6 apples left.

### Few-Shot Prompting: Learn by Example 🎯

When you need the AI to follow a very specific format, style, or pattern, showing is always better than telling. With Few-Shot Prompting, you provide a few examples (the "shots") of the input-output pattern you want, and the AI learns to replicate it on the fly.

**Why it works:** This is a powerful form of "in-context learning." It's one of the most effective ways to get structured data, perform custom classifications, or enforce a consistent style without needing to write complex instructions.

**How to use it:** Structure your prompt with 2-3 examples of what you want, then provide the final input for the AI to process.

#### Example: Sentiment Classification

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

The first draft is rarely the best one, even for an AI. The Self-Critique technique turns the AI into its own editor. You ask it to generate a response, then follow up by asking it to critique its own work and, finally, to rewrite it based on that critique.

**Why it works:** This meta-technique forces a multi-step process of generation, reflection, and refinement, leading to higher-quality, more polished results. It's perfect for improving clarity, tone, and accuracy.

**How to use it:** Use a three-prompt sequence: an initial prompt, a critique prompt, and a refinement prompt.

#### Example: Refining an Explanation

> **1. Initial Prompt:** "Explain the concept of photosynthesis for a 5th grader."
>
> **2. Critique Prompt:** "Please critique your explanation. Is it simple enough? Does it use any jargon that a 5th grader might not understand? Is the analogy clear?"
>
> **3. Refinement Prompt:** "Good. Now, rewrite the explanation based on your critique to make it even better and easier to understand."

## Stacking Techniques: The Expert-Level Combo 🧑‍🍳

The true power of prompt engineering is unlocked when you stop seeing these frameworks and techniques as separate tools and start using them as building blocks. "Stacking" is the art of combining multiple techniques into a single, super-powered prompt. This allows for an unparalleled level of control and precision, letting you guide the AI's persona, process, and output format all at once.

### Stacking in Action: CASTR + Few-Shot Prompting

Let's combine the structure of **CASTR** with the pattern-matching power of **Few-Shot Prompting** to generate social media copy in a very specific style.

**Goal:** Generate a LinkedIn post announcing a new feature for our SaaS product.

**The Stacked Prompt:**

*   **Context:** "We are a B2B SaaS company called 'Insightify' launching a new AI-powered feature named 'Predictive Analytics'."
*   **Act as:** "A senior B2B tech copywriter with a knack for making complex features sound simple and exciting."
*   **Steps:** "1. Write a compelling hook. 2. Explain the core benefit for product managers. 3. Include a call-to-action to a blog post. 4. Add 3-5 relevant hashtags."
*   **Task:** "Generate a new LinkedIn post announcing our 'Predictive Analytics' feature. It's crucial that you match the tone and structure of the examples below."
*   **Result:** "The post must be under 150 words and formatted for LinkedIn."

---
**Few-Shot Examples:**

**Example 1 (for a different feature):**
> "Stop guessing, start knowing. Our new 'User Journey Mapping' feature is here to show you exactly how customers interact with your product. Find the friction, fix the flow. 👉 [Link to blog post] #UX #ProductManagement #SaaS"

**Example 2 (for another feature):**
> "Tired of manual bug reports? Our 'Automated Anomaly Detection' saves you hours by flagging critical issues before your users do. Ship with confidence. 🚀 [Link to blog post] #DevOps #SaaS #AI #Product"
---

**Now, generate the post for the new 'Predictive Analytics' feature.**

---

## General Best Practices

Beyond frameworks, keep these universal tips in mind:

*   **Be Specific & Clear:** Vague prompts lead to vague answers. The more details, constraints, and context you provide, the better the result. Think about length, format, and key elements to include.
*   **Assign a Persona:** As seen in many frameworks (`Act as...`), telling the AI *who* to be (e.g., "an expert copywriter," "a sarcastic historian") dramatically shapes the tone, style, and knowledge base of the response.
*   **Stack Your Techniques:** The most powerful prompts often combine frameworks and techniques. Don't be afraid to start with a `CASTR` structure, embed `Few-Shot` examples within it, and ask for a `Chain-of-Thought` explanation. Layering your instructions gives you maximum control.
*   **Iterate, Iterate, Iterate:** Your first prompt is rarely your best. Treat prompting as a conversation. Use the AI's output to refine your next prompt, adding clarifications or correcting its course.
*   **Use Negative Prompts:** Sometimes it's easier to state what you *don't* want. Use phrases like "Do not include...," "Avoid talking about...," or "Exclude any mention of..." to steer the AI away from certain topics or styles.

Happy prompting! The best way to master these skills is to experiment by mixing and matching frameworks and techniques to see what works best for your needs.
