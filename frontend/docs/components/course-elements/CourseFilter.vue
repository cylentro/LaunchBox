<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  courses: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits([
  "update:filters",
]);

// --- Filtering Logic ---
const selectedCategories = ref([]);
const selectedLevels = ref([]);
const selectedSeries = ref("");
const showRecommendedOnly = ref(false);
const searchQuery = ref("");
const categorySortType = ref('popularity');

// UI state for filter visibility
const isFilterVisible = ref(false); // State for mobile filter visibility
const isCategoryFilterOpen = ref(true);
const isLevelFilterOpen = ref(true);
const isSeriesFilterOpen = ref(true);

// Get unique categories and levels for filter options
const allCategories = computed(() => {
  const categories = props.courses.flatMap((course) => course.categories);
  const categoryCount = categories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.keys(categoryCount);

  if (categorySortType.value === 'alphabetical') {
    sortedCategories.sort((a, b) => a.localeCompare(b));
  } else {
    sortedCategories.sort((a, b) => categoryCount[b] - categoryCount[a]);
  }
  return sortedCategories;
});

const allLevels = computed(() => {
  const levels = new Set();
  props.courses.forEach((course) => {
    course.levels.forEach((level) => levels.add(level));
  });
  return Array.from(levels).sort();
});

const allSeries = computed(() => {
  const seriesNames = new Set();
  props.courses.forEach((course) => {
    if (course.series) {
      seriesNames.add(course.series.name);
    }
  });
  return Array.from(seriesNames).sort();
});

// Function to reset all filters
function resetFilters() {
  selectedCategories.value = [];
  selectedLevels.value = [];
  selectedSeries.value = "";
  showRecommendedOnly.value = false;
  searchQuery.value = "";
}

// Function to toggle series selection. Allows unchecking a radio button.
function toggleSeries(seriesName) {
  if (selectedSeries.value === seriesName) {
    selectedSeries.value = "";
  } else {
    selectedSeries.value = seriesName;
  }
}

// Watch filters to emit changes to parent
watch(
  [
    selectedCategories,
    selectedLevels,
    showRecommendedOnly,
    selectedSeries,
    searchQuery,
    categorySortType,
  ],
  () => {
    emit("update:filters", {
      selectedCategories: selectedCategories.value,
      selectedLevels: selectedLevels.value,
      selectedSeries: selectedSeries.value,
      showRecommendedOnly: showRecommendedOnly.value,
      searchQuery: searchQuery.value,
    });
  },
  { deep: true, immediate: true } // Immediate to send initial state
);
</script>

<template>
  <aside class="lg:col-span-3 mb-8 lg:mb-0">
    <!-- Mobile-only collapsible trigger for filters -->
    <div
      class="lg:hidden flex justify-between items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg mb-4 cursor-pointer"
      @click="isFilterVisible = !isFilterVisible" :aria-expanded="isFilterVisible" aria-controls="filters-content">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Filter Courses</h2>
      <svg :class="{ 'rotate-180': isFilterVisible }"
        class="w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- Filters Content: hidden on mobile by default, sticky on desktop -->
    <div id="filters-content" :class="{ 'hidden': !isFilterVisible }" class="lg:block lg:sticky lg:top-24">
      <div class="flex justify-between items-center mb-4">
        <h2 class="hidden lg:block text-xl font-semibold text-gray-900 dark:text-gray-100">Filters</h2>
        <span class="lg:hidden"></span>
        <button @click="resetFilters"
          class="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
          Clear All
        </button>
      </div>

      <!-- Search Bar -->
      <div class="py-4 border-t border-gray-200 dark:border-gray-700">
        <label for="course-search" class="sr-only">Search Courses</label>
        <input type="text" id="course-search" v-model="searchQuery" placeholder="Search courses..."
          class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      </div>

      <!-- Recommended Filter -->
      <div class="py-4 border-t border-gray-200 dark:border-gray-700">
        <div class="flex items-center">
          <input type="checkbox" id="recommended-filter" v-model="showRecommendedOnly"
            class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
          <label for="recommended-filter"
            class="ml-3 text-sm font-semibold text-gray-800 dark:text-gray-200 cursor-pointer">Show Recommended
            Course Only</label>
        </div>
      </div>

      <!-- Category Filter -->
      <div class="py-4 border-t border-gray-200 dark:border-gray-700">
        <button @click="isCategoryFilterOpen = !isCategoryFilterOpen"
          class="flex justify-between items-center w-full text-left">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200">Category</h3>
          <svg :class="{ 'rotate-180': isCategoryFilterOpen }"
            class="w-5 h-5 text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="isCategoryFilterOpen" class="mt-3">
          <div class="mb-3">
            <label for="category-sort" class="sr-only">Sort categories</label>
            <select id="category-sort" v-model="categorySortType"
              class="w-full text-sm px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="popularity">Sort by Popularity</option>
              <option value="alphabetical">Sort Alphabetically</option>
            </select>
          </div>
          <div class="space-y-2" :class="{ 'h-[11.9rem] overflow-y-auto': allCategories.length > 7 }">
            <div v-for="category in allCategories" :key="category" class="flex items-center">
              <input type="checkbox" :id="`cat-${category}`" :value="category" v-model="selectedCategories"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
              <label :for="`cat-${category}`" class="ml-3 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">{{
                category }}</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Level Filter -->
      <div class="py-4 border-t border-gray-200 dark:border-gray-700">
        <button @click="isLevelFilterOpen = !isLevelFilterOpen"
          class="flex justify-between items-center w-full text-left">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200">Level</h3>
          <svg :class="{ 'rotate-180': isLevelFilterOpen }"
            class="w-5 h-5 text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="isLevelFilterOpen" class="mt-3 space-y-2" :class="{ 'h-[11.9rem] overflow-y-auto': allLevels.length > 7 }">
          <div v-for="level in allLevels" :key="level" class="flex items-center">
            <input type="checkbox" :id="`level-${level}`" :value="level" v-model="selectedLevels"
              class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
            <label :for="`level-${level}`" class="ml-3 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">{{
              level }}</label>
          </div>
        </div>
      </div>

      <!-- Series Filter - Hidden if no series exist -->
      <div v-if="allSeries.length > 0">
        <div class="py-4 border-t border-gray-200 dark:border-gray-700">
          <button @click="isSeriesFilterOpen = !isSeriesFilterOpen"
            class="flex justify-between items-center w-full text-left">
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">Series</h3>
            <svg :class="{ 'rotate-180': isSeriesFilterOpen }"
              class="w-5 h-5 text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="isSeriesFilterOpen" class="mt-3 space-y-2" :class="{ 'h-[11.9rem] overflow-y-auto': allSeries.length > 7 }">
            <div v-for="seriesName in allSeries" :key="seriesName" class="flex items-center">
              <input type="radio" :id="`series-${seriesName}`" :value="seriesName"
                :checked="selectedSeries === seriesName" @click="toggleSeries(seriesName)"
                class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
              <label :for="`series-${seriesName}`"
                class="ml-3 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">{{ seriesName }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>