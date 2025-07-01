<template>
  <transition name="toast">
    <div v-if="showToast" class="toast-container">
      <div class="toast-content">
        <span v-if="toastState === 'continue'">Welcome back! We've scrolled you to where you left off.</span>
        <span v-else-if="toastState === 'finished'">Congratulations! You've finished this page.</span>
        <div class="toast-actions">
          <button @click="restart" class="toast-button restart">Restart</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { useData } from 'vitepress';

const { page } = useData();
const showToast = ref(false);
const toastState = ref('continue');

// --- CHANGE 1: Add a flag to track automatic scrolling ---
const isAutoScrolling = ref(false);

const scrollPositionKey = ref('');
const finishedKey = ref('');

let progressScrollTimeout = null;
let toastTimeout = null;

const handleScrollProgress = () => {
  if (!scrollPositionKey.value || isAutoScrolling.value) return;

  if (progressScrollTimeout) clearTimeout(progressScrollTimeout);
  
  progressScrollTimeout = setTimeout(() => {
    const scrollY = window.scrollY;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) return;

    if (scrollY < 50) {
      localStorage.removeItem(scrollPositionKey.value);
      localStorage.removeItem(finishedKey.value);
      return;
    }

    const scrollPercent = (scrollY / scrollableHeight) * 100;
    if (scrollPercent > 2) localStorage.setItem(scrollPositionKey.value, scrollY.toString());
    if (scrollPercent >= 98) localStorage.setItem(finishedKey.value, 'true');
  }, 100);
};

// --- CHANGE 2: The dismiss function now checks the flag ---
const dismissToastOnScroll = () => {
  // If we are auto-scrolling, ignore this event and do nothing.
  if (isAutoScrolling.value) return;

  if (showToast.value) {
    showToast.value = false;
  }
};

const checkProgressAndShowToast = () => {
  if (!scrollPositionKey.value) return;

  const savedPosition = localStorage.getItem(scrollPositionKey.value);
  const isFinished = localStorage.getItem(finishedKey.value);

  if (savedPosition != null) {
    nextTick(() => {
      // --- CHANGE 3: This is the block you identified, now with the flag logic ---
      setTimeout(() => {
        // Set the flag to true right before we scroll
        isAutoScrolling.value = true;

        window.scrollTo({ top: parseInt(savedPosition, 10), behavior: 'smooth' });
        toastState.value = isFinished ? 'finished' : 'continue';
        showToast.value = true;

        // After 1 second (enough time for the scroll to finish),
        // set the flag back to false.
        setTimeout(() => {
          isAutoScrolling.value = false;
        }, 1000);
      }, 200);
    });
  }
};

const restart = () => {
  if (!scrollPositionKey.value) return;
  localStorage.removeItem(scrollPositionKey.value);
  localStorage.removeItem(finishedKey.value);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast.value = false;
};

const initializeForPage = (path) => {
  scrollPositionKey.value = `scroll-position-${path}`;
  finishedKey.value = `finished-${path}`;
  showToast.value = false;
  checkProgressAndShowToast();
};

watch(showToast, (isVisible) => {
  if (isVisible) {
    window.addEventListener('scroll', dismissToastOnScroll);
    toastTimeout = setTimeout(() => { showToast.value = false; }, 3000);
  } else {
    window.removeEventListener('scroll', dismissToastOnScroll);
    if (toastTimeout) clearTimeout(toastTimeout);
  }
});

watch(() => page.value.relativePath, (newPath) => {
  initializeForPage(newPath);
});

onMounted(() => {
  initializeForPage(page.value.relativePath);
  window.addEventListener('scroll', handleScrollProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScrollProgress);
  window.removeEventListener('scroll', dismissToastOnScroll);
  if (progressScrollTimeout) clearTimeout(progressScrollTimeout);
  if (toastTimeout) clearTimeout(toastTimeout);
});
</script>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: var(--vp-shadow-2);
  border: 1px solid var(--vp-c-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 320px;
  transition: all 0.3s ease;
}

.toast-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
}

.toast-actions {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}

.toast-button {
  background-color: transparent;
  color: var(--vp-c-brand);
  border: 1px solid var(--vp-c-brand);
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
}

.toast-button:hover {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-white);
}

.toast-button.restart {
  border-color: var(--vp-c-danger-1);
  color: var(--vp-c-danger-1);
}

.toast-button.restart:hover {
  background-color: var(--vp-c-danger-1);
  border-color: var(--vp-c-danger-1);
  color: var(--vp-c-white);
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 600px) {
  .toast-container {
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 500px;
    right: auto;
    bottom: 10px;
  }

  .toast-content {
    align-items: center;
  }
}
</style>