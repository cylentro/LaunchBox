<script setup>
import { ref, computed, watch } from "vue";
import { data as coursesData } from "./data/courses.data.ts"; // Changed import

// --- Course Data ---
const courses = ref(coursesData);

// --- Filtering Logic ---
// Use arrays to store multiple selections from checkboxes
const selectedCategories = ref([]);
const selectedLevels = ref([]);
const selectedSeries = ref(""); // Using a string for single-select radio buttons
const showRecommendedOnly = ref(false);
const isFilterVisible = ref(false); // State for mobile filter visibility
const searchQuery = ref("");

// Pagination state
const currentPage = ref(1);
const isCategoryFilterOpen = ref(true); // State for category filter collapsible
const isLevelFilterOpen = ref(true); // State for level filter collapsible
const isSeriesFilterOpen = ref(true); // State for series filter collapsible

// Get unique categories and levels for filter options
const allCategories = computed(() => {
	const categories = new Set();
	courses.value.forEach((course) => {
		course.categories.forEach((cat) => categories.add(cat));
	});
	// No 'All' needed for checkboxes
	return Array.from(categories).sort();
});

const allLevels = computed(() => {
	const levels = new Set();
	courses.value.forEach((course) => {
		course.levels.forEach((level) => levels.add(level));
	});
	// No 'All' needed for checkboxes
	return Array.from(levels).sort();
});

const allSeries = computed(() => {
	const seriesNames = new Set();
	courses.value.forEach((course) => {
		if (course.series) {
			seriesNames.add(course.series.name);
		}
	});
	return Array.from(seriesNames).sort();
});

// Filter courses based on selections
const filteredCourses = computed(() => {
	const allCourses = [...courses.value];

	// If a series is selected, we have a completely different sorting/filtering rule.
	if (selectedSeries.value) {
		return allCourses
			.filter((course) => {
				// Must match the selected series
				const seriesMatch =
					course.series && course.series.name === selectedSeries.value;
				if (!seriesMatch) return false;

				// And must match other filters
				const categoryMatch =
					selectedCategories.value.length === 0 ||
					course.categories.some((cat) =>
						selectedCategories.value.includes(cat),
					);
				const levelMatch =
					selectedLevels.value.length === 0 ||
					course.levels.some((level) => selectedLevels.value.includes(level));
				const recommendedMatch =
					!showRecommendedOnly.value || course.recommended;
				return categoryMatch && levelMatch && recommendedMatch;
			})
			.sort((a, b) => a.series.part - b.series.part); // Sort by series part
	}

	// If no series is selected, use the original logic.
	const pinnedCourses = allCourses
		.filter(
			(course) => course.pinOrder !== undefined && course.pinOrder !== null,
		)
		.sort((a, b) => a.pinOrder - b.pinOrder)
		.slice(-3);
	const unpinnedCourses = allCourses.filter(
		(course) => course.pinOrder === undefined || course.pinOrder === null,
	);
	const sortedUnpinnedCourses = unpinnedCourses;
	const combinedCourses = [...pinnedCourses, ...sortedUnpinnedCourses];

	return combinedCourses.filter((course) => {
		const categoryMatch =
			selectedCategories.value.length === 0 ||
			course.categories.some((cat) => selectedCategories.value.includes(cat));
		const levelMatch =
			selectedLevels.value.length === 0 ||
			course.levels.some((level) => selectedLevels.value.includes(level));
		const recommendedMatch = !showRecommendedOnly.value || course.recommended;
		const searchMatch =
			searchQuery.value === "" ||
			course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
			course.description
				.toLowerCase()
				.includes(searchQuery.value.toLowerCase()) ||
			course.categories.some((cat) =>
				cat.toLowerCase().includes(searchQuery.value.toLowerCase()),
			) ||
			course.levels.some((level) =>
				level.toLowerCase().includes(searchQuery.value.toLowerCase()),
			);
		return categoryMatch && levelMatch && recommendedMatch && searchMatch;
	});
});

// Pagination logic
const itemsPerPage = 15;

const totalPages = computed(() => {
	return Math.ceil(filteredCourses.value.length / itemsPerPage);
});

const paginatedCourses = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	return filteredCourses.value.slice(start, end);
});

// Function to reset all filters
function resetFilters() {
	selectedCategories.value = [];
	selectedLevels.value = [];
	selectedSeries.value = "";
	showRecommendedOnly.value = false;
	searchQuery.value = "";
	currentPage.value = 1; // Reset page on filter clear
}

