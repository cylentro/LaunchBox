import { defineConfig, type HeadConfig } from "vitepress";
import fs from "fs";
import path from "path";

function getReadingTime(content) {
	if (!content) {
		return 0;
	}
	const wordsPerMinute = 225;
	// Remove frontmatter, script/style blocks, HTML tags, and code blocks
	const text = content
		.replace(/---[\s\S]*?---/, "") // Remove frontmatter
		.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Remove script tags
		.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "") // Remove style tags
		.replace(/<[^>]*>/g, "") // Remove remaining HTML tags
		.replace(/```[\s\S]*?```/g, "") // Remove code blocks
		.replace(/`[^`]*`/g, "") // Remove inline code
		.replace(/[#1B1A1E*~_>|]/g, ""); // Remove markdown characters

	const wordCount = text.match(/\w+/g)?.length || 0;
	const readingTime = Math.ceil(wordCount / wordsPerMinute);
	return readingTime;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Christian Hadianto",
	titleTemplate: ":title | Christian Hadianto",
	description:
		"Explore the portfolio of Christian Hadianto, a Product Manager with 10+ years of experience in logistics and a passion for building innovative products with Generative AI.",

	lastUpdated: true,

	cleanUrls: true, // Ensures URLs are generated without .html extensions

	head: [
		[
			"script",
			{
				async: "",
				src: "https://www.googletagmanager.com/gtag/js?id=G-T7FNRFF9EE",
			},
		],
		[
			"script",
			{}, // Empty attributes object for the second script tag
			`window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-T7FNRFF9EE');`,
		],
		// --- SEO and Behavior Tags ---
		["meta", { name: "robots", content: "index, follow" }],
		[
			"meta",
			{
				name: "keywords",
				content:
					"Christian Hadianto, ChrisHadi, Digital Product Manager, Product Manager, Product Manager Singapore, Generative AI, Gen AI, GenAI, Logistics, Prompt Engineering, Prompt Frameworks, RAG, LangChain, Vitepress, AI Portfolio, Anteraja, Logistik, Pengiriman, Moonlay Technologies",
			},
		],
		["meta", { name: "author", content: "Christian Hadianto" }],

		// --- Open Graph (OG) and Twitter Card Site-wide Defaults ---
		// OG and Twitter tags are now dynamically generated in the `transformHead` function.
		// This ensures each page has specific, accurate metadata.
		["meta", { property: "og:locale", content: "en_US" }],
		["meta", { name: "twitter:card", content: "summary_large_image" }],

		// --- Favicon and App Icons ---
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "96x96",
				href: "/favicon-96x96.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-96x96.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-96x96.png",
			},
		],
		[
			"link",
			{ rel: "icon", type: "image/svg+xml", href: "/favicon-96x96.svg" },
		],
		["link", { rel: "shortcut icon", href: "/favicon.ico" }],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
		],
		["link", { rel: "manifest", href: "/site.webmanifest" }],

		// --- Theme and PWA Tags ---
		["link", { rel: "mask-icon", href: "/favicon.svg", color: "#1B1A1E" }],
		["meta", { name: "msapplication-TileColor", content: "#1B1A1E" }],
		["meta", { name: "theme-color", content: "#1B1A1E" }],
		

		// --- Structured Data ---
		[
			"script",
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: "Christian Hadianto",
					jobTitle: "AI & Full-Stack Developer",
					description:
						"AI & Full-Stack Developer specializing in building intelligent applications with Next.js, Vue.js, and AI technologies like Google Gemini and LangChain.js.",
					url: "https://bychris.me",
					image: "/logo.png",
					sameAs: [
						"https://linkedin.com/in/chrishadi90",
						"https://github.com/cylentro",
						"https://discordapp.com/users/cylentro",
						"https://instagram.com/chrishadi90",
					],
					knowsAbout: [
						"Product Management",
						"Logistics",
						"Generative AI",
						"Prompt Engineering",
						"Prompt Frameworks",
						"Artificial Intelligence",
						"Retrieval-Augmented Generation (RAG)",
						"Google Gemini",
						"ChatGPT",
						"VitePress",
						"Next.js",
						"Vue.js",
						"TypeScript",
						"LangChain.js",
						"Tailwind CSS",
					],
				}),
			},
		],
		// --- Custom Style Overrides for Footer Margin ---
		// This style block conditionally adds padding to the bottom of the content area
		// ONLY when the page has a .VPDocFooter (i.e., when prev/next links are present).
		// It uses the :has() pseudo-class for modern browser compatibility.
		[
			"style",
			{},
			`
			.VPDocFooter{
				margin-bottom: 0px !important;
			}
			@media (min-width: 960px) {
				.VPDocFooter{
					margin-bottom: 64px !important;
				}
			}
			`,
		],
	],

	async transformHead({ pageData, siteData }) {
		const newHead: HeadConfig[] = [];
		const siteUrl = "https://bychris.me";
		const siteTitle = siteData.title;
		const defaultImage = `${siteUrl}/self_banner.jpg`;

		// Reconstruct the public URL path from the file's relative path.
		let pagePath = pageData.relativePath
			.replace(/\.md$/, "") // remove .md extension
			.replace(/index$/, ""); // remove trailing 'index'

		// Ensure a consistent path by removing any trailing slash
		if (pagePath.endsWith("/") && pagePath.length > 1) {
			pagePath = pagePath.slice(0, -1);
		}

		const pageUrl = pagePath ? `${siteUrl}/${pagePath}` : siteUrl;
		// Dynamically get the title and description for the current page
		const pageTitle = pageData.title || siteTitle;
		const pageDescription =
			pageData.frontmatter.description || siteData.description; // Fallback to site description

		// Use the page title directly for social sharing.
		// The site name is added via `og:site_name`.
		const socialTitle = pageTitle;
		const ogTitle = pageData.frontmatter.ogTitle || socialTitle;
		const ogDescription = pageData.frontmatter.ogDescription || pageDescription;
		const ogImage = pageData.frontmatter.image
			? `${siteUrl}/${pageData.frontmatter.image}`
			: defaultImage;
		const ogType = pageData.relativePath.startsWith("blog/")
			? "article"
			: "website";

		// Set the primary meta description for search engines. This is crucial.
		newHead.push(["meta", { name: "description", content: pageDescription }]);

		// Add page-specific, canonical, and OG tags. This is the single source of truth.
		newHead.push(["link", { rel: "canonical", href: pageUrl }]);
		newHead.push(["meta", { property: "og:url", content: pageUrl }]);
		newHead.push(["meta", { property: "og:site_name", content: siteTitle }]);
		newHead.push(["meta", { property: "og:type", content: ogType }]);
		newHead.push(["meta", { property: "og:title", content: ogTitle }]);
		newHead.push([
			"meta",
			{ property: "og:description", content: ogDescription },
		]);
		newHead.push(["meta", { property: "og:image", content: ogImage }]);
		newHead.push(["meta", { name: "twitter:title", content: ogTitle }]);
		newHead.push([
			"meta",
			{ name: "twitter:description", content: ogDescription },
		]);
		newHead.push(["meta", { name: "twitter:image", content: ogImage }]);

		return newHead;
	},
	transformPageData(pageData) {
		const docsRoot = path.resolve(__dirname, "..");
		const fullFilePath = path.join(docsRoot, pageData.relativePath);

		// We only want to calculate reading time for course content pages
		if (
			(pageData.relativePath.startsWith("courses/") ||
				pageData.relativePath.startsWith("blog/")) &&
			!pageData.relativePath.endsWith("index.md")
		) {
			try {
				const content = fs.readFileSync(fullFilePath, "utf-8");
				pageData.frontmatter.readingTime = getReadingTime(content);
			} catch (e) {
				console.error(
					`Could not read file for reading time: ${fullFilePath}`,
					e,
				);
			}
		}
	},

	themeConfig: {
		logo: "/logo.png",
		nav: [
			{ text: "Home", link: "/" },
			{
				text: "Professional Profile",
				items: [
					{ text: "Resume", link: "/profile/resume" },
					{ text: "Projects", link: "/profile/projects" },
					{ text: "Stacks", link: "/profile/stacks" },
					{ text: "Christian 101", link: "/profile/working-with-me" },
				],
			},
			{
				text: "G[AI]llery",
				items: [
					{ text: "AI Showcase", link: "/gaillery/ai-showcase" },
					{ text: "Prompt Framework", link: "/gaillery/prompt-frameworks" },
				],
			},
			{
				text: "Courses",
				link: "/courses",
			},
			{
				text: "Blog",
				link: "/blog",
			},
			{
				text: "About",
				items: [
					{ text: "About Me", link: "/about/about-me" },
					{ text: "Time Machine", link: "/about/time-machine" },
				],
			},
		],
		sidebar: {
			"/courses/prompting-101/": [
				{
					text: "Prompting 101: The Playbook for Everyone",
					link: "/courses/prompting-101/",
				},
				{
					text: "The Complete Course Manuscript",
					collapsed: false,
					items: [
						{
							text: "Chapter 1: What is Generative AI?",
							link: "/courses/prompting-101/chapter-1_what-is-generative-ai",
						},
						{
							text: "Chapter 2: The Art of the Conversation",
							link: "/courses/prompting-101/chapter-2_the-art-of-the-conversation_your-first-prompts",
					},
						{
							text: "Chapter 3: Advanced Prompting",
							link: "/courses/prompting-101/chapter-3_advance-prompting-techniques",
						},
						{
							text: "Chapter 4: AI in Your Workflow",
							link: "/courses/prompting-101/chapter-4_ai-in-your-daily-workflow",
						},
						{
							text: "Chapter 5: How AI Works",
							link: "/courses/prompting-101/chapter-5_a-peek-under-the-hood",
						},
						{
							text: "Chapter 6: Ethics & Limitations",
							link: "/courses/prompting-101/chapter-6_staying-safe-and-smart",
						},
						{
							text: "Chapter 7: What's Next?",
							link: "/courses/prompting-101/chapter-7_the-future-is-now-whats-next",
						},
					],
				},
				{
					text: "Knowledge Check Quiz",
					link: "/courses/prompting-101/quiz",
				},
				{
					text: "Implementation & Assessment",
					collapsed: false,
					items: [
						{
							text: "Teaching Methodology",
							link: "/courses/prompting-101/recommended-teaching-methodology",
						},
						{
							text: "Capstone Project",
							link: "/courses/prompting-101/capstone-project",
						},
					],
				},
				{
					text: "Additional Resources",
					collapsed: false,
					items: [
						{
							text: "Glossary of AI Terms",
							link: "/courses/prompting-101/glossary",
						},
						{
							text: "Getting Started with Prompt Design",
							link: "/courses/prompting-101/getting-started-with-prompt-design",
						},
						{
							text: "Prompting Frameworks Cheat Sheet",
							link: "/courses/prompting-101/prompt-cheatsheet",
						},
					],
				},
			],
			"/courses/the-art-of-the-ask/": [
				{
					text: "The Art of the Ask: A Comprehensive Guide",
					link: "/courses/the-art-of-the-ask/",
				},
				{
					text: "The Core Conversations",
					collapsed: false,
					items: [
						{
							text: "Convo 1: The Soul of the Interview - Mastering the 'Why'",
							link: "/courses/the-art-of-the-ask/convo-1_the-soul-of-the-interview",
						},
						{
							text: "Convo 2: The Architecture of the Interview - Deconstructing the 'How'",
							link: "/courses/the-art-of-the-ask/convo-2_the-architecture-of-the-interview",
						},
						{
							text: "Convo 3: The Art of the Question - Crafting Probes That Uncover Truth",
							link: "/courses/the-art-of-the-ask/convo-3_the-art-of-the-question",
						},
						{
							text: "Convo 4: In the Arena - Conducting Interviews with Finesse",
							link: "/courses/the-art-of-the-ask/convo-4_conducting-interviews-with-finesse",
						},
						{
							text: "Convo 5: The Synthesis - From Raw Data to Actionable Gold",
							link: "/courses/the-art-of-the-ask/convo-5_from-raw-data-to-actionable-gold",
						},
						{
							text: "Convo 6: Advanced Modules & Essential Considerations",
							link: "/courses/the-art-of-the-ask/convo-6_advance-module-essential-consideration",
						},
						{
							text: "Convo 7: Learning from Failure - In-Depth Case Studies",
							link: "/courses/the-art-of-the-ask/convo-7_learning-from-failure",
						},
					],
				},
				{
					text: "Conclusion",
					link: "/courses/the-art-of-the-ask/conclusion",
				},
				{
					text: "Knowledge Check Quiz",
					link: "/courses/the-art-of-the-ask/quiz",
				},
				{
					text: "Additional Resources",
					collapsed: false,
					items: [
						{
							text: "Glossary of Terms",
							link: "/courses/the-art-of-the-ask/glossary",
						},
						{
							text: "Interview Cheat Sheet",
							link: "/courses/the-art-of-the-ask/interview-cheatsheet",
						},
						{
							text: "Persona Template",
							link: "/courses/the-art-of-the-ask/persona-template",
						},
						{
							text: "Journey Map Template",
							link: "/courses/the-art-of-the-ask/journey-map-template",
						},
						{
							text: "Stakeholder Communication Template",
							link: "/courses/the-art-of-the-ask/stakeholder-communication-template",
						},
						{
							text: "Common Research Pitfalls",
							link: "/courses/the-art-of-the-ask/common-research-pitfalls",
						},
					],
				},
			],
			"/courses/vibe-coding-building-apps-with-ai-conversation/": [
				{
					text: "Vibe Coding: Building Apps with AI Conversation",
					link: "/courses/vibe-coding-building-apps-with-ai-conversation/",
				},
				{
					text: "The Complete Course Manuscript",
					collapsed: false,
					items: [
						{
							text: "Code 1: The Basics - What is Vibe Coding?",
							link: "/courses/vibe-coding-building-apps-with-ai-conversation/code-1-the-basics-what-is-vibe-coding",
						},
						{
							text: "Code 2: The Workflow - From Idea to Application",
							link: "/courses/vibe-coding-building-apps-with-ai-conversation/code-2-the-workflow-from-idea-to-application",
						},
						{
							text: "Code 3: In-Depth Study Case - Building a Note-Taking App",
							link: "/courses/vibe-coding-building-apps-with-ai-conversation/code-3-in-depth-study-case-building-a-note-taking-app",
						},
						{
							text: "Code 4: The Art of Debugging with AI",
							link: "/courses/vibe-coding-building-apps-with-ai-conversation/code-4-the-art-of-debugging-with-ai",
						},
						{
							text: "Code 5: Cornerstone Projects - Build Your Portfolio",
							link: "/courses/vibe-coding-building-apps-with-ai-conversation/code-5-cornerstone-projects-build-your-portfolio",
						},
					],
				},
				{
					text: "Conclusion: Your Journey as a Creator",
					link: "/courses/vibe-coding-building-apps-with-ai-conversation/conclusion",
				},
				{
					text: "Additional Resources",
					collapsed: false,
					items: [
						{
							text: "Glossary of Terms",
							link: "/courses/vibe-coding-building-apps-with-ai-conversation/glossary",
						},
						{
							text: "Vibe Coding Cheat Sheet",
							link: "/courses/vibe-coding-building-apps-with-ai-conversation/vibe-coding-cheatsheet",
						},
					],
				},
			],
			"/courses/metrics-mastery-for-product-managers/": [
				{
					text: "Metrics Mastery for Product Managers",
					link: "/courses/metrics-mastery-for-product-managers/",
				},
				{
					text: "The Complete Course Manuscript",
					collapsed: false,
					items: [
						{
							text: "Metrics 1: The Philosophy of Measurement",
							link: "/courses/metrics-mastery-for-product-managers/metrics-1_the-philosophy-of-measurement",
						},
						{
							text: "Metrics 2: The North Star Framework",
							link: "/courses/metrics-mastery-for-product-managers/metrics-2_the-north-star-framework-a-system-for-strategic-alignment",
						},
						{
							text: "Metrics 3: Setting and Communicating Targets",
							link: "/courses/metrics-mastery-for-product-managers/metrics-3_setting-and-communicating-targets",
						},
						{
							text: "Metrics 4: Frameworks for Funnel & UX",
							link: "/courses/metrics-mastery-for-product-managers/metrics-4_frameworks-for-the-funnel-and-user-experience",
						},
						{
							text: "Metrics 5: The Execution Toolkit",
							link: "/courses/metrics-mastery-for-product-managers/metrics-5_from-metrics-to-mandates-setting-and-communicating-targets",
						},
						{
							text: "Metrics 6: Applied Metrics Case Studies",
							link: "/courses/metrics-mastery-for-product-managers/metrics-6_applied-metrics-in-depth-case-studies",
						},
					],
				},
				{
					text: "Conclusion",
					link: "/courses/metrics-mastery-for-product-managers/conclusion",
				},
				{
					text: "Knowledge Check Quiz",
					link: "/courses/metrics-mastery-for-product-managers/quiz",
				},
				{
					text: "Additional Resources",
					collapsed: false,
					items: [
						{
							text: "Glossary of Terms",
							link: "/courses/metrics-mastery-for-product-managers/glossary",
						},
						{
							text: "Frameworks Cheat Sheet",
							link: "/courses/metrics-mastery-for-product-managers/framework-cheatsheet",
						},
						{
							text: "NSM Workshop Template",
							link: "/courses/metrics-mastery-for-product-managers/nsm-workshop-template",
						},
					],
				},
			],
			"/courses/ab-testing-from-hypothesis-to-high-impact/": [
				{
					text: "A/B Testing from Hypothesis to High-Impact",
					link: "/courses/ab-testing-from-hypothesis-to-high-impact/",
				},
				{
					text: "The Complete Course Manuscript",
					collapsed: false,
					items: [
						{
							text: "Variant 1: Foundations of High-Impact A/B Testing",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-1_foundations-of-high-impact-ab-testing",
						},
						{
							text: "Variant 2: Defining Success: Metrics and Goal Setting",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-2_defining-success-metrics-and-goal-setting",
						},
						{
							text: "Variant 3: The Art of the Hypothesis",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-3_the-art-of-the-hypothesis",
						},
						{
							text: "Variant 4: The Blueprint: How to Define and Design an A/B Test",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-4_how-to-define-and-design-an-ab-test",
						},
						{
							text: "Variant 5: Running Your Experiment",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-5_running-your-experiment",
						},
						{
							text: "Variant 6: Analysis, Interpretation, and Learning",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-6_analysis-interpretation-and-learning",
						},
						{
							text: "Variant 7: Understanding the Result of an A/B Test",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-7_understanding-the-result-of-an-ab-test",
						},
						{
							text: "Variant 8: Communicating Results and Driving Action",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-8_communicating-results-and-driving-action",
						},
						{
							text: "Variant 9: Scaling Experimentation and Building a Culture",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-9_scaling-experimentation-and-building-a-culture",
						},
						{
							text: "Variant 10: Tips, Tricks, and Common Pitfalls",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-10_tips-tricks-and-common-pitfalls",
						},
						{
							text: "Variant 11: A/B Testing in Action: 5 Practical Examples",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/variant-11_ab-testing-in-action-5-practical-examples",
						},
					],
				},
				{
					text: "Conclusion",
					link: "/courses/ab-testing-from-hypothesis-to-high-impact/conclusion",
				},
				{
					text: "Knowledge Check Quiz",
					link: "/courses/ab-testing-from-hypothesis-to-high-impact/quiz",
				},
				{
					text: "Additional Resources",
					collapsed: false,
					items: [
						{
							text: "Glossary of A/B Testing Terms",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/glossary",
						},
						{
							text: "A/B Testing Cheat Sheet",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/ab-testing-cheatsheet",
						},
						{
							text: "Client-Side vs. Server-Side Testing",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/client-side-vs-server-side-testing",
						},
					],
				},
			],
			"/courses/product-launch-mastery/": [
				{
					text: "Product Launch Mastery",
					link: "/courses/product-launch-mastery/",
				},
				{
					text: "Course Modules",
					collapsed: false,
					items: [
						{
							text: "Module 1: Foundations of Product Launch",
							link: "/courses/product-launch-mastery/module-1-foundations",
						},
						{
							text: "Module 2: Crafting the Product Narrative",
							link: "/courses/product-launch-mastery/module-2-crafting-product-narrative",
						},
						{
							text: "Module 3: Designing the GTM Strategy",
							link: "/courses/product-launch-mastery/module-3-designing-gtm-strategy",
						},
						{
							text: "Module 4: Execution & Collaboration",
							link: "/courses/product-launch-mastery/module-4-execution-operations-collaboration",
						},
						{
							text: "Module 5: Real-World Application & Optimization",
							link: "/courses/product-launch-mastery/module-5-real-world-application-optimization",
						},
					],
				},
				{
					text: "Conclusion: From Story to Market Dominance",
					link: "/courses/product-launch-mastery/conclusion",
				},
				{
					text: "Knowledge Check Quiz",
					link: "/courses/product-launch-mastery/quiz",
				},
				{
					text: "Additional Resources",
					collapsed: false,
					items: [
						{
							text: "Glossary of GTM Terms",
							link: "/courses/product-launch-mastery/glossary",
						},
						{
							text: "Downloadable: Buyer Persona Template",
							link: "/courses/product-launch-mastery/downloadable-resource-buyer-persona-template",
						},
					],
				},
			],
		},
		socialLinks: [
			{ icon: "linkedin", link: "https://linkedin.com/in/chrishadi90" },
			{ icon: "github", link: "https://github.com/cylentro" },
			{ icon: "discord", link: "https://discordapp.com/users/cylentro" },
			{ icon: "instagram", link: "https://instagram.com/chrishadi90" },
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
				},
				link: "https://open.spotify.com/show/6uiSJvabU9E0R4RCK9IRCb?si=9fdd0738e13740a5",
			},
		],
		search: {
			provider: "local",
		},
		footer: {
			message: 'Released under the <a href="/license">MIT License</a>.',
			copyright:
				'Copyright © 2025-present <a href="https://github.com/cylentro" target="_blank">Christian Hadianto</a> | Powered by <a href="https://vitepress.dev/" target="_blank">Vitepress</a>',
		},
	},
	sitemap: {
		hostname: "https://bychris.me",
	},
});
