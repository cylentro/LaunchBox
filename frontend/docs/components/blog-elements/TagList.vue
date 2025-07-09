<template>
  <div class="tag-list">
    <h3>Tags</h3>
    <div class="tags-container">
      <span 
        v-for="tag in sortedTags" 
        :key="tag" 
        class="tag-item"
        :class="{ active: selectedTag === tag }"
        @click="$emit('tag-clicked', tag)"
      >{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const { tags, selectedTag, tagCountsMap } = defineProps([
	"tags",
	"selectedTag",
	"tagCountsMap",
]);
const emit = defineEmits(["tag-clicked"]);

const sortedTags = computed(() => {
	if (!tagCountsMap) {
		return tags;
	}
	return [...tags].sort((a, b) => {
		const countA = tagCountsMap[a] || 0;
		const countB = tagCountsMap[b] || 0;
		return countB - countA; // Descending order
	});
});
</script>

<style scoped>
.tag-list {
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.8rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag-item {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.tag-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

html.dark .tag-item:hover {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.tag-item.active {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-1);
}
</style>