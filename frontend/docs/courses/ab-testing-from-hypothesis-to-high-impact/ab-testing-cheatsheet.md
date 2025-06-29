---
layout: doc
title: A/B Testing Process Cheat Sheet
description: A one-page summary of the entire A/B testing lifecycle, from hypothesis and design to analysis and communication. Your quick reference for running high-impact experiments.

ogTitle: A/B Testing Process Cheat Sheet
ogDescription: A one-page summary of the entire A/B testing lifecycle, from hypothesis and design to analysis and communication. Your quick reference for running high-impact experiments.
---
# A/B Testing Process Cheat Sheet

A one-page summary of the entire A/B testing lifecycle. Use this as a quick reference to ensure every experiment you run is rigorous, insightful, and impactful.

::: tip Print Me!
This page is designed to be a single-page reference. Use your browser's print function (Ctrl/Cmd + P) to save it as a PDF or print it out to keep on your desk.
:::

## The 4 Phases of High-Impact A/B Testing

### Phase 1: Hypothesis & Ideation

| Goal                              | Key Steps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Find high-impact ideas.** | 1.**Start with Data:** Use quantitative analytics (e.g., funnels) to find **where** a problem is. Use qualitative data (e.g., session recordings) to understand **why**.``2. **Write a Strong Hypothesis:** Use the `Because [data], we will [change], and we predict [outcome] because [assumption]` structure. The "because" clause is your engine for learning.``3. **Prioritize Rigorously:** Use a framework like **ICE** (Impact, Confidence, Ease) to score and rank ideas objectively. Avoid the "Ease" trap of only doing minor tests. |

### Phase 2: Design & Setup

| Goal                                        | Key Steps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ensure a valid, trustworthy test.** | 1.**Define Metrics:** Select **one Primary Metric** to decide the winner. Define 1-3 **Guardrail Metrics** to prevent unintended harm.``2. **Isolate Variables:** In a standard A/B test, change only **one core element** per variant to get a clean learning.``3. **Calculate Sample Size:** Use a calculator to determine the required sample size and test duration **before** you launch. This is non-negotiable.``4. **Run for Full Weeks:** Run tests for at least one full weekly cycle (e.g., Tuesday to Tuesday) to account for natural variations in user behavior. |

### Phase 3: Analysis & Interpretation

| Goal                                     | Key Steps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Make a data-informed decision.** | 1.**If Variant Wins:** The change is statistically significant (>95% confidence) and no guardrails were harmed. **Decision:** Implement the change and use the learning to inform your next hypothesis.``2. **If Control Wins ("Loss"):** The change had a negative impact. **Decision:** A success! You prevented a bad change. Document the invalidated assumption and celebrate the learning.``3. **If Inconclusive:** No significant difference. **Decision:** The change didn't matter. Default to the control (don't ship). Segment the results to generate new, more targeted hypotheses for your *next* test. |

### Phase 4: Communication & Learning

| Goal                                      | Key Steps                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Drive action & build knowledge.** | 1.**Tell a Story:** Frame results as a narrative (Setup, Confrontation, Resolution). Make the "learning" the hero.``2. **Tailor the Message:** Speak in terms of **ROI** for executives, **user problems** for engineers, and **user experience** for designers.``3. **Document Everything:** Maintain a central, searchable repository of all tests. This is your company's institutional memory and prevents duplicate work. |

## Critical Pitfalls to Avoid

| Pitfall                           | Why It's Dangerous                                                                                                      | The Solution                                                                                                                                      |
| :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **"Peeking" at Results**    | Stopping a test the moment it looks good. This capitalizes on random noise and is the**#1 cause of false positives**.   | **Trust your pre-calculated sample size.** Commit to letting the test run its full, pre-determined course. Discipline is your best defense. |
| **Ignoring Significance**   | Making a decision on a result with low confidence (e.g., 70%). This is just acting on random chance.                    | **Adhere to a strict 95% confidence threshold.** If it doesn't meet the bar, it's not a real result.                                        |
| **Forgetting Guardrails**   | A "win" on your primary metric that tanks a key guardrail metric (like user retention) is actually a**net loss**. | **Always define guardrail metrics.** A true win improves the user experience without causing collateral damage.                             |
| **Testing Trivial Changes** | Focusing on minor tweaks (like shades of a color) that have no chance of producing a detectable impact.                 | **Prioritize bold, high-impact hypotheses.** Focus on significant changes on high-traffic, high-value pages.                                |
