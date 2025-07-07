---
layout: doc
title: 'Running Your Experiment'
description: Learn the practical steps of running an A/B test, from understanding core statistical concepts like significance and p-values to comparing Frequentist vs. Bayesian methods and choosing the right testing tools.

ogTitle: 'Running Your Experiment'
ogDescription: Learn the practical steps of running an A/B test, from understanding core statistical concepts like significance and p-values to comparing Frequentist vs. Bayesian methods and choosing the right testing tools.

keywords: A/B testing statistics, statistical significance, p-value, confidence interval, Bayesian vs Frequentist, A/B testing tools, Optimizely, VWO
---
# Variant 5: Running Your Experiment

Once a high-potential hypothesis has been prioritized, the focus shifts to execution. A successful A/B test is a blend of creative design and scientific rigor. This module covers the practical steps for designing a valid experiment, from creating variations and defining audiences to understanding the statistical principles that ensure your results are trustworthy.

## The Statistical Foundation (Explained Simply)

While product managers do not need to be statisticians, a foundational understanding of key statistical concepts is essential for interpreting results correctly and communicating them with confidence.

### Statistical Significance

Think of statistical significance as a **"confidence score"** that the result you are seeing is real and not just a product of random chance or statistical noise. When an A/B testing tool reports a result has "95% statistical significance," it means you can be 95% confident that the observed difference in performance between Version A and Version B was caused by the change you made, rather than being a random fluke. In business and marketing contexts, 95% is the widely accepted standard threshold for making a decision.

### P-value

The p-value is the statistical measure that underlies significance. In simple terms, the **p-value is the probability of observing your result (or an even more extreme one) purely by chance, assuming that your change actually had no effect at all**.

Therefore, a *low* p-value is good. It indicates that your result is unlikely to be random noise. The standard threshold for significance directly corresponds to the p-value:

* A statistical significance of 95% is equivalent to a p-value of less than 0. (p<0.05).
* A statistical significance of 99% is equivalent to a p-value of less than 0. (p<0.01).

If your test shows that Variant B had a higher conversion rate than Variant A with a p-value of 0.03, it means there is only a 3% probability that you would see such a difference by pure luck. This gives you 97% confidence that the result is real, allowing you to reject the "null hypothesis" (the assumption that there is no difference) and declare a winner.

::: tip Pro-Tip: Translate Statistics into Business Language
When presenting to stakeholders, avoid getting bogged down in statistical jargon. Translate concepts into plain English. Instead of saying "The result had a p-value of 0.04," say, "We are 96% confident that this change will have a real, positive impact. There's only a 4% chance this is a random fluke." This builds trust and makes the data accessible to everyone.
:::

* **Confidence Intervals:** A confidence interval provides a range of plausible values for the true effect of your change, rather than a single point estimate. For example, instead of stating "The variant produced a 5% lift," a more accurate and honest statement would be, "We are 95% confident that the true lift from the variant is between 2% and 8%". This range-based approach transparently communicates the level of uncertainty in the result, which is critical for making informed business decisions.
* **Statistical Power:** This is the probability that your test will correctly identify a winner if a real difference actually exists. A standard power level of 80% means there is an 80% chance of avoiding a "Type II error," or a false negative—failing to detect a real effect. Low power is often a consequence of an insufficient sample size.

### Frequentist vs. Bayesian A/B Testing: A Practical Comparison

The statistical engine that powers an A/B testing tool is based on one of two major schools of thought: Frequentist or Bayesian. Understanding the difference is important because it affects how tests are run and how results are interpreted.

::: tip Pro-Tip: Use Confidence Intervals to Judge Impact
The confidence interval is more than a statistical curiosity; it's a decision-making tool. A result of "95% confidence of a lift between 0.1% and 0.5%" is statistically significant, but the impact is tiny. Is it worth the engineering cost to ship and maintain this change? In contrast, a lift "between 8% and 15%" is a clear, high-impact win. Use the range to gauge not just *if* you won, but *by how much*.
:::

| Approach              | Core Idea                                                                                   | How Probability is Viewed                                                                 | Pros for Product Managers                                                                                                                                                                                       | Cons for Product Managers                                                                                                                                                                                     |
| :-------------------- | :------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Frequentist** | Probability is the long-run frequency of an event over many repeated trials.                | Objective and fixed. The true conversion rate is a single, unknown number.                | Widely understood and used in many traditional tools. P-values provide a clear (though often misinterpreted) threshold for decision-making.                                                                     | Rigid: requires a fixed sample size determined in advance. "Peeking" at results before the test is complete invalidates the statistics. P-values can be unintuitive and difficult to explain to stakeholders. |
| **Bayesian**    | Probability is a degree of belief that is updated as new evidence (data) becomes available. | Subjective and can change. The true conversion rate is a distribution of possible values. | More intuitive results (e.g., "There is a 98% probability that Variant B is better than A"). More flexible; allows for stopping tests early if a winner is clear. Often works better with smaller sample sizes. | Can be more computationally complex. The concept of "priors" (initial beliefs) can be confusing if not handled properly by the tool.                                                                          |

