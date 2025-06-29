<script setup>

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: 'Get Started' // Default text for the button
  }
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
  background-color: var(--vp-button-brand-bg); /* Uses theme's brand background color */
  color: white !important; /* Ensures text color stays white */
  text-align: center;
  text-decoration: none !important; /* Ensures no underline */
  font-size: 16px;
  font-weight: 600;
  border-radius: 9999px; /* Full rounded corner */
  border: none; /* Removes default border if any */
  /* 3D edge effect (darker brand color) + original blue glow */
  box-shadow: 0 4px 0px var(--vp-c-brand-1), 0 6px 14px 0 rgba(0, 118, 255, 0.3);
  position: relative; /* Allows for 'top' animation */
  top: 0;
  transition: all 0.15s ease-out; /* Smooth transition for all properties */
}

.start-course-button:hover {
  background-color: var(--vp-button-brand-hover-bg); /* Uses theme's brand hover background color */
  top: 2px; /* Moves button down slightly */
  box-shadow: 0 2px 0px var(--vp-c-brand-1), 0 4px 10px 0 rgba(0, 118, 255, 0.25); /* Adjusts shadow for "pressed" look */
}

.start-course-button:active {
  background-color: var(--vp-button-brand-active-bg); /* Uses theme's brand active background color */
  top: 4px; /* Moves button further down */
  box-shadow: 0 0px 0px var(--vp-c-brand-1), 0 2px 6px 0 rgba(0, 118, 255, 0.2); /* Flattens shadow more for "fully pressed" look */
}
</style>