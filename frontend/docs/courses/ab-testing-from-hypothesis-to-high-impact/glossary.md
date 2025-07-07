---
layout: doc
title: Glossary of A/B Testing Terms
description: A comprehensive glossary defining key A/B testing and experimentation terms used in the 'A/B Testing - From Hypothesis to High-Impact' course.

ogTitle: Glossary of A/B Testing Terms
ogDescription: A comprehensive glossary defining key A/B testing and experimentation terms used in the 'A/B Testing - From Hypothesis to High-Impact' course.

keywords: A/B testing glossary, experimentation terms, CRO terminology, statistical significance, p-value, confidence interval, guardrail metric, North Star Metric, hypothesis testing
---
# Glossary of A/B Testing Terms

Welcome to the glossary for "A/B Testing: From Hypothesis to High-Impact"! This section provides clear, concise definitions for the key terms you've encountered throughout the course.

## A

**A/B Testing (or Split Testing)**
A randomized controlled experiment that compares two versions (A and B) of a single variable to determine which performs better against a predefined metric. It is the cornerstone of experimentation for its simplicity and clarity in establishing cause-and-effect.

**A/B/n Testing**
An extension of A/B testing where 'n' represents any number of additional variants being tested simultaneously against the control (e.g., comparing four different headlines at once).

**AARRR "Pirate" Metrics**
A customer lifecycle framework modeling five key stages: Acquisition, Activation, Retention, Referral, and Revenue. Used to identify business funnel bottlenecks.

## B

**Bayesian A/B Testing**
A statistical approach where probability is treated as a degree of belief that gets updated as more data becomes available. It is often more intuitive and flexible than the Frequentist approach, allowing for early stopping if a winner is clear.

## C

**Center of Excellence (CoE) / Hybrid Model**
An organizational model for experimentation where a central team acts as an enabler, providing tools, training, and governance, while empowering individual product teams to run their own tests. It balances speed with quality and is considered a highly scalable model.

**Centralized Model**
An organizational model where a single, dedicated team of experts is responsible for running all A/B tests across the company. This ensures quality but can become a bottleneck.

**Confidence**
A criterion in the ICE scoring framework representing the level of certainty that a proposed change will have the expected impact, based on the strength of the supporting evidence.

**Confidence Interval**
A range of plausible values for the true effect of a change (e.g., "a lift between 2% and 8%"). It transparently communicates the level of uncertainty in a result.

**Control**
The existing, unaltered version of a page, feature, or flow in an experiment, denoted as "Version A." It serves as the baseline against which variants are measured.

## D

**Data-Driven**
An approach where decisions are dictated solely by quantitative data. While objective, it can lead to optimizing for local maxima and missing the "why" behind user behavior.

**Data-Informed**
An approach that uses quantitative data as a critical input alongside qualitative insights, business strategy, and team expertise to make decisions.

**Decentralized Model**
An organizational model where every product team is fully autonomous and responsible for running its own experiments. This maximizes velocity but can lead to inconsistent quality and siloed learnings.

## E

**Ease**
A criterion in both the PIE and ICE scoring frameworks that assesses how difficult a test will be to implement, considering both technical and organizational resources.

## F

**Feature Flagging**
A technique that allows teams to turn features on or off for specific user segments without deploying new code. It is a core component of mobile A/B testing and enables controlled rollouts.

**Frequentist A/B Testing**
A traditional statistical approach where probability is viewed as the long-run frequency of an event over many repeated trials. It is rigid, requiring a fixed sample size determined in advance.

## G

**Global Maximum**
The theoretical peak performance that can be achieved with a product or design. Reaching it often requires radical, innovative changes that go beyond simple iterative testing.

**Guardrail Metric (or Counter Metric)**
Also known as a counter or secondary metric. It is monitored to ensure that a change improving the primary metric doesn't cause unintended harm elsewhere in the business or user experience.

## H

**Happiness**
A category in the HEART framework that measures users' subjective attitudes and satisfaction, often through surveys like NPS or CSAT.

**HEART Framework**
A user-centered framework for measuring user experience across five dimensions: Happiness, Engagement, Adoption, Retention, and Task Success.

