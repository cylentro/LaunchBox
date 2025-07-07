<template>
  <div class="course-card">
    <a :href="course.link">
      <img v-if="course.image" :src="course.image" :alt="course.title" class="course-image" />
      <div class="card-content">
        <h3>{{ course.title }}</h3>
        <p class="description">{{ course.description }}</p>
        <div class="card-meta">
          <span v-if="course.levels && course.levels.length" class="level">{{ course.levels.join(', ') }}</span>
          <div class="categories">
            <span v-for="category in course.categories" :key="category" class="category-tag">{{ category }}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const { course } = defineProps(["course"]);
</script>

<style scoped>
.course-card {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.course-card a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.course-image {
  width: 100%;
  height: 200px; /* Fixed height for images */
  object-fit: cover; /* Ensures image covers the area without distortion */
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  line-height: 1.3;
  color: #333;
}

.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.5;
  flex-grow: 1; /* Allows description to take up available space */
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #999;
  margin-top: 1rem; /* Space above meta info */
}

.level {
  font-weight: 600;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-tag {
  background-color: #f0f0f0;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #555;
}
</style>
