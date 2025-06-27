<template>
  <Layout>
    <template #layout-bottom>
      <SpotifyBubble v-if="!isSpotifyBubbleHiddenPage" />
      <!-- Conditionally render NaitBubble: hide if on index.md -->
      <NaitBubble v-if="!isNaitBubbleHiddenPage" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed } from "vue";
import SpotifyBubble from "../../components/SpotifyBubble.vue";
import NaitBubble from "../../components/assistant/NaitBubble.vue";

const { Layout } = DefaultTheme;
const { page } = useData();
const pagesToHideBubble = [
  "index.md", 
  "license.md", 
  '404.md',
];
const isNaitBubbleHiddenPage = computed(() => {
  return pagesToHideBubble.includes(page.value.relativePath) || page.value.relativePath.includes('courses/');
});
const isSpotifyBubbleHiddenPage = computed(() => {
  return page.value.relativePath.includes('courses/');
});
</script>