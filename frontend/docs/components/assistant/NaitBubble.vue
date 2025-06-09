<template>
    <div class="nait-bubble-widget">
        <button v-show="!isPopupOpen" @click="openPopup"
            class="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50 transition-opacity duration-300 ease-in-out"
            aria-label="Open Nait Chat" title="Open Nait Chat">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 11.5c0 2.581 1.228 4.893 3.199 6.339L7.5 21.75l2.25-2.25c.88.198 1.797.3 2.75.3z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375" />
            </svg>
        </button>

        <Transition name="popup-slide-fade">
            <div v-if="isPopupOpen" class="fixed bg-white dark:bg-neutral-800 shadow-2xl flex flex-col z-50 border border-slate-300 dark:border-neutral-700
                       inset-0 rounded-none /* Mobile default: use inset-0 for fullscreen dimensions */
                       sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[400px] sm:h-[70vh] sm:max-h-[600px] sm:rounded-lg /* Desktop overrides: original positioning, size, and rounding */
                      ">
                <div
                    class="p-3 border-b border-slate-200 dark:border-neutral-700 flex justify-between items-center flex-shrink-0">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100" style="margin-top:0">Nait Chat
                    </h3>
                    <div class="flex items-center">
                        <button @click="clearAndCloseSession"
                            class="text-xs bg-red-600 text-white hover:bg-red-700 mr-2 p-1 rounded"
                            title="Clear Session">
                            Clear Session
                        </button>
                        <button @click="closePopup"
                            class="p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center"
                            aria-label="Close chat popup" title="Close chat">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div ref="chatMessagesContainerRef"
                    class="chat-messages flex-grow overflow-y-auto px-4 space-y-3 py-4 min-h-0 flex flex-col"
                    :class="{ 'justify-center': !chatMessages.length && !isLoading && !isSummarizing }">
                    <div v-if="!chatMessages.length && !isLoading && !isSummarizing"
                        class="text-center text-slate-500 dark:text-slate-400 py-8 text-lg">
                        Ask me about Chris. 
                        <br>
                        My memory is better than his.
                        <br>
                        <br>
                        Too lazy to read? Ask for the tl;dr
                    </div>
                    <TransitionGroup name="bubble-popup" tag="div">
                        <div v-for="(chat, index) in chatMessages" :key="chat.id || index" :class="['message-bubble flex flex-col py-2 px-3 rounded-lg shadow w-fit break-words',
                            chat.isNait ? 'bg-sky-100 text-sky-900 self-start text-left dark:bg-sky-700 dark:text-sky-100 max-w-[85%]'
                                : 'bg-blue-500 text-white self-end text-right ml-auto dark:bg-blue-600 max-w-[85%]']">
                            <strong class="font-semibold block mb-0.5">{{ chat.isNait ? 'Nait' : 'You' }}:</strong>
                            <div v-if="chat.isNait"
                                class="prose prose-sm max-w-none dark:prose-invert first:mt-0 last:mb-0"
                                v-html="parseMarkdown(chat.text)"></div>
                            <div v-else
                                class="prose prose-sm max-w-none dark:prose-invert first:mt-0 last:mb-0 whitespace-pre-wrap">
                                {{
                                    chat.text }}</div>
                        </div>
                    </TransitionGroup>
                </div>

                <div v-if="actualExamplePrompts.length > 0"
                    class="example-prompts-in-popup pl-0.5 pr-0.5 pt-2 pb-2 border-t border-slate-200 dark:border-neutral-700 flex-shrink-0">
                    <div class="prompts-carousel-wrapper relative flex items-center">
                        <button :disabled="!showLeftCaret" @click="scrollPrompts('left')"
                            class="caret-btn absolute left-1 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-neutral-700 transition-colors
                                       disabled:opacity-50 disabled:cursor-not-allowed disabled:text-slate-300 dark:disabled:text-neutral-600" aria-label="Scroll left">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor" class="w-4 h-4 text-slate-600 dark:text-slate-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <div ref="promptsScrollRef"
                            class="prompts-scroll-container overflow-x-hidden whitespace-nowrap select-none mx-7"
                            @scroll="handleScroll" @mousedown="onMouseDown" 
                            @mouseleave="onMouseLeave" @mouseup="onMouseUp" @mousemove="onMouseMove"
                            @touchstart.passive="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd"
                            >
                            <div ref="promptsInnerRef"
                                class="prompts-inner-container inline-flex gap-1.5 px-0.5 py-0.5">
                                <button v-for="prompt in actualExamplePrompts" :key="prompt.text"
                                    @click="handleExamplePromptClick(prompt)"
                                    class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium py-1 px-2.5 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-slate-200 dark:focus:ring-neutral-500 whitespace-nowrap flex-shrink-0">
                                    {{ prompt.text }}
                                </button>
                            </div>
                        </div>
                        <button :disabled="!showRightCaret" @click="scrollPrompts('right')"
                            class="caret-btn absolute right-1 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-neutral-700 transition-colors
                                       disabled:opacity-50 disabled:cursor-not-allowed disabled:text-slate-300 dark:disabled:text-neutral-600" aria-label="Scroll right">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor" class="w-4 h-4 text-slate-600 dark:text-slate-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    class="chat-input-form-popup p-3 border-t border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 mt-auto flex-shrink-0 sm:rounded-b-lg items-center">
                    <form @submit.prevent="sendMessage" class="flex items-start relative">
                        <textarea ref="activeTextareaRef" v-model="userInput" @keydown.enter="handleEnter" :rows="1"
                            :placeholder="dynamicInitialPlaceholder" :disabled="isLoading || isSummarizing"
                            class="w-full p-3 pr-12 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none dark:bg-neutral-700 dark:text-slate-100 dark:border-neutral-600 dark:placeholder-slate-400 max-h-28 overflow-y-auto"
                            style="min-height: 52px;"></textarea>
                        <button type="submit" :disabled="isLoading || isSummarizing || !userInput.trim()"
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
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, onBeforeUnmount, computed, shallowRef } from 'vue';
import { marked } from 'marked';
import { useData } from 'vitepress';
// IMPORT PATH: Ensure this path is correct for your project structure
import { getPromptsForPage, NUMBER_OF_RANDOM_PROMPTS_TO_SHOW } from './pagePrompts';
import { useWindowSize } from '@vueuse/core';


