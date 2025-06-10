<template>
  <Layout>
    <template #layout-bottom>
      <SpotifyBubble />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import SpotifyBubble from '../../components/SpotifyBubble.vue' // Adjust path as needed

const { Layout } = DefaultTheme
</script>