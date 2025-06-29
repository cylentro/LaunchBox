---
layout: doc
title: 'The Art of the Hypothesis'
description: Learn to formulate powerful, evidence-based hypotheses for your A/B tests. This module covers the anatomy of a strong hypothesis, gathering data, and using PIE/ICE frameworks for prioritization.

ogTitle: 'The Art of the Hypothesis'
ogDescription: Learn to formulate powerful, evidence-based hypotheses for your A/B tests. This module covers the anatomy of a strong hypothesis, gathering data, and using PIE/ICE frameworks for prioritization.
---
# Variant 3: The Art of the Hypothesis

A successful experimentation program is built not on the volume of tests run, but on the quality of the hypotheses tested. A well-crafted hypothesis is the strategic core of any A/B test; it transforms a random change into a purposeful experiment designed to generate learning. This module explores how to move beyond simple guesswork to formulate powerful, evidence-based hypotheses that are prioritized for maximum business impact.

## Anatomy of a Powerful Hypothesis

A common misconception is that a hypothesis is simply an idea or a guess. In a rigorous experimentation context, a hypothesis is a formal, testable statement that proposes a relationship between a specific change and an expected outcome. It is not pulled from thin air but is founded on evidence and observation.

A powerful hypothesis contains three essential components:

1. **The Observation or Problem:** This is the "why" of the test. It should be grounded in data, either quantitative or qualitative. It articulates a specific problem or opportunity that has been identified. For example: "Our analytics show a 70% user drop-off during the payment step of our checkout funnel."
2. **The Proposed Solution:** This is the "what" of the test. It describes the specific, isolated change that will be implemented to address the observed problem. For example: "By adding a guest checkout option..."
3. **The Predicted Outcome:** This is the "so what" of the test. It articulates the expected impact on a specific key performance indicator (KPI) and should be measurable. For example: "...we predict that we will reduce checkout abandonment by 20%."

Putting it all together, a strong hypothesis might be formulated as: "**Because we observed** that 70% of users drop off at the mandatory account creation step, **we will introduce** a guest checkout option. **We predict** this will reduce checkout abandonment by 20% **because** it removes a key point of friction for new users."

::: tip Pro-Tip: The "Because" Clause is Your Learning Engine
The "Because" part of your hypothesis is the most valuable component. It's the core assumption you're testing. If a test "fails" (the control wins), you haven't failed; you've successfully invalidated a specific assumption. This learning is what prevents you from making the same mistake again and makes your next hypothesis smarter. A test without a "because" clause might find a winner, but it won't build deep user understanding.
:::

## Gathering Evidence: The Foundation of a Strong Hypothesis

The highest-impact hypotheses are not born from brainstorming sessions alone; they are discovered at the intersection of quantitative and qualitative data. One type of data shows *where* to look for problems, while the other explains *what* the problem is.

* **Quantitative Data (The "What"):** This is the numerical evidence that points to areas of opportunity. Teams should leverage product analytics tools like Google Analytics, Amplitude, or Mixpanel to uncover patterns in user behavior. Key areas to investigate include:
  * **Funnel Analysis:** Identifying pages or steps in a process with high drop-off rates, such as an onboarding flow or a checkout process.
  * **Feature Adoption:** Pinpointing valuable features that are underutilized by users.
  * **Behavioral Analytics:** Using tools like heatmaps to see where users are clicking (or not clicking) and session recordings to watch anonymized user sessions and identify moments of frustration or confusion.
* **Qualitative Data (The "Why"):** While quantitative data can identify a page with a high bounce rate, it cannot explain *why* users are leaving. Qualitative data provides this crucial context. Sources for these insights include:
  * **User Interviews:** Direct conversations with users about their goals, motivations, and pain points are one of the richest sources of insight.
  * **Surveys and Feedback Forms:** On-site polls or email surveys can directly ask users about their experience or why they chose not to complete an action.
  * **Support Tickets and Sales Calls:** The front-line teams that speak with customers daily are a goldmine of information about common complaints, points of confusion, and unmet needs.

::: tip Pro-Tip: Quant Finds the "Where," Qual Explains the "Why"
Use quantitative and qualitative data in tandem. Start with your analytics (quantitative) to find the biggest drop-off point in your funnel—this is the "where." Then, use session recordings, user surveys, or interviews (qualitative) focused on that specific page to understand the user's frustration—this is the "why." A hypothesis born from this combination (e.g., "Analytics show a drop-off on the payment page, and user feedback says the shipping costs are a surprise") is exponentially more powerful than one based on a single data source.
:::

## Advanced Frameworks for Hypothesis Ideation

To generate more transformative test ideas that go beyond simple optimizations, teams can employ advanced frameworks that reframe how they think about user problems.

### Jobs-to-be-Done (JTBD)

This powerful framework, developed by Clayton Christensen, posits that customers "hire" products to get a specific "job" done. It shifts the focus from product features to the user's underlying goal or motivation. For example, a person doesn't buy a quarter-inch drill bit; they buy a quarter-inch hole. The "job" is to hang a picture to make their house feel more like a home.

