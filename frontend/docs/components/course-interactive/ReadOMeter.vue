<template>
  <div ref="readOMeterEl" v-if="readingTime" class="reading-time-container">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
    </svg>
    <span>{{ readingTime }} min read</span>
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import { computed, ref, watch, nextTick, onUnmounted } from 'vue';

const { page } = useData();
const readOMeterEl = ref(null);

const readingTime = computed(() => page.value.frontmatter.readingTime);

const moveComponent = async () => {
  if (!readingTime.value) return;

  // Wait for the DOM to be updated by Vue and VitePress
  await nextTick();

  const h1 = document.querySelector('.VPDoc h1');
  const el = readOMeterEl.value;

  if (h1 && el) {
    h1.after(el);
  }
};

// Watch for page changes and move the component accordingly
watch(() => page.value.path, moveComponent, { immediate: true });

onUnmounted(() => {
  // When the component is unmounted (e.g., due to page navigation with a :key),
  // we need to manually remove its DOM element if it has been moved.
  // This prevents "zombie" elements from being left in the DOM.
  const el = readOMeterEl.value;
  if (el && el.parentElement) {
    el.parentElement.removeChild(el);
  }
});
</script>

<style scoped>
.reading-time-container {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-text-2);
  font-size: 0.875rem; /* 14px */
  margin-top: 16px;
  margin-bottom: 0px;
  padding: 0.5rem 0.75rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  width: fit-content;
}
.icon {
  width: 1rem; /* 16px */
  height: 1rem; /* 16px */
}
</style>