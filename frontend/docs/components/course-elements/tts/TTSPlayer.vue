<template>
  <div class="tts-player-container" v-if="isSupported">
    <!-- Play/Pause Button -->
    <button @click="togglePlayPause" :aria-label="!isPlaying || isPaused ? 'Play' : 'Pause'" class="tts-button">
      <svg v-if="!isPlaying || isPaused" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="icon">
        <path fill-rule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z"
          clip-rule="evenodd" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
        <path d="M14 19h4V5h-4v14zm-8 0h4V5H6v14z" />
      </svg>
    </button>

    <!-- Stop Button -->
    <button @click="stop" aria-label="Stop" v-if="isPlaying" class="tts-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
        <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
          clip-rule="evenodd" />
      </svg>
    </button>

    <!-- Time Bar -->
    <div class="time-bar-container">
      <input type="range" class="time-bar" :value="currentTime" :max="duration" :disabled="!isPlaying && !isPaused"
        :style="sliderStyle" @input="onSliderInput" @change="onSliderChange" />
    </div>

    <!-- Time Display -->
    <div class="time-display" :class="{ 'disabled': !isPlaying && !isPaused, 'clickable': isPlaying || isPaused }"
      @click="toggleTimeFormat">
      {{ formattedTime }}
    </div>

    <!-- Volume Control -->
    <div class="volume-control">
      <button @click="toggleMute" aria-label="Mute/Unmute" class="tts-button" :disabled="!isPlaying && !isPaused">
        <svg v-if="volume > 0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="icon">
          <path
            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.28 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.35.14-.6.47-.6.85v.2c0 .63.63.98 1.18.74C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.82-8.29c-.55-.24-1.18.11-1.18.74z" />
        </svg>
        <svg v-else-if="volume > 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="icon">
          <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.28 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
          <path
            d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
        </svg>
      </button>
    </div>

    <!-- Speed Control Button -->
    <div class="speed-control-button-container">
      <button @click="toggleSpeedPopup" aria-label="Adjust Playback Speed" class="tts-button"
        :disabled="!isPlaying && !isPaused">
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" class="icon"
          version="1.1" id="Capa_1" viewBox="0 0 97.778 97.778" xml:space="preserve">
          <path
            d="M48.889,17.221C21.932,17.221,0,39.152,0,66.109c0,3.652,0.418,7.334,1.244,10.94c0.47,2.052,2.296,3.508,4.401,3.508    h86.488c2.104,0,3.932-1.456,4.401-3.508c0.825-3.606,1.244-7.288,1.244-10.94C97.778,39.152,75.846,17.221,48.889,17.221z     M48.889,24.526c2.832,0,5.134,2.303,5.134,5.133c0,1.371-0.534,2.66-1.504,3.63c-0.969,0.969-2.258,1.503-3.628,1.503    c-2.83,0-5.134-2.303-5.135-5.133C43.755,26.828,46.058,24.526,48.889,24.526z M10.589,73.092c-2.83,0-5.133-2.303-5.133-5.133    s2.303-5.133,5.133-5.133c2.831,0,5.134,2.303,5.134,5.133S13.42,73.092,10.589,73.092z M25.437,44.506    c-0.969,0.97-2.258,1.504-3.629,1.504s-2.661-0.534-3.63-1.504c-0.969-0.969-1.503-2.258-1.503-3.629    c0-1.371,0.534-2.66,1.504-3.63c0.97-0.97,2.259-1.504,3.63-1.504s2.66,0.534,3.629,1.503c0.97,0.97,1.504,2.259,1.504,3.63    C26.942,42.247,26.407,43.537,25.437,44.506z M54.061,74.302c-5.846,2.799-12.881,0.317-15.68-5.53    c-2.798-5.848-4.25-36.12-4.25-36.12s22.664,20.121,25.461,25.967C62.391,64.47,59.909,71.504,54.061,74.302z M79.602,44.506    c-0.971,0.97-2.26,1.504-3.631,1.504s-2.66-0.534-3.629-1.504c-0.97-0.969-1.502-2.258-1.502-3.629    c0-1.371,0.533-2.661,1.502-3.63c0.969-0.969,2.258-1.503,3.629-1.503s2.66,0.534,3.631,1.504c0.97,0.97,1.502,2.259,1.504,3.63    C81.104,42.248,80.57,43.537,79.602,44.506z M87.189,73.092c-2.831,0-5.135-2.303-5.135-5.133s2.304-5.133,5.135-5.133    c2.83,0,5.133,2.303,5.133,5.133S90.02,73.092,87.189,73.092z" />
          <path
            d="M47.083,59.72c-2.193,1.05-3.124,3.688-2.074,5.88c1.049,2.194,3.687,3.124,5.879,2.074    c2.193-1.049,3.123-3.688,2.074-5.881C51.913,59.601,49.276,58.67,47.083,59.72z" />
        </svg>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13.5V7h2v2.5c0 .55-.45 1-1 1s-1-.45-1-1zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg> -->
      </button>
      <SpeedControlPopup v-if="showSpeedPopup" :isPlaying="isPlaying" :playbackRate="playbackRate"
        @changeSpeed="changeSpeed" class="speed-popup" />
    </div>



  </div>
  <div class="tts-player-unsupported" v-else>
    <span>Text-to-Speech is not supported in your browser.</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import SpeedControlPopup from './SpeedControlPopup.vue';

