<template>
    <div class="nait-chat-interface mx-auto flex flex-col transition-all duration-500 ease-in-out"
        :style="{ maxHeight: isChatActive ? 'calc(100vh - var(--vp-nav-height, 0px))' : 'auto' }"
        :class="[
            isChatActive ? 'h-[calc(100vh-var(--vp-nav-height,0px))] overflow-hidden' : 'py-8'
        ]">

        <div class="title-wrapper mb-8 text-center"
            :class="{
                'transition-all duration-500 ease-in-out': true,
                'opacity-0 -translate-y-full pointer-events-none absolute w-full top-0 left-0': isChatActive,
                'opacity-100 translate-y-0 relative': !isChatActive
            }"
            :style="{ zIndex: isChatActive ? 0 : 10 }">
            <h2 class="text-4xl font-bold text-slate-800 dark:text-slate-100">Nait</h2>
            <p class="text-slate-500 dark:text-slate-400">I passed my Turing test. I think</p>
        </div>

        <div v-show="!isChatActive" class="initial-view-wrapper text-center px-4"
            :class="{
                'transition-all duration-500 ease-in-out': true,
                'opacity-0 translate-y-full pointer-events-none': isChatActive, /* move to bottom, fade away */
                'opacity-100 translate-y-0': !isChatActive
            }">

            <div class="w-full mx-auto">
                <p class="text-lg text-slate-600 dark:text-slate-300 mt-10 mb-10">Ask me about Chris. My memory is better than his.</p>
                <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Or you could try:</p>
                <div class="example-prompts mb-4">
                    <div class="prompts-carousel-wrapper relative flex items-center">
                        <button :disabled="!showInitialLeftCaret" @click="scrollPrompts('initial', 'left')"
                                class="caret-btn absolute left-0 z-10 p-1.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-neutral-700 transition-colors
                                       disabled:opacity-50 disabled:cursor-not-allowed disabled:text-slate-300 dark:disabled:text-neutral-600"
                                aria-label="Scroll left">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-slate-600 dark:text-slate-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <div ref="initialPromptsScrollRef"
                             class="prompts-scroll-container overflow-x-hidden whitespace-nowrap select-none "
                             @scroll="() => handleScroll('initial')"
                             @mousedown="onMouseDown('initial', $event)"
                             @mouseleave="onMouseLeave('initial')"
                             @mouseup="onMouseUp('initial')"
                             @mousemove="onMouseMove('initial', $event)"
                             @touchstart.passive="onTouchStart('initial', $event)"
                             @touchmove="onTouchMove('initial', $event)"
                             @touchend="onTouchEnd('initial')">
                            <div ref="initialPromptsInnerRef" class="prompts-inner-container inline-flex gap-2 py-1">
                                <button v-for="prompt in examplePrompts" :key="prompt + '-initial'" @click="sendExamplePrompt(prompt)"
                                    class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium py-1 px-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-slate-200 dark:focus:ring-neutral-500 whitespace-nowrap flex-shrink-0">
                                    {{ prompt }}
                                </button>
                            </div>
                        </div>
                        <button :disabled="!showInitialRightCaret" @click="scrollPrompts('initial', 'right')"
                                class="caret-btn absolute right-0 z-10 p-1.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-neutral-700 transition-colors
                                       disabled:opacity-50 disabled:cursor-not-allowed disabled:text-slate-300 dark:disabled:text-neutral-600"
                                aria-label="Scroll right">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-slate-600 dark:text-slate-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <form @submit.prevent="sendMessage" class="chat-input-form-initial w-full relative">
                    <textarea ref="initialTextareaRef" v-model="userInput" @keydown.enter="handleEnter"
                        @focus="handleInitialTextareaFocus" :placeholder="dynamicInitialPlaceholder" :disabled="isLoading" rows="1"
                        class="w-full p-4 pr-16 text-lg border border-slate-300 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none dark:bg-neutral-800 dark:text-slate-100 dark:border-neutral-600 dark:placeholder-slate-400"
                        style="min-height: 60px;"></textarea>
                    <button type="submit" :disabled="isLoading || !userInput.trim()"
                        class="absolute right-3 top-[45%] -translate-y-1/2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-40"
                        aria-label="Send message" title="Send message">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            :class="['w-6 h-6 transition-colors', userInput.trim() ? 'text-blue-600 dark:text-blue-500' : 'text-slate-400 dark:text-slate-500']">
                            <path
                                d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </form>
                <p class="text-xs text-center text-slate-400 dark:text-slate-500 mt-4">
                    Nait can make mistakes. Consider checking important information.
                </p>
            </div>
        </div>

        <div v-show="isChatActive" class="active-chat-wrapper flex flex-col flex-grow w-full overflow-hidden">
            <div
                class="chat-header flex justify-between items-center p-2 sm:p-3 border-b border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 flex-shrink-0">
                <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100" style="margin-top:0">Nait</h3>
                <div class="flex items-center">
                    <button @click="clearSession"
                        class="text-xs bg-red-600 text-white hover:bg-red-700 mr-2 p-1 rounded"
                        title="Clear Session">
                        Clear Session
                    </button>
                    <button @click="closeChatSession"
                        class="p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center"
                        aria-label="Close chat" title="Close chat">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5 sm:w-6 sm:h-6">
                            <path fill-rule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <Transition name="messages-container-transition">
                <div v-if="isChatActive" ref="chatMessagesContainerRef" 
                     class="chat-messages flex flex-col flex-grow overflow-y-auto px-4 space-y-3 py-4"
                     :class="{ 'justify-center': !chatMessages.length && !isLoading }">
                     <div v-if="!chatMessages.length && !isLoading" class="text-center text-slate-500 dark:text-slate-400 text-base">
                        Ask me about Chris. My memory is better than his.
                    </div>
                    <TransitionGroup name="bubble" tag="div">
                        <div v-for="(chat, index) in chatMessages" :key="chat.id || index"
                            :class="['message-bubble py-2 px-3 rounded-lg shadow w-fit break-words',
                                chat.isNait ? 'bg-sky-100 text-sky-900 self-start text-left dark:bg-sky-700 dark:text-sky-100 max-w-[80%] sm:max-w-[75%]'
                                    : 'bg-blue-500 text-white self-end text-right ml-auto dark:bg-blue-600 max-w-[80%] sm:max-w-[75%]']">
                            <strong class="font-semibold block mb-0.5">{{ chat.isNait ? 'Nait' : 'You' }}:</strong>
                            <div v-if="chat.isNait"
                                class="prose prose-sm max-w-none dark:prose-invert first:mt-0 last:mb-0"
                                v-html="parseMarkdown(chat.text)"></div>
                            <div v-else class="prose prose-sm max-w-none dark:prose-invert first:mt-0 last:mb-0">{{
                                chat.text }}</div>
                        </div>
                    </TransitionGroup>
                </div>
            </Transition>

            <div class="example-prompts-in-active-chat p-2 border-t border-slate-200 dark:border-neutral-700">
                 <div class="prompts-carousel-wrapper relative flex items-center">
                    <button :disabled="!showActiveLeftCaret" @click="scrollPrompts('active', 'left')"
                            class="caret-btn absolute left-0 z-10 p-1.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-neutral-700 transition-colors
                                   disabled:opacity-50 disabled:cursor-not-allowed disabled:text-slate-300 dark:disabled:text-neutral-600"
                            aria-label="Scroll left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-600 dark:text-slate-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div ref="activePromptsScrollRef"
                         class="prompts-scroll-container overflow-x-hidden whitespace-nowrap select-none"
                         @scroll="() => handleScroll('active')"
                         @mousedown="onMouseDown('active', $event)"
                         @mouseleave="onMouseLeave('active')"
                         @mouseup="onMouseUp('active')"
                         @mousemove="onMouseMove('active', $event)"
                         @touchstart.passive="onTouchStart('active', $event)"
                         @touchmove="onTouchMove('active', $event)"
                         @touchend="onTouchEnd('active')">
                        <div ref="activePromptsInnerRef" class="prompts-inner-container inline-flex gap-1.5 px-0.5 py-0.5">
                             <button v-for="prompt in examplePrompts" :key="prompt + '-active'" @click="sendExamplePrompt(prompt)"
                                class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium py-1 px-2.5 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-slate-200 dark:focus:ring-neutral-500 whitespace-nowrap flex-shrink-0">
                                {{ prompt }}
                            </button>
                        </div>
                    </div>
                    <button :disabled="!showActiveRightCaret" @click="scrollPrompts('active', 'right')"
                            class="caret-btn absolute right-0 z-10 p-1.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-neutral-700 transition-colors
                                   disabled:opacity-50 disabled:cursor-not-allowed disabled:text-slate-300 dark:disabled:text-neutral-600"
                            aria-label="Scroll right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-600 dark:text-slate-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                class="chat-input-form-active p-2 sm:p-3 border-t border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 mt-auto sticky bottom-0">
                <form @submit.prevent="sendMessage" class="flex items-center relative">
                    <textarea ref="activeTextareaRef" v-model="userInput" @keydown.enter="handleEnter" @focus="scrollToBottom"
                        :placeholder="dynamicInitialPlaceholder" :disabled="isLoading" rows="1"
                        class="w-full p-3 pr-12 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none dark:bg-neutral-700 dark:text-slate-100 dark:border-neutral-600 dark:placeholder-slate-400"
                        style="min-height: 52px;"></textarea>
                    <button type="submit" :disabled="isLoading || !userInput.trim()"
                        class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-40"
                        aria-label="Send message" title="Send message">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            :class="['w-6 h-6 transition-colors', userInput.trim() ? 'text-blue-600 dark:text-blue-500' : 'text-slate-400 dark:text-slate-500']">
                            <path
                                d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, onBeforeUnmount, computed } from 'vue';