By understanding the functional, social, and emotional dimensions of the job the user is trying to accomplish, teams can generate hypotheses that address core user needs, not just surface-level usability issues. An A/B test derived from JTBD insights might test a completely new value proposition or onboarding flow, rather than just a different button color. This approach is more likely to lead to breakthrough innovations and escape the trap of the local maximum.

::: tip Pro-Tip: Use JTBD to Escape the Local Maximum
Jobs-to-be-Done is your best tool for generating "big swing" ideas that can break you out of a local maximum. While optimizing your current solution (e.g., making the drill bit shinier) yields incremental gains, understanding the user's true "job" (e.g., "hang a picture to feel proud of my home") can inspire entirely new solutions (e.g., a revolutionary new type of picture hook that doesn't require a drill at all).
:::

## Prioritizing Your Test Roadmap: PIE and ICE Scoring

A healthy experimentation culture will generate far more test ideas than can be implemented. A structured prioritization framework is essential to ensure that resources are focused on the most impactful experiments, removing subjectivity and office politics from the decision-making process.

Two of the most popular and straightforward frameworks are PIE and ICE. Both models use a 1-10 scale for each criterion, with the final score typically being an average or product of the three ratings.

* **The PIE Framework:** Developed by Chris Goward of Widerfunnel, PIE scores ideas based on 93:
  * **Potential:** How much improvement can be made on the page? (Prioritizes worst-performing pages).
  * **Importance:** How valuable is the traffic to this page? (Prioritizes high-traffic, high-value pages).
  * **Ease:** How difficult will the test be to implement, both technically and politically?
* **The ICE Framework:** Popularized by Sean Ellis of GrowthHackers, ICE provides a slightly different lens 95:
  * **Impact:** If this test is a success, what will the impact be on key metrics?
  * **Confidence:** How confident are we that this test will produce the expected impact? This should be based on the strength of the supporting evidence.
  * **Ease:** How much effort and resources are required to launch this test?

::: tip Pro-Tip: Beware the "Ease" Trap
Prioritization frameworks are powerful, but they have a common failure mode: teams overweight the "Ease" score. This leads to a roadmap filled with easy-to-implement but low-impact tests (like minor copy changes). To build a high-impact program, you must have the discipline to balance easy wins with harder, more complex tests that have a much higher "Impact" and "Potential." A roadmap of only "10/10" ease scores is a red flag.
:::

### Running a Prioritization Session

The value of these frameworks lies not just in the final score, but in the discussion they facilitate. A best practice is to have key team members (e.g., product manager, lead engineer, designer) score each hypothesis independently first. Then, the team comes together to review the scores. Discrepancies often reveal critical misalignments in assumptions. For example, a product manager might rate a test's "Ease" as an 8, while the engineer who would build it rates it a 2. This conversation is essential for accurate planning.

To combat the inherent subjectivity of a 1-10 scale, it is highly recommended to create a scoring rubric that defines what each number means. This ensures that when one person scores "Impact" as an 8, it means the same thing as when their colleague does.

| Score                  | Impact                                                                      | Confidence                                                                       | Ease                                                                                                  |
| :--------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| **1-3 (Low)**    | Minor UX tweak with no clear link to a key metric.                          | A pure "gut-feel" idea with no supporting data.                                  | Requires significant engineering resources (e.g.,>4 weeks) or has major technical/political blockers. |
| **4-7 (Medium)** | Expected to move a secondary metric or a funnel step metric.                | Supported by some qualitative or quantitative data, but not both.                | Requires moderate engineering effort (e.g., 1-3 weeks) with some coordination needed.                 |
| **8-10 (High)**  | Expected to directly and significantly move a primary or North Star metric. | Strongly supported by both quantitative analytics and qualitative user research. | Can be implemented quickly with minimal engineering resources (e.g.,<1 week).                         |

By using a structured framework and a clear rubric, teams can ensure they are consistently working on the A/B tests that offer the highest potential return on their investment of time and resources.

## Key Takeaways

* **A Hypothesis is a Story, Not a Guess:** A strong hypothesis follows a structure: "Because we observed [data], we will [change], and we predict [outcome] because [assumption]." The "because" clause is your engine for learning.
* **Combine "What" and "Why":** Use quantitative data (analytics) to find *where* a problem exists. Use qualitative data (session recordings, surveys) to understand *why* it exists. A hypothesis born from both is exponentially more powerful.
* **Prioritize with a Framework:** Don't rely on gut feel or the loudest voice. Use a structured framework like PIE (Potential, Importance, Ease) or ICE (Impact, Confidence, Ease) to score and rank test ideas objectively.
* **Beware the "Ease" Trap:** It's tempting to fill your roadmap with easy, low-impact tests. A high-impact program requires the discipline to balance easy wins with harder, more complex tests that have a much higher potential impact.
* **Use JTBD for Breakthroughs:** To escape the local maximum, use the Jobs-to-be-Done framework to understand the user's underlying goal. This generates bolder, more strategic hypotheses that can lead to transformative results.

## Remember This Even If You Forget Everything Else

The quality of your A/B testing program is determined not by the volume of tests you run, but by the quality of the questions you ask. A great hypothesis is born from evidence and contains a clear assumption (the "because" clause). If your test "loses" but you successfully invalidate a core assumption about your users, you've generated more value than a random "win" that taught you nothing.
