import { createContentLoader, ContentData } from "vitepress";

interface Post {
	title: string;
	subtitle: string;
	date: string;
	category: string;
	tags: string[];
	pinned?: boolean;
}

declare const data: ContentData<Post>[] & {
	path: string;
	url: string;
	frontmatter: Post;
};

export default createContentLoader("blog/posts/*.md", {
	excerpt: true,
	transform(rawData) {
		return rawData
			.map((post) => {
				post.url = post.url.replace("/posts", "");
				return post;
			})
			.sort((a, b) => {
				return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
			}) as ContentData<Post>[] & {
			path: string;
			url: string;
			frontmatter: Post;
		};
	},
});
