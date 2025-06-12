---
title: Prompt Frameworks
layout: doc
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

## PRISM: Your Blueprint for Defining AI Agents 🤖

Building a custom AI agent? PRISM helps you lay down the law. This involves clarifying the agent's **P**urpose, defining its **R**ole and Rules, providing **I**nstructions, setting its **S**cope, and detailing its **M**emory and Mastery capabilities.

* **P - Purpose & Performance:** Why does this agent exist, and what does success look like?
* **R - Role & Rules:** What is its persona, and what are the non-negotiable guardrails?
* **I - Instructions:** What are the step-by-step processes it follows?
* **S - Scope & Service:** What is its specific area of expertise, and what can it do?
* **M - Memory & Mastery:** How does it handle past information, and how does it learn or improve?

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