interface ChatMessage {
    id?: string;
    text: string;
    isNait: boolean;
}

interface ExamplePrompt {
    text: string;
    action?: 'summarize' | 'chat';
}

interface StoredSummary {
    summary: string;
    timestamp: number;
}

const isPopupOpen = ref(false);
const userInput = ref('');
const chatMessages = ref<ChatMessage[]>([]);
const isLoading = ref(false); // For regular chat messages
const isSummarizing = ref(false); // For summary generation
const sessionId = ref('');
let typingInterval: ReturnType<typeof setInterval> | null = null;

const activeTextareaRef = ref<HTMLTextAreaElement | null>(null);
const chatMessagesContainerRef = ref<HTMLElement | null>(null);

const LS_SESSION_ID_KEY = 'naitSessionId';
const LS_CHAT_MESSAGES_KEY = 'naitChatMessages';
const LS_PAGE_SUMMARIES_KEY_PREFIX = 'naitPageSummary_';

const NAIT_GREETINGS = [
    "Hello there! How can I assist you today?",
    "Hi! I'm Nait, ready to help. What's on your mind?",
    "Welcome! Feel free to ask me anything or request a summary.",
    "Hey! Good to see you. What can I do for you?",
    "Greetings! I'm here to help you navigate and understand this page. Ask away!"
];

const { width: windowWidth } = useWindowSize();
const dynamicInitialPlaceholder = computed(() => {
    if (windowWidth.value < 480) { // Adjust breakpoint as needed
        return "Go on, I'm listening...";
    }
    return "My circuits are buzzing to answer you";
});

const { page } = useData();

