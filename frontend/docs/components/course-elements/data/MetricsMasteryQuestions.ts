// data/metricsMasteryQuestions.js
export const metricsMasteryQuestions = [
	// Chapter 1
	{
		chapter: 1, // Metrics 1: The Philosophy of Measurement
		questions: [
			{
				question:
					"What is the key difference between a 'data-driven' and a 'data-informed' approach?",
				options: [
					"Data-driven relies only on intuition, while data-informed uses only quantitative data.",
					"Data-driven treats data as the exclusive arbiter, while data-informed synthesizes data with qualitative insights and expertise.",
					"Data-driven is for marketing teams, while data-informed is for product teams.",
					"There is no difference; the terms are interchangeable.",
				],
				answer:
					"Data-driven treats data as the exclusive arbiter, while data-informed synthesizes data with qualitative insights and expertise.",
			},
			{
				question:
					"What is a major limitation of a purely data-driven approach, especially for innovation?",
				options: [
					"It is too subjective and relies on opinions.",
					"It is too slow and requires too much analysis.",
					"It is inherently backward-looking and can lead to local optimization, stifling breakthrough ideas.",
					"It is only effective for B2C products, not B2B.",
				],
				answer:
					"It is inherently backward-looking and can lead to local optimization, stifling breakthrough ideas.",
			},
			{
				question:
					"In a data-informed culture, how is a conflict between quantitative data (e.g., A/B test results) and qualitative data (e.g., user interviews) viewed?",
				options: [
					"As a failure of the research process.",
					"As a signal that the quantitative data is always correct.",
					"As a signal that deeper understanding is required, prompting the creation of a testable hypothesis.",
					"As a reason to default to the opinion of the highest-paid person in the room.",
				],
				answer:
					"As a signal that deeper understanding is required, prompting the creation of a testable hypothesis.",
			},
			{
				question:
					"What does the term 'local optimization' refer to in the context of data pitfalls?",
				options: [
					"Optimizing a product for a specific geographic region.",
					"Making small, measurable tweaks to minor variables while losing sight of the larger product vision.",
					"A/B testing only a small segment of users.",
					"Focusing only on optimizing for mobile devices.",
				],
				answer:
					"Making small, measurable tweaks to minor variables while losing sight of the larger product vision.",
			},
			{
				question:
					"According to the course, what is the primary strength of 'gut-feel' or 'product sense' in the early stages of a product?",
				options: [
					"It is a form of subconscious pattern recognition built from deep user empathy and market knowledge, allowing for rapid decisions.",
					"It is a wild guess that is usually wrong but necessary for speed.",
					"It eliminates the need for any data collection.",
					"It is most effective in large, scaled organizations.",
				],
				answer:
					"It is a form of subconscious pattern recognition built from deep user empathy and market knowledge, allowing for rapid decisions.",
			},
		],
	},
	// Chapter 2
	{
		chapter: 2, // The North Star Framework
		questions: [
			{
				question: "What is the primary purpose of a North Star Metric (NSM)?",
				options: [
					"To track daily revenue and profitability.",
					"To act as a vanity metric for board meetings.",
					"To align the entire company on a single metric that represents the core value delivered to customers.",
					"To measure the productivity of the engineering team.",
				],
				answer:
					"To align the entire company on a single metric that represents the core value delivered to customers.",
			},
			{
				question:
					"Why is revenue (like MRR) generally a poor choice for a North Star Metric?",
				options: [
					"Because it is too difficult to measure accurately.",
					"Because it is a lagging indicator of value captured, not a leading indicator of value being delivered.",
					"Because it doesn't apply to non-profit organizations.",
					"Because it is not an actionable metric for product teams.",
				],
				answer:
					"Because it is a lagging indicator of value captured, not a leading indicator of value being delivered.",
			},
			{
				question:
					"In a Metric Tree, what is the relationship between Input Metrics and the North Star Metric (an Output Metric)?",
				options: [
					"Input metrics are lagging indicators of the NSM.",
					"Input metrics are specific user behaviors that product teams can directly influence to affect the NSM.",
					"Input metrics are the same as counter-metrics.",
					"The NSM is a mathematical sum of all input metrics.",
				],
				answer:
					"Input metrics are specific user behaviors that product teams can directly influence to affect the NSM.",
			},
			{
				question: "What is the primary role of a counter-metric?",
				options: [
					"To be the most important metric the team optimizes for.",
					"To monitor for unintended negative consequences of optimizing a primary metric.",
					"To measure the total revenue generated by a feature.",
					"To replace the North Star Metric in quarterly reports.",
				],
				answer:
					"To monitor for unintended negative consequences of optimizing a primary metric.",
			},
			{
				question:
					"When decomposing a North Star Metric, which of the following is NOT one of the four common dimensions of user engagement?",
				options: [
					"Breadth (how many users)",
					"Depth (how much value)",
					"Frequency (how often)",
					"Budget (how much it costs)",
				],
				answer: "Budget (how much it costs)",
			},
		],
	},
	// Chapter 3
	{
		chapter: 3, // Setting and Communicating Targets
		questions: [
			{
				question:
					"Which of the following is NOT a characteristic of a SMART target?",
				options: ["Specific", "Measurable", "Ambiguous", "Time-bound"],
				answer: "Ambiguous",
			},
			{
				question:
					"Which method for setting targets is considered a 'bottom-up' approach, based on the projected impact of planned initiatives?",
				options: [
					"Market Potential (Top-Down)",
					"Competitive Benchmarking",
					"Resource-Based",
					"Historical Performance",
				],
				answer: "Resource-Based",
			},
			{
				question:
					"The 'triangulation' method for setting a robust target involves:",
				options: [
					"Asking three different teams for their opinion.",
					"Using a single method three times to confirm the result.",
					"Combining two or three different calculation methods (e.g., bottom-up, top-down, historical) to create a more realistic goal.",
					"Multiplying the historical growth rate by three.",
				],
				answer:
					"Combining two or three different calculation methods (e.g., bottom-up, top-down, historical) to create a more realistic goal.",
			},
			{
				question:
					"What is the main purpose of a 'Red-Yellow-Green' weekly review for tracking targets?",
				options: [
					"To punish teams whose metrics are in the 'Red'.",
					"To create a culture of continuous accountability and proactive problem-solving.",
					"To replace the need for a detailed dashboard.",
					"To only discuss the metrics that are 'Green'.",
				],
				answer:
					"To create a culture of continuous accountability and proactive problem-solving.",
			},
			{
				question:
					"In the OKR framework, what is the relationship between an Objective and a Key Result?",
				options: [
					"They are the same thing.",
					"The Objective is the number (e.g., 10% growth), and the Key Result is the inspiring mission.",
					"The Objective is the inspiring mission (the 'why'), and the Key Result is the measurable outcome (the 'what').",
					"Key Results are only for engineering teams, and Objectives are for marketing teams.",
				],
				answer:
					"The Objective is the inspiring mission (the 'why'), and the Key Result is the measurable outcome (the 'what').",
			},
		],
	},
	// Chapter 4
	{
		chapter: 4, // Frameworks for Funnel & UX
		questions: [
			{
				question:
					"What is the primary use of the AARRR ('Pirate Metrics') framework?",
				options: [
					"To measure user happiness with specific features.",
					"To set the company's overall strategic direction.",
					"To diagnose the customer lifecycle funnel and identify the biggest 'leaks' or drop-off points.",
					"To calculate the total revenue of the company.",
				],
				answer:
					"To diagnose the customer lifecycle funnel and identify the biggest 'leaks' or drop-off points.",
			},
			{
				question:
					"In the AARRR framework, what does the 'Activation' stage represent?",
				options: [
					"When a user first visits the website.",
					"When a user signs up for an account.",
					"The 'Aha!' moment when a user experiences the product's core value for the first time.",
					"When a user refers a friend to the product.",
				],
				answer:
					"The 'Aha!' moment when a user experiences the product's core value for the first time.",
			},
			{
				question:
					"According to the 'Hierarchy of Measurement,' how does the HEART framework relate to the AARRR framework?",
				options: [
					"HEART replaces AARRR for modern companies.",
					"AARRR is a sub-component of the HEART framework.",
					"AARRR diagnoses *where* a problem is in the funnel, and HEART is used to understand *why* and guide a solution.",
					"They are unrelated frameworks used by different departments.",
				],
				answer:
					"AARRR diagnoses *where* a problem is in the funnel, and HEART is used to understand *why* and guide a solution.",
			},
			{
				question:
					"The Goals-Signals-Metrics (GSM) process is used to implement which framework?",
				options: ["AARRR", "HEART", "North Star Framework", "SMART"],
				answer: "HEART",
			},
			{
				question:
					"Which HEART category would be most appropriate for measuring if users can complete a checkout process quickly and without errors?",
				options: ["Happiness", "Engagement", "Adoption", "Task Success"],
				answer: "Task Success",
			},
		],
	},
	// Chapter 5
	{
		chapter: 5, // The Execution Toolkit
		questions: [
			{
				question:
					"What is the primary purpose of A/B testing in product development?",
				options: [
					"To survey users about which design they like more.",
					"To quantitatively validate a specific hypothesis by comparing a change against a control.",
					"To launch multiple features at once to see which one is most popular.",
					"To make the product look different for every user.",
				],
				answer:
					"To quantitatively validate a specific hypothesis by comparing a change against a control.",
			},
			{
				question:
					"In an experiment, what does 'statistical significance' tell you?",
				options: [
					"That the result is important for the business.",
					"That the change was large and easy to see.",
					"The probability that the observed result was due to random chance, rather than the change you made.",
					"The exact amount of revenue the change will generate.",
				],
				answer:
					"The probability that the observed result was due to random chance, rather than the change you made.",
			},
			{
				question: "What is a key principle of effective 'data storytelling'?",
				options: [
					"Showing as many charts and numbers as possible on one slide.",
					"Using complex statistical terms to sound credible.",
					"Connecting data points to a compelling narrative to make insights memorable and drive action.",
					"Presenting only the data that supports your pre-existing opinion.",
				],
				answer:
					"Connecting data points to a compelling narrative to make insights memorable and drive action.",
			},
			{
				question: "What is the main benefit of using a 'Fake Door Test'?",
				options: [
					"To trick users into paying for a feature that doesn't exist.",
					"To gauge user interest and validate demand for a new feature before committing engineering resources.",
					"To test the security of the application.",
					"To A/B test two fully functional features against each other.",
				],
				answer:
					"To gauge user interest and validate demand for a new feature before committing engineering resources.",
			},
			{
				question:
					"Why is it crucial to tailor the communication of metric results to different audiences (e.g., executives vs. engineers)?",
				options: [
					"It isn't; everyone should receive the exact same raw data dump.",
					"To hide negative results from certain stakeholders.",
					"Because different stakeholders care about different outcomes (e.g., ROI vs. technical debt) and speaking their language increases buy-in and drives action.",
					"To make the report longer and more detailed.",
				],
				answer:
					"Because different stakeholders care about different outcomes (e.g., ROI vs. technical debt) and speaking their language increases buy-in and drives action.",
			},
		],
	},
	// Chapter 6
	{
		chapter: 6, // Applied Metrics Case Studies
		questions: [
			{
				question:
					"In the 'ConnectSphere' B2C app launch case study, what was the most critical metric for validating early product-market fit?",
				options: [
					"Cost Per Install (CPI).",
					"The number of app downloads on launch day.",
					"The flattening of the retention curve, even at a low percentage.",
					"Net Promoter Score (NPS).",
				],
				answer:
					"The flattening of the retention curve, even at a low percentage.",
			},
			{
				question:
					"In the 'TaskFlow' B2B SaaS case study, how were the AARRR and HEART frameworks used together?",
				options: [
					"HEART was used to find the problem, and AARRR was used to solve it.",
					"AARRR was used to diagnose the funnel leak (low Activation), and HEART was used to guide the UX improvements for the solution.",
					"They were used independently by different teams and were not related.",
					"AARRR was used for marketing and HEART was used for engineering.",
				],
				answer:
					"AARRR was used to diagnose the funnel leak (low Activation), and HEART was used to guide the UX improvements for the solution.",
			},
			{
				question:
					"What is the key principle highlighted in the 'StyleNow' e-commerce checkout funnel case study?",
				options: [
					"Always work on the easiest problems first to build momentum.",
					"Focus optimization efforts on the step with the highest percentage drop-off to achieve the maximum impact.",
					"Change the color of all buttons to see what happens.",
					"Only run one A/B test per year to avoid confusing users.",
				],
				answer:
					"Focus optimization efforts on the step with the highest percentage drop-off to achieve the maximum impact.",
			},
			{
				question:
					"In the 'DataViz Pro' revival case study, what was the primary role of metrics in the strategic decision-making process?",
				options: [
					"To measure the past success and justify continued investment.",
					"To forecast the potential impact and ROI of different future strategies.",
					"To determine which engineers to lay off.",
					"To prove that the product was still the best on the market.",
				],
				answer:
					"To forecast the potential impact and ROI of different future strategies.",
			},
			{
				question:
					"The 'TaskFlow' B2B SaaS case study implemented a personalized onboarding flow. What was the primary metric used to measure its 'Task Success' according to the HEART framework?",
				options: [
					"Net Promoter Score (NPS).",
					"Trial-to-paid conversion rate.",
					"Onboarding Completion Rate and Time to First Key Action.",
					"Daily Active Users (DAU).",
				],
				answer: "Onboarding Completion Rate and Time to First Key Action.",
			},
		],
	},
];
