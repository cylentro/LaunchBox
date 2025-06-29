---
layout: doc
title: 'Defining Success: Metrics and Goal Setting'
description: Learn how to define success for your A/B tests. This module covers the North Star Metric framework, metric trees, AARRR, HEART, and how to set SMART goals with primary and guardrail metrics.

ogTitle: 'Defining Success: Metrics and Goal Setting'
ogDescription: Learn how to define success for your A/B tests. This module covers the North Star Metric framework, metric trees, AARRR, HEART, and how to set SMART goals with primary and guardrail metrics.
---
# Variant 2: Defining Success: Metrics and Goal Setting

An A/B test without clear metrics is merely an exercise in changing things. To transform experimentation into a driver of growth, every test must be anchored to a clear definition of success. This module provides the frameworks to connect individual experiments to high-level business strategy, ensuring that every result is both measurable and meaningful.

## Connecting Tests to Business Value: The North Star Metric (NSM) Framework

The North Star Metric (NSM) is the single, overarching metric that best captures the core value your product delivers to its customers. It is the focal point for an organization's growth strategy, aligning product, marketing, and engineering teams around a unified goal. A well-defined NSM serves as a leading indicator of sustainable, long-term success; as the NSM grows, it should predict a corresponding growth in revenue.

A good NSM must be:

* **An Expression of Customer Value:** It measures the moment the user gets the result they came for.
* **A Leading Indicator of Revenue:** It predicts future business results, unlike lagging indicators like Monthly Recurring Revenue (MRR) or profit, which report on the past.
* **Actionable and Measurable:** The product team must be able to influence it through their work, and it must be trackable with available tools.
* **Understandable:** It should be simple enough for everyone in the company, including non-technical partners, to grasp.

Well-known examples of North Star Metrics include:

* **Spotify:** Time spent listening
* **Airbnb:** Number of nights booked
* **Slack:** Number of messages sent
* **Facebook:** Daily Active Users (DAU)

::: tip Pro-Tip: Beware of Vanity Metrics
A good NSM reflects customer value, not just business activity. "Number of accounts created" is a vanity metric because it doesn't tell you if users are getting value. A much stronger NSM would be "Number of accounts completing a key action in their first week," as it proves the product is delivering on its promise.
:::

### Decomposing the NSM into a Metric Tree

A North Star Metric is an *output* metric—a result of many smaller user actions. A product team cannot directly change "Number of Nights Booked". To make the NSM actionable, it must be broken down into a hierarchy of *input* metrics that teams *can* directly influence through their A/B tests and product initiatives. This process creates a **metric tree**, a visual model that causally links day-to-day work to the company's ultimate goal.

Every metric on the tree derives its legitimacy from its connection back to the North Star. This structure is the most critical tool for creating company-wide alignment, as it provides a clear map showing how every team's efforts contribute to the overarching strategy.

Example Metric Tree for a B2B SaaS Product:

* **North Star Metric:** Weekly Active Teams (reflects team-based value)
* **Input Metric 1 (Breadth):** Number of New Activated Teams
  * Sub-input: Trial-to-paid conversion rate
  * Sub-input: Onboarding completion rate
* **Input Metric 2 (Depth):** Number of Key Actions per Team
  * Sub-input: # of tasks created per team
  * Sub-input: # of integrations enabled per team
* **Input Metric 3 (Frequency):** Number of Active Days per Week
  * Sub-input: # of notifications opened
  * Sub-input: # of team members logging in daily

With this tree, a team focused on onboarding can run an A/B test to improve the onboarding completion rate, knowing that this input metric directly contributes to the company's North Star.

::: tip Pro-Tip: Your Metric Tree is a Living Document
A metric tree is not a "set it and forget it" artifact. As your product strategy evolves, new features are launched, or user behavior changes, your understanding of what drives value will change too. Revisit and update your metric tree quarterly to ensure it remains an accurate map of how your team creates value for customers and the business.
:::

## Mapping the User Journey: Using AARRR and HEART for Test Ideas

While the NSM provides the strategic "why," frameworks like AARRR and HEART help identify the tactical "where" and "what" to test. They provide a structured way to analyze the user journey and pinpoint areas of friction or opportunity.

### AARRR "Pirate" Metrics

Coined by investor Dave McClure, the AARRR framework models the customer lifecycle across five key stages, creating a funnel that is ideal for identifying bottlenecks and prioritizing growth experiments.

