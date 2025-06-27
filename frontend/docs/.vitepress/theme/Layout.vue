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
      <!-- ReadOMeter is rendered here and will be moved after H1 on target pages -->
      <ReadOMeter v-if="showReadOMeter" :key="page.relativePath"/>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed } from "vue";
import SpotifyBubble from "../../components/SpotifyBubble.vue";
import NaitBubble from "../../components/assistant/NaitBubble.vue";
import ReadOMeter from '../../components/course-interactive/ReadOMeter.vue';
import ScrollProgressBar from '../../components/course-interactive/ScrollProgressBar.vue';

const { Layout } = DefaultTheme;
const { page } = useData();
const pagesToHideBubble = [
  "index.md", 
  "license.md", 
  '404.md',
];
const isNaitBubbleHiddenPage = computed(() => {
  return pagesToHideBubble.includes(page.value.relativePath) || page.value.relativePath.endsWith('quiz.md');
});
const isSpotifyBubbleHiddenPage = computed(() => {
  return page.value.relativePath.includes('courses/');
});

const showReadOMeter = computed(() => {
  const path = page.value.relativePath;
  // Corrected logic: Show on course pages, but NOT on the course index OR quiz pages.
  return path.includes('courses/') && !path.endsWith('index.md') && !path.endsWith('quiz.md');
});
const showProgressBar = computed(() => {
  const path = page.value.relativePath;
  // Show on course pages, but not on the course index or quiz pages.
  return path.includes('courses/') && !path.endsWith('quiz.md') && !path.match('courses/index.md');
});
</script>