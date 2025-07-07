<template>
  <div v-if="readingTime" class="reading-time-container">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
    </svg>
    <span>{{ readingTime }} min read</span>
  </div>
</template>

<script setup>
import { useData } from "vitepress";
import { computed } from "vue";

const { page } = useData();

const readingTime = computed(() => page.value.frontmatter.readingTime);
</script>

<style scoped>
.reading-time-container {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-text-2);
  font-size: 0.875rem; /* 14px */
  /* Margin is now handled by the parent .course-helpers-container */
  padding: 0.5rem 0.75rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  width: fit-content;
}

@media (max-width: 768px) { /* Adjust breakpoint as needed for mobile */
  .reading-time-container {
    width: 100%;
    justify-content: center;
  }
}
.icon {
  width: 1rem; /* 16px */
  height: 1rem; /* 16px */
}
</style>