// Helper function to get a course object by its link
function getCourseByLink(link) {
	if (!link || typeof link !== "string") {
		return undefined;
	}
	// Normalize the link to ensure no trailing slashes for consistent comparison
	const normalizedSearchLink = link.endsWith("/") ? link.slice(0, -1) : link;

	return courses.value.find((c) => {
		// Normalize the course's link from the data for consistent comparison
		const normalizedCourseLink = c.link.endsWith("/")
			? c.link.slice(0, -1)
			: c.link;
		return normalizedCourseLink === normalizedSearchLink;
	});
}

// Function to toggle series selection. Allows unchecking a radio button.
function toggleSeries(seriesName) {
	if (selectedSeries.value === seriesName) {
		selectedSeries.value = ""; // If the same series is clicked, unselect it
	} else {
		selectedSeries.value = seriesName; // Otherwise, select the new series
	}
}

// Function to format duration
function formatDuration(minutes) {
	if (minutes === null || minutes === undefined) {
		return "";
	}
	if (minutes < 60) {
		// Round to nearest 15 minutes
		const roundedMinutes = Math.round(minutes / 15) * 15;
		return `${roundedMinutes} mins`;
	} else {
		// Round down to nearest hour
		const hours = Math.floor(minutes / 60);
		return `${hours} hours`;
	}
}

// Watch filters to reset current page when filters change
watch(
	[
		selectedCategories,
		selectedLevels,
		showRecommendedOnly,
		selectedSeries,
		searchQuery,
	],
	() => {
		currentPage.value = 1;
	},
);
</script>

<template>
  <div class="course-gallery mt-8 px-4 sm:px-8 lg:px-12 xl:px-16 pb-16">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Course Library</h1>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Welcome to the course library! Here you'll find a curated collection of courses to help you navigate and master
        new technologies and skills. Use the filters below to find the course that's right for your learning journey.
      </p>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      All courses are free—if you find them valuable, you can <a href="https://coff.ee/christianh5" target="_blank"
        rel="noopener noreferrer" class="font-semibold text-blue-600 hover:underline dark:text-blue-400">buy me a
        coffee</a> to support my work.
      </p>
    </div>

    <!-- Main content area: conditionally rendered based on whether courses exist -->
    <div v-if="courses.length > 0" class="lg:grid lg:grid-cols-12 lg:gap-8">
      <!-- Filter Sidebar (only shown if courses exist) -->
      <aside v-if="courses.length > 0" class="lg:col-span-3 mb-8 lg:mb-0">
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
            <span class="lg:hidden"></span> <!-- Spacer for mobile layout to push Clear All to right -->
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
            <div v-show="isCategoryFilterOpen" class="mt-3 space-y-2" :class="{ 'h-[11.9rem] overflow-y-auto': allCategories.length > 7 }">
              <div v-for="category in allCategories" :key="category" class="flex items-center">
                <input type="checkbox" :id="`cat-${category}`" :value="category" v-model="selectedCategories"
                  class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
                <label :for="`cat-${category}`" class="ml-3 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">{{
                  category }}</label>
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

      <!-- Main Content -->
      <div class="lg:col-span-9">
        <!-- Course Grid -->
        <div v-if="paginatedCourses.length > 0" class="course-grid">
          <div v-for="course in paginatedCourses" :key="course.title" class="course-card">
            <a :href="course.link" class="card-link">
              <div class="relative">
                <img :src="course.image" :alt="`${course.title} cover image`" class="course-image" />
                <span v-if="course.recommended" class="absolute top-2 left-2 tag recommended-tag">Recommended</span>
                <span v-if="course.duration" class="absolute bottom-2 right-2 tag duration-tag">{{ formatDuration(course.duration) }}</span>
                <span v-if="course.pinOrder !== undefined && course.pinOrder !== null" class="absolute top-2 right-2 tag pin-tag">
                  <img src="/icons/pin.png" alt="Pinned" class="w-4 h-4" />
                </span>
              </div>
              <div class="card-content">
                <h3 class="course-title">{{ course.title }}</h3>
                <p class="course-description">{{ course.description }}</p>
                <div class="course-tags">
                  <span v-for="level in course.levels" :key="level" class="tag level-tag">{{ level }}</span>
                  <span v-for="category in course.categories" :key="category" class="tag category-tag">{{ category
                  }}</span>
                </div>

                <!-- Related Courses Section -->
                <div v-if="course.relatedCourses && course.relatedCourses.length > 0"
                  class="related-courses mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p class="font-semibold text-gray-700 dark:text-gray-300 mb-2">Related Courses:</p>
                  <div class="flex flex-wrap gap-2">
                    <a v-for="relatedLink in course.relatedCourses" :key="relatedLink" :href="relatedLink"
                      class="related-course-chip">
                      {{ getCourseByLink(relatedLink)?.title || 'Unknown Course' }}
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div v-else class="no-results">
          <p class="text-gray-600 dark:text-gray-400">No courses match your selected filters. Please try a different
            combination.</p>
        </div>

        <!-- Pagination Controls -->
        <div v-if="totalPages > 1" class="flex justify-center items-center space-x-2 mt-8">
          <button @click="currentPage--" :disabled="currentPage === 1"
            class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <template v-for="page in totalPages" :key="page">
            <button @click="currentPage = page" :class="{
              'px-4 py-2 rounded-lg font-semibold': true,
              'bg-blue-600 text-white': currentPage === page,
              'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700': currentPage !== page
            }">
              {{ page }}
            </button>
          </template>
          <button @click="currentPage++" :disabled="currentPage === totalPages"
            class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            Next
          </button>
        </div>

      </div>
    </div>
    <div v-else class="no-results">
      <p class="text-gray-600 dark:text-gray-400">No courses are available yet. Please check back later!</p>
    </div>
  </div>
