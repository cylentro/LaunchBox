<template>
  <div class="scroll-progress-container">
    <div class="scroll-progress-bar" :style="{ width: progressBarWidth }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const progressBarWidth = ref("0%");

const calculateScrollProgress = () => {
	// Get the total scrollable height of the document
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	const scrollableHeight = scrollHeight - clientHeight;

	if (scrollableHeight > 0) {
		// Calculate the scroll percentage
		const scrolled = (scrollTop / scrollableHeight) * 100;
		// Ensure the width stays between 0 and 100%
		progressBarWidth.value = `${Math.min(100, Math.max(0, scrolled))}%`;
	} else {
		// If there's no scrollable content (page fits in viewport), set to 0%
		progressBarWidth.value = "0%";
	}
};

onMounted(() => {
	// Add scroll event listener when the component is mounted
	window.addEventListener("scroll", calculateScrollProgress);
	// Perform an initial calculation in case the page is already scrolled on load
	calculateScrollProgress();
});

onUnmounted(() => {
	// Remove scroll event listener when the component is unmounted to prevent memory leaks
	window.removeEventListener("scroll", calculateScrollProgress);
});
</script>

<style scoped>
.scroll-progress-container {
  position: fixed; /* Fixed position to stay at the top */
  top: 0;
  left: 0;
  width: 100%;
  height: 3px; /* Height of the progress bar */
  background-color: var(--vp-c-bg-soft); /* Background for the track */
  z-index: 99; /* Ensure it's above other content */
}

.scroll-progress-bar {
  height: 100%;
  background-color: var(--vp-c-brand-1); /* Color of the progress bar */
  transition: width 0.1s linear; /* Smooth transition for width changes */
}
</style>