// --- Typing Indicator Functions (Modified) ---
const startTypingIndicator = (messageIndex: number, baseText: string = "Nait is thinking") => {
    stopTypingIndicator();
    let dotCount = 1;
    if (chatMessages.value[messageIndex]) {
        chatMessages.value[messageIndex].text = baseText + '.';
    }

    typingInterval = setInterval(() => {
        dotCount = (dotCount % 3) + 1;
        if (chatMessages.value[messageIndex]) {
            chatMessages.value[messageIndex].text = baseText + '.'.repeat(dotCount);
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


const cleanupOldSummaries = () => {
    const now = new Date();
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(LS_PAGE_SUMMARIES_KEY_PREFIX)) {
                const storedItem = localStorage.getItem(key);
                if (storedItem) {
                    try {
                        const data = JSON.parse(storedItem) as StoredSummary;
                        if (data.timestamp) {
                            const storedDate = new Date(data.timestamp);
                            if (storedDate.getFullYear() < now.getFullYear() ||
                                (storedDate.getFullYear() === now.getFullYear() && storedDate.getMonth() < now.getMonth()) ||
                                (storedDate.getFullYear() === now.getFullYear() && storedDate.getMonth() === now.getMonth() && storedDate.getDate() < now.getDate())) {
                                localStorage.removeItem(key); i--;
                            }
                        } else { localStorage.removeItem(key); i--; }
                    } catch (e) { localStorage.removeItem(key); i--; }
                }
            }
        }
    } catch (error) { console.error("NaitBubble: Error during proactive summary cleanup:", error); }
};

const DEFAULT_PROMPTS: string[] = [
    "What can you help me with?",
    "Explain a key concept from this page."
];
const SUMMARIZE_PROMPT_TEXT = "Summarize this page";

const getRandomPrompts = (prompts: string[], count: number): string[] => {
    if (!prompts || prompts.length === 0) return [];
    const shuffled = [...prompts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, prompts.length));
};

const actualExamplePrompts = computed<ExamplePrompt[]>(() => {
    let randomPromptsForDisplay: ExamplePrompt[] = [];
    const defaultPromptsMapped = getRandomPrompts(DEFAULT_PROMPTS, NUMBER_OF_RANDOM_PROMPTS_TO_SHOW)
        .map(p => ({ text: p, action: 'chat' as 'chat' }));

    if (page.value && page.value.relativePath && page.value.relativePath !== 'index.md') {
        const pageSpecificRaw = getPromptsForPage(page.value.relativePath);
        if (pageSpecificRaw && pageSpecificRaw.length > 0) {
            randomPromptsForDisplay = getRandomPrompts(pageSpecificRaw, NUMBER_OF_RANDOM_PROMPTS_TO_SHOW)
                .map(p => ({ text: p, action: 'chat' as 'chat' }));
        } else {
            randomPromptsForDisplay = defaultPromptsMapped;
        }
    } else {
        randomPromptsForDisplay = defaultPromptsMapped;
    }

    const allPrompts: ExamplePrompt[] = [];
    if (page.value && page.value.relativePath && page.value.relativePath !== 'index.md') {
        allPrompts.push({ text: SUMMARIZE_PROMPT_TEXT, action: 'summarize' });
    }
    allPrompts.push(...randomPromptsForDisplay);
    return allPrompts;
});

const promptsScrollRef = ref<HTMLElement | null>(null);
const showLeftCaret = ref(false);
const showRightCaret = ref(false);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const getSummaryStorageKey = (pageRelativePath: string) => `${LS_PAGE_SUMMARIES_KEY_PREFIX}${pageRelativePath}`;

const getCachedSummary = (pageRelativePath: string): StoredSummary | null => {
    const key = getSummaryStorageKey(pageRelativePath);
    const storedItem = localStorage.getItem(key);
    if (!storedItem) return null;
    try {
        const data = JSON.parse(storedItem) as StoredSummary;
        const now = new Date();
        const storedDate = new Date(data.timestamp);
        if (storedDate.getFullYear() < now.getFullYear() ||
            (storedDate.getFullYear() === now.getFullYear() && storedDate.getMonth() < now.getMonth()) ||
            (storedDate.getFullYear() === now.getFullYear() && storedDate.getMonth() === now.getMonth() && storedDate.getDate() < now.getDate())) {
            localStorage.removeItem(key); return null;
        }
        return data;
    } catch (e) { localStorage.removeItem(key); return null; }
};

const cacheSummary = (pageRelativePath: string, summary: string) => {
    const key = getSummaryStorageKey(pageRelativePath);
    const data: StoredSummary = { summary, timestamp: Date.now() };
    try { localStorage.setItem(key, JSON.stringify(data)); }
    catch (e) { console.error("NaitBubble: Error saving summary to localStorage", e); }
};