</template>

<style scoped>
.course-grid {
  display: grid;
  /* Updated responsive grid columns */
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .course-grid {
    /* For sm screens, it's still inside a single column flow */
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 768px) {
  .course-grid {
    /* 2 columns for md/lg screens within the main content area */
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .course-grid {
    /* 3 columns for xl screens */
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1536px) {
  .course-grid {
    /* Max 3 columns to accommodate sidebar */
    grid-template-columns: repeat(3, 1fr);
  }
}

.course-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.course-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-bottom: 1px solid var(--vp-c-divider);
}

.card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.course-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-brand-1);
  margin: 0 0 0.5rem 0;
  border: none;
  /* Override theme heading styles */
  padding: 0;
}

.course-description {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
  margin: 0 0 1rem 0;
}

.course-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  /* Pushes tags to the bottom */
}

.dark .recommended-tag {
  background-color: #f59e0b;
  /* amber-500 */
  color: #451a03;
  /* amber-950 */
  border-color: #fcd34d;
  /* amber-300 */
}

.tag {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-weight: 500;
  line-height: 1.2;
}

.recommended-tag {
  background-color: #f59e0b;
  /* amber-500 */
  color: #451a03;
  /* amber-950 */
  border: 1px solid #d97706;
  /* amber-600 */
  font-weight: 600;
}

.level-tag {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.category-tag {
  background-color: var(--vp-c-gray-soft);
  color: var(--vp-c-text-2);
}

.no-results {
  margin-top: 2rem;
  padding: 2rem;
  text-align: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  color: var(--vp-c-text-2);
}

.related-course-chip {
  font-size: 0.7rem;
  /* Slightly larger than tags for readability */
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  /* Pill shape */
  font-weight: 500;
  background-color: var(--vp-c-brand-soft);
  /* Use a brand-related soft color */
  color: var(--vp-c-brand-1);
  /* Use brand color for text */
  border: 1px solid var(--vp-c-brand-2);
  /* A slightly darker brand border */
  text-decoration: none;
  /* Remove underline */
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  /* Smooth transitions */
  max-width: 100%;
  /* Ensure the chip doesn't exceed its parent's width */
  overflow: hidden;
  /* Hide overflowing content */
  text-overflow: ellipsis;
  /* Show ellipsis for truncated text */
  white-space: nowrap;
  /* Keep text on a single line */
}

.related-course-chip:hover {
  background-color: var(--vp-c-brand-1);
  /* Darker background on hover */
  color: var(--vp-c-white);
  /* White text on hover */
  border-color: var(--vp-c-brand-1);
}

/* Dark mode adjustments for related course chips */
.dark .related-course-chip {
  background-color: var(--vp-c-brand-dark);
  /* Darker brand soft for dark mode */
  color: var(--vp-c-brand-3);
  /* Lighter brand color for text */
}

.duration-tag {
  background-color: #10b981; /* emerald-500 */
  color: #064e3b; /* emerald-900 */
  border: 1px solid #059669; /* emerald-600 */
  font-weight: 600;
}

.dark .duration-tag {
  background-color: #065f46; /* emerald-900 */
  color: #a7f3d0; /* emerald-200 */
  border-color: #34d399; /* emerald-400 */
}

.pin-tag {
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white for glass effect */
  color: initial; /* Reset color to default */
  backdrop-filter: blur(5px); /* Frosted glass effect */
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}

.dark .pin-tag {
  background-color: rgba(0, 0, 0, 0.2); /* Semi-transparent black for dark mode glass effect */
  color: initial; /* Reset color to default */
}

.dark .pin-tag img {
  filter: invert(1);
}
</style>