import { marked } from 'marked';
import { useWindowSize } from '@vueuse/core';

let typingInterval: ReturnType<typeof setInterval> | null = null

interface ChatMessage {
    id?: string;
    text: string;
    isNait: boolean;
}

const userInput = ref('');
const chatMessages = ref<ChatMessage[]>([]);
const isLoading = ref(false);
const sessionId = ref('');
const isChatActive = ref(false);

const initialTextareaRef = ref<HTMLTextAreaElement | null>(null);
const activeTextareaRef = ref<HTMLTextAreaElement | null>(null);
const chatMessagesContainerRef = ref<HTMLElement | null>(null);

const LS_SESSION_ID_KEY = 'naitSessionId';
const LS_CHAT_MESSAGES_KEY = 'naitChatMessages';

const examplePrompts = ref([
    "What you can do?",
    "Surprise me!",
    "Who is Chris?",
    "How to contact Chris?",
    "What are Chris's key skills?"
]);

// --- Refs for Prompt Carousels ---
const initialPromptsScrollRef = ref<HTMLElement | null>(null);
const initialPromptsInnerRef = ref<HTMLElement | null>(null);
const showInitialLeftCaret = ref(false);
const showInitialRightCaret = ref(false); 
const isDraggingInitial = ref(false);
const startXInitial = ref(0);
const scrollLeftInitial = ref(0);