Table based on insights from.

## Choosing Your Toolkit

The final piece of the design phase is selecting the right platform to run, manage, and analyze experiments. This often comes down to a "build vs. buy" decision and a careful evaluation of third-party vendors.

### Build vs. Buy: Total Cost of Ownership (TCO) for an Experimentation Platform

This is a significant strategic decision that goes far beyond the initial price tag. Teams often underestimate the true cost of building and maintaining an in-house platform.

| Factor                                  | Build (In-House)                                                                                                           | Buy (Third-Party Vendor)                                                                                             |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Initial Cost**                  | Very High: Requires a dedicated team of specialized engineers and data scientists for development.                         | Low to Moderate: Typically involves a subscription fee.                                                              |
| **Time to Market**                | Very Long: Can take 1-2 years or more to build a basic, reliable platform.                                                 | Short: Can be implemented and running tests in weeks or even days.                                                   |
| **Maintenance & Support**         | High & Ongoing: Requires a permanent team to maintain uptime, fix bugs, and support users.                                 | Included in Subscription: Vendor handles all maintenance, updates, and support.                                      |
| **Customization**                 | Maximum Flexibility: Can be tailored to highly specific and complex business needs (e.g., custom statistical models).      | Limited: Bound by the features and capabilities offered by the vendor.                                               |
| **Scalability**                   | Requires Continuous Investment: As test volume grows, so do the infrastructure and engineering costs needed to support it. | Scalable by Design: Vendors build their infrastructure to handle high volumes, though costs may increase with usage. |
| **Data Security**                 | Complete Control: All data remains within the company's own infrastructure.                                                | Vendor-Dependent: Data is hosted on external servers, requiring trust in the vendor's security protocols.            |
| **Total Cost of Ownership (TCO)** | Extremely high initial and ongoing investment in talent and infrastructure.                                                | Predictable subscription fees, but costs can scale with usage. Generally a much lower TCO for most companies.        |

Table based on insights from.

For most organizations, especially those not operating at the scale of Google or Netflix, buying a third-party platform is the faster, more cost-effective, and strategically sound choice.

::: tip Pro-Tip: The Hidden Cost of "Build" is Opportunity Cost
When evaluating "Build vs. Buy," the biggest hidden cost of building is *opportunity cost*. Every hour your engineers spend building and maintaining an internal experimentation platform is an hour they are *not* spending on your core, customer-facing product. For most companies, buying a dedicated solution frees up your most valuable resources to focus on what your customers actually pay for.
:::

### The Toolkit - Tools for A/B Testing in Mobile & Web

#### The Engine of Experimentation

A/B testing is not a manual process. It is powered by sophisticated software platforms that manage the entire experimental lifecycle. These tools are the engines that handle the critical technical functions of an experiment: randomly splitting traffic between variants, ensuring each user consistently sees the correct version, collecting behavioral data, and performing the statistical calculations to determine a winner. Choosing the right tool is a foundational step that depends on the platform being tested (web or mobile) and the team's specific needs.

#### Categorizing Your Options: A Tour of the Tool Landscape

The A/B testing tool market can be broadly divided into three main categories, each tailored to different use cases and team structures.

#### Category 1: Web A/B Testing & CRO Platforms

These platforms are typically all-in-one solutions designed specifically for optimizing websites and landing pages. Their defining feature is often a visual, drag-and-drop editor that empowers non-technical users, such as marketers and product managers, to create and launch experiments without needing to write code or rely on developer resources. This makes them exceptionally well-suited for testing visual elements (images, layouts), copy (headlines, descriptions), and calls-to-action.

* **Examples:** Optimizely 16, VWO (Visual Website Optimizer) 16, AB Tasty 16, Convert.

#### Category 2: Mobile App A/B Testing Platforms

These tools are built for running experiments within native mobile applications on iOS and Android. They are delivered as Software Development Kits (SDKs) that developers must integrate directly into the app's codebase. This integration allows teams to test much deeper functionality beyond simple UI changes, such as different algorithms, user flows, or pricing logic. These platforms often come with powerful feature flagging capabilities, which enable teams to perform controlled rollouts of new features to a small subset of users before a full launch.

