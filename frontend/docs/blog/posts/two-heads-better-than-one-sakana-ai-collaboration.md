---
layout: doc
aside: false

title: Two Heads (or LLMs) Are Better Than One - How Sakana AI is Teaching AIs to Collaborate and Solve Hard Problems
subtitle: A deep dive into Sakana AI's Adaptive Branching Monte Carlo Tree Search (AB-MCTS) and Multi-LLM AB-MCTS, showcasing how AI models can collaborate to solve complex problems.
tags: [AI, LLM, AB-MCTS, Collaboration, Deep Learning, Inference-Time Scaling, Machine Learning, Multi-LLM, Sakana AI]

description: Explore Sakana AI's groundbreaking AB-MCTS and Multi-LLM AB-MCTS, demonstrating how multiple AI models can work together to achieve collective intelligence and solve problems beyond individual capabilities, as proven on ARC-AGI-2.
ogTitle: Two Heads (or LLMs) Are Better Than One - Sakana AI's Collaborative AI | Christian Hadianto's Blog
ogDescription: Discover Sakana AI's AB-MCTS and Multi-LLM AB-MCTS, a new approach where AI models collaborate to solve complex problems, achieving collective intelligence and outperforming individual models.
keywords: AI, LLM, Collaboration, Sakana AI, AB-MCTS, Multi-LLM, Inference-Time Scaling, Machine Learning, Deep Learning, ARC-AGI-2, TreeQuest, Christian Hadianto

date: 2025-07-09
category: AI & Development
author: Christian Hadianto
image: /blog/two-heads-better-than-one-sakana-ai-collaboration/cover.png
---
# Two Heads are Better Than One: How Sakana AI is Teaching AIs to Collaborate and Solve Hard Problems

<figure>
  <img src="/blog/two-heads-better-than-one-sakana-ai-collaboration/cover.png" alt="Sakana AI">
  <figcaption>Sakana AI</figcaption>
</figure>

Hey everyone! We constantly discuss the incredible power of Large Language Models (LLMs) like GPT-4o and Gemini. They've revolutionized everything from writing code to drafting emails. However, for truly complex, multi-faceted problems, even these amazing models can hit a wall. It's like having a brilliant individual, but sometimes, what you really need is a dream team.

The brilliant minds at Sakana AI have developed a new inference-time scaling algorithm called **Adaptive Branching Monte Carlo Tree Search (AB-MCTS)**. They've extended it to allow multiple frontier AI models to cooperate! This isn't just about one LLM thinking harder; it's about them thinking smarter, together. Think of it as collective intelligence for AI—it's a game-changer.

## What Is Inference-Time Scaling? (And Why Should You Care?)

Before diving in, let's quickly demystify "inference-time scaling." You've heard of models getting bigger, right? That's about scaling training (making the model generally smarter). Inference-time scaling is different: it's about allocating more computational power when an LLM is actively solving a problem.

Imagine you're facing a tough coding challenge. You don't just stare at it for five seconds and give up. You might:

1. **Think longer:** Deliberate, break down the problem, draw diagrams (like an LLM generating a longer Chain-of-Thought).
2. **Trial-and-error:** Write code, run tests, fix bugs, or even scrap it and start over. This is where AB-MCTS comes in.
3. **Ask for help/collaborate:** Work with a teammate, get different perspectives. This is the **Multi-LLM AB-MCTS** magic.

Traditional methods for LLM trial-and-error often focus on one direction:

* **Going "Deep" (Sequential Refinement):** This is like repeatedly debugging your own code. You take an initial answer, get feedback (like test case results), and refine that specific answer. It's great for polishing, but if your initial idea was totally off, you might refine a bad solution indefinitely.
* **Going "Wide" (Repeated Sampling):** This is like brainstorming new ideas from scratch, independently. The LLM generates multiple candidate answers for the same prompt, and you pick the best one. It leverages the LLM's diverse output space, and sometimes, one of those random shots hits the bullseye. However, it doesn't refine any of those ideas based on feedback.
* **Standard MCTS:** This is more structured but often uses a fixed branching factor—meaning it decides how many "new ideas" (branches) it will explore at each step, and that number stays constant. It's not flexible enough to fully exploit the vast and diverse output space of LLMs.

The problem? Neither "pure deep" nor "pure wide" is optimal for all situations. We needed something more human-like, something that adapts.

