<template>
  <div class="blog-layout">
    <div v-if="paginatedPosts.length > 0" class="main-content">
      <CategoryFilter :categories="availableCategories" :selectedCategories="selectedCategories" @filter-change="updateFilter" />
      <div class="blog-list">
        <BlogCard v-for="post in paginatedPosts" :key="post.path" :post="post" />
      </div>
      <Pagination :total-pages="totalPages" :current-page="currentPage" @page-change="changePage" />
    </div>
    <aside v-if="paginatedPosts.length > 0" class="sidebar">
      <PinnedPosts v-if="pinnedPosts.length > 0" :posts="pinnedPosts" />
      <TagList :tags="availableTags" :selectedTag="selectedTag" @tag-clicked="updateTagFilter" />
    </aside>
    <div v-else class="no-posts-message-full">
      <p>No blog posts available yet. Please check back later!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { data as posts } from "./data/posts.data.ts";
import BlogCard from "./BlogCard.vue";
import CategoryFilter from "./CategoryFilter.vue";
import Pagination from "./Pagination.vue";
import PinnedPosts from "./PinnedPosts.vue";
import TagList from "./TagList.vue";

const currentPage = ref(1);
const postsPerPage = 10;
const pinnedPost = 7;
const selectedCategories = ref([]);
const selectedTag = ref(null);



const allPosts = computed(() => {
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
  );
});

const availableCategories = computed(() => {
  let postsToConsider = allPosts.value;
  if (selectedTag.value) {
    postsToConsider = postsToConsider.filter(
      (post) =>
        post.frontmatter.tags &&
        post.frontmatter.tags.includes(selectedTag.value),
    );
  }
  const categories = new Set(postsToConsider.map((p) => p.frontmatter.category));
  return ["All", ...Array.from(categories)];
});

const availableTags = computed(() => {
  let postsToConsider = allPosts.value;
  if (selectedCategories.value.length > 0 && !selectedCategories.value.includes("All")) {
    postsToConsider = postsToConsider.filter((post) =>
      selectedCategories.value.includes(post.frontmatter.category),
    );
  }
  const tags = new Set();
  postsToConsider.forEach((p) => {
    if (p.frontmatter.tags) {
      p.frontmatter.tags.forEach((t) => tags.add(t));
    }
  });
  return Array.from(tags);
});

const filteredPosts = computed(() => {
  let filtered = allPosts.value;

  if (selectedCategories.value.length > 0 && !selectedCategories.value.includes("All")) {
    filtered = filtered.filter((post) =>
      selectedCategories.value.includes(post.frontmatter.category),
    );
  }

  if (selectedTag.value) {
    filtered = filtered.filter(
      (post) =>
        post.frontmatter.tags &&
        post.frontmatter.tags.includes(selectedTag.value),
    );
  }

  return filtered;
});

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage);
});

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return filteredPosts.value.slice(start, end);
});

const pinnedPosts = computed(() => {
  return posts
    .filter((p) => p.frontmatter.pinned)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .slice(0, pinnedPost);
});

function updateFilter(newCategories) {
  selectedCategories.value = newCategories;
  currentPage.value = 1;
}

function changePage(page) {
  currentPage.value = page;
}

function updateTagFilter(tag) {
  if (selectedTag.value === tag) {
    selectedTag.value = null; // Deselect if already selected
  } else {
    selectedTag.value = tag;
  }
  currentPage.value = 1;
}
</script>

<style scoped>
.blog-layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  max-width: 1152px;
  margin: 2rem auto;
}

.main-content {
  width: 100%;
  min-width: 0; /* Prevents content from overflowing grid cell */
}

.blog-list {
  margin-top: 2rem; /* Add space between category filter and blog cards */
}

.sidebar {
  width: 100%;
}

.no-posts-message-full {
  text-align: center;
  padding: 4rem 0;
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  grid-column: 1 / -1; /* Span across all columns in the grid */
}

@media (max-width: 768px) {
  .blog-layout {
    grid-template-columns: 1fr; /* Single column layout on mobile */
    margin: 1rem; /* Adjust margin for smaller screens */
  }

  .sidebar {
    display: none; /* Hide sidebar on mobile */
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .blog-layout {
    grid-template-columns: 3fr 1.5fr; /* Adjust main content and sidebar ratio */
    margin: 2rem; /* Add margin for tablet views */
  }

  .sidebar {
    width: 200px; /* Set a specific width for the sidebar */
  }
}
</style>