* **Acquisition:** How do users discover your product? This stage focuses on top-of-funnel channels.
  * *Metrics:* Website Traffic, Click-Through Rate (CTR), Cost Per Click (CPC), Sign-up Rate, Lead Conversion Rate.
* **Activation:** Do users have a positive first experience and reach the "Aha!" moment where they understand the product's core value?
  * *Metrics:* Onboarding Completion Rate, Time-to-Value (TTV), Activation Rate (users completing a key first action), Free-to-Paid Conversion Rate.
* **Retention:** Do users come back? This is often the most critical stage for long-term viability.
  * *Metrics:* Retention Rate, Churn Rate, Daily/Monthly Active Users (DAU/MAU), Session Frequency, Customer Lifetime Value (CLV).
* **Referral:** Do users like the product enough to recommend it to others?
  * *Metrics:* Net Promoter Score (NPS), Viral Coefficient (k-factor), Number of Invites Sent.
* **Revenue:** Are users willing to pay for the value they receive?
  * *Metrics:* Average Revenue Per User (ARPU), Monthly Recurring Revenue (MRR), Expansion MRR (from upgrades), Customer Acquisition Cost (CAC).

::: tip Pro-Tip: Tailor AARRR to Your Business Model
The AARRR framework is flexible; emphasize the stages that matter most to your business. A B2C social app might obsess over Retention and Referral to drive viral growth. A high-touch B2B enterprise product, on the other hand, will focus heavily on Activation (ensuring a successful trial) and Revenue (driving conversions to annual contracts).
:::

### Google's HEART Framework

Developed by Google's UX research team, the HEART framework offers a user-centered lens for measuring the quality of the user experience. It is particularly effective for generating hypotheses related to usability and satisfaction improvements. Not all five categories will be relevant for every project.

* **Happiness:** Measures users' subjective attitudes and satisfaction.
  * *Metrics:* Net Promoter Score (NPS), Customer Satisfaction (CSAT) scores, in-app ratings, survey responses.
* **Engagement:** Measures the level of user involvement and interaction intensity.
  * *Metrics:* Number of sessions per user, time spent in-app, number of photos uploaded, social shares.
* **Adoption:** Measures the uptake of a new product or feature by new users.
  * *Metrics:* Number of new accounts created, percentage of users using a new feature, number of upgrades.
* **Retention:** Measures the rate at which existing users return over time.
  * *Metrics:* Churn rate, renewal rate, repeat purchases.
* **Task Success:** Measures the efficiency, effectiveness, and error rate of user actions.
  * *Metrics:* Task completion rate, time to complete a task, error rate during a flow.

To apply the HEART framework effectively, teams use the **Goals-Signals-Metrics (GSM)** process. This involves defining a high-level **Goal** (e.g., "Make the upload process easier"), identifying behavioral **Signals** that indicate progress (e.g., users complete uploads more quickly), and defining quantifiable **Metrics** to track those signals (e.g., decrease average upload time by 20%).

::: tip Pro-Tip: Combine HEART and AARRR for a 360° View
Use AARRR and HEART together for a complete diagnosis. AARRR tells you *what* is happening in your business funnel (e.g., "Retention is dropping after 30 days"). HEART helps you understand *why* (e.g., "Our user surveys show low Happiness scores, and analytics show poor Task Success on a key feature"). This combination connects business outcomes to user experience.
:::

## Setting SMART Goals and Choosing Your KPIs

With a clear understanding of the strategic landscape, the final step is to define the specific metrics for an individual A/B test. This requires distinguishing between different types of metrics and ensuring every goal is well-defined.

### The Primary Metric (or Goal Metric)

The primary metric is the **single, non-negotiable metric** that will be used to determine the winner of the test. This metric must be directly and logically connected to the "Then" clause of your hypothesis. It is the one number that answers the core question of the experiment.

For the hypothesis, *"If we add trust badges..., **then** we will increase the checkout completion rate..."*, the primary metric is, without question, the **Checkout Completion Rate**.

It is a critical best practice to select only *one* primary metric. Declaring a "win" based on whichever of several metrics happens to look good is a recipe for false positives. The probability of finding a statistically significant result purely by chance increases with every additional metric you treat as a potential winner. The primary metric provides focus and statistical rigor.

::: tip Pro-Tip: Commit to Your Primary Metric
During a test, you might see a secondary metric show a huge, exciting lift. It's tempting to declare victory based on this new metric. Don't. This is a form of "p-hacking" and leads to false positives. Stick to the primary metric you defined *before* the test started. If a secondary metric shows a surprising result, use that as the basis for a hypothesis for your *next* test.
:::