**HiPPO (Highest Paid Person's Opinion)**
A term for relying on the intuition of senior leaders instead of data to make decisions. A/B testing is a key tool for managing the HiPPO effect.

**Hypothesis**
A formal, testable statement that proposes a relationship between a specific change and an expected outcome, grounded in evidence. The "because" clause is its most critical part for learning.

## I

**ICE Framework**
A popular prioritization framework for ranking test ideas based on three criteria: Impact, Confidence, and Ease.

**Impact**
A criterion in the ICE scoring framework that estimates the potential effect a successful test will have on key metrics.

**Importance**
A criterion in the PIE framework that assesses the value of the traffic to the page being tested, prioritizing high-traffic, high-value pages.

**Inconclusive Result**
An outcome where a test fails to show a statistically significant difference between the variant and the control. This is a valuable learning, proving the tested change did not have a meaningful impact.

**Informed Consent**
An ethical principle requiring that users understand they are part of an experiment and have the right to refuse. For low-risk tests, this may be covered in a privacy policy, but for higher-risk tests, explicit consent is necessary.

**Interaction Effect**
An outcome in Multivariate Testing where the impact of changing two elements together is different from the sum of their individual impacts (e.g., a new headline and a new image together produce a 15% lift, while individually they only produced 5% and 3%).

**Instrumentation Effect**
A validity threat where errors are caused by the testing tool itself, such as a variant rendering incorrectly or slowing down the page (also known as the "flicker effect").

## J

**Jobs-to-be-Done (JTBD)**
A framework that focuses on the user's underlying goal or "job" they are "hiring" a product to do. It is used for generating deep, strategic hypotheses.

## L

**Learning Velocity**
A measure of a program's success based on the rate at which it generates validated learnings about user behavior, regardless of whether tests "win" or "lose." It is a more meaningful metric than "win rate."

**Local Maximum**
A strategic trap where a team becomes stuck optimizing a design to its peak potential (the "local maximum") and fails to explore radical redesigns that could lead to a much higher performance peak (the "global maximum").

## M

**Metric Tree**
A visual model that deconstructs the North Star Metric into a hierarchy of actionable input metrics, showing how day-to-day work contributes to the company's ultimate goal.

**Minimum Detectable Effect (MDE)**
The smallest lift in a metric that you want your test to be able to reliably detect. A smaller MDE requires a larger sample size.

**Multivariate Testing (MVT)**
A form of experimentation that tests multiple variables and their combinations at the same time to identify which individual elements perform best and how they interact with each other. It requires a very large volume of traffic.

## N

**North Star Metric (NSM)**
The single, overarching metric that best captures the core value your product delivers to its customers and acts as a leading indicator of long-term success.

**Novelty Effect**
The tendency for users, particularly long-time users, to react to a change simply because it is new, causing a temporary, artificial lift in metrics that fades over time.

## O

**Output Metrics**
High-level results, like the North Star Metric, that are the product of many smaller user actions (input metrics). Teams cannot change output metrics directly.

## P

**P-value**
In Frequentist statistics, the probability of observing your result (or a more extreme one) purely by chance, assuming the null hypothesis is true. A low p-value (typically < 0.05) indicates statistical significance.

**Peeking**
The critical mistake of stopping a test as soon as it appears to be winning. This capitalizes on random fluctuations and dramatically increases the rate of false positives.

**PIE Framework**
A prioritization framework for ranking test ideas based on three criteria: Potential, Importance, and Ease.

**Potential**
A criterion in the PIE framework that assesses how much room for improvement exists on a given page, prioritizing the worst-performing pages.

**Primary Metric**
The single, pre-defined metric that will be used to determine the winner of an A/B test. It must be directly tied to the hypothesis.

## R

**Regression to the Mean**
The statistical tendency for extreme results (either very high or very low) to move closer to the average over time. It's why you should never stop a test early based on an exciting initial result.

**Retention**
The stage in the user lifecycle and a category in the HEART framework that measures whether users come back to the product over time.

## S

**Sample Size**
The number of users or sessions required in each variation of a test to achieve statistically trustworthy results. It must be calculated before a test begins.

**Sampling Bias**
An ethical and validity threat that occurs when the test audience is not representative of the overall user base, which can lead to skewed results and discriminatory outcomes.

**Secondary Metric**
A metric that is monitored alongside the primary metric to provide additional context. See also: Guardrail Metric.

**Statistical Power**
The probability that a test will correctly detect a real effect if one exists. The standard for power is typically 80%, meaning there is an 80% chance of avoiding a false negative (Type II Error).

**Statistical Significance**
A measure of confidence (typically 95% or higher) that the observed difference between a variant and a control is due to the change made, not random chance.

**Survivorship Bias**
A logical error where conclusions are drawn only from "surviving" subjects (e.g., users who completed a purchase), ignoring the valuable data from those who dropped out.

## V

**Variant**
The modified version of a page or feature that incorporates the change being tested, also known as the "challenger" or "Version B."

## W

**Win Rate**
The percentage of tests where the variant outperforms the control. It is often considered a vanity metric, as the true value of a program lies in its learning velocity and business impact, not just its wins.