## Enter AB-MCTS: The Smart Problem Solver

Sakana AI’s **Adaptive Branching Monte Carlo Tree Search (AB-MCTS)** makes waves by dynamically deciding whether to "go wider" (explore new candidate responses) or "go deeper" (refine existing, promising ones) based on external feedback. Imagine solving a complex engineering problem: sometimes you need a completely new design approach (go wider), and other times you need to drill down and optimize a specific component of an existing design (go deeper). AB-MCTS does exactly this, adapting its strategy on the fly.

How does it achieve this? It uses clever Bayesian magic (specifically, Thompson sampling) to model the potential quality of different actions—generating a new answer or refining an existing one—and then makes a principled decision. This flexibility means it can leverage the best of both worlds, leading to significantly better solutions with the same computational budget.

## The AI Dream Team: Multi-LLM AB-MCTS

Here’s where it gets truly exciting for the future of AI. We know different LLMs have different strengths. GPT-4o might be a coding wizard, Gemini might excel at creative storytelling, and DeepSeek-V3 could be a mathematical genius. Sakana AI realized: why not let them work together?

**Multi-LLM AB-MCTS** takes the adaptive branching idea and adds a crucial third dimension: **which LLM to use**. It's like having a project manager AI that knows which expert to call on for each specific task or sub-problem.

* When it needs a fresh, diverse set of ideas for a new branch, it might tap into an LLM known for broad ideation.
* When it needs to meticulously refine a promising solution, it might pick an LLM that excels at detailed debugging and logical reasoning.

This system doesn't *know* which LLM is best at the start. Instead, it learns as it goes, observing which models deliver the strongest results for particular problems and adapting its choices. It's a dynamic, collaborative process where LLMs leverage each other's unique "personalities" and strengths.

## Proof in the Pudding: Crushing ARC-AGI-2

Sakana AI tested Multi-LLM AB-MCTS on ARC-AGI-2, an extremely challenging benchmark designed to evaluate human-like general intelligence and reasoning, far beyond typical skill tests. These tasks are notoriously difficult even for frontier LLMs.

The results are seriously impressive:

* Using only o4-mini (a powerful LLM), repeated sampling solved 23% of the problems.
* Single-model AB-MCTS with o4-mini boosted that to 27.5%.
* But here's the kicker: **Multi-LLM AB-MCTS, combining o4-mini, Gemini-2.5-Pro, and DeepSeek-R1-0528, solved over 30% of the problems!** That's a significant jump, demonstrating the power of collaboration.

What’s even cooler is that some problems *no single LLM could solve on its own* were cracked when these models worked together. Imagine an o4-mini generating an initial (incorrect) solution, but then DeepSeek-R1-0528 or Gemini-2.5-Pro analyzes that incorrect solution, identifies the flaws, and refines it into the correct answer. This isn't just parallel processing; it's genuine synergistic problem-solving!

## The Road Ahead

While the results are incredibly promising, there are always next steps. Current evaluations focus on "Pass@k," meaning whether at least one correct solution is found within a certain number of attempts. For practical applications, we often need to pick the best answer from many. Sakana AI is already exploring more sophisticated ways to select final answers, perhaps using an "LLM-as-a-Judge" or building even better reward models.

The good news is that Sakana AI has open-sourced the underlying algorithm as **TreeQuest**! This means developers can start playing with this powerful framework, applying AB-MCTS and Multi-LLM AB-MCTS to their own complex tasks.

This breakthrough isn't just about winning benchmarks; it points to a future where AI systems can tackle truly challenging, real-world problems by collaborating, learning from each other, and adapting their strategies just like the best human teams. The era of "collective intelligence" for AI is truly here, and I, for one, am pumped to see what they'll build next!

What do you think about AI collaboration?

## Want to dive deeper? Check out the resources

* Paper: [Wider or Deeper? Scaling LLM Inference-Time Compute with Adaptive Branching Tree Search](https://arxiv.org/abs/2503.04412)
* Blog: [Inference-Time Scaling and Collective Intelligence for Frontier AI](https://sakana.ai/ab-mcts/)
* Algorithm Implementation (TreeQuest): https://github.com/SakanaAI/treequest
* ARC-AGI-2 Experiment Code: https://github.com/SakanaAI/ab-mcts-arc2
