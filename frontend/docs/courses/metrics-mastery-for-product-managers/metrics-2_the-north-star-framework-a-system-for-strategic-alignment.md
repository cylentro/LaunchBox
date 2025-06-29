---
layout: doc
title: 'Metrics 2: The North Star Framework'
description: 'Learn how the North Star Framework aligns a company on a single metric representing core customer value, creating focus and accelerating data-informed decision-making for sustainable growth.'
ogTitle: 'Metrics 2: The North Star Framework'
ogDescription: 'Learn how the North Star Framework aligns a company on a single metric representing core customer value, creating focus and accelerating data-informed decision-making for sustainable growth.'
---
# Metrics 2: The North Star Framework: A System for Strategic Alignment

Once an organization commits to a data-informed philosophy, it requires a system to translate that philosophy into action. The North Star Framework provides this system. It is a model for managing products by focusing the entire company on a single, critical metric—the North Star Metric (NSM)—that represents the core value delivered to customers. This framework is more than a measurement tool; it is the central nervous system of a product-led organization, creating alignment, accelerating decision-making, and ensuring that daily work contributes directly to long-term, sustainable growth.

## Identifying Your North Star Metric (NSM)

The heart of the framework is the North Star Metric itself. It is the one measurement that best captures the intersection of customer value and business impact. When your NSM goes up, it should mean that your customers are receiving more value and that your business is growing as a result.

### Defining the North Star

The NSM is a single count, rate, or ratio that serves as a leading indicator of sustainable business success. It is not a measure of past performance, like revenue, but a predictor of future results. Its purpose is to encapsulate the product's vision and strategy into a single, tangible number that can align and motivate the entire organization, from the C-suite to individual contributors. For example, for Airbnb, every "night booked" represents value for both the guest (a place to stay) and the host (income), directly reflecting the company's mission to facilitate unique travel experiences and predicting future revenue.

### The NSM Checklist: Characteristics of a Strong Metric

A robust North Star Metric is not chosen lightly. It must satisfy a rigorous set of criteria to be effective. When evaluating potential NSMs, a product leader should use the following checklist:

1. **It Expresses Customer Value:** The metric must measure the moment the customer achieves the result they hired the product for. It should reflect their success, not just their interaction with the product.
2. **It Represents Product Vision and Strategy:** The metric should be a direct reflection of the product's unique value proposition and strategic focus. Improving the metric should be synonymous with executing the product strategy.
3. **It is a Leading Indicator of Success:** The NSM must predict future business results, especially revenue. It should not be a lagging indicator that only reports on past success. A rising NSM should give confidence that revenue will rise in the future.
4. **It is Actionable:** The metric must be something the team can influence through its day-to-day work on the product. It cannot be a metric that is primarily affected by external factors outside the team's control.
5. **It is Understandable:** The metric should be simple, clear, and easily understood by everyone in the organization, including non-technical partners. It should provide clarity and focus, not confusion.
6. **It is Measurable:** The organization must be able to instrument the product to track the metric accurately and reliably. A metric that cannot be measured cannot be managed.
7. **It is Not a Vanity Metric:** The metric must not be susceptible to being gamed or reflecting misleading growth. An increase in the metric must correspond to a genuine improvement in both customer value and long-term business health.

::: tip Pro-Tip: Use a Proxy Metric to Start Sooner
Don't let perfect be the enemy of good. If your ideal North Star Metric is difficult to measure immediately (e.g., requires significant new instrumentation), choose a "proxy metric" that is highly correlated and easier to track in the short term. For example, if your true NSM is "Weekly Active Teams," but you can't track "teams" yet, you could use "Weekly Active Users with >2 collaborators" as a temporary proxy. This allows you to start optimizing and learning right away while you build the infrastructure for the perfect metric.
:::

### Common Pitfalls: Revenue and Vanity Metrics

Two of the most common and dangerous mistakes in selecting an NSM are choosing revenue or a vanity metric.

* **Revenue as an NSM:** Metrics like Monthly Recurring Revenue (MRR) or Annual Recurring Revenue (ARR) are lagging indicators. They measure the value the business has *captured* from its customers, not the value it is currently *delivering*. A customer might pay for a year-long subscription (boosting ARR) but stop using the product after one month. The revenue metric looks healthy, but the customer is guaranteed to churn. The NSM should provide an early warning of this churn by tracking usage and value delivery, not just payment.
* **Vanity Metrics as an NSM:** Metrics like total registered users, page views, or app downloads are classic vanity metrics. They look impressive on a chart but often fail to correlate with real business impact. Having 50,000 registered users is meaningless if only 100 are actively using the product. A good NSM must go beyond surface-level interactions to measure meaningful engagement that leads to retention and monetization.