### Secondary Metrics (or Guardrail Metrics)

While the primary metric tracks the intended success, secondary metrics—often called **guardrail metrics**—act as a crucial safety net. Their purpose is to monitor other important aspects of the user experience to ensure that the change, while improving the primary metric, does not cause unintended harm elsewhere in the product or business.

A helpful analogy is to think of guardrail metrics as the bumpers in a bowling alley. They don't help you score a strike, but they prevent your ball from ending up in the gutter. These metrics are your early warning system for negative side effects.

Using the trust badge example, potential guardrail metrics would include:

* **Average Order Value (AOV):** Did adding the badges increase the number of checkouts but somehow cause people to put fewer items in their cart, thus lowering overall revenue?
* **Page Load Time:** Did the new badge images significantly slow down the page, creating a frustrating user experience that could have long-term negative effects?
* **Clicks on other page elements:** Did the prominent badges distract users from important secondary actions, like applying a discount code?

The use of guardrail metrics is a hallmark of a mature experimentation program. It protects the business from the dangers of "local optimization"—improving one small metric at the expense of the overall health of the system. A change that increases sign-ups by 10% (a primary metric win) but decreases 30-day user retention by 20% (a guardrail metric loss) is not a success; it is a net loss for the business. Guardrail metrics force teams to adopt a holistic view, ensuring that short-term gains do not lead to long-term damage.

::: tip Pro-Tip: Brainstorm Guardrails by Asking "How Could This Go Wrong?"
When planning a test, actively brainstorm the worst-case scenarios. If we make the sign-up button bigger, could it distract from the "Learn More" link? If we simplify the form, could we lose critical data for the sales team? If we add a new feature, could it slow down page load time? These "what-ifs" are your best source for identifying critical guardrail metrics.
:::

### The Critical Role of Guardrail (Counter) Metrics

A **Guardrail Metric**, also known as a counter metric, is a type of secondary metric that you actively monitor to ensure your change isn't causing unintended harm to other parts of the business or user experience. It acts as a safety net.

Optimizing for a single metric without guardrails is a significant risk. For example, a media site might run a test to increase its primary metric, ad revenue. A variant that plasters the page with intrusive ads could easily achieve this goal. However, without a guardrail metric like user retention rate or Net Promoter Score (NPS), the team would be blind to the fact that this "win" is alienating users and destroying long-term business health. A good guardrail metric protects against this kind of tunnel vision by forcing a more holistic evaluation of a test's impact.

### Making Goals SMART

Finally, every test goal should adhere to the **SMART** framework to ensure clarity, focus, and accountability for the team.

## Key Takeaways

* **Start with the North Star:** Anchor your experiments to your North Star Metric (NSM). Use a metric tree to ensure every test on an input metric contributes to the overall strategic goal.
* **Use Frameworks to Find Opportunities:** Employ AARRR to diagnose your business funnel and find the biggest "leaks." Use HEART to measure and improve the quality of the user experience in those specific areas.
* **One Primary Metric to Rule Them All:** Every A/B test must have a single, pre-defined primary metric that is directly tied to the hypothesis. This is the sole determinant of a "win" or "loss" and ensures statistical rigor.
* **Guardrails Prevent Disasters:** Always define guardrail (or counter) metrics to monitor for unintended negative side effects. A "win" that harms another part of the business (like user retention or page speed) is actually a net loss.
* **Make Goals SMART:** Ensure every test goal is Specific, Measurable, Achievable, Relevant, and Time-bound to provide clarity, focus, and accountability for the team.

## Remember This Even If You Forget Everything Else

Your primary metric tells you if you won the battle, but your guardrail metrics ensure you don't lose the war. A true win improves the user experience without causing collateral damage elsewhere. Define both before you start, or you're flying blind.

* **S**pecific: Clearly state what you want to achieve (e.g., "Increase clicks on the main CTA").
* **M**easurable: Define how you will quantify success (e.g., "by 15%").
* **A**chievable: Ensure the goal is realistic given your resources and baseline.
* **R**elevant: The goal must align with a broader business objective or user need.
* **T**ime-bound: Set a specific timeframe for the experiment (e.g., "over a 2-week period").

A SMART goal for an A/B test might sound like: "Increase the conversion rate of the trial sign-up page by 10% over the next 4 weeks by changing the headline to focus on the core value proposition."
