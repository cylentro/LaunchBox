// frontend/docs/.vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./style.css";
// @ts-ignore
import NaitBubble from "../../components/assistant/NaitBubble.vue";
import Timeline from "../../components/Timeline.vue";
import SpotifyBubble from "../../components/SpotifyBubble.vue";
import Layout from "./Layout.vue";

export default {
	...DefaultTheme,
	Layout: Layout,
	enhanceApp({ app }) {
		app.component("NaitBubble", NaitBubble);
		app.component("Timeline", Timeline);
		app.component("SpotifyBubble", SpotifyBubble);
	},
};
