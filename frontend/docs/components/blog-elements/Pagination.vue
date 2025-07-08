<template>
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script setup>
const { totalPages, currentPage } = defineProps(["totalPages", "currentPage"]);
const emit = defineEmits(["page-change"]);

function changePage(page) {
	if (page > 0 && page <= totalPages) {
		emit("page-change", page);
	}
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

span {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin: 0 0.5rem;
}

button {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  border-radius: 8px;
}

button:hover:not(:disabled) {
    background: var(--vp-c-bg-soft-up);
    border-color: var(--vp-c-brand-1);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
