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
		.replace(/[#*~_>|]/g, ""); // Remove markdown characters

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
	cleanUrls: true, // Ensures URLs are generated without .html extensions

	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor';
					}
				}
			}
		}
	},

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

		// --- Open Graph (OG) Site-wide Defaults ---
		// These tags are not generated in `transformHead` and serve as good defaults.
		["meta", { property: "og:type", content: "website" }],
		[
			"meta",
			{ property: "og:image", content: "https://bychris.me/self_banner.jpg" },
		],
		["meta", { property: "og:locale", content: "en_US" }],

		// --- Twitter Card Site-wide Defaults ---
		["meta", { name: "twitter:card", content: "summary_large_image" }],
		[
			"meta",
			{ name: "twitter:image", content: "https://bychris.me/self_banner.jpg" },
		],

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
		["link", { rel: "mask-icon", href: "/favicon.svg", color: "#1e88e5" }],
		["meta", { name: "msapplication-TileColor", content: "#1e88e5" }],
		["meta", { name: "theme-color", content: "#1e88e5" }],

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

		// This logic correctly removes .md and index.md to create clean URLs
		let pagePath = pageData.relativePath.replace(/\.md$/, "");
		if (pagePath.endsWith("index")) {
			pagePath = pagePath.slice(0, -5); // 'courses/index' -> 'courses/'
		}
		// Remove trailing slash for non-root paths to create clean URLs
		pagePath = pagePath.replace(/\/$/, ""); // 'courses/' -> 'courses'

		// Construct the full, canonical URL for the current page.
		// This ensures the root URL doesn't have a trailing slash.
		const pageUrl = pagePath ? `${siteUrl}/${pagePath}` : siteUrl;

		// Dynamically get the title and description for the current page
		const pageTitle = pageData.title || siteTitle;
		const pageDescription =
			pageData.frontmatter.description || siteData.description; // Fallback to site description

		// Create a more descriptive title for sharing.
		// For the home layout, use the page title directly. For others, append site title.
		const socialTitle =
			pageData.frontmatter.layout === "home" || pageTitle === siteTitle
				? pageTitle
				: `${pageTitle} | ${siteTitle}`;

		// Use frontmatter for custom OG tags, with fallbacks to generated titles/descriptions
		const ogTitle = pageData.frontmatter.ogTitle || socialTitle;
		const ogDescription = pageData.frontmatter.ogDescription || pageDescription;

		// Set the primary meta description for search engines. This is crucial.
		newHead.push(["meta", { name: "description", content: pageDescription }]);

		// Add page-specific, canonical, and OG tags. This is the single source of truth.
		newHead.push(["link", { rel: "canonical", href: pageUrl }]);
		newHead.push(["meta", { property: "og:url", content: pageUrl }]);
		newHead.push(["meta", { property: "og:title", content: ogTitle }]);
		newHead.push([
			"meta",
			{ property: "og:description", content: ogDescription },
		]);
		newHead.push(["meta", { name: "twitter:title", content: ogTitle }]);
		newHead.push([
			"meta",
			{ name: "twitter:description", content: ogDescription },
		]);

		return newHead;
	},
	transformPageData(pageData) {
		const docsRoot = path.resolve(__dirname, "..");
		const fullFilePath = path.join(docsRoot, pageData.relativePath);

		// We only want to calculate reading time for course content pages
		if (
			pageData.relativePath.startsWith("courses/") &&
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
						{
							text: "Conclusion",
							link: "/courses/ab-testing-from-hypothesis-to-high-impact/conclusion",
						},
					],
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