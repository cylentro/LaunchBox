<template>
  <div class="blog-card">
    <a :href="post.url">
      <h3>{{ post.frontmatter.title }}</h3>
      <p class="subtitle">{{ post.frontmatter.subtitle }}</p>
      <div class="card-meta">
        <span class="category">{{ post.frontmatter.category }}</span>
        <span class="date">{{ new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</span>
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
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in-out;
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
  margin-bottom: 0.6rem;
  line-height: 1.3;
  color: #333;
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
