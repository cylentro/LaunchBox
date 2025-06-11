<template>
    <div class="spotify-caret-widget z-11">
        <button @click="togglePanel"
            class="spotify-caret-button fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center shadow-xl focus:outline-none transition-all duration-500 ease-in-out"
            :class="{ 'is-open': isPanelOpen }" aria-label="Toggle Spotify Panel" title="Toggle Spotify">
            <!-- Spotify Icon -->
            <img src="/icons/spotify.svg" alt="Spotify" class="w-4 h-4">
        </button>

        <Transition name="slide-left">
            <div v-show="isPanelOpen"
                class="spotify-panel fixed left-0 top-1/2 -translate-y-1/2 h-[80vh] max-h-[430px] w-64 bg-white dark:bg-neutral-800 shadow-xl z-40 border-r border-slate-300 dark:border-neutral-700 rounded-lg">
                <!-- Panel Content Here -->
                <div class="p-4 flex flex-col h-[80vh]">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100"><a href="https://open.spotify.com/show/6uiSJvabU9E0R4RCK9IRCb?si=9fdd0738e13740a5" target="_blank">Naninani Podcast</a></h3>
                        <div class="flex items-center space-x-1">
                            <button @click="minimizePanel"
                                class="p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center"
                                aria-label="Minimize Spotify panel" title="Minimize panel">
                                <!-- Minimize Icon (Horizontal line) -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                    <path d="M5 11H19V13H5z" />
                                </svg>
                            </button>
                            <button @click="closePanel"
                                class="p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center"
                                aria-label="Close Spotify panel" title="Close panel">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex-grow overflow-y-auto">
                        <iframe style="border-radius:15px"
                            :src="currentIframeSrc"
                            width="100%" height="352" frameBorder="0" allowfullscreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const isPanelOpen = ref(false);
const spotifyEmbedBaseUrl = "https://open.spotify.com/embed/show/6uiSJvabU9E0R4RCK9IRCb?utm_source=generator";
const currentIframeSrc = ref(""); // Reactive src for the iframe

const openPanelFully = () => {
    isPanelOpen.value = true;
    // Set src only if it's not already set to the base URL, or if it's empty
    if (currentIframeSrc.value !== spotifyEmbedBaseUrl) {
        currentIframeSrc.value = spotifyEmbedBaseUrl;
    }
};

const togglePanel = () => {
    if (isPanelOpen.value) {
        // If panel is open, main toggle (caret or title) acts as minimize
        minimizePanel();
    } else {
        // If panel is closed (either fully or minimized), open it fully
        openPanelFully();
    }
};

const closePanel = () => {
    isPanelOpen.value = false;
    currentIframeSrc.value = ""; // Clear src to stop music & unload iframe
};

const minimizePanel = () => {
    isPanelOpen.value = false;
    // Panel is hidden via v-show.
    // currentIframeSrc remains set if it was already playing, so music continues.
};

// Watcher to ensure iframe loads when panel is opened after a full close
watch(isPanelOpen, (newVal) => {
    if (newVal === true && currentIframeSrc.value === "") {
        currentIframeSrc.value = spotifyEmbedBaseUrl;
    }
});
</script>

<style scoped>
.spotify-caret-button {
    width: 25px;
    height: 60px;
    background-color: rgba(29, 185, 84, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 0;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transform: translateY(-50%);
}

.spotify-caret-button {
    /* Ensure default state is not translated for the slide-in */
    transform: translateY(-50%) translateX(0);
}

/* Hide button when panel is open */
.spotify-caret-button.is-open {
    transform: translateY(-50%) translateX(-100%);
    /* Slide out to the left */
    pointer-events: none;
}

/* Panel styling (basic) */
.spotify-panel {
    width: 300px;
    /* Adjust panel width */
    /* Tailwind classes handle background, shadow, border, z-index */
}

/* Slide transition */
.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
    transform: translateY(-50%) translateX(-100%); /* Combine with vertical centering */
}

.slide-left-enter-to,
.slide-left-leave-from {
    transform: translateY(-50%) translateX(0); /* Combine with vertical centering */
}
</style>