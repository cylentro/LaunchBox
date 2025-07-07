<template>
  <div class="pinned-posts">
    <h3>Pinned Posts</h3>
    <ul class="pinned-posts-list">
      <li v-for="post in posts" :key="post.path" class="pinned-post-item">
        <a :href="post.url" class="pinned-post-link">
          {{ post.frontmatter.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { posts } = defineProps(["posts"]);
</script>

<style scoped>
.pinned-posts {
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.8rem;
}

.pinned-posts-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pinned-post-item {
  margin: 0;
}

.pinned-post-link {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-2);
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.pinned-post-link:hover {
  background-color: var(--vp-c-bg-mute);
  font-weight: bold ; 
}
</style>