### Examples Across Business Models

The ideal NSM is highly specific to a company's product and strategy. However, patterns emerge across different business models:

* **B2B SaaS:** The focus is often on productivity and collaboration.
  * **HubSpot:** "Weekly Active Teams". This captures the collaborative value of the CRM.
  * **Slack:** "# of organizations that send > 2000 messages monthly". This defines a truly "active" and retained team.
  * **Self-Serve SaaS:** "Trial accounts with >3 users active in week 1". This is a powerful leading indicator of future conversion to a paid plan.
* **Marketplaces:** The NSM must reflect value delivered to both sides of the market (supply and demand).
  * **Airbnb:** "Number of nights booked". This metric increases only when a guest finds a suitable place and a host secures a booking.
  * **Uber:** "Weekly Active Riders". This captures the demand side of the marketplace, which is a leading indicator of driver engagement and revenue.
* **Content & Media:** The focus is on capturing user attention and engagement.
  * **Spotify:** "Time spent listening". This directly measures the core value users derive from the platform.
  * **Medium:** "Total reading time". This is a stronger measure of value than "articles clicked," as it differentiates between a quick glance and deep engagement.
  * **Facebook:** "Daily Active Users (DAU)". While often cited as a vanity metric, for an ad-based social network whose value is the network itself, daily engagement is the fundamental driver of the entire business model.

## Building the Metric Tree: From Output to Inputs

A North Star Metric on its own is a destination, but it doesn't provide a map. To make the NSM actionable, it must be deconstructed into a hierarchy of contributing metrics, known as a metric tree. This tree connects the high-level strategic output (the NSM) to the granular inputs that product teams can directly influence with their work.

### The Core Concept: Outputs vs. Inputs

The NSM is an **output metric**—it is a result, a scoreboard that tells you if you are winning. You cannot directly change an output metric. For example, a team at Spotify cannot simply decide to "increase time spent listening." It's too broad and not directly actionable.

To influence the output, teams must focus on the **input metrics**. These are the specific user behaviors and product levers that are the leading indicators of the NSM. They are the individual plays that drive the final score. For Spotify, inputs to "time spent listening" could be "number of sessions per user per week" and "average listening time per session." These are metrics the product team can build features for, such as personalized playlist notifications (to increase sessions) or improved music discovery algorithms (to increase time per session).

### Decomposition Method: Structuring the Tree

Building a metric tree is a process of logical decomposition, starting from the NSM at the top and breaking it down into its component parts, layer by layer. A powerful method for this decomposition is to think of the NSM as a mathematical equation or a logical formula.

A common and highly effective heuristic for identifying Level 1 input metrics is to consider four dimensions of user engagement:

* **Breadth:** How many users are experiencing value? (e.g., # of active users)
* **Depth:** How much value are they experiencing? (e.g., # of features used, # of items per order)
* **Frequency:** How often are users experiencing value? (e.g., # of sessions per week, purchase frequency)
* **Efficiency:** How successful and fast are users in experiencing value? (e.g., task success rate, time to value)

These Level 1 inputs can then be further decomposed into Level 2 inputs, which are often owned by specific product squads or teams. This hierarchical structure ensures that every team understands precisely how their daily work contributes to the overall company objective.

### Visualizing the Tree

The metric tree should be a living document, visually represented to foster shared understanding across the organization. Tools like Miro or Mural are excellent for this collaborative mapping process. When visualizing the tree, it's crucial to indicate the relationships between metrics. A simple but effective notation system can be used:

* **Solid Lines:** Indicate a direct, proven relationship (e.g., a mathematical formula like Revenue = # of Customers * Average Revenue Per Customer).
* **Dotted Lines:** Indicate a hypothesized relationship that needs to be validated through experimentation.

This visual language makes the company's growth model explicit, showing not only what is being measured but also the assumed causal links between actions and outcomes.

::: tip Pro-Tip: Validate Your Tree with Data
A metric tree is a model of your growth, but it starts as a set of hypotheses. Once you've drafted your tree, validate the connections using historical data. Run a correlation analysis to see if changes in your proposed input metrics have actually led to changes in your NSM in the past. For example, does an increase in "Search-to-Add-to-Cart Rate" historically correlate with an increase in "Weekly Orders"? This step turns your assumed model into a data-validated one, giving you more confidence in your strategy.
:::

### Example Metric Tree: Grocery Delivery App

To make this concrete, consider a metric tree for a hypothetical grocery delivery app. The company's strategy is to win on convenience and reliability.

* **North Star Metric (Output):** Weekly Orders with On-Time Delivery
* **Counter-Metric:** Customer Support Tickets per Order

This NSM captures customer value (getting groceries reliably) and is a leading indicator of retention and revenue. The counter-metric ensures that in the pursuit of more orders, quality does not suffer.

The metric tree would be structured as follows:

* **Level 1 Inputs:**
  * **Breadth:** # of Weekly Ordering Customers
  * **Frequency:** # of Orders per Ordering Customer
  * **Depth:** Average # of Items per Order
  * **Efficiency:** % of Orders Delivered On-Time
* **Level 2 Inputs (Examples of what teams might own):**
  * *Driving # of Weekly Ordering Customers (Acquisition & Retention Team):*
    * New Customer Signup Rate
    * Week-over-Week Retained Customer Rate
  * *Driving # of Orders per Ordering Customer (Engagement Team):*
    * Push Notification Click-Through Rate (for re-ordering reminders)
    * In-App Promotion Engagement Rate
  * *Driving Average # of Items per Order (Discovery & Merchandising Team):*
    * Search-to-Add-to-Cart Rate
    * Adoption of "Recommended for You" Feature
  * *Driving % of Orders Delivered On-Time (Logistics & Fulfillment Team):*
    * Average Picker Fulfillment Time
    * Average Driver Delivery Time

This tree provides immense clarity. The Engagement Team knows their goal is not just to send notifications, but to do so in a way that increases order frequency, which directly contributes to the company's North Star. It connects every initiative to the overarching strategy.

## Establishing Guardrails - The Critical Role of Counter-Metrics

A relentless focus on a single metric, even a well-chosen NSM, can be dangerous. Teams, in their drive to optimize, may inadvertently cause harm to other critical aspects of the user experience or business health. This is where counter-metrics play an essential role. They are the guardrails that prevent a product team from driving off a cliff in pursuit of its North Star.

### Defining Counter-Metrics

A counter-metric is a metric paired with a primary success metric to monitor for unintended negative consequences. It is a sanity check that ensures that improvements in one area do not come at the expense of another. For every success metric, there should be a corresponding counter-metric that asks, "What is the potential cost of this success?". These are also known as "guardrail metrics".

### The "Why": Preventing Perverse Incentives and Unintended Consequences

The need for counter-metrics arises from a simple truth: what you measure, you incentivize. If a team is solely incentivized to increase a single metric, they will find the most direct path to do so, which may not be the healthiest path for the business.

Consider these real-world scenarios:

* **Success Metric: Development Velocity.** A product leader pushes their team to increase the number of features shipped per month. The team responds, and velocity numbers soar. **Unintended Consequence:** To move faster, the team cuts corners on quality assurance. The number of bugs and production incidents skyrockets, leading to a poor user experience and increased customer churn. **Counter-Metric:** Number of Bugs Found / Change Failure Rate.
* **Success Metric: Ad Revenue.** A media company's primary goal is to maximize weekly ad revenue. The team introduces more ad units, auto-playing video ads, and intrusive pop-ups. Revenue spikes. **Unintended Consequence:** The user experience is degraded. Users become annoyed and frustrated, leading to lower engagement and a tarnished brand reputation. **Counter-Metric:** Net Promoter Score (NPS) / User Satisfaction (CSAT).
* **Success Metric: New User Signups.** A marketing team is tasked with maximizing new user acquisition. They launch aggressive campaigns that promise extraordinary value. **Unintended Consequence:** A flood of low-intent users signs up but never converts to paying customers, overwhelming support channels and providing no long-term value. **Counter-Metric:** Trial-to-Paid Conversion Rate / Customer Lifetime Value (LTV).

In each case, the counter-metric provides a more complete picture, balancing the success metric and ensuring that growth is healthy and sustainable.

### Framework for Choosing and Implementing Counter-Metrics

A systematic approach is required to select and implement effective counter-metrics.

1. **Anticipate Risk:** For any primary metric you intend to optimize (whether it's the NSM or an input metric), the team should hold a dedicated brainstorming session to anticipate potential risks. The key question is:** "What are all the ways we could 'game' this metric, and what negative impacts would that have?". This involves thinking critically about trade-offs between short-term wins and long-term health.
2. **Select a Paired Metric:** Based on the identified risks, choose a counter-metric that is **Critical, Measurable, and Actionable**.
   * **Critical:** It must protect a core aspect of the business. A vanity metric cannot be a good counter-metric.
   * **Measurable:** The data must be reliably trackable.
   * **Actionable:** The team must be able to influence the metric if it moves in the wrong direction.
3. **Set a Threshold:** A counter-metric is not meant to be optimized; it's a guardrail. The goal is to keep it above a predetermined threshold. This threshold should be set based on the business's risk appetite. It must be lenient enough to allow for normal statistical noise and experimentation but strict enough to serve as a genuine early warning system. A drop of 3-5% is a common starting point for setting an alert threshold. If the counter-metric crosses this threshold, it triggers an immediate investigation.

::: tip Pro-Tip: Visualize Your Guardrails with a Health Dashboard
Don't let your counter-metrics get buried in a report. Make them highly visible by creating a "Product Health Dashboard" that displays your primary success metric and its paired counter-metric side-by-side. Use simple color-coding based on your pre-set thresholds: Green (Healthy), Yellow (Warning), and Red (Threshold breached). This visual pairing forces a balanced conversation. A team can't celebrate a "green" success metric if its counter-metric is flashing "red" right next to it. This makes the trade-offs explicit and keeps the team focused on *healthy* growth.
:::

The North Star Framework, when properly implemented, becomes more than just a measurement strategy; it evolves into a system for managing organizational focus and energy. The North Star Metric itself acts as the focal point, concentrating the efforts of the entire company on a single, value-driven objective. The metric tree then functions as an energy distribution system, channeling the work of individual teams toward specific, actionable inputs that directly contribute to that objective. Finally, the counter-metrics serve as the critical safety fuses within this system. They are designed to prevent any single part of the system from overloading and causing damage to the whole. This integrated structure—focus from the NSM, actionability from the tree, and safety from counter-metrics—creates a balanced tension. It is this tension that drives healthy, sustainable, and truly product-led growth.

| Business Model                   | North Star / Success Metric               | Potential Unintended Consequence                                            | Example Counter-Metric               |
| :------------------------------- | :---------------------------------------- | :-------------------------------------------------------------------------- | :----------------------------------- |
| **B2B SaaS**               | # of Weekly Active Users                  | Users are active but not engaging deeply or deriving core value.            | Feature Usage Depth/Frequency        |
| **E-commerce Marketplace** | Gross Merchandise Volume (GMV)            | GMV grows by selling high-volume, low-margin goods, hurting profitability.  | Net Profit Margin                    |
| **Media/Content Platform** | Ad Revenue                                | The user experience is degraded by an overwhelming number of intrusive ads. | Net Promoter Score (NPS)             |
| **Engineering Team**       | Development Velocity (Story Points/Month) | Teams rush to ship features, sacrificing code quality and stability.        | Number of Bugs / Change Failure Rate |
| **Marketing Team**         | # of New Trial Signups                    | Acquiring low-quality leads who never convert or retain.                    | Trial-to-Paid Conversion Rate        |
| **Business Development**   | # of New Contracts Signed                 | Closing many small, low-value deals that strain resources.                  | Average Deal Size / LTV              |

## A Practical Workshop for Defining Your North Star

Defining a North Star Metric and its corresponding tree is a deeply strategic exercise that cannot be done in a silo. It requires cross-functional alignment and a shared understanding of the product's value and growth model. A structured, collaborative workshop is the most effective way to kickstart this process. This section provides a facilitator's guide for running a focused, two-hour North Star definition workshop.

### Participants and Preparation

The success of the workshop hinges on having the right people in the room and being well-prepared.

* **The Facilitator:** The workshop must be led by a skilled and unbiased facilitator, often a senior product leader or an external coach. The facilitator is responsible for setting the agenda, guiding discussions, keeping the session on track, and ensuring all voices are heard. They should be deeply familiar with the North Star Framework and should complete the workshop activities themselves beforehand to anticipate challenges.
* **The Participants:** Invite a cross-functional group of 4-5 key decision-makers and organizational influencers. This team should represent the core functions of the business:** product management, engineering, design, analytics, marketing, sales, and customer success. Senior-level participation is beneficial for ensuring strategic alignment and buy-in.
* **Preparation Artifacts:** Before the workshop, the facilitator should gather and share several key documents to provide context and ground the discussion:**
  * The company's mission and product vision statement.
  * A high-level product roadmap.
  * An overview of the target audience, including user personas.
  * A user journey map or product experience map.
  * Any existing high-level company goals or OKRs.

### Workshop Agenda and Activities

A two-hour workshop can be structured to produce a strong set of candidate metrics and inputs.

#### 1. Opening and Alignment (15 minutes)

* **Purpose:** Ground the team in a shared understanding of the "why" behind the workshop and the core principles of the North Star Framework.
* **Activity:** The facilitator leads a discussion using prompts like:**
  * "What problems are we trying to solve by defining a North Star?"
  * "What changes do we hope to see in how we work and make decisions?"
  * "What makes a good North Star Metric?" (Review the checklist).

#### 2. The Game We Play (30 minutes)

* **Purpose:** To focus the brainstorming by identifying the fundamental nature of the value your product delivers.
* **Activity:** The facilitator introduces the three primary "games" a product can play and leads a discussion to determine which best describes the product:**
  * **The Attention Game:** Success is measured by the time customers spend in the product (e.g., Netflix, TikTok, Spotify).
  * **The Transaction Game:** Success is measured by the number of commercial transactions that occur (e.g., Amazon, Uber, Airbnb).
  * **The Productivity Game:** Success is measured by how efficiently and effectively a user can accomplish a task (e.g., Slack, HubSpot, Salesforce).
  * The team discusses and votes to align on which "game" they are playing. This provides a crucial lens for the next step.

#### 3. Brainstorming and Selection (45 minutes)

* **Purpose:** To generate and converge on 1-2 strong candidates for the North Star Metric.
* **Activity:**
  * **Individual Brainstorming (10 mins):** Each participant silently writes down 3-5 potential NSM candidates on virtual sticky notes, keeping the chosen "game" in mind.
  * **Group & Theme (15 mins):** The facilitator helps the group cluster similar ideas and theme the brainstormed metrics. Each cluster is discussed briefly.
  * **Dot Voting (5 mins):** Each participant gets three votes to place on the metric candidates they believe best fit the NSM criteria.
  * **Debate & Refine (15 mins):** The top 2-3 voted metrics are debated. The facilitator guides the discussion using the NSM checklist. The goal is to refine the wording and converge on the strongest 1-2 candidates.

#### 4. Building the Tree (30 minutes)

* **Purpose:** To begin decomposing the top NSM candidate into actionable inputs and to identify critical counter-metrics.
* **Activity:**
  * The team focuses on the top-voted NSM candidate.
  * Using the **Breadth, Depth, Frequency, and Efficiency** prompts, the team brainstorms Level 1 input metrics that would drive the NSM.
  * The team then brainstorms the most critical counter-metrics needed to protect the business while pursuing the NSM.

### Workshop Output and Next Steps

It is crucial to set the expectation that the workshop is the *beginning* of the North Star journey, not the end. The goal is not to leave with a perfect, finalized metric, but with a set of strong, well-reasoned, and aligned-upon hypotheses.

* **Workshop Output:** A documented artifact (e.g., a Miro or Mural board) containing:**
  * The top 1-2 North Star Metric candidates.
  * A draft metric tree for the primary candidate, including Level 1 inputs.
  * A list of critical counter-metrics.
* **Next Steps:** The product and analytics teams are tasked with the follow-up work. This involves taking the hypothesized NSM and its inputs and validating them with historical data. They must analyze whether changes in the proposed input metrics have historically correlated with changes in long-term retention and revenue. This data-driven validation step is critical for confirming that the chosen NSM is indeed a true leading indicator of business success.

## Key Takeaways

* **Define One North Star Metric (NSM):** Align your entire company around a single metric that represents the core value you deliver to customers. It must be a leading indicator of revenue, not a lagging one like MRR.
* **Deconstruct the NSM into a Metric Tree:** Break your NSM (an output) down into a hierarchy of actionable input metrics (e.g., breadth, depth, frequency). This shows every team how their daily work drives the company's strategy.
* **Inputs are Actionable, Outputs are Results:** Your teams can't directly change the NSM. They can only influence the input metrics through their features and experiments. Focus on moving the inputs to drive the output.
* **Protect Your Strategy with Counter-Metrics:** For every key metric you optimize, pair it with a counter-metric (or guardrail) to prevent unintended harm. Healthy growth is balanced growth.
* **Make it a Collaborative Process:** Defining your North Star is a strategic exercise, not an analytical one. Use a cross-functional workshop to build shared understanding and buy-in from the start.

## Remember This Even If You Forget Everything Else

Your North Star Metric is not just a number; it's your company's story of value creation, written in the language of data. It answers the question, "If our users are successful, what number goes up?" Deconstructing it into a metric tree gives every team a map showing exactly how their work contributes to that success story. If you get the North Star right, you stop arguing about what to do next and start aligning on how to get there, faster.
