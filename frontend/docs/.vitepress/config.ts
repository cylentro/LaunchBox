import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Christian Hadianto", // This is the main title of your site
    titleTemplate: ":title",
    description: "Explore the portfolio of Christian Hadianto, a Product Manager with 10+ years of experience in logistics and a passion for building innovative products with Generative AI.",

    head:
        [
            ['meta', { name: 'robots', content: 'index, follow' }],
            ['meta', { name: 'keywords', content: 'Christian Hadianto, ChrisHadi, Digital Product Manager, Product Manager, Product Manager Singapore, Generative AI, Gen AI, GenAI, Logistics, Prompt Engineering, Prompt Frameworks, RAG, LangChain, Vitepress, AI Portfolio, Anteraja, Logistik, Pengiriman, Moonlay Technologies' }],
            ['meta', { name: 'author', content: 'Christian Hadianto' }],

            // Canonical URL
            ["link", { rel: "canonical", href: "https://stevanussatria.com" }],

            // --- Open Graph (OG) Tags for Social Sharing ---
            ['meta', { property: 'og:title', content: 'Christian Hadianto | Product Manager & AI Enthusiast' }],
            ['meta', { property: 'og:description', content: 'Explore the portfolio of Christian Hadianto, a Product Manager with 10 years of experience in logistics and a passion for building innovative products with Generative AI.' }],
            ['meta', { property: 'og:type', content: 'website' }],
            ['meta', { property: 'og:image', content: 'https://bychris.me/self_banner.jpg' }],
            ['meta', { property: 'og:url', content: 'https://bychris.me' }],
            ["meta", { property: "og:locale", content: "en_US" }],

            // --- Twitter Card Tags ---
            ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
            ['meta', { name: 'twitter:title', content: 'Christian Hadianto | Product Manager & AI Enthusiast' }],
            ['meta', { name: 'twitter:description', content: 'Explore the portfolio of Christian Hadianto, a Product Manager with 10+ years of experience in logistics and a passion for building innovative products with Generative AI.' }],
            ['meta', { name: 'twitter:image', content: 'https://bychris.me/self_banner.jpg' }],

            ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
            ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-96x96.png' }],
            ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-96x96.png' }],
            ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon-96x96.svg' }],
            ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
            ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
            ['link', { rel: 'manifest', href: '/site.webmanifest' }],

            ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#1e88e5' }],
            ['meta', { name: 'msapplication-TileColor', content: '#1e88e5' }],
            ['meta', { name: 'theme-color', content: '#1e88e5' }], // Sets the browser toolbar color

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
                        description: "AI & Full-Stack Developer specializing in building intelligent applications with Next.js, Vue.js, and AI technologies like Google Gemini and LangChain.js.",
                        url: "https://bychris.me",
                        image: "/logo.png", 
                        sameAs: [ 
                            "https://linkedin.com/in/chrishadi90",
                            "https://github.com/cylentro",
                            "https://discordapp.com/users/cylentro",
                            "https://instagram.com/chrishadi90"
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
                            "Tailwind CSS"
                        ]
                    }),
                },
            ]
        ],

    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Professional Profile',
                items: [
                    { text: 'Resume', link: '/profile/resume' },
                    { text: 'Projects', link: '/profile/projects' },
                    { text: 'Stacks', link: '/profile/stacks' },
                    { text: 'Christian 101', link: '/profile/working-with-me' },
                ]
            },
            {
                text: 'G[AI]lerry',
                items: [
                    { text: 'AI Showcase', link: '/gailerry/ai-showcase' },
                    { text: 'Prompt Framework', link: '/gailerry/prompt-frameworks' },
                    // { text: 'Prompt Collection', link: '/gailerry/prompt-collection' }
                ]
            },
            {
                text: 'About',
                items: [
                    { text: 'About Me', link: '/about/about-me' },
                    { text: 'Time Machine', link: '/about/time-machine' },
                ]
            },
        ],

        socialLinks: [
            { icon: 'linkedin', link: 'https://linkedin.com/in/chrishadi90' },
            { icon: 'github', link: 'https://github.com/cylentro' },
            { icon: 'discord', link: 'https://discordapp.com/users/cylentro' },
            { icon: 'instagram', link: 'https://instagram.com/chrishadi90' },
            {
                icon: {
                    // Your better SVG code (slightly cleaned)
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>'
                },
                link: 'https://open.spotify.com/show/6uiSJvabU9E0R4RCK9IRCb?si=9fdd0738e13740a5'
            }
        ],
        search: {
            provider: 'local',
        },
        footer: {
            message: 'Released under the <a href="/license">MIT License</a>.',
            copyright: 'Copyright © 2025-present <a href="https://github.com/cylentro" target="_blank">Christian Hadianto</a> | Powered by <a href="https://vitepress.dev/" target="_blank">Vitepress</a>'
        }
    },
    sitemap: {
        hostname: 'https://bychris.me',
    }
})