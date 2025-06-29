<template>
  <div class="speed-control-popup" :class="{ 'disabled': !isPlaying }">
    <button @click="changeSpeed(-0.25)" :disabled="!isPlaying || playbackRate <= 0.5">-</button>
    <span>{{ playbackRate.toFixed(2) }}x</span>
    <button @click="changeSpeed(0.25)" :disabled="!isPlaying || playbackRate >= 2">+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  isPlaying: Boolean,
  playbackRate: Number,
});

const emit = defineEmits(['changeSpeed']);

const changeSpeed = (delta) => {
  emit('changeSpeed', delta);
};
</script>

<style scoped>
.speed-control-popup {
  display: flex;
  align-items: center;
  gap: 2px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 2px;
}

@media (max-width: 768px) {
  .speed-control-popup {
    position: absolute;
    right: 0;
    z-index: 100;
  }
}

.speed-control-popup button {
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.speed-control-popup button:hover:not(:disabled) {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.speed-control-popup button:disabled {
  color: var(--vp-c-text-3);
  cursor: not-allowed;
}

.speed-control-popup span {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0 2px;
  min-width: 34px;
  text-align: center;
  color: var(--vp-c-text-2);
}

.speed-control-popup.disabled span, .speed-control-popup.disabled button {
  color: var(--vp-c-text-3);
}
</style>