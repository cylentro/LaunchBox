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
import { ref, onMounted, onBeforeUnmount, watch, nextTick, onUpdated } from 'vue';
import { useData } from 'vitepress';

const { page } = useData();
const showToast = ref(false);
const toastState = ref('continue'); // 'continue' or 'finished'
let scrollPositionKey = 'scroll-position-' + page.value.relativePath;
let finishedKey = 'finished-' + page.value.relativePath;

let scrollTimeout = null;
let toastTimeout = null;

const handleScroll = () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(() => {
    const scrollY = window.scrollY;
    const scrollableHeight = document.body.offsetHeight - window.innerHeight;

    if (scrollableHeight <= 0) return; // Not scrollable

    // If user scrolls to the top, reset progress
    if (scrollY < 50) {
      localStorage.removeItem(scrollPositionKey);
      localStorage.removeItem(finishedKey);
      return;
    }

    const scrollPercent = (scrollY / scrollableHeight) * 100;

    if (scrollPercent > 2) {
      localStorage.setItem(scrollPositionKey, scrollY.toString());
    }

    if (scrollPercent >= 98) {
      localStorage.setItem(finishedKey, 'true');
    }
  }, 100);
};

const autoScrollAndShowToast = () => {
  const savedPosition = localStorage.getItem(scrollPositionKey);
  const isFinished = localStorage.getItem(finishedKey);

  if (savedPosition) {
    nextTick(() => {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPosition, 10), behavior: 'smooth' });
        toastState.value = isFinished ? 'finished' : 'continue';
        showToast.value = true;

        if (toastTimeout) {
          clearTimeout(toastTimeout);
        }
        toastTimeout = setTimeout(() => {
          showToast.value = false;
        }, 5000);
      }, 200);
    });
  }
};

onMounted(() => {
  autoScrollAndShowToast();
  window.addEventListener('scroll', handleScroll);
});

onUpdated(() => {
  autoScrollAndShowToast();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
});

const restart = () => {
  localStorage.removeItem(scrollPositionKey);
  localStorage.removeItem(finishedKey);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast.value = false;
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
};

watch(() => page.value.relativePath, (newPath) => {
  scrollPositionKey = 'scroll-position-' + newPath;
  finishedKey = 'finished-' + newPath;
  autoScrollAndShowToast();
});
</script>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #2c2c2c; /* Sleek dark grey */
  color: var(--vp-c-text-1);
  padding: 15px 20px;
  border-radius: 8px; /* Slightly less rounded */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Softer shadow */
  border: none; /* Remove border */
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
  color: white;
}

.toast-button.restart {
  border-color: #E24A4A;
  color: #E24A4A;
}

.toast-button.restart:hover {
  background-color: #E24A4A;
  border-color: #E24A4A;
  color: white;
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