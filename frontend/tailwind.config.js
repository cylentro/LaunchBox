/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./docs/.vitepress/**/*.js",
		"./docs/.vitepress/**/*.vue",
		"./docs/.vitepress/**/*.ts",
		"./docs/**/*.md",
		"./docs/**/*.vue",
	],
	theme: {
		extend: {
			colors: {
				"spotify-green": "#1DB954",
			},
		},
	},
	plugins: [],
};
