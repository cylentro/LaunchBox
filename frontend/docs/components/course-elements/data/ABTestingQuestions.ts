export const ABTestingQuestions = [
	// Variant 1: Foundations of High-Impact A/B Testing
	{
		chapter: 1,
		questions: [
			{
				question:
					"What is the primary advantage of Multivariate Testing (MVT) compared to a standard A/B test?",
				options: [
					"It requires less traffic to get a result.",
					"It can test multiple versions of a single element at once.",
					"It can identify how different elements interact with each other.",
					"It is simpler for non-technical users to set up.",
				],
				answer:
					"It can identify how different elements interact with each other.",
			},
			{
				question:
					"According to the course, what is the most significant cultural impact of adopting A/B testing?",
				options: [
					"It increases the number of meetings required for a decision.",
					"It shifts the organization from opinion-based decisions to data-informed conclusions.",
					"It makes the product design process slower.",
					"It guarantees that every new feature will be a success.",
				],
				answer:
					"It shifts the organization from opinion-based decisions to data-informed conclusions.",
			},
			{
				question:
					"What is the key difference between a 'data-driven' and a 'data-informed' culture?",
				options: [
					"Data-driven uses only qualitative data, while data-informed uses only quantitative data.",
					"Data-driven blindly follows numbers, while data-informed synthesizes data with strategy and user insights.",
					"Data-driven is for engineers, while data-informed is for marketers.",
					"There is no difference; the terms are interchangeable.",
				],
				answer:
					"Data-driven blindly follows numbers, while data-informed synthesizes data with strategy and user insights.",
			},
			{
				question:
					"In an experimentation team, which role is primarily responsible for the 'So What' – ensuring statistical rigor and interpreting the final results?",
				options: [
					"The Product Manager",
					"The Designer",
					"The Engineer",
					"The Analyst",
				],
				answer: "The Analyst",
			},
			{
				question:
					"Which experimentation team model is considered the most scalable and effective for mature organizations, as it balances speed with quality?",
				options: [
					"The Centralized Model",
					"The Decentralized Model",
					"The Center of Excellence (CoE) / Hybrid Model",
					"The Ad-Hoc Model",
				],
				answer: "The Center of Excellence (CoE) / Hybrid Model",
			},
			{
				question:
					"A test where the original version (control) wins against the new version (variant) should be considered:",
				options: [
					"A failure of the experimentation program.",
					"A success because it prevented a change that would have harmed metrics.",
					"An inconclusive result that should be run again.",
					"A sign that the testing tool is broken.",
				],
				answer:
					"A success because it prevented a change that would have harmed metrics.",
			},
		],
	},
	// Variant 2: Defining Success: Metrics and Goal Setting
	{
		chapter: 2,
		questions: [
			{
				question:
					"Why is Monthly Recurring Revenue (MRR) generally considered a poor choice for a North Star Metric (NSM)?",
				options: [
					"It's too difficult for the finance team to calculate.",
					"It is a lagging indicator that reports on past success, not a leading indicator of customer value being delivered.",
					"It only applies to e-commerce companies.",
					"It encourages teams to focus too much on user happiness.",
				],
				answer:
					"It is a lagging indicator that reports on past success, not a leading indicator of customer value being delivered.",
			},
			{
				question:
					"In a metric tree, what is the primary purpose of 'input metrics'?",
				options: [
					"They are high-level business goals that are difficult to influence.",
					"They are specific user behaviors that product teams can directly influence through their work.",
					"They are vanity metrics used for marketing presentations.",
					"They are another name for guardrail metrics.",
				],
				answer:
					"They are specific user behaviors that product teams can directly influence through their work.",
			},
			{
				question:
					"Which stage of the AARRR 'Pirate Metrics' framework focuses on a user's first positive experience and their 'Aha!' moment?",
				options: ["Acquisition", "Activation", "Retention", "Revenue"],
				answer: "Activation",
			},
			{
				question:
					"What is the most critical best practice when selecting a primary metric for an A/B test?",
				options: [
					"Select at least three primary metrics to increase the chances of finding a win.",
					"Select only one primary metric that is directly and logically connected to the hypothesis.",
					"Choose the metric that is easiest to measure, regardless of the hypothesis.",
					"Wait until the test is over to see which metric looks best, then declare it the primary metric.",
				],
				answer:
					"Select only one primary metric that is directly and logically connected to the hypothesis.",
			},
			{
				question: "What is the main purpose of a 'guardrail metric'?",
				options: [
					"To be the single metric that determines if a test is a winner.",
					"To ensure a test doesn't cause unintended harm to other important aspects of the business or user experience.",
					"To measure the total number of users included in the test.",
					"To track the cost of running the experiment.",
				],
				answer:
					"To ensure a test doesn't cause unintended harm to other important aspects of the business or user experience.",
			},
		],
	},
	// Variant 3: The Art of the Hypothesis
	{
		chapter: 3,
		questions: [
			{
				question:
					"What is the most critical component of a powerful hypothesis for generating learning?",
				options: [
					"The proposed solution or change.",
					"The predicted outcome on a key metric.",
					"The 'because' clause, which states the underlying assumption about user behavior.",
					"The quantitative data it is based on.",
				],
				answer:
					"The 'because' clause, which states the underlying assumption about user behavior.",
			},
			{
				question:
					"According to the course, what is the most effective way to combine quantitative and qualitative data to form a hypothesis?",
				options: [
					"Use quantitative data to find 'where' a problem is, and qualitative data to understand 'why'.",
					"Use qualitative data to find 'where' a problem is, and quantitative data to understand 'why'.",
					"Focus only on quantitative data as it is more objective.",
					"Focus only on qualitative data as it provides deeper insights.",
				],
				answer:
					"Use quantitative data to find 'where' a problem is, and qualitative data to understand 'why'.",
			},
			{
				question:
					"In the ICE framework for prioritizing A/B tests, what does the 'C' stand for?",
				options: ["Cost", "Complexity", "Confidence", "Conversion"],
				answer: "Confidence",
			},
			{
				question: "What is the 'Ease Trap' in test prioritization?",
				options: [
					"Prioritizing tests that are too difficult to implement.",
					"Creating a roadmap filled with easy, low-impact tests, avoiding harder but more impactful ideas.",
					"Assuming all tests are equally easy to build.",
					"Only allowing engineers to score the 'Ease' of a test.",
				],
				answer:
					"Creating a roadmap filled with easy, low-impact tests, avoiding harder but more impactful ideas.",
			},
			{
				question:
					"The Jobs-to-be-Done (JTBD) framework is most useful for generating hypotheses that...",
				options: [
					"Make small, iterative improvements to an existing design.",
					"Are easy for engineers to implement quickly.",
					"Address core user needs and can lead to breakthrough innovations.",
					"Are based purely on competitor analysis.",
				],
				answer:
					"Address core user needs and can lead to breakthrough innovations.",
			},
		],
	},
	// Variant 4: The Blueprint: How to Define and Design an A/B Test
	{
		chapter: 4,
		questions: [
			{
				question:
					"In the 'If-Then-Because' framework for creating a hypothesis, what is the most critical part for generating learning?",
				options: [
					"The 'If' clause, which describes the change.",
					"The 'Then' clause, which predicts the outcome.",
					"The 'Because' clause, which states the underlying assumption about user behavior.",
					"The data source mentioned in the observation.",
				],
				answer:
					"The 'Because' clause, which states the underlying assumption about user behavior.",
			},
			{
				question:
					"When running a standard, iterative A/B test, why is it critical to change only one variable at a time in your variant?",
				options: [
					"It makes the test run faster.",
					"It is a requirement of all A/B testing tools.",
					"It allows you to know with certainty which specific change caused the result.",
					"It reduces the required sample size for the test.",
				],
				answer:
					"It allows you to know with certainty which specific change caused the result.",
			},
			{
				question:
					"According to the course, when is the correct time to calculate the required sample size for an A/B test?",
				options: [
					"After the test has been running for 24 hours.",
					"Before you launch the test.",
					"Only if the results look inconclusive after a week.",
					"You don't need to calculate it if you have high traffic.",
				],
				answer: "Before you launch the test.",
			},
			{
				question:
					"What is the primary reason for running an A/B test for at least one full weekly cycle?",
				options: [
					"To give the engineering team enough time to fix bugs.",
					"To ensure the testing tool's billing cycle is met.",
					"To account for natural variations in user behavior between weekdays and weekends.",
					"To reach the highest possible statistical significance.",
				],
				answer:
					"To account for natural variations in user behavior between weekdays and weekends.",
			},
		],
	},
	// Variant 5: Running Your Experiment
	{
		chapter: 5,
		questions: [
			{
				question:
					"If an A/B test result has a statistical significance of 95%, what does this mean in practical terms?",
				options: [
					"The variant is exactly 95% better than the control.",
					"You can be 95% confident that the observed difference is real and not due to random chance.",
					"The test needs to run for 95 more hours.",
					"There is a 95% chance that the test will fail.",
				],
				answer:
					"You can be 95% confident that the observed difference is real and not due to random chance.",
			},
			{
				question:
					"What is the primary advantage of using a confidence interval (e.g., 'a lift between 2% and 8%') instead of a single point estimate (e.g., 'a 5% lift')?",
				options: [
					"It makes the result look more impressive.",
					"It is required by all A/B testing tools.",
					"It transparently communicates the range of plausible outcomes and the level of uncertainty.",
					"It guarantees the test is a winner.",
				],
				answer:
					"It transparently communicates the range of plausible outcomes and the level of uncertainty.",
			},
			{
				question:
					"Which A/B testing approach is more flexible, allows for early stopping, and provides more intuitive results like 'the probability that B is better than A'?",
				options: [
					"The Frequentist approach",
					"The Bayesian approach",
					"The Qualitative approach",
					"The Manual approach",
				],
				answer: "The Bayesian approach",
			},
			{
				question:
					"According to the course, what is the most significant hidden cost when deciding to 'build' an in-house experimentation platform instead of 'buying' one?",
				options: [
					"The monthly subscription fees.",
					"The cost of the servers.",
					"The opportunity cost of engineers working on an internal tool instead of the core product.",
					"The cost of marketing the new platform.",
				],
				answer:
					"The opportunity cost of engineers working on an internal tool instead of the core product.",
			},
			{
				question:
					"A marketing team wants to quickly test different headlines and button colors on a website landing page without writing code. Which category of tool would be most suitable for this task?",
				options: [
					"A server-side feature flagging tool.",
					"An all-in-one product analytics suite.",
					"A web A/B testing platform with a visual editor.",
					"A custom-built platform.",
				],
				answer: "A web A/B testing platform with a visual editor.",
			},
		],
	},
	// Variant 6: Analysis, Interpretation, and Learning
	{
		chapter: 6,
		questions: [
			{
				question:
					"What is the correct action if your primary metric shows a significant win, but a critical guardrail metric (like user retention) shows a significant loss?",
				options: [
					"Implement the change because the primary metric is the most important.",
					"Do not implement the change, as a win that harms long-term value is a net loss.",
					"Run the test again with a larger sample size.",
					"Ignore the guardrail metric as it's only secondary.",
				],
				answer:
					"Do not implement the change, as a win that harms long-term value is a net loss.",
			},
			{
				question:
					"When you discover a significant lift for a specific user segment (e.g., 'new mobile users') within an otherwise inconclusive test, what is the correct next step?",
				options: [
					"Immediately ship the change to that specific user segment.",
					"Form a new, targeted hypothesis based on this finding and run a new experiment to validate it.",
					"Declare the entire test a winner based on this segment's performance.",
					"Discard the result because segmentation is not reliable.",
				],
				answer:
					"Form a new, targeted hypothesis based on this finding and run a new experiment to validate it.",
			},
			{
				question:
					"What is 'Regression to the Mean' in the context of A/B testing?",
				options: [
					"The tendency for users to regress to older versions of the software.",
					"The tendency for extreme results seen early in a test to move closer to the average over time.",
					"A statistical method for calculating the mean conversion rate.",
					"The idea that all test results will eventually become average.",
				],
				answer:
					"The tendency for extreme results seen early in a test to move closer to the average over time.",
			},
			{
				question:
					"The 'Novelty Effect' is a validity threat where users react to a change simply because it's new. What is the best way to mitigate this?",
				options: [
					"Only test on users who have never used your product before.",
					"Run the test for a very short period of time.",
					"Segment results by new vs. returning users, as new users are immune to the effect.",
					"Ask users in a survey if they think the change is novel.",
				],
				answer:
					"Segment results by new vs. returning users, as new users are immune to the effect.",
			},
			{
				question: "What is the 'Local Maxima Problem' in experimentation?",
				options: [
					"When a test only performs well in one geographic location.",
					"When a team gets stuck making small, iterative improvements and fails to test bold, innovative ideas that could lead to much larger gains.",
					"When a test result is only valid for a short period of time.",
					"A technical error where the testing tool can't find the maximum conversion rate.",
				],
				answer:
					"When a team gets stuck making small, iterative improvements and fails to test bold, innovative ideas that could lead to much larger gains.",
			},
		],
	},
	// Variant 7: Understanding the Result of an A/B Test
	{
		chapter: 7,
		questions: [
			{
				question:
					"Your A/B test shows the variant has a statistically significant positive lift on the primary metric, and no guardrail metrics were harmed. What is the correct course of action?",
				options: [
					"Rerun the test to be absolutely sure.",
					"Implement the change and use the validated hypothesis to inform the next experiment.",
					"Discard the result because it might be a statistical fluke.",
					"Ask the HiPPO for their opinion before making a decision.",
				],
				answer:
					"Implement the change and use the validated hypothesis to inform the next experiment.",
			},
			{
				question:
					"An A/B test concludes that the variant performs significantly worse than the control. How should this outcome be framed?",
				options: [
					"As a failure of the product team.",
					"As a successful experiment that prevented a harmful change from being implemented.",
					"As a waste of time and resources.",
					"As a sign that the A/B testing tool is not working correctly.",
				],
				answer:
					"As a successful experiment that prevented a harmful change from being implemented.",
			},
			{
				question:
					"If an A/B test result is inconclusive (no statistically significant difference), what is the standard decision?",
				options: [
					"Implement the variant because it's a new design.",
					"Default to the control (do not ship the change) and segment the results to generate new hypotheses.",
					"Flip a coin to decide which version to use.",
					"Extend the test duration until it becomes significant.",
				],
				answer:
					"Default to the control (do not ship the change) and segment the results to generate new hypotheses.",
			},
			{
				question:
					"Why is 'learning velocity' considered a more meaningful measure of an experimentation program's success than 'win rate'?",
				options: [
					"Because it sounds more scientific.",
					"Because it focuses on the rate of generating validated insights about users, which builds long-term value, regardless of whether tests win or lose.",
					"Because a high win rate suggests the tests are too easy.",
					"Because learning velocity is easier to calculate.",
				],
				answer:
					"Because it focuses on the rate of generating validated insights about users, which builds long-term value, regardless of whether tests win or lose.",
			},
		],
	},
	// Variant 8: Communicating Results and Driving Action
	{
		chapter: 8,
		questions: [
			{
				question:
					"When presenting A/B test results to an executive audience, what should be the primary focus?",
				options: [
					"The deep statistical analysis, including p-values and confidence intervals.",
					"The technical challenges overcome by the engineering team.",
					"The business impact, such as ROI, and the strategic implications of the learning.",
					"The specific hex codes of the colors used in the design.",
				],
				answer:
					"The business impact, such as ROI, and the strategic implications of the learning.",
			},
			{
				question:
					"What is the most effective way to structure the communication of a test result to make it memorable and persuasive?",
				options: [
					"Presenting a raw data table with all metrics.",
					"Framing it as a narrative with a setup (the hypothesis), a confrontation (the result), and a resolution (the decision and learning).",
					"Only showing the final lift percentage without any context.",
					"Sending a one-line email that says 'Variant B won'.",
				],
				answer:
					"Framing it as a narrative with a setup (the hypothesis), a confrontation (the result), and a resolution (the decision and learning).",
			},
			{
				question:
					"What is the primary purpose of maintaining a central, searchable repository of all past experiments?",
				options: [
					"To create more administrative work for the product team.",
					"To build the company's institutional memory, prevent duplicate work, and compound learnings over time.",
					"To have a private log that is only accessible to the analyst.",
					"To store old designs that are no longer in use.",
				],
				answer:
					"To build the company's institutional memory, prevent duplicate work, and compound learnings over time.",
			},
			{
				question:
					"When communicating a test result, especially a 'loss' or an inconclusive one, what should be framed as the 'hero' of the story?",
				options: [
					"The product manager who came up with the idea.",
					"The validated learning about user behavior that was gained from the experiment.",
					"The A/B testing tool that was used.",
					"The engineer who built the variant.",
				],
				answer:
					"The validated learning about user behavior that was gained from the experiment.",
			},
		],
	},
	// Variant 9: Scaling Experimentation and Building a Culture
	{
		chapter: 9,
		questions: [
			{
				question:
					"In a mature, scaled experimentation program, what is the primary function of a Center of Excellence (CoE)?",
				options: [
					"To run every single A/B test for the entire company, acting as a gatekeeper.",
					"To act as an enabler by providing tools, training, and governance to empower other teams to test.",
					"To only analyze the results of tests run by other teams.",
					"To focus exclusively on generating new test ideas for the company.",
				],
				answer:
					"To act as an enabler by providing tools, training, and governance to empower other teams to test.",
			},
			{
				question:
					"What is a primary benefit of 'democratizing' experimentation by empowering individual product teams to run their own tests?",
				options: [
					"It guarantees that every test will be a winner.",
					"It significantly increases test velocity and fosters a stronger sense of ownership within the teams.",
					"It eliminates the need for any statistical oversight or governance.",
					"It makes the testing process more centralized and controlled.",
				],
				answer:
					"It significantly increases test velocity and fosters a stronger sense of ownership within the teams.",
			},
			{
				question:
					"Why is creating 'psychological safety' essential for building a high-impact experimentation culture?",
				options: [
					"To ensure everyone on the team is always happy and never disagrees.",
					"It encourages teams to propose and run bold, innovative tests without fear of blame if the experiment 'fails,' leading to more significant learnings.",
					"To prevent any disagreements during the test planning phase.",
					"To make sure only winning tests are shared publicly to boost morale.",
				],
				answer:
					"It encourages teams to propose and run bold, innovative tests without fear of blame if the experiment 'fails,' leading to more significant learnings.",
			},
			{
				question:
					"When evaluating the success of the entire experimentation *program*, why is 'learning velocity' a more meaningful metric than 'win rate'?",
				options: [
					"Because it is easier to calculate.",
					"Because it measures the rate of generating validated insights, which builds long-term value, whereas a high win rate might just indicate that the tests are not ambitious enough.",
					"Because 'win rate' is the only metric executives care about.",
					"Because a high learning velocity guarantees a high win rate.",
				],
				answer:
					"Because it measures the rate of generating validated insights, which builds long-term value, whereas a high win rate might just indicate that the tests are not ambitious enough.",
			},
		],
	},
	// Variant 10: Tips, Tricks, and Common Pitfalls
	{
		chapter: 10,
		questions: [
			{
				question:
					"What is the single most common and damaging mistake in A/B testing, which dramatically increases the rate of false positives?",
				options: [
					"Forgetting to define a hypothesis.",
					"Running the test for too long.",
					"'Peeking' at the results and stopping the test as soon as it looks significant.",
					"Using a testing tool that is too expensive.",
				],
				answer:
					"'Peeking' at the results and stopping the test as soon as it looks significant.",
			},
			{
				question:
					"A team spends months running tests on 50 different shades of blue for their CTA button, with none showing a significant result. This is a classic example of what common pitfall?",
				options: [
					"The Local Maxima Problem.",
					"Testing trivial changes that have no chance of producing a detectable impact.",
					"The Novelty Effect.",
					"Forgetting to calculate sample size.",
				],
				answer:
					"Testing trivial changes that have no chance of producing a detectable impact.",
			},
			{
				question:
					"An analyst only studies the behavior of users who successfully completed a purchase to understand the checkout flow. What critical bias is this introducing?",
				options: [
					"Novelty Effect",
					"Regression to the Mean",
					"Survivorship Bias",
					"Instrumentation Bias",
				],
				answer: "Survivorship Bias",
			},
			{
				question:
					"What is the most effective 'trick' for managing a 'HiPPO' (Highest Paid Person's Opinion) who suggests an idea you disagree with?",
				options: [
					"Politely explain why their idea is bad in front of the team.",
					"Agree to the idea but never actually build it.",
					"Reframe the conversation by saying 'That's a great idea, let's test it!' to let data be the objective referee.",
					"Immediately escalate the issue to their manager.",
				],
				answer:
					"Reframe the conversation by saying 'That's a great idea, let's test it!' to let data be the objective referee.",
			},
			{
				question:
					"A team tests a new, complex feature only on their most tech-savvy power users. Why is this a dangerous ethical and validity pitfall?",
				options: [
					"It introduces sampling bias, as the results won't be representative of the average user.",
					"It's a waste of time because power users don't generate revenue.",
					"It will cause a strong novelty effect.",
					"It violates GDPR regulations.",
				],
				answer:
					"It introduces sampling bias, as the results won't be representative of the average user.",
			},
		],
	},
	// Variant 11: A/B Testing in Action: 5 Practical Examples
	{
		chapter: 11,
		questions: [
			{
				question:
					"In the e-commerce checkout funnel example, a team tests removing an optional 'promo code' field to reduce distraction. What would be the most appropriate primary metric for this test?",
				options: [
					"Average Order Value (AOV).",
					"The conversion rate from 'checkout start' to 'purchase complete'.",
					"The number of users who visit the checkout page.",
					"Customer satisfaction score (CSAT).",
				],
				answer:
					"The conversion rate from 'checkout start' to 'purchase complete'.",
			},
			{
				question:
					"A SaaS company tests a new, interactive onboarding checklist against a passive video tutorial. The hypothesis is that an interactive flow will improve activation. What is the most critical guardrail metric to monitor?",
				options: [
					"The number of new sign-ups during the test period.",
					"The time it takes a user to complete the onboarding.",
					"The number of support tickets created by new users, to ensure the new flow isn't more confusing.",
					"The click-through rate on the company's marketing emails.",
				],
				answer:
					"The number of support tickets created by new users, to ensure the new flow isn't more confusing.",
			},
			{
				question:
					"A mobile app team tests a new, higher-priced subscription tier. The test shows a significant increase in Average Revenue Per User (ARPU), but a significant decrease in the overall trial-to-paid conversion rate. What is the correct decision?",
				options: [
					"Implement the new pricing because ARPU is higher.",
					"This is a classic trade-off. The decision requires a strategic discussion about whether the goal is maximizing revenue from a smaller user base or maximizing the total number of paid users.",
					"Discard the test because the results are contradictory.",
					"Rerun the test on a different set of users.",
				],
				answer:
					"This is a classic trade-off. The decision requires a strategic discussion about whether the goal is maximizing revenue from a smaller user base or maximizing the total number of paid users.",
			},
			{
				question:
					"A news website tests a 'softer' paywall message ('Support our journalism') against a 'harder' one ('Subscribe to read'). The softer message gets a lower subscription rate but a much lower bounce rate. How should this be interpreted?",
				options: [
					"The harder message is the clear winner because it drove more subscriptions.",
					"The softer message is the winner because it retained more users on the site.",
					"The result is inconclusive and should be ignored.",
					"It's a strategic decision: the team must weigh the value of immediate subscriptions against the long-term value of keeping more readers engaged in the funnel.",
				],
				answer:
					"It's a strategic decision: the team must weigh the value of immediate subscriptions against the long-term value of keeping more readers engaged in the funnel.",
			},
		],
	},
];
