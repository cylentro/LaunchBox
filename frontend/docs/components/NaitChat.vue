<template>
    <div class="nait-chat-interface mx-auto flex flex-col transition-all duration-500 ease-in-out"
        :style="{ maxHeight: isChatActive ? 'calc(100vh - 100px)' : 'auto', width: '100%', maxWidth: '1200px' }"
        :class="isChatActive ? 'h-[calc(100vh-150px)]' : 'py-8'">


        <Transition name="shift-fade">
            <div v-if="!isChatActive" class="initial-view-wrapper text-center px-4">

                <div class="mb-8">
                    <h2 class="text-4xl font-bold text-slate-800 dark:text-slate-100">Nait</h2>
                    <p class="text-slate-500 dark:text-slate-400">Your AI Advocate</p>
                </div>

                <div class="w-full mx-auto">
                    <div class="example-prompts mb-8">
                        <p class="text-lg text-slate-600 dark:text-slate-300 mb-4">Ask Nait about Christian, or try:</p>
                        <div class="flex flex-wrap justify-center gap-2">
                            <button v-for="prompt in examplePrompts" :key="prompt" @click="sendExamplePrompt(prompt)"
                                class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium py-2 px-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-slate-200 dark:focus:ring-neutral-500">
                                {{ prompt }}
                            </button>
                        </div>
                    </div>

                    <form @submit.prevent="sendMessage" class="chat-input-form-initial w-full relative">

                        <textarea ref="initialTextareaRef" v-model="userInput" @keydown.enter="handleEnter"
                            placeholder="Ask anything about Christian..." :disabled="isLoading" rows="1"
                            class="w-full p-4 pr-16 text-lg border border-slate-300 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none dark:bg-neutral-800 dark:text-slate-100 dark:border-neutral-600 dark:placeholder-slate-400"
                            style="min-height: 60px;"></textarea>
                        <button type="submit" :disabled="isLoading || !userInput.trim()"
                            class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-40"
                            aria-label="Send message">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                :class="['w-7 h-7 transition-colors', userInput.trim() ? 'text-blue-600 dark:text-blue-500' : 'text-slate-400 dark:text-slate-500']">
                                <path
                                    d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </form>
                    <div v-if="isLoading" class="text-center py-4">
                        <span class="italic text-slate-500 dark:text-slate-400">Nait is thinking...</span>
                    </div>
                    <p class="text-xs text-center text-slate-400 dark:text-slate-500 mt-4">
                        Nait can make mistakes. Consider checking important information.
                    </p>
                </div>
            </div>
        </Transition>

        <Transition name="shift-fade">
            <div v-if="isChatActive" class="active-chat-wrapper flex flex-col flex-grow w-full overflow-hidden pt-4">
                <div
                    class="chat-header relative p-2 sm:p-3 border-b border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
                    <button @click="closeChatSession"
                        class="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 z-20 p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-neutral-700"
                        aria-label="Close chat">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5 sm:w-6 sm:h-6">
                            <path fill-rule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    <div class="h-6"></div>
                </div>

                <div ref="chatMessagesContainerRef" class="chat-messages flex-grow overflow-y-auto px-4 space-y-3 pb-4">
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
                    <div v-if="isLoading" class="text-center py-2">
                        <span class="italic text-slate-500 dark:text-slate-400">Nait is thinking...</span>
                    </div>
                </div>

                <div
                    class="chat-input-form-active p-2 sm:p-3 border-t border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 mt-auto sticky bottom-0">
                    <form @submit.prevent="sendMessage" class="flex items-center relative">
                        <textarea ref="activeTextareaRef" v-model="userInput" @keydown.enter="handleEnter"
                            placeholder="Message Nait..." :disabled="isLoading" rows="1"
                            class="w-full p-3 pr-12 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none dark:bg-neutral-700 dark:text-slate-100 dark:border-neutral-600 dark:placeholder-slate-400"
                            style="min-height: 52px;"></textarea>
                        <button type="submit" :disabled="isLoading || !userInput.trim()"
                            class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-40"
                            aria-label="Send message">
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
// ... (Your existing script setup logic: imports, refs, functions like sendMessage, handleEnter, parseMarkdown, adjustTextareaHeight, onMounted, watch, etc.)
// Ensure `isChatActive` is set to true in `sendMessage` when the first message is sent.
// Ensure examplePrompts are defined
// Ensure ChatMessage interface is defined
import { ref, onMounted, nextTick, watch } from 'vue';
import { marked } from 'marked';

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

const examplePrompts = ref([
    "Who is Christian?",
    "What are Christian's key skills?",
    "Tell me about a recent project."
]);

