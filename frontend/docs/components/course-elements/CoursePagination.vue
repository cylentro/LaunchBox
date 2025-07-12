<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:currentPage"]);

const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("update:currentPage", page);
  }
};
</script>

<template>
  <div v-if="totalPages > 1" class="flex justify-center items-center space-x-2 mt-8">
    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
      class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
      Previous
    </button>
    <template v-for="page in totalPages" :key="page">
      <button @click="goToPage(page)" :class="{
        'px-4 py-2 rounded-lg font-semibold': true,
        'bg-blue-600 text-white': currentPage === page,
        'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700': currentPage !== page
      }">
        {{ page }}
      </button>
    </template>
    <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
      class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
      Next
    </button>
  </div>
</template>