const activePromptsScrollRef = ref<HTMLElement | null>(null);
const activePromptsInnerRef = ref<HTMLElement | null>(null);
const showActiveLeftCaret = ref(false);
const showActiveRightCaret = ref(false); 
const isDraggingActive = ref(false);
const startXActive = ref(0);
const scrollLeftActive = ref(0);

// --- Dynamic Placeholder Logic ---
const { width: windowWidth } = useWindowSize();
const dynamicInitialPlaceholder = computed(() => {
    if (windowWidth.value < 600) { 
        return "Go on, I'm listening...";
    }
    return "Ask me anything... just don't ask me to do your laundry";
});

// --- Prompt Carousel Logic ---
const updateCaretVisibility = (type: 'initial' | 'active') => {
    const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
    const showLeftCaret = type === 'initial' ? showInitialLeftCaret : showActiveLeftCaret;
    const showRightCaret = type === 'initial' ? showInitialRightCaret : showActiveRightCaret;

    if (!scrollContainer) return;

    const scrollLeft = scrollContainer.scrollLeft;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    showLeftCaret.value = scrollLeft > 1; 
    showRightCaret.value = scrollLeft < (scrollWidth - clientWidth - 1); 
};

const handleScroll = (type: 'initial' | 'active') => {
    updateCaretVisibility(type);
};

