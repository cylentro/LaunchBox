<template>
  <ScrollProgressBar v-if="showProgressBar" /> <!-- Placed here to be a sibling to the main layout, positioned fixed below navbar -->
  <Layout>
    <template #doc-before>
      <!-- ReadOMeter is now rendered in the layout-bottom slot and moved with JS -->
    </template>

    <template #layout-bottom>
      <SpotifyBubble v-if="!isSpotifyBubbleHiddenPage" />
      <!-- Conditionally render NaitBubble: hide if on index.md -->
      <NaitBubble v-if="!isNaitBubbleHiddenPage" />
      <!-- Container for course helpers that will be moved under the H1 tag -->
      <div ref="courseHelpersContainer" v-if="showCourseHelper" class="course-helpers-container">
        <ReadOMeter :key="page.relativePath + '-readometer'" />
        <TTSPlayer :key="page.relativePath + '-tts'" />
      </div>
      <ContinueReadingToast v-if="showCourseHelper" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";
import { computed, ref, watch, nextTick } from "vue";
import SpotifyBubble from "../../components/SpotifyBubble.vue";
import NaitBubble from "../../components/assistant/NaitBubble.vue";
import ReadOMeter from "../../components/course-elements/ReadOMeter.vue";
import ScrollProgressBar from "../../components/course-elements/ScrollProgressBar.vue";
import TTSPlayer from "../../components/course-elements/tts/TTSPlayer.vue";
import ContinueReadingToast from "../../components/course-elements/ContinueReadingToast.vue";

const { Layout } = DefaultTheme;
const { page } = useData();
const route = useRoute();
const pagesToHideBubble = ["index.md", "license.md", "404.md"];
const isNaitBubbleHiddenPage = computed(() => {
	return (
		pagesToHideBubble.includes(page.value.relativePath) ||
		page.value.relativePath.includes("courses/") ||
		page.value.relativePath.includes("blog/")
	);
});
const isSpotifyBubbleHiddenPage = computed(() => {
	return page.value.relativePath.includes("courses/");
});

const showCourseHelper = computed(() => {
	const path = page.value.relativePath;
	// Corrected logic: Show on course pages, but NOT on the course index OR quiz pages.
	return (
		path.includes("courses/") &&
		!path.endsWith("index.md") &&
		!path.endsWith("quiz.md")
	);
});

const showProgressBar = computed(() => {
	const path = page.value.relativePath;
	// Show on course pages, but not on the course index or quiz pages.
	return (
		path.includes("courses/") &&
		!path.endsWith("quiz.md") &&
		!path.match("courses/index.md")
	);
});

const courseHelpersContainer = ref(null);

const moveCourseHelpers = async () => {
	// Ensure we are on a page where helpers should be shown
	if (!showCourseHelper.value) return;

	// Wait for the DOM to be ready
	await nextTick();

	const h1 = document.querySelector(".VPDoc h1");
	const container = courseHelpersContainer.value;

	if (h1 && container) {
		// Move the container to be right after the H1 tag
		h1.after(container);
	}
};

// Watch for route changes to re-run the move logic
watch(
	() => route.path,
	() => {
		if (typeof document !== "undefined") {
			moveCourseHelpers();
		}
	},
	{ immediate: true },
);
</script>

<style>
.course-helpers-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 32px;
}

@media print {
  .course-helpers-container,
  .VPLocalNav,
  .VPNav,
  .VPDocFooter,
  .nait-bubble-widget
  {
    display: none !important;
  }
}
</style>
