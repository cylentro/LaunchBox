import { createContentLoader } from "vitepress";

export default createContentLoader("courses/*/index.md", {
	excerpt: true,
	transform(raw) {
		return raw
			.map(({ url, frontmatter, excerpt }) => ({
				title: frontmatter.title,
				description: frontmatter.description,
				link: url.replace(/\/index\.md$/, ""),
				image: frontmatter.hero?.image?.src,
				categories: frontmatter.categories || [],
				levels: frontmatter.levels || [],
				recommended: frontmatter.recommended || false,
				series: frontmatter.series || null,
				relatedCourses: frontmatter.relatedCourses || [],
				courseOrder: frontmatter.courseOrder || 0, // Add courseOrder field
				pinOrder: frontmatter.pinOrder || null,
				duration: frontmatter.duration || null,
				excerpt,
			}))
			.sort((a, b) => {
				// Sort by courseOrder in descending order
				return b.courseOrder - a.courseOrder;
			});
	},
});