const closeChatSession = () => {
    isChatActive.value = false; // Trigger transition back to initial view

    // Clear current UI state
    chatMessages.value = [];
    userInput.value = '';
    isLoading.value = false; // Just in case it was loading

    // Clear the history for the current session from our backend mock
    if (sessionId.value && chatHistories[sessionId.value]) {
        delete chatHistories[sessionId.value];
        console.log(`Chat history for session ${sessionId.value} cleared.`);
    }

    // Generate a new session ID for the next interaction to ensure freshness
    sessionId.value = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    console.log(`New session started: ${sessionId.value}`);

    // Optional: Focus the initial input field after the transition back to the initial view
    // This ensures the user can immediately start a new interaction if they wish.
    nextTick(() => {
        if (!isChatActive.value && initialTextareaRef.value) {
            // A slight delay can sometimes help ensure the element is truly focusable after transitions
            setTimeout(() => {
                initialTextareaRef.value?.focus();
            }, 50); // Adjust delay as needed, or try without if nextTick is enough
        }
    });
};

onMounted(() => {
    if (!sessionId.value) {
        sessionId.value = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    }
    // initialTextareaRef.value?.focus();
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
        }
        sendMessage();
    });
};

const sendMessage = async () => {
    const messageText = userInput.value.trim();
    if (!messageText || isLoading.value) return;

    const wasInitialSend = !isChatActive.value;
    if (wasInitialSend) {
        isChatActive.value = true;
        // We will handle focusing the activeTextareaRef after its transition below,
        // or after the first response.
    }

    const currentTextareaToClear = (isChatActive.value && !wasInitialSend) ? initialTextareaRef.value : activeTextareaRef.value;
    // If it's the very first send, the input came from initialTextareaRef.
    // For subsequent sends, it comes from activeTextareaRef.
    // However, userInput.value is shared, so clearing it clears the model.
    // We need to adjust height based on which textarea was visible during input.

    chatMessages.value.push({ id: `msg_${Date.now()}`, text: messageText, isNait: false });
    const inputBeforeClear = userInput.value; // Store before clearing for height adjustment
    userInput.value = '';

    // Adjust height of the textarea that was just used
    if (wasInitialSend && initialTextareaRef.value) {
        await nextTick(); // Ensure input is cleared in DOM
        adjustTextareaHeight(initialTextareaRef.value);
    } else if (activeTextareaRef.value) {
        await nextTick(); // Ensure input is cleared in DOM
        adjustTextareaHeight(activeTextareaRef.value);
    }

    isLoading.value = true;

    try {
        const response = await fetch('http://localhost:3001/api/nait/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: messageText, sessionId: sessionId.value }),
        });

        // isLoading.value = false; // Moved to finally block

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            chatMessages.value.push({ id: `err_${Date.now()}`, text: `Sorry, error: ${errorData.details || errorData.error}`, isNait: true });
            // isLoading = false will be handled in finally
            return;
        }
        const data = await response.json();
        chatMessages.value.push({ id: `nait_${Date.now()}`, text: data.naitResponse, isNait: true });
    } catch (error) {
        console.error('Fetch Error:', error);
        chatMessages.value.push({ id: `fetch_err_${Date.now()}`, text: 'Could not connect to Nait.', isNait: true });
        // isLoading = false will be handled in finally
    } finally {
        isLoading.value = false;
        await nextTick(); // Wait for DOM updates (e.g., isLoading state change)

        if (isChatActive.value && activeTextareaRef.value) {
            activeTextareaRef.value.focus(); // Focus the active chat textarea
        }
    }
};

</script>

<style scoped>
.nait-chat-interface {
    /* This container will be placed by VitePress layout. 
     It's not fixed, so it will respect the navbar.
     Height can be controlled by parent or explicitly. */
}

/* Chat messages scroll styling (same as before) */
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

/* Shift-Fade Transition (for initial view out, active chat in) */
/* .shift-fade-enter-active,
.shift-fade-leave-active {
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
} */

.shift-fade-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.shift-fade-leave-to {
    /* Leaving element moves up */
    opacity: 0;
    transform: translateY(-30px);
}

/* Bubble Animation (same as before) 
.bubble-enter-active {
    transition: all 0.4s ease-out;
}

.bubble-leave-active {
    transition: all 0.3s ease-in;
    position: absolute;
}

.bubble-enter-from {
    opacity: 0;
    transform: translateY(100%);
}
*/
/* Slide up from bottom 
.bubble-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.bubble-move {
    transition: transform 0.4s ease;
}
*/
.message-bubble .prose> :first-child {
    margin-top: 0;
}

.message-bubble .prose> :last-child {
    margin-bottom: 0;
}

.message-bubble {
    margin-top: 10px;
}
</style>