const isSupported = ref(false);
const isPlaying = ref(false);
const isPaused = ref(false);
const utterance = ref(null);

const currentTime = ref(0);
const duration = ref(0);
const volume = ref(1);
const playbackRate = ref(1);
const originalText = ref('');
const textLength = ref(0);
const charIndex = ref(0); // Track the current character index
const showRemainingTime = ref(false);
const showSpeedPopup = ref(false);

const sliderStyle = computed(() => {
  const progress = (duration.value > 0) ? (currentTime.value / duration.value) * 100 : 0;
  return {
    background: `linear-gradient(to right, var(--vp-c-brand-1) ${progress}%, var(--vp-c-divider) ${progress}%)`
  };
});

const cleanup = () => {
  if (isSupported.value) {
    window.speechSynthesis.cancel();
  }
};

const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) {
    seconds = 0;
  }
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const formattedTime = computed(() => {
  if (showRemainingTime.value) {
    const remaining = duration.value - currentTime.value;
    return `-${formatTime(remaining)}`;
  } else {
    return formatTime(currentTime.value);
  }
});

const createUtterance = (textToSpeak) => {
  const utt = new SpeechSynthesisUtterance(textToSpeak);
  utt.lang = 'en-US';
  utt.rate = playbackRate.value;
  utt.volume = volume.value;

  utt.onstart = () => {
    isPlaying.value = true;
    isPaused.value = false;
    showRemainingTime.value = true;
  };

  utt.onpause = () => {
    isPaused.value = true;
  };

  utt.onresume = () => {
    isPaused.value = false;
  };

  utt.onboundary = (event) => {
    charIndex.value = (originalText.value.length - textToSpeak.length) + event.charIndex;
    if (duration.value > 0 && textLength.value > 0) {
      currentTime.value = (charIndex.value / textLength.value) * duration.value;
    }
  };

  utt.onend = () => {
    isPlaying.value = false;
    isPaused.value = false;
    currentTime.value = 0;
    charIndex.value = 0;
  };

  utterance.value = utt;
  return utt;
};

onMounted(() => {
  // Guard against being called in a non-browser environment.
  // onMounted should only run on the client, but this is a defensive measure
  // to make the dependency on browser APIs explicit.
  if (typeof window === 'undefined') return;
  isSupported.value = 'speechSynthesis' in window;
  if (!isSupported.value) return;

  const prepareText = () => {
    const mainContentElement = document.querySelector('.VPDoc .main');
    if (mainContentElement) {
      const contentClone = mainContentElement.cloneNode(true);
      const selectorsToExclude = '.course-helpers-container, .header-anchor, .custom-block-title, .edit-link, .VPDocFooter, .tts-player-container, .tts-player-unsupported';
      contentClone.querySelectorAll(selectorsToExclude).forEach(el => el.remove());
      originalText.value = contentClone.innerText;
      textLength.value = originalText.value.length;

      const words = originalText.value.trim().split(/\s+/).length;
      const wpm = 180;
      duration.value = (words / wpm) * 60;

      createUtterance(originalText.value);
    }
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = prepareText;
  } else {
    prepareText();
  }

  window.addEventListener('beforeunload', cleanup);
});

onUnmounted(() => {
  cleanup();
  window.removeEventListener('beforeunload', cleanup);
});

const togglePlayPause = () => {
  if (!isSupported.value || !utterance.value) return;

  showSpeedPopup.value = false; // Close speed popup on play/pause

  if (window.speechSynthesis.speaking) {
    if (isPaused.value) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.pause();
    }
  } else {
    const textToSpeak = originalText.value.substring(charIndex.value);
    const utt = createUtterance(textToSpeak);
    window.speechSynthesis.speak(utt);
  }
};

const stop = () => {
  if (isSupported.value) {
    charIndex.value = 0;
    currentTime.value = 0;
    isPaused.value = false;
    isPlaying.value = false;
    showSpeedPopup.value = false; // Close speed popup on stop
    showRemainingTime.value = false; // Set to false when stopped
    window.speechSynthesis.cancel();
  }
};

const restartSpeech = (shouldContinuePlaying) => {
  if (!originalText.value) return;

  const wasPaused = isPaused.value;
  window.speechSynthesis.cancel();

  setTimeout(() => {
    const textToSpeak = originalText.value.substring(charIndex.value);
    if (!textToSpeak) return;

    const newUtterance = createUtterance(textToSpeak);
    if (shouldContinuePlaying) {
      window.speechSynthesis.speak(newUtterance);
      if (wasPaused) {
        setTimeout(() => window.speechSynthesis.pause(), 50);
      }
    }
  }, 100);
};

const toggleMute = () => {
  if (volume.value > 0) {
    volume.value = 0;
  } else {
    volume.value = 1;
  }
  if (utterance.value) {
    utterance.value.volume = volume.value;
    if (isPlaying.value) {
      restartSpeech(true);
    }
  }
  showSpeedPopup.value = false; // Close speed popup on mute/unmute
};

const changeSpeed = (delta) => {
  if (!utterance.value) return;
  const newRate = parseFloat((playbackRate.value + delta).toFixed(2));
  if (newRate >= 0.5 && newRate <= 2) {
    playbackRate.value = newRate;

    if (isPlaying.value) {
      restartSpeech(true);
    } else {
      utterance.value.rate = newRate;
    }
  }
};

const onSliderInput = (e) => {
  currentTime.value = parseFloat(e.target.value);
};

const onSliderChange = (e) => {
  const newTime = parseFloat(e.target.value);
  charIndex.value = Math.floor((newTime / duration.value) * textLength.value);

  const wasPlaying = isPlaying.value && !isPaused.value;
  restartSpeech(wasPlaying);
  showSpeedPopup.value = false; // Close speed popup on seek
};

const toggleTimeFormat = () => {
  if (isPlaying.value || isPaused.value) {
    showRemainingTime.value = !showRemainingTime.value;
  }
};

const toggleSpeedPopup = () => {
  showSpeedPopup.value = !showSpeedPopup.value;
};
</script>

<style scoped>
.tts-player-container {
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: var(--vp-c-bg-soft);
  padding: 4px 5px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

@media (max-width: 768px) { /* Adjust breakpoint as needed for mobile */
  .tts-player-container {
    width: 100%;
  }
}

.tts-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 30px;
  height: 30px;
  background-color: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.tts-button:hover:not(:disabled) {
  background-color: var(--vp-c-bg-soft-up);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tts-button:disabled {
  cursor: not-allowed;
  color: var(--vp-c-text-3);
  border-color: var(--vp-c-divider);
  background-color: transparent;
}

.icon {
  width: 1.125rem;
  /* 18px */
  height: 1.125rem;
  /* 18px */
}

.time-bar-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
}

progress.time-bar {
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
}

progress.time-bar::-webkit-progress-bar {
  background-color: var(--vp-c-bg-mute);
  border-radius: 2px;
}

progress.time-bar::-webkit-progress-value {
  background-color: var(--vp-c-brand-1);
  border-radius: 2px;
  transition: width 0.1s linear;
}

progress.time-bar[disabled]::-webkit-progress-value {
  background-color: var(--vp-c-divider);
}

input[type="range"].time-bar {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: transparent;
  /* Set to transparent as the track is styled by the computed style */
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.2s ease;
}

input[type="range"].time-bar:disabled {
  cursor: not-allowed;
}

input[type="range"].time-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  cursor: pointer;
  margin-top: -5px;
  /* Center the thumb on the track */
  transition: background 0.2s ease;
}

input[type="range"].time-bar::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  background: var(--vp-c-divider);
  border-radius: 2px;
}

input[type="range"].time-bar::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  cursor: pointer;
  margin-top: -5px;
  /* Center the thumb on the track */
}

input[type="range"].time-bar::-moz-range-track {
  width: 100%;
  height: 4px;
  background: var(--vp-c-divider);
  border-radius: 2px;
}

.time-display {
  font-size: 0.8rem;
  font-family: monospace;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.time-display.disabled {
  color: var(--vp-c-text-3);
}

.time-display.clickable {
  cursor: pointer;
  transition: color 0.2s ease;
}

.time-display.clickable:hover {
  color: var(--vp-c-brand-1);
}

.volume-control {
  position: relative;
}

.speed-control-button-container {
  position: relative;
}

.speed-popup {
  position: absolute;
  bottom: 100%;
  /* Position above the button */
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  /* Space between button and popup */
  z-index: 10;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .speed-popup {
    left: auto;
    transform: none;
    right: 0;
  }
}

.tts-player-unsupported {
  background-color: var(--vp-c-bg-soft);
  border-left: 4px solid var(--vp-c-red-1);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}
</style>