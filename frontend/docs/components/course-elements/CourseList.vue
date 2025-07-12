<script setup>
import { ref, computed, watch } from "vue";
import { data as coursesData } from "./data/courses.data.ts";
import CourseFilter from "./CourseFilter.vue";
import CourseCard from "./CourseCard.vue";
import CoursePagination from "./CoursePagination.vue";

// --- Course Data ---
const courses = ref(coursesData);

// --- Filter State (managed by CourseFilter component) ---
const filters = ref({
  selectedCategories: [],
  selectedLevels: [],
  selectedSeries: "",
  showRecommendedOnly: false,
  searchQuery: "",
});

// --- Pagination state ---
const currentPage = ref(1);
const itemsPerPage = 15;

// Update filters when CourseFilter emits changes
const updateFilters = (newFilters) => {
  filters.value = newFilters;
  currentPage.value = 1; // Reset page on filter change
};

// Filter courses based on selections
const filteredCourses = computed(() => {
  const allCourses = [...courses.value];
  const { selectedCategories, selectedLevels, selectedSeries, showRecommendedOnly, searchQuery } = filters.value;

  // If a series is selected, we have a completely different sorting/filtering rule.
  if (selectedSeries) {
    return allCourses
      .filter((course) => {
        // Must match the selected series
        const seriesMatch = course.series && course.series.name === selectedSeries;
        if (!seriesMatch) return false;

        // And must match other filters
        const categoryMatch = selectedCategories.length === 0 || course.categories.some((cat) => selectedCategories.includes(cat));
        const levelMatch = selectedLevels.length === 0 || course.levels.some((level) => selectedLevels.includes(level));
        const recommendedMatch = !showRecommendedOnly || course.recommended;
        return categoryMatch && levelMatch && recommendedMatch;
      })
      .sort((a, b) => a.series.part - b.series.part); // Sort by series part
  }

  // If no series is selected, use the original logic.
  const pinnedCourses = allCourses
    .filter((course) => course.pinOrder !== undefined && course.pinOrder !== null)
    .sort((a, b) => a.pinOrder - b.pinOrder)
    .slice(-3);
  const unpinnedCourses = allCourses.filter((course) => course.pinOrder === undefined || course.pinOrder === null);
  const sortedUnpinnedCourses = unpinnedCourses;
  const combinedCourses = [...pinnedCourses, ...sortedUnpinnedCourses];

  return combinedCourses.filter((course) => {
    const categoryMatch = selectedCategories.length === 0 || course.categories.some((cat) => selectedCategories.includes(cat));
    const levelMatch = selectedLevels.length === 0 || course.levels.some((level) => selectedLevels.includes(level));
    const recommendedMatch = !showRecommendedOnly || course.recommended;
    const searchMatch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.categories.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase())) ||
      course.levels.some((level) => level.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && levelMatch && recommendedMatch && searchMatch;
  });
});

// Pagination logic
const totalPages = computed(() => {
  return Math.ceil(filteredCourses.value.length / itemsPerPage);
});

const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredCourses.value.slice(start, end);
});

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
        All courses are free—if you find them valuable, you can
        <a href="https://coff.ee/christianh5" target="_blank" rel="noopener noreferrer"
          class="font-semibold text-blue-600 hover:underline dark:text-blue-400">buy me a coffee</a> to support my
        work.
      </p>
    </div>

    <!-- Main content area: conditionally rendered based on whether courses exist -->
    <div v-if="courses.length > 0" class="lg:grid lg:grid-cols-12 lg:gap-8">
      <!-- Filter Sidebar -->
      <CourseFilter :courses="courses" @update:filters="updateFilters" />

      <!-- Main Content -->
      <div class="lg:col-span-9">
        <!-- Course Grid -->
        <div v-if="paginatedCourses.length > 0" class="course-grid">
          <CourseCard v-for="course in paginatedCourses" :key="course.title" :course="course"
            :getCourseByLink="getCourseByLink" />
        </div>
        <div v-else class="no-results">
          <p class="text-gray-600 dark:text-gray-400">No courses match your selected filters. Please try a different
            combination.</p>
        </div>

        <!-- Pagination Controls -->
        <CoursePagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="currentPage = $event" />
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