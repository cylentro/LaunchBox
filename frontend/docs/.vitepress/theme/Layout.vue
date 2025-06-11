<template>
  <Layout>
    <template #layout-bottom>
      <SpotifyBubble />
      <!-- Conditionally render NaitBubble: hide if on index.md -->
      <NaitBubble v-if="!isBubbleHiddenPage" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'
import SpotifyBubble from '../../components/SpotifyBubble.vue' 
import NaitBubble from '../../components/assistant/NaitBubble.vue'

const { Layout } = DefaultTheme
const { page } = useData()
const pagesToHideBubble = ['index.md', 'time-machine.md'];
const isBubbleHiddenPage = computed(() => {
  return pagesToHideBubble.includes(page.value.relativePath);
});
</script>