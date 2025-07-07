<template>
  <div class="tag-list">
    <h3>Tags</h3>
    <div class="tags-container">
      <span 
        v-for="tag in tags" 
        :key="tag" 
        class="tag-item"
        :class="{ active: selectedTag === tag }"
        @click="$emit('tag-clicked', tag)"
      >{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
const { tags, selectedTag } = defineProps(["tags", "selectedTag"]);
const emit = defineEmits(["tag-clicked"]);
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
  background-color: var(--vp-c-bg); /* Match BlogCard background */
  border: 1px solid #e6e6e6; /* Use BlogCard's lighter border color */
  border-radius: 8px; /* Match BlogCard border-radius */
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease-in-out;
  /* Removed initial box-shadow */
  cursor: pointer;
}

.tag-item:hover {
  background-color: var(--vp-c-bg); /* Keep same background on hover */
  color: var(--vp-c-text-2); /* Keep same text color on hover */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Match BlogCard hover shadow */
}

.tag-item.active {
  background: #333;
  color: white;
  border-color: #333;
}
</style>