* **Examples:** Firebase A/B Testing (from Google) 14, Optimizely's Mobile SDK 18, Apptimize 17, Split.io.

#### Category 3: All-in-One Product Analytics Suites

This category represents a significant evolution in the market. These platforms are, first and foremost, tools for deep user behavior analysis, allowing teams to build funnels, analyze retention curves, and create complex user segments. Over time, they have integrated powerful experimentation features into their suites. This creates a seamless and highly efficient workflow where a team can use the analytics tools to uncover a problem (e.g., "users are dropping off at this step"), form a data-backed hypothesis, build and run an experiment to test a solution, and measure the results—all within a single, unified platform.

* **Examples:** Amplitude 20, Mixpanel 20, PostHog.

The emergence of these all-in-one suites points to a powerful trend: the convergence of product analytics and experimentation. Historically, these were often separate disciplines handled by different teams using different tools. This separation created data silos and friction in the optimization process. A product manager might use an analytics tool to find an insight, then have to ask an engineering team to implement a test using a separate experimentation tool. The modern, integrated approach breaks down these barriers, creating a continuous learning loop where insight directly fuels action, dramatically accelerating a company's ability to learn and iterate.

::: tip Pro-Tip: Start with an Integrated Analytics Tool
If you're already using a product analytics suite like Amplitude or Mixpanel, their built-in A/B testing features are the perfect place to start. The seamless integration between analytics and experimentation creates an incredibly efficient workflow. You can identify a user problem in your funnels and immediately launch a test to solve it, all within one platform. This is often the fastest way to get your program off the ground.
:::

The market for A/B testing tools is vast. The right choice depends on company size, technical maturity, specific use cases (web vs. mobile), and budget.

| Tool                                   | Best For                                          | Key Features                                                                     | Statistical Engine                    | Pricing Model                                         |
| :------------------------------------- | :------------------------------------------------ | :------------------------------------------------------------------------------- | :------------------------------------ | :---------------------------------------------------- |
| **Optimizely**                   | Enterprise-level, mature experimentation programs | Web & Feature Experimentation, AI-powered suggestions, omnichannel testing       | Both Frequentist and Bayesian options | Quote-based, typically high-end                       |
| **VWO**                          | SMBs and Mid-Market, CRO professionals            | Visual editor, heatmaps, session recordings, funnel analysis, no-code setup      | Bayesian                              | Tiered subscription, starts around $173/month         |
| **AB Tasty**                     | Marketers and e-commerce teams                    | AI-powered personalization, EmotionsAI segmentation, widgets, feature management | Frequentist & Bayesian                | Quote-based                                           |
| **Statsig**                      | Product and engineering teams                     | Feature flagging, server-side testing, automated checks, sequential testing      | Bayesian                              | Usage-based, with a free tier                         |
| **Amplitude**                    | Product teams already using Amplitude Analytics   | Deep integration with analytics, behavioral cohorts, feature flags               | Bayesian                              | Bundled with analytics plans, starts around $61/month |
| **Google Optimize (deprecated)** | *Historically for beginners and SMBs*           | *Free, integrated with Google Analytics*                                       | *Bayesian*                          | *N/A*                                               |

## Key Takeaways

* **Significance is Your Confidence Score:** Statistical significance (typically 95%) tells you how confident you can be that your result is real and not just random noise. A low p-value (e.g., < 0.05) is the evidence that backs up this confidence.
* **Confidence Intervals Reveal the True Impact:** A confidence interval (e.g., "a lift between 2% and 8%") is more honest and useful than a single number. It shows the plausible range of the true effect, helping you judge the business value of a win.
* **Bayesian is Often More Intuitive:** While both Frequentist and Bayesian methods are valid, the Bayesian approach often provides more flexible and easier-to-understand results, like the "probability that B is better than A."
* **Buy, Don't Build (Usually):** For most companies, buying a third-party testing tool is faster and more cost-effective than building one. The opportunity cost of using your engineers to build an internal platform instead of your core product is immense.
* **Integrate Analytics with Experimentation:** The most powerful workflow comes from tools that combine deep product analytics with A/B testing features. This allows you to seamlessly move from identifying a user problem in your data to launching an experiment to solve it, all within one platform.

## Remember This Even If You Forget Everything Else

The statistics behind A/B testing are not just academic details; they are your primary defense against making business decisions based on random noise. A result without at least 95% confidence is just a guess. Trust the math, understand what it's telling you about uncertainty, and you'll build a program on a foundation of truth, not luck.