const scrollPrompts = (type: 'initial' | 'active', direction: 'left' | 'right') => {
    const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
    if (!scrollContainer) return;

    const scrollAmount = scrollContainer.clientWidth * 0.8; 
    if (direction === 'left') {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    setTimeout(() => updateCaretVisibility(type), 350); 
};

const onMouseDown = (type: 'initial' | 'active', event: MouseEvent) => {
    const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
    const isDragging = type === 'initial' ? isDraggingInitial : isDraggingActive;
    const startX = type === 'initial' ? startXInitial : startXActive;
    const scrollLeft = type === 'initial' ? scrollLeftInitial : scrollLeftActive;

    if (!scrollContainer) return;
    isDragging.value = true;
    startX.value = event.pageX - scrollContainer.offsetLeft;
    scrollLeft.value = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = 'grabbing';
    scrollContainer.style.scrollBehavior = 'auto'; 
};

const onMouseLeave = (type: 'initial' | 'active') => {
    // No specific action needed on mouse leave if global mouseup is handled
};

const onMouseUp = (type: 'initial' | 'active') => {
    const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
    const isDragging = type === 'initial' ? isDraggingInitial : isDraggingActive;

    if (!isDragging.value) return;
    isDragging.value = false;
    if (scrollContainer) {
        scrollContainer.style.cursor = 'grab';
        scrollContainer.style.scrollBehavior = 'smooth';
    }
};

const onMouseMove = (type: 'initial' | 'active', event: MouseEvent) => {
    const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
    const isDragging = type === 'initial' ? isDraggingInitial.value : isDraggingActive.value; 
    const startX = type === 'initial' ? startXInitial.value : startXActive.value;
    const scrollLeft = type === 'initial' ? scrollLeftInitial.value : scrollLeftActive.value;


    if (!isDragging || !scrollContainer) return;
    event.preventDefault(); 
    const x = event.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollContainer.scrollLeft = scrollLeft - walk;
    updateCaretVisibility(type); 
};

const onTouchStart = (type: 'initial' | 'active', event: TouchEvent) => {
    const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
    const isDragging = type === 'initial' ? isDraggingInitial : isDraggingActive;
    const startX = type === 'initial' ? startXInitial : startXActive;
    const scrollLeft = type === 'initial' ? scrollLeftInitial : scrollLeftActive;

    if (!scrollContainer || event.touches.length === 0) return;
    isDragging.value = true;
    startX.value = event.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft.value = scrollContainer.scrollLeft;
    scrollContainer.style.scrollBehavior = 'auto'; 
};

const onTouchMove = (type: 'initial' | 'active', event: TouchEvent) => {
    const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
    const isDraggingRef = type === 'initial' ? isDraggingInitial : isDraggingActive;
    const startXValue = type === 'initial' ? startXInitial.value : startXActive.value;
    const scrollLeftValue = type === 'initial' ? scrollLeftInitial.value : scrollLeftActive.value;

    if (!isDraggingRef.value || !scrollContainer || event.touches.length === 0) return;
    event.preventDefault(); // Prevent page scroll
    const x = event.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startXValue) * 1.5; // Adjust multiplier for sensitivity
    scrollContainer.scrollLeft = scrollLeftValue - walk;
    updateCaretVisibility(type);
};

const onTouchEnd = (type: 'initial' | 'active') => {
    const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
    const isDragging = type === 'initial' ? isDraggingInitial : isDraggingActive;

    if (!isDragging.value) return;
    isDragging.value = false;
    if (scrollContainer) {
        scrollContainer.style.scrollBehavior = 'smooth';
    }
};

const setupPromptCarousel = (type: 'initial' | 'active') => {
    nextTick(() => {
        const scrollContainer = type === 'initial' ? initialPromptsScrollRef.value : activePromptsScrollRef.value;
        if (scrollContainer) {
             scrollContainer.style.cursor = 'grab';
             scrollContainer.style.scrollBehavior = 'smooth';
            updateCaretVisibility(type);
        }
    });
};

const handleInitialTextareaFocus = () => {
    // If chat is not active but there are existing messages, activate the chat.
    // The watcher on `isChatActive` will handle focusing the activeTextareaRef.
    if (!isChatActive.value && chatMessages.value.length > 0) {
        isChatActive.value = true;
    }
};

