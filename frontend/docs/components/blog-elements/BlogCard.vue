<template>
  <div class="blog-card">
    <a :href="post.url">
      <img v-if="post.frontmatter.image" :src="post.frontmatter.image" :alt="post.frontmatter.title" class="blog-card-image" />
      <div class="blog-card-content">
        <h3>{{ post.frontmatter.title }}</h3>
        <p class="author" v-if="post.frontmatter.author">By {{ post.frontmatter.author }}</p>
        <p class="subtitle">{{ post.frontmatter.subtitle }}</p>
        <div class="card-meta">
          <span class="category">{{ post.frontmatter.category }}</span>
          <span class="date">{{ new Date(post.frontmatter.date || post.lastUpdated).toLocaleDateString('en-US', { year: 'numeric',month: 'short', day: 'numeric' }) }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const { post } = defineProps(["post"]);
</script>

<style scoped>
.blog-card {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in-out;
  overflow: hidden; /* Ensures image corners are rounded with card */
}

.blog-card-image {
  width: 100%;
  height: 200px; /* Or whatever height you prefer */
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 0; /* Remove margin here, padding will be on content */
}

.blog-card-content {
  padding: 1.5rem;
}

.blog-card a {
  text-decoration: none;
  color: inherit;
  display: block; /* Make the whole card clickable */
}

.blog-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.blog-card a {
  text-decoration: none;
  color: inherit;
}

h3 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  line-height: 1.3;
  color: #333;
}

.author {
  font-size: 0.95rem;
  color: #777;
  margin-bottom: 0.8rem;
  font-style: italic;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #999;
}

.category {
  font-weight: 600;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.date {
  font-style: italic;
}
</style>
