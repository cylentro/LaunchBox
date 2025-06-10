<template>
    <div class="spotify-bubble-widget">
        <button v-show="!isPopupOpen || isMinimized" @click="openPopup"
            class="fixed bottom-8 left-8 bg-spotify-green hover:opacity-90 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl focus:outline-none focus:ring-2 focus:ring-spotify-green focus:ring-offset-2 z-50 transition-opacity duration-300 ease-in-out"
            aria-label="Open Spotify Controls" title="Open Spotify Controls">
            <!-- SVG Icon for Spotify or similar -->
            <img src="/icons/spotify.svg" class="m-1"/>
        </button>

        <Transition name="popup-slide-fade-left">
            <div v-if="isPopupOpen"
                 :class="['fixed bg-white dark:bg-neutral-800 shadow-2xl flex flex-col z-50 border border-slate-300 dark:border-neutral-700',
                          { 'minimized-popup': isMinimized },'bottom-8 left-4 right-4 rounded-lg max-h-[245px] sm:inset-auto sm:left-8 sm:w-[400px] sm:h-[70vh]'
                          ]">
                <div
                    class="p-3 border-b border-slate-200 dark:border-neutral-700 flex justify-between items-center flex-shrink-0">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100" style="margin-top:0">Naninani Podcast
                    </h3>
                    <div class="flex items-center space-x-1">
                        <button @click="minimizePopup"
                            class="p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center"
                            aria-label="Close Spotify controls" title="Close Spotify controls">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Spotify content would go here -->
                <div class="flex-grow p-4 overflow-auto">
                    <iframe style="border-radius:15px"
                        src="https://open.spotify.com/embed/show/6uiSJvabU9E0R4RCK9IRCb?utm_source=generator" width="100%" height="152"
                        frameBorder="0" allowfullscreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>

            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isPopupOpen = ref(false);
const isMinimized = ref(false);

const openPopup = () => {
    isPopupOpen.value = true;
    isMinimized.value = false; // Ensure it's not minimized when opened/re-opened
    // Add any specific logic for opening Spotify controls
};

const closePopup = () => {
    isPopupOpen.value = false;
    // isMinimized state doesn't matter if popup is closed
};

const minimizePopup = () => {
    isMinimized.value = true;
};

// You would then include other necessary logic from NaitBubble.vue,
// adapting it for Spotify functionality (e.g., API calls, state management).
</script>

<style scoped>
/* You might want to adjust transition names and styles if they were direction-specific */
.popup-slide-fade-left-enter-active,
.popup-slide-fade-left-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.popup-slide-fade-left-enter-from,
.popup-slide-fade-left-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.95); /* Mobile default */
}

@media (min-width: 640px) { /* sm breakpoint */
    .popup-slide-fade-left-enter-from,
    .popup-slide-fade-left-leave-to {
        /* Adjust transform origin or direction if needed for left-side appearance */
        transform: translate(-20px, 20px) scale(0.95);
    }
}

.popup-slide-fade-left-enter-to,
.popup-slide-fade-left-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1); /* Mobile default */
}

@media (min-width: 640px) { /* sm breakpoint */
    .popup-slide-fade-left-enter-to,
    .popup-slide-fade-left-leave-from {
        transform: translate(0, 0) scale(1);
    }
}

.minimized-popup {
    opacity: 0;
    transform: scale(0.8) translateY(30px); /* Example minimized animation */
    pointer-events: none; /* Prevent interaction when minimized */
}

/* Ensure transition applies to minimized state changes too */
.minimized-popup {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
/* Add any other specific styles for your Spotify bubble */
</style>
