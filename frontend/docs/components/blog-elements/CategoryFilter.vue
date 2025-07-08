<template>
  <div class="category-filter-wrapper" :class="{ 'fade-left': showLeftArrow, 'fade-right': showRightArrow }">
    <button class="scroll-btn left" @click="scroll('left')" v-show="showLeftArrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <div class="category-filter" ref="scrollContainer" @mousedown="startDrag" @mouseleave="stopDrag" @mouseup="stopDrag" @mousemove="onDrag">
      <div class="filter-scroll-container">
        <button 
            v-for="category in categories"
            :key="category"
            @click="toggleCategory(category)"
            :class="{ active: selected.includes(category) }"
        >
            {{ category }}
        </button>
      </div>
    </div>
    <button class="scroll-btn right" @click="scroll('right')" v-show="showRightArrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const { categories, selectedCategories } = defineProps(["categories", "selectedCategories"]);
const emit = defineEmits(["filter-change"]);
const selected = ref(selectedCategories.length > 0 ? selectedCategories : ["All"]);
const scrollContainer = ref(null);
const showLeftArrow = ref(false);
const showRightArrow = ref(false);

let isDragging = false;
let startX;
let scrollLeft;

const checkArrows = () => {
	if (scrollContainer.value) {
		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
		showLeftArrow.value = scrollLeft > 0;
		showRightArrow.value = scrollLeft < scrollWidth - clientWidth;
	}
};

onMounted(() => {
	checkArrows();
	window.addEventListener("resize", checkArrows);
	scrollContainer.value.addEventListener("scroll", checkArrows);
});

onBeforeUnmount(() => {
	window.removeEventListener("resize", checkArrows);
	if (scrollContainer.value) {
		scrollContainer.value.removeEventListener("scroll", checkArrows);
	}
});

function toggleCategory(category) {
	if (category === "All") {
		selected.value = ["All"];
	} else {
		const index = selected.value.indexOf(category);
		if (index > -1) {
			selected.value.splice(index, 1);
		} else {
			selected.value.push(category);
		}
		if (selected.value.includes("All") && selected.value.length > 1) {
			selected.value = selected.value.filter((c) => c !== "All");
		}
		if (selected.value.length === 0) {
			selected.value = ["All"];
		}
	}
	emit("filter-change", selected.value.includes("All") ? [] : selected.value);
}

const scroll = (direction) => {
	if (scrollContainer.value) {
		const scrollAmount = direction === "left" ? -350 : 350;
		scrollContainer.value.scrollBy({ left: scrollAmount, behavior: "smooth" });
	}
};

const startDrag = (e) => {
	e.preventDefault(); // Prevent text selection
	isDragging = true;
	scrollContainer.value.classList.add("dragging");
	startX = e.pageX - scrollContainer.value.offsetLeft;
	scrollLeft = scrollContainer.value.scrollLeft;
};

const stopDrag = () => {
	isDragging = false;
	scrollContainer.value.classList.remove("dragging");
};

const onDrag = (e) => {
	if (!isDragging) return;
	e.preventDefault();
	const x = e.pageX - scrollContainer.value.offsetLeft;
	const walk = (x - startX) * 2; //scroll-fast
	scrollContainer.value.scrollLeft = scrollLeft - walk;
	checkArrows();
};
</script>

<style scoped>
.category-filter-wrapper {
  position: sticky;
  top: 3.6rem; /* Adjust for VitePress nav bar */
  z-index: 10; /* Ensure it stays on top */
  background-color: var(--vp-c-bg);
  padding: 1rem 0; /* Add some padding for visual separation */
  display: flex;
  align-items: center;
}

.category-filter-wrapper::before,
.category-filter-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  width: 60px;
  height: 100%;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}

.category-filter-wrapper::before {
  left: 0;
  background: linear-gradient(to right, var(--vp-c-bg) 30%, transparent);
}

.category-filter-wrapper::after {
  right: 0;
  background: linear-gradient(to left, var(--vp-c-bg) 30%, transparent);
}

.category-filter-wrapper.fade-left::before {
  opacity: 1;
}

.category-filter-wrapper.fade-right::after {
  opacity: 1;
}

.category-filter {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
}

.category-filter.dragging {
    cursor: grabbing;
}

.category-filter::-webkit-scrollbar {
  display: none;
}

.filter-scroll-container {
  display: inline-block;
}

button {
  background: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--vp-c-text-2);
}

button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

button.active {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-1);
}

.scroll-btn {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: var(--vp-c-text-2);
}

.scroll-btn:hover {
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-text-1);
}

.scroll-btn svg {
    width: 20px;
    height: 20px;
}

.scroll-btn.left {
  margin-left: 0.5rem;
  left: 0;
  transform: translateX(-50%);
}

.scroll-btn.right {
  right: 0;
  transform: translateX(50%);
}

@media (max-width: 768px) {
  .category-filter-wrapper {
    top: 2.93rem; /* Adjust top position for mobile to avoid collision with VitePress nav */
  }
}
</style>