const generateNewSessionId = () => `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;


// --- Existing Logic ---
const closeChatSession = () => {
    stopTypingIndicator();
    isChatActive.value = false;
    // chatMessages.value = []
    // chatMessages are preserved, session continues
    userInput.value = '';
    isLoading.value = false;

    // sessionId is preserved
    // sessionId.value = generateNewSessionId();
    // console.log(`Chat closed. New session started: ${sessionId.value}`);
    console.log(`NaitChat: Chat view closed. Session ${sessionId.value} remains available.`);

    nextTick(() => {
        // When closing, do not automatically re-focus the initial textarea.
        // User should manually focus to re-engage and trigger handleInitialTextareaFocus.
        if (initialTextareaRef.value) adjustTextareaHeight(initialTextareaRef.value); // Still adjust height as userInput is cleared.
        setupPromptCarousel('initial'); 
    });
};

const clearSession = () => {
    stopTypingIndicator();
    chatMessages.value = []; // This will trigger the watcher which calls saveChatToLocalStorage
    userInput.value = '';
    isLoading.value = false;
    
    sessionId.value = generateNewSessionId(); // Update sessionId ref

    // Call saveChatToLocalStorage directly to ensure it uses the new sessionId
    // and clears messages from localStorage immediately.
    saveChatToLocalStorage(); 

    nextTick(() => {
        if (isChatActive.value && activeTextareaRef.value) {
            activeTextareaRef.value.focus();
            adjustTextareaHeight(activeTextareaRef.value);
        }
        scrollToBottom(); // Adjust view
    });
    console.log(`NaitChat: Session cleared. New session ID: ${sessionId.value}`);
};

const globalMouseUpListener = () => {
    if (isDraggingInitial.value) onMouseUp('initial');
    if (isDraggingActive.value) onMouseUp('active');
};
const globalTouchEndListener = () => {
    if (isDraggingInitial.value) onTouchEnd('initial');
    if (isDraggingActive.value) onTouchEnd('active');
};

onMounted(() => {
    loadChatFromLocalStorage();
    if (!sessionId.value) {
        sessionId.value = generateNewSessionId();
    }

    if (isChatActive.value) {
        setupPromptCarousel('active');
    } else {
        setupPromptCarousel('initial');
    }
    window.addEventListener('mouseup', globalMouseUpListener);
    window.addEventListener('touchend', globalTouchEndListener);
});

onBeforeUnmount(() => {
    window.removeEventListener('mouseup', globalMouseUpListener);
    window.removeEventListener('touchend', globalTouchEndListener);
});


watch(isChatActive, (newValue) => {
    if (newValue) {
        setupPromptCarousel('active');
    } else {
        setupPromptCarousel('initial');
    }
    nextTick(() => {
        if (newValue && activeTextareaRef.value) {
            activeTextareaRef.value.focus();
            adjustTextareaHeight(activeTextareaRef.value);
        } else if (!newValue && initialTextareaRef.value) {
            // Do not auto-focus initialTextareaRef here.
            // This prevents the loop if handleInitialTextareaFocus is also present.
            adjustTextareaHeight(initialTextareaRef.value);
        }
    });
});


const parseMarkdown = (text: string) => {
    if (!text) return '';
    return marked.parse(text, { gfm: true, breaks: true });
};

const scrollToBottom = () => {
    nextTick(() => {
        if (chatMessagesContainerRef.value) {
            chatMessagesContainerRef.value.scrollTop = chatMessagesContainerRef.value.scrollHeight;
        }
    });
};

watch(chatMessages, scrollToBottom, { deep: true });

const adjustTextareaHeight = (element: HTMLTextAreaElement | null) => {
    if (!element) return;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
};

watch(userInput, () => {
    if (isChatActive.value) {
        adjustTextareaHeight(activeTextareaRef.value);
    } else {
        adjustTextareaHeight(initialTextareaRef.value);
    }
});

const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
};

const sendExamplePrompt = (prompt: string) => {
    userInput.value = prompt;
    nextTick(() => {
        if (!isChatActive.value && initialTextareaRef.value) {
            initialTextareaRef.value.focus();
        } else if (isChatActive.value && activeTextareaRef.value) {
            activeTextareaRef.value.focus();
        }
        sendMessage();
    });
};

const startTypingIndicator = (messageIndex: number) => {
    stopTypingIndicator();
    let dotCount = 1;
    if (chatMessages.value[messageIndex]) {
        chatMessages.value[messageIndex].text = 'Nait is thinking' + '.';
    }

    typingInterval = setInterval(() => {
        dotCount = (dotCount % 3) + 1;
        if (chatMessages.value[messageIndex]) {
            chatMessages.value[messageIndex].text = 'Nait is thinking' + '.'.repeat(dotCount);
        } else {
            stopTypingIndicator();
        }
    }, 500);
};

const stopTypingIndicator = () => {
    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }
};

const loadChatFromLocalStorage = () => {
    const storedSessionId = localStorage.getItem(LS_SESSION_ID_KEY);
    if (storedSessionId) {
        sessionId.value = storedSessionId;
        const storedMessages = localStorage.getItem(LS_CHAT_MESSAGES_KEY);
        if (storedMessages) {
            try {
                const parsedMessages = JSON.parse(storedMessages);
                if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
                    chatMessages.value = parsedMessages;
                    isChatActive.value = true;
                    nextTick(() => {
                        if (isChatActive.value) adjustTextareaHeight(activeTextareaRef.value);
                        scrollToBottom();
                        setupPromptCarousel('active'); 
                    });
                } else {
                     setupPromptCarousel('initial'); 
                }
            } catch (e) {
                console.error("Error parsing stored chat messages:", e);
                localStorage.removeItem(LS_CHAT_MESSAGES_KEY);
                 setupPromptCarousel('initial');
            }
        } else {
             setupPromptCarousel('initial');
        }
    } else {
        sessionId.value = generateNewSessionId();
        localStorage.setItem(LS_SESSION_ID_KEY, sessionId.value);
         setupPromptCarousel('initial');
    }
};

const saveChatToLocalStorage = () => {
    if (chatMessages.value.length > 0) {
        localStorage.setItem(LS_CHAT_MESSAGES_KEY, JSON.stringify(chatMessages.value));
        localStorage.setItem(LS_SESSION_ID_KEY, sessionId.value);
    } else {
        localStorage.removeItem(LS_CHAT_MESSAGES_KEY);
        localStorage.setItem(LS_SESSION_ID_KEY, sessionId.value);
    }
};

watch(chatMessages, saveChatToLocalStorage, { deep: true });

const sendMessage = async () => {
    const messageText = userInput.value.trim();
    if (!messageText || isLoading.value) return;

    const wasInitialSend = !isChatActive.value;
    if (wasInitialSend) {
        isChatActive.value = true;
        await nextTick(); 
        setupPromptCarousel('active'); 
        activeTextareaRef.value?.focus();
    }
    chatMessages.value.push({ id: `msg_${Date.now()}`, text: messageText, isNait: false });
    userInput.value = '';

    if (wasInitialSend && initialTextareaRef.value) {
        await nextTick();
        adjustTextareaHeight(initialTextareaRef.value);
    } else if (activeTextareaRef.value) {
        await nextTick();
        adjustTextareaHeight(activeTextareaRef.value);
    }

    isLoading.value = true;

    const naitMessageId = `nait_stream_${Date.now()}`;
    chatMessages.value.push({ id: naitMessageId, text: '', isNait: true });
    const naitMessageIndex = chatMessages.value.length - 1;
    startTypingIndicator(naitMessageIndex);
    let firstChunkReceived = false;

    try {
        // IMPORTANT: Replace with your actual API endpoint or configuration method
        const apiHost = import.meta.env.VITE_API_HOST || ''; // Example: 'http://localhost:3000/'
        let url = `${apiHost}api/nait/chat`;
        if (!apiHost && typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) { // Fallback for local dev if VITE_API_HOST is not set on window
            url = 'http://localhost:3000/api/nait/chat';
            console.warn("NaitChat: VITE_API_HOST not found on window, using default dev URL:", url);
        } else if (!apiHost) {
            console.error("NaitChat: VITE_API_HOST is not configured.");
            // Potentially set a default production URL or handle error
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: messageText, sessionId: sessionId.value }),
        });

        if (!response.ok) {
            stopTypingIndicator();
            isLoading.value = false;
            const errorData = await response.json();
            console.error('API Error before stream:', errorData);
            if (chatMessages.value[naitMessageIndex]?.id === naitMessageId) {
                chatMessages.value[naitMessageIndex].text = `Sorry, Nait encountered an error: ${errorData.details || errorData.error || 'Server error'}`;
            }
            return;
        }

        if (!response.body) {
            stopTypingIndicator();
            isLoading.value = false;
            throw new Error("Response body is null, cannot stream.");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let partialChunk = '';

        while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;

            const chunkString = partialChunk + decoder.decode(value, { stream: !done });
            const sseMessages = chunkString.split('\n\n');

            if (!done) {
                partialChunk = sseMessages.pop() || '';
            } else {
                partialChunk = '';
            }

            for (const sseMessage of sseMessages) {
                if (sseMessage.startsWith('data: ')) {
                    const jsonData = sseMessage.substring(5).trim();
                    if (jsonData) {
                        try {
                            const parsedData = JSON.parse(jsonData);
                            if (parsedData.type === "stream_end") {
                                done = true;
                                break;
                            }
                            if (parsedData.text && chatMessages.value[naitMessageIndex]?.id === naitMessageId) {
                                if (!firstChunkReceived) {
                                    stopTypingIndicator();
                                    chatMessages.value[naitMessageIndex].text = parsedData.text;
                                    firstChunkReceived = true;
                                } else {
                                    chatMessages.value[naitMessageIndex].text += parsedData.text;
                                }
                            }
                        } catch (e) {
                            console.error("Error parsing JSON from stream:", jsonData, e);
                        }
                    }
                }
            }
        }

        stopTypingIndicator();
        if (!firstChunkReceived && chatMessages.value[naitMessageIndex]?.id === naitMessageId) {
            chatMessages.value[naitMessageIndex].text = "[Nait finished processing.]";
        }

    } catch (error) {
        stopTypingIndicator();
        console.error('Fetch/Stream Error:', error);
        if (chatMessages.value[naitMessageIndex]?.id === naitMessageId) {
            chatMessages.value[naitMessageIndex].text = 'Sorry, there was an issue connecting to Nait.';
        } else {
            chatMessages.value.push({ id: `fetch_err_${Date.now()}`, text: 'Could not connect to Nait.', isNait: true });
        }
    } finally {
        isLoading.value = false;
        stopTypingIndicator();
        await nextTick();
        if (isChatActive.value && activeTextareaRef.value) {
            activeTextareaRef.value.focus();
        }
    }
};

</script>

<style scoped>
/* --- New Prompt Carousel Styles --- */
.prompts-carousel-wrapper {
    /* Increased padding to create space between carets and scrollable content */
    padding-left: 2.5rem; 
    padding-right: 2.5rem; 
}
.prompts-carousel-wrapper .caret-btn {
    transform: translateY(-50%);
    top: 50%;
}

.prompts-scroll-container {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    position: relative; 
}
.prompts-scroll-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}

.prompts-inner-container > button {
    flex-shrink: 0;
    white-space: nowrap; 
}

.nait-chat-interface {
    width: 100%;
    max-width: 800px;
}

.chat-messages::-webkit-scrollbar {
    width: 6px;
}
.chat-messages::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
}
.chat-messages::-webkit-scrollbar-track {
    background: transparent;
}
.chat-messages {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

textarea {
    overflow-y: hidden;
}

/* Close Button Transition */
.close-button-transition-enter-from {
    opacity: 0;
    transform: translateY(100%);
}
.close-button-transition-enter-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.close-button-transition-leave-to {
    opacity: 0;
    transform: translateY(0);
}
.close-button-transition-leave-active {
    transition: opacity 0.3s ease-in;
}

/* Messages Container Transition */
.messages-container-transition-enter-from {
    opacity: 0;
    transform: translateY(100%);
}
.messages-container-transition-enter-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.messages-container-transition-leave-to {
    opacity: 0;
    transform: translateY(0);
}
.messages-container-transition-leave-active {
    transition: opacity 0.3s ease-in;
}

/* Bubble Animation */
.bubble-enter-active {
    transition: all 0.4s ease-out;
}
.bubble-leave-active {
    transition: all 0.3s ease-in;
    position: absolute; 
}
.bubble-enter-from {
    opacity: 0;
    transform: translateY(50px);
}
.bubble-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.bubble-move {
    transition: transform 0.4s ease;
}

.message-bubble .prose > :first-child {
    margin-top: 0;
}
.message-bubble .prose > :last-child {
    margin-bottom: 0;
}
.message-bubble {
    margin-top: 10px;
}

</style>