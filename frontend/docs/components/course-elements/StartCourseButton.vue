<script setup>
const props = defineProps({
	link: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		default: "Get Started", // Default text for the button
	},
});
</script>

<template>
  <div class="start-course-button-wrapper">
    <a :href="link" class="start-course-button">
      {{ text }}
    </a>
  </div>
</template>

<style scoped>
/* Custom styles for the 3D button effect */
.start-course-button-wrapper {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 25px;
}

.start-course-button {
  display: inline-block;
  padding: 12px 28px;
  background-color: #1e88e5; /* Original blue */
  color: white !important; /* Ensure text color stays white */
  text-align: center;
  text-decoration: none !important; /* Ensure no underline */
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: none; /* Remove default border if any */
  /* 3D edge effect (darker blue) + original blue glow */
  box-shadow: 0 4px 0px #1565c0, 0 6px 14px 0 rgba(0, 118, 255, 0.3);
  position: relative; /* Allows for 'top' animation */
  top: 0;
  transition: all 0.15s ease-out; /* Smooth transition for all properties */
}

.start-course-button:hover {
  background-color: #1976d2; /* Slightly darker blue on hover */
  top: 2px; /* Move button down slightly */
  /* Adjust shadow for "pressed" look */
  box-shadow: 0 2px 0px #1565c0, 0 4px 10px 0 rgba(0, 118, 255, 0.25);
}

.start-course-button:active {
  background-color: #1565c0; /* Even darker blue on active/click */
  top: 4px; /* Move button further down */
  /* Flatten shadow more for "fully pressed" look */
  box-shadow: 0 0px 0px #1565c0, 0 2px 6px 0 rgba(0, 118, 255, 0.2);
}
</style>