const isSimulatingStream = shallowRef(false);

const simulateStreaming = (
    text: string,
    onChunk: (chunk: string) => void,
    onComplete: () => void,
    speed: number = 30
) => {
    let index = 0;
    isSimulatingStream.value = true;
    isSummarizing.value = true; // Keep UI disabled during simulated stream

    function nextChunk() {
        if (index < text.length) {
            let chunkSize = 1;
            if (text[index] === ' ') { chunkSize = 1; }
            else {
                const nextSpace = text.indexOf(' ', index);
                chunkSize = (nextSpace > -1 && (nextSpace - index) < 15) ? (nextSpace - index + 1) : Math.min(5, text.length - index);
            }
            const chunk = text.substring(index, index + chunkSize);
            onChunk(chunk);
            index += chunkSize;
            setTimeout(nextChunk, speed * (chunk.includes('\n') ? 3 : 1)); // Slower for newlines
        } else {
            onComplete();
            isSimulatingStream.value = false;
            isSummarizing.value = false; // Re-enable UI
        }
    }
    nextChunk();
};

const handleSummarizePage = async (userRequestText: string) => {
    if (!page.value?.relativePath || page.value.relativePath === 'index.md') return;

    // Add user's request message
    chatMessages.value.push({ id: `user_req_summary_${Date.now()}`, text: userRequestText, isNait: false });
    const pagePath = page.value.relativePath;
    const cached = getCachedSummary(pagePath);

    const naitSummaryMessageId = `nait_summary_stream_${Date.now()}`;
    chatMessages.value.push({ id: naitSummaryMessageId, text: '', isNait: true });
    const naitMessageIndex = chatMessages.value.length - 1;

    if (cached) {
        isSummarizing.value = false; // Set flag for UI state (e.g., disable input)
        // but isSimulatingStream will control actual text animation
        chatMessages.value[naitMessageIndex].text = "Nait is recalling the summary..."; // Initial text
        scrollToBottom(); // Scroll to show "recalling" message

        // Short delay before starting simulated stream to make "recalling" visible
        setTimeout(() => {
            if (chatMessages.value[naitMessageIndex]) { // Check if message still exists
                chatMessages.value[naitMessageIndex].text = ""; // Clear "recalling" before streaming
            }
            simulateStreaming(
                cached.summary,
                (chunk) => {
                    if (chatMessages.value[naitMessageIndex]) {
                        chatMessages.value[naitMessageIndex].text += chunk;
                        scrollToBottom();
                    }
                },
                () => { // onComplete for simulateStreaming
                    // isSummarizing is set to false inside simulateStreaming's onComplete
                    if (isPopupOpen.value) {
                        nextTick(() => {
                            setupPromptCarousel();
                            activeTextareaRef.value?.focus();
                        });
                    }
                }
            );
        }, 750); // 750ms delay
        return;
    }

    let accumulatedSummary = "";
    let firstChunkReceived = false;

    try {
        const apiHost = import.meta.env.VITE_API_HOST || '';
        let url = `${apiHost}api/nait/summarize`;
        if (!apiHost && typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
            url = 'http://localhost:3000/api/nait/summarize'; // Ensure this port is correct
        } else if (!apiHost) {
            throw new Error("API host not configured for summarization.");
        }
        // --- If not cached, proceed with fetching from backend ---
        isSummarizing.value = true; // This is for the API call
        startTypingIndicator(naitMessageIndex, "Nait is summarizing the page"); // Specific text for API call

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pagePath }),
        });

        stopTypingIndicator(); // Stop "summarizing" indicator once stream starts or fails

        if (!response.ok || !response.body) {
            const errorText = response.ok ? "Response body is null." : await response.text();
            if (chatMessages.value[naitMessageIndex]) {
                chatMessages.value[naitMessageIndex].text = `Sorry, Nait encountered an error. (${response.status})`;
            }
            throw new Error(`API Error: ${response.status} ${errorText}`);
        }

        if (chatMessages.value[naitMessageIndex]) { // Clear "Nait is summarizing..." text
            chatMessages.value[naitMessageIndex].text = "";
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

            if (!done) partialChunk = sseMessages.pop() || ''; else partialChunk = '';

            for (const sseMessage of sseMessages) {
                if (sseMessage.startsWith('data: ')) {
                    const jsonData = sseMessage.substring(5).trim();
                    if (jsonData) {
                        try {
                            const parsedData = JSON.parse(jsonData);
                            if (parsedData.type === "summary_end") {
                                done = true; break;
                            }
                            if (parsedData.text) {
                                if (!firstChunkReceived) firstChunkReceived = true;
                                accumulatedSummary += parsedData.text;
                                if (chatMessages.value[naitMessageIndex]) {
                                    chatMessages.value[naitMessageIndex].text += parsedData.text;
                                    scrollToBottom();
                                }
                            }
                        } catch (e) { console.error("NaitBubble: Error parsing JSON from summary stream:", jsonData, e); }
                    }
                }
            }
        }

        if (firstChunkReceived && accumulatedSummary.trim() !== "") {
            cacheSummary(pagePath, accumulatedSummary);
        } else if (!firstChunkReceived) {
            if (chatMessages.value[naitMessageIndex]) {
                chatMessages.value[naitMessageIndex].text = "Nait couldn't generate a summary for this page at the moment.";
            }
        }

    } catch (error) {
        stopTypingIndicator(); // Ensure indicator stops on error
        console.error('NaitBubble Summarize Fetch/Stream Error:', error);
        const errText = error instanceof Error ? error.message : 'Sorry, an issue occurred while summarizing.';
        if (chatMessages.value[naitMessageIndex]) {
            chatMessages.value[naitMessageIndex].text = `Error: ${errText}`;
        } else { // Should not happen if we add bubble first
            chatMessages.value.push({ id: `nait_summary_error_${Date.now()}`, text: `Error: ${errText}`, isNait: true });
        }
    } finally {
        isSummarizing.value = false; // This will re-enable UI if not already done by simulateStreaming
        stopTypingIndicator(); // Final stop just in case
        scrollToBottom();
        nextTick(() => {
            if (isPopupOpen.value) {
                setupPromptCarousel();
                activeTextareaRef.value?.focus();
            }
        });
    }
};

const generateNewSessionId = () => `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;

const loadChatFromLocalStorage = () => {
    const storedSessionId = localStorage.getItem(LS_SESSION_ID_KEY);
    if (storedSessionId) {
        sessionId.value = storedSessionId;
        const storedMessages = localStorage.getItem(LS_CHAT_MESSAGES_KEY);
        if (storedMessages) {
            try {
                chatMessages.value = JSON.parse(storedMessages);
            } catch (e) { localStorage.removeItem(LS_CHAT_MESSAGES_KEY); chatMessages.value = []; }
        } else chatMessages.value = [];
    } else {
        sessionId.value = generateNewSessionId();
        localStorage.setItem(LS_SESSION_ID_KEY, sessionId.value);
        chatMessages.value = [];
    }
    if (isPopupOpen.value) {
        nextTick(() => { scrollToBottom(); activeTextareaRef.value?.focus(); setupPromptCarousel(); adjustTextareaHeight(activeTextareaRef.value); });
    }
};

const saveChatToLocalStorage = () => {
    localStorage.setItem(LS_CHAT_MESSAGES_KEY, JSON.stringify(chatMessages.value));
    if (sessionId.value) localStorage.setItem(LS_SESSION_ID_KEY, sessionId.value);
};

watch(chatMessages, saveChatToLocalStorage, { deep: true });
watch(sessionId, (newId) => { if (newId) localStorage.setItem(LS_SESSION_ID_KEY, newId); });

const openPopup = () => {
    isPopupOpen.value = true;
    loadChatFromLocalStorage();
    cleanupOldSummaries();

    if (chatMessages.value.length === 0) {
        setTimeout(() => {
            const randomGreeting = NAIT_GREETINGS[Math.floor(Math.random() * NAIT_GREETINGS.length)];
            const naitGreetingMessageId = `nait_greeting_${Date.now()}`;

            // Add an empty message first, which will be populated by simulateStreaming
            chatMessages.value.push({
                id: naitGreetingMessageId,
                text: '', // Start with empty text
                isNait: true
            });
            const naitMessageIndex = chatMessages.value.length - 1;
            scrollToBottom(); // Scroll to show the (currently empty) bubble area

            // Use simulateStreaming to make the greeting appear typed out
            // simulateStreaming will set isSummarizing to true, disabling input temporarily
            simulateStreaming(
                randomGreeting,
                (chunk) => {
                    // Ensure the message still exists and is the one we are targeting
                    if (chatMessages.value[naitMessageIndex]?.id === naitGreetingMessageId) {
                        chatMessages.value[naitMessageIndex].text += chunk;
                        scrollToBottom();
                    }
                },
                () => { // onComplete for simulateStreaming
                    // isSummarizing and isSimulatingStream are reset to false by simulateStreaming
                    if (isPopupOpen.value) {
                        nextTick(() => {
                            activeTextareaRef.value?.focus(); // Focus input after greeting
                        });
                    }
                },
                75 // Use a slightly faster speed for greetings (default is 30ms)
            );
        }, 1000);
    }
};
watch(actualExamplePrompts, () => { if (isPopupOpen.value) nextTick(setupPromptCarousel); }, { immediate: true, deep: true });
const closePopup = () => { isPopupOpen.value = false; };

const clearAndCloseSession = () => {
    stopTypingIndicator(); chatMessages.value = []; userInput.value = '';
    isLoading.value = false; isSummarizing.value = false;
    sessionId.value = generateNewSessionId(); saveChatToLocalStorage();
    cleanupOldSummaries(); // Also cleanup summaries on full session clear
};

onMounted(() => {
    let storedId = localStorage.getItem(LS_SESSION_ID_KEY);
    if (!storedId) { storedId = generateNewSessionId(); localStorage.setItem(LS_SESSION_ID_KEY, storedId); }
    sessionId.value = storedId;
    window.addEventListener('mouseup', globalMouseUpListenerBubble);
    window.addEventListener('touchend', globalTouchEndListenerBubble);
    cleanupOldSummaries();
});
onBeforeUnmount(() => { window.removeEventListener('mouseup', globalMouseUpListenerBubble); window.removeEventListener('touchend', globalTouchEndListenerBubble); });


const updateCaretVisibility = () => {
    if (!promptsScrollRef.value) return;
    if (promptsScrollRef.value.offsetWidth === 0 && promptsScrollRef.value.offsetHeight === 0) {
        showLeftCaret.value = false; showRightCaret.value = false; return;
    }
    const { scrollLeft: current, scrollWidth, clientWidth } = promptsScrollRef.value;
    showLeftCaret.value = current > 1;
    showRightCaret.value = scrollWidth > clientWidth && current < (scrollWidth - clientWidth - 1);
};

const handleScroll = () => updateCaretVisibility();
const scrollPrompts = (dir: 'left' | 'right') => {
    if (!promptsScrollRef.value) return;
    const amount = promptsScrollRef.value.clientWidth * 0.8;
    promptsScrollRef.value.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    setTimeout(updateCaretVisibility, 350);
};

const onMouseDown = (e: MouseEvent) => {
    if (!promptsScrollRef.value) return;
    isDragging.value = true; startX.value = e.pageX - promptsScrollRef.value.offsetLeft;
    scrollLeft.value = promptsScrollRef.value.scrollLeft;
    promptsScrollRef.value.style.cursor = 'grabbing'; promptsScrollRef.value.style.scrollBehavior = 'auto';
};
const onMouseLeave = () => { /* Handled by global */ };
const onMouseUp = () => {
    if (!isDragging.value || !promptsScrollRef.value) return;
    isDragging.value = false; promptsScrollRef.value.style.cursor = 'grab';
    promptsScrollRef.value.style.scrollBehavior = 'smooth';
};
const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.value || !promptsScrollRef.value) return; e.preventDefault();
    const x = e.pageX - promptsScrollRef.value.offsetLeft;
    const walk = (x - startX.value) * 1.5;
    promptsScrollRef.value.scrollLeft = scrollLeft.value - walk; updateCaretVisibility();
};
const setupPromptCarousel = () => {
    nextTick(() => {
        if (promptsScrollRef.value && actualExamplePrompts.value.length > 0) {
            promptsScrollRef.value.style.cursor = 'grab';
            promptsScrollRef.value.style.scrollBehavior = 'smooth';
            promptsScrollRef.value.scrollLeft = 0; updateCaretVisibility();
        } else if (promptsScrollRef.value) { showLeftCaret.value = false; showRightCaret.value = false; }
    });
};

const onTouchStart = (event: TouchEvent) => {
    if (!promptsScrollRef.value || event.touches.length === 0) return;
    isDragging.value = true;
    startX.value = event.touches[0].pageX - promptsScrollRef.value.offsetLeft;
    scrollLeft.value = promptsScrollRef.value.scrollLeft;
    promptsScrollRef.value.style.scrollBehavior = 'auto';
};
const onTouchMove = (event: TouchEvent) => {
    if (!isDragging.value || !promptsScrollRef.value || event.touches.length === 0) return;
    event.preventDefault(); // Prevent page scroll
    const x = event.touches[0].pageX - promptsScrollRef.value.offsetLeft;
    const walk = (x - startX.value) * 1.5; // Adjust multiplier for sensitivity
    promptsScrollRef.value.scrollLeft = scrollLeft.value - walk;
    updateCaretVisibility();
};
const onTouchEnd = () => {
    if (!isDragging.value || !promptsScrollRef.value) return;
    isDragging.value = false;
    promptsScrollRef.value.style.scrollBehavior = 'smooth';
};

const globalMouseUpListenerBubble = () => { if (isDragging.value) onMouseUp(); };
const globalTouchEndListenerBubble = () => { if (isDragging.value) onTouchEnd(); };

const parseMarkdown = (text: string) => text ? marked.parse(text, { gfm: true, breaks: true }) : '';
const scrollToBottom = () => nextTick(() => { if (chatMessagesContainerRef.value) chatMessagesContainerRef.value.scrollTop = chatMessagesContainerRef.value.scrollHeight; });
watch(chatMessages, scrollToBottom, { deep: true });

const adjustTextareaHeight = (el: HTMLTextAreaElement | null) => { if (!el) return; el.style.height = 'auto'; const minH = parseInt(el.style.minHeight || '0', 10); el.style.height = `${Math.max(minH, el.scrollHeight)}px`; };
watch(userInput, () => { if (isPopupOpen.value) adjustTextareaHeight(activeTextareaRef.value); });

const handleEnter = (e: KeyboardEvent) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (userInput.value.trim() && !isLoading.value && !isSummarizing.value) sendMessage(); } };

const handleExamplePromptClick = (prompt: ExamplePrompt) => {
    if (prompt.action === 'summarize') {
        handleSummarizePage(prompt.text); // Pass the prompt's text
        userInput.value = ''; // Clear input field if user typed something else before clicking
        nextTick(() => adjustTextareaHeight(activeTextareaRef.value));
    } else {
        sendExampleChatPrompt(prompt.text);
    }
};
const sendExampleChatPrompt = (promptText: string) => { userInput.value = promptText; nextTick(() => { activeTextareaRef.value?.focus(); sendMessage(); }); };

const sendMessage = async () => { // Standard chat message sending
    const messageText = userInput.value.trim();
    if (!messageText || isLoading.value || isSummarizing.value) return;

    const lowerCaseMessage = messageText.toLowerCase();
    // Regex to find "tl" followed by optional whitespace/semicolon and then "dr"
    // The 'i' flag makes it case-insensitive, though lowerCaseMessage is already lowercase.
    const tldrRegex = /tl\s*;?\s*dr/i; 

    if (tldrRegex.test(lowerCaseMessage) || lowerCaseMessage === "summary") {
        handleSummarizePage(messageText); // Pass the original user message
        userInput.value = ''; // Clear input after handling
        nextTick(() => adjustTextareaHeight(activeTextareaRef.value));
        return;
    }

    chatMessages.value.push({ id: `msg_popup_${Date.now()}`, text: messageText, isNait: false });
    userInput.value = '';
    nextTick(() => adjustTextareaHeight(activeTextareaRef.value));

    isLoading.value = true;
    const naitMessageId = `nait_popup_stream_${Date.now()}`;
    chatMessages.value.push({ id: naitMessageId, text: '', isNait: true });
    const naitMessageIndex = chatMessages.value.length - 1;
    startTypingIndicator(naitMessageIndex); // Default "Nait is thinking"
    let firstChunkReceived = false;

    try {
        const apiHost = import.meta.env.VITE_API_HOST || '';
        let url = `${apiHost}api/nait/chat`;
        if (!apiHost && typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
            url = 'http://localhost:3001/api/nait/chat';
        } else if (!apiHost) { throw new Error("API host not configured for chat."); }

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: messageText, sessionId: sessionId.value }),
        });

        stopTypingIndicator(); // Stop once response/stream starts or fails

        if (!response.ok || !response.body) {
            const errorText = response.ok ? "Response body is null." : await response.text();
            if (chatMessages.value[naitMessageIndex]?.id === naitMessageId) chatMessages.value[naitMessageIndex].text = `Sorry, Nait encountered an error. (${response.status})`;
            throw new Error(`Chat API Error: ${response.status} ${errorText}`);
        }
        if (chatMessages.value[naitMessageIndex]) chatMessages.value[naitMessageIndex].text = "";


        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let partialChunk = '';

        while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            const chunkString = partialChunk + decoder.decode(value, { stream: !done });
            const sseMessages = chunkString.split('\n\n');
            if (!done) partialChunk = sseMessages.pop() || ''; else partialChunk = '';

            for (const sseMessage of sseMessages) {
                if (sseMessage.startsWith('data: ')) {
                    const jsonData = sseMessage.substring(5).trim();
                    if (jsonData) {
                        try {
                            const parsedData = JSON.parse(jsonData);
                            if (parsedData.type === "stream_end") { done = true; break; }
                            if (parsedData.text && chatMessages.value[naitMessageIndex]?.id === naitMessageId) {
                                if (!firstChunkReceived) firstChunkReceived = true;
                                chatMessages.value[naitMessageIndex].text += parsedData.text;
                            }
                        } catch (e) { console.error("NaitBubble: Error parsing JSON from chat stream:", jsonData, e); }
                    }
                }
            }
        }
        if (!firstChunkReceived && chatMessages.value[naitMessageIndex]?.id === naitMessageId && chatMessages.value[naitMessageIndex].text === '') {
            chatMessages.value[naitMessageIndex].text = "[Nait finished processing. No text content was streamed.]";
        }
    } catch (error) {
        console.error('NaitBubble Chat Fetch/Stream Error:', error);
        if (chatMessages.value[naitMessageIndex]?.id === naitMessageId) chatMessages.value[naitMessageIndex].text = 'Sorry, an issue occurred with Nait chat.';
    } finally {
        isLoading.value = false;
        stopTypingIndicator();
        nextTick(() => { if (isPopupOpen.value && activeTextareaRef.value) activeTextareaRef.value.focus(); });
    }
};
</script>

<style scoped>
.prompts-carousel-wrapper {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.prompts-carousel-wrapper .caret-btn {
    transform: translateY(-50%);
}

/* Chat messages scroll styling */
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
    min-height: 0;
}

.message-bubble .prose> :first-child {
    margin-top: 0;
}

.message-bubble .prose> :last-child {
    margin-bottom: 0;
}

.message-bubble {
    margin-top: 8px;
}

/* Popup Transition Styles */
.popup-slide-fade-enter-active,
.popup-slide-fade-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.popup-slide-fade-enter-from,
.popup-slide-fade-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}

@media (min-width: 640px) {

    .popup-slide-fade-enter-from,
    .popup-slide-fade-leave-to {
        transform: translate(20px, 20px) scale(0.95);
    }
}

.popup-slide-fade-enter-to,
.popup-slide-fade-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

@media (min-width: 640px) {

    .popup-slide-fade-enter-to,
    .popup-slide-fade-leave-from {
        transform: translate(0, 0) scale(1);
    }
}

/* Bubble Animation for Popup */
.bubble-popup-enter-active {
    transition: all 0.4s ease-out;
}

.bubble-popup-leave-active {
    transition: all 0.3s ease-in;
    position: absolute;
}

.bubble-popup-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.bubble-popup-leave-to {
    opacity: 0;
    transform: translateX(20px);
}

.bubble-popup-move {
    transition: transform 0.4s ease;
}
</style>