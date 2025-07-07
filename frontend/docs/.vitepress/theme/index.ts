// frontend/docs/.vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./style.css";
// @ts-ignore
import NaitBubble from "../../components/assistant/NaitBubble.vue";
import Timeline from "../../components/Timeline.vue";
import SpotifyBubble from "../../components/SpotifyBubble.vue";
import Layout from "./Layout.vue";
import StartCourseButton from "../../components/course-elements/StartCourseButton.vue";
import TTSPlayer from "../../components/course-elements/tts/TTSPlayer.vue";

import { h, nextTick } from "vue";
import { createMermaidRenderer } from "vitepress-mermaid-renderer";
import "vitepress-mermaid-renderer/dist/style.css";

export default {
	...DefaultTheme,
	Layout: () => {
		return h(Layout, null, {});
	},
	enhanceApp({ app, router, siteData }) {
		// Use the client-safe wrapper for SSR compatibility
		const mermaidRenderer = createMermaidRenderer();
		mermaidRenderer.initialize();

		if (router) {
			router.onAfterRouteChange = () => {
				nextTick(() => mermaidRenderer.renderMermaidDiagrams());
			};
		}
		
		app.component("NaitBubble", NaitBubble);
		app.component("Timeline", Timeline);
		app.component("SpotifyBubble", SpotifyBubble);
		app.component("StartCourseButton", StartCourseButton);
		app.component("TTSPlayer", TTSPlayer);
	},
};
