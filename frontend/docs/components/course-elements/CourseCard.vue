<script setup>
import { computed } from "vue";

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
  getCourseByLink: {
    type: Function,
    required: true,
  },
});

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
</script>

<template>
  <div class="course-card">
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
</template>

<style scoped>
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