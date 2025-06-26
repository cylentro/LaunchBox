<script setup>
import { ref, onMounted, computed } from 'vue';

const allQuestions = [
  // Chapter 1
  {
    chapter: 1,
    questions: [
      {
        question: "According to Chapter 1, what is the primary function of Generative AI?",
        options: ["Retrieving existing information from the internet.", "Creating new, original content like text and images.", "Correcting grammatical errors in documents.", "Running complex mathematical simulations."],
        answer: "Creating new, original content like text and images."
      },
      {
        question: "The 'Co-Pilot' analogy for AI is used to emphasize that...",
        options: ["The AI is fully autonomous and makes all decisions.", "The user is in control, and the AI is an assistant.", "AI will soon replace human pilots in airplanes.", "AI is a dangerous tool that should be avoided."],
        answer: "The user is in control, and the AI is an assistant."
      },
      {
        question: "Which 'flavor' of Generative AI would you use to create a unique picture for a presentation based on a text description?",
        options: ["Text Generation", "Audio Generation", "Code Generation", "Image Generation"],
        answer: "Image Generation"
      },
      {
        question: "What does the 'Iceberg Analogy' from Chapter 1 represent?",
        options: ["That AI models are very cold.", "That the user interface is just the visible part of a much larger, complex system.", "That AI can only be used in cold climates.", "That the internet is mostly underwater."],
        answer: "That the user interface is just the visible part of a much larger, complex system."
      },
      {
        question: "Which of the following is NOT one of the four main 'flavors' of Generative AI discussed?",
        options: ["Text Generation", "Image Generation", "Audio Generation", "Thought Generation"],
        answer: "Thought Generation"
      }
    ]
  },
  // Chapter 2
  {
    chapter: 2,
    questions: [
      {
        question: "What does the 'Recipe Analogy' in Chapter 2 illustrate about prompting?",
        options: ["AI can provide recipes for any dish.", "All prompts should be short and simple.", "The more specific and detailed your prompt, the better the output.", "AI can only follow instructions for cooking."],
        answer: "The more specific and detailed your prompt, the better the output."
      },
      {
        question: "Which of these is NOT one of the four key components of a good prompt discussed in 'The Anatomy of a Good Prompt'?",
        options: ["Context", "Task", "Specificity", "Creativity"],
        answer: "Creativity"
      },
      {
        question: "The Pro-Tip 'Your First Prompt is a Draft' encourages users to...",
        options: ["Delete the conversation and start over if the first result is wrong.", "Accept the first output from the AI without changes.", "Iterate and refine prompts to guide the AI to a better answer.", "Only use one prompt per conversation."],
        answer: "Iterate and refine prompts to guide the AI to a better answer."
      },
      {
        question: "What is the purpose of providing 'Context' in a prompt?",
        options: ["To make the prompt longer.", "To confuse the AI.", "To help the AI understand the situation and your perspective.", "To test the AI's reading speed."],
        answer: "To help the AI understand the situation and your perspective."
      },
      {
        question: "What is a 'Constraint' in the anatomy of a good prompt?",
        options: ["A rule that limits the user's creativity.", "Telling the AI what *not* to do.", "A way to make the AI's response shorter.", "A type of advanced programming command."],
        answer: "Telling the AI what *not* to do."
      }
    ]
  },
  // Chapter 3
  {
    chapter: 3,
    questions: [
      {
        question: "Which advanced prompting technique involves instructing the AI to 'Act as...' a specific persona?",
        options: ["Few-Shot Prompting", "Chain-of-Thought", "Role-Playing", "Context Stuffing"],
        answer: "Role-Playing"
      },
      {
        question: "When you provide the AI with several examples of an input-output pattern before giving your actual request, you are using...",
        options: ["Role-Playing", "Few-Shot Prompting", "Chain-of-Thought", "Zero-Shot Prompting"],
        answer: "Few-Shot Prompting"
      },
      {
        question: "Chain-of-Thought prompting is most effective for which type of task?",
        options: ["Generating short, creative poems.", "Tasks requiring multiple steps of reasoning, like logic puzzles.", "Translating single words between languages.", "Summarizing a short article."],
        answer: "Tasks requiring multiple steps of reasoning, like logic puzzles."
      },
      {
        question: "The Pro-Tip 'Combine and Conquer' suggests that advanced techniques are...",
        options: ["Mutually exclusive and should be used one at a time.", "Only for expert programmers.", "Building blocks that can be stacked together in a single prompt.", "Too complicated to use together."],
        answer: "Building blocks that can be stacked together in a single prompt."
      },
      {
        question: "Assigning a persona like 'Act as a world-class branding expert' is an example of which technique?",
        options: ["Few-Shot Prompting", "Chain-of-Thought", "Role-Playing", "Context Stuffing"],
        answer: "Role-Playing"
      }
    ]
  },
  // Chapter 4
  {
    chapter: 4,
    questions: [
      {
        question: "According to Chapter 4, which task is a practical application of AI for boosting productivity in a daily workflow?",
        options: ["Composing a symphony.", "Automatically summarizing long email threads.", "Building a physical robot.", "Hacking into secure systems."],
        answer: "Automatically summarizing long email threads."
      },
      {
        question: "What is a suggested Pro-Tip for using AI to overcome writer's block?",
        options: ["Waiting for inspiration to strike naturally.", "Asking the AI to write the entire document for you.", "Prompting the AI to generate an outline or opening paragraphs to serve as a starting point.", "Watching movies to get ideas."],
        answer: "Prompting the AI to generate an outline or opening paragraphs to serve as a starting point."
      },
      {
        question: "How can you use AI as a personalized tutor to reinforce learning?",
        options: ["By asking it to do your homework for you.", "By having it read textbooks aloud.", "By asking it to create a quiz to test your understanding of a topic.", "By using it to find answers during an exam."],
        answer: "By asking it to create a quiz to test your understanding of a topic."
      },
      {
        question: "What is a key benefit of using an 'AI Meeting Scribe' like Otter.ai?",
        options: ["It can participate in the meeting for you.", "It provides transcripts and summaries, allowing you to focus on the conversation.", "It can mute other participants.", "It can schedule future meetings automatically."],
        answer: "It provides transcripts and summaries, allowing you to focus on the conversation."
      },
      {
        question: "How can AI act as a personalized tutor?",
        options: ["By taking your final exams for you.", "By creating custom learning plans and explaining complex topics simply.", "By writing all your essays.", "By giving you only the answers without explanations."],
        answer: "By creating custom learning plans and explaining complex topics simply."
      }
    ]
  },
  // Chapter 5
  {
    chapter: 5,
    questions: [
      {
        question: "What is the fundamental job of a Large Language Model (LLM) according to the 'Prediction Engine Analogy'?",
        options: ["To understand human emotions.", "To access a live database of facts.", "To predict the most statistically probable next word in a sequence.", "To browse the web in real-time."],
        answer: "To predict the most statistically probable next word in a sequence."
      },
      {
        question: "The 'black box' problem in AI refers to...",
        options: ["The physical casing of the AI servers.", "The difficulty in understanding the AI's complex internal decision-making process.", "A type of computer virus that affects AI.", "The AI's inability to see in the dark."],
        answer: "The difficulty in understanding the AI's complex internal decision-making process."
      },
      {
        question: "What are 'tokens' in the context of how AI processes language?",
        options: ["Digital currency used to pay for AI services.", "The smaller pieces (words or parts of words) that text is broken into for processing.", "Special commands that unlock hidden AI features.", "The security keys for an AI model."],
        answer: "The smaller pieces (words or parts of words) that text is broken into for processing."
      },
      {
        question: "What is the 'Transformer architecture' known for?",
        options: ["Transforming AI into robots.", "Allowing the AI to process a whole sentence at once and weigh the importance of words.", "A type of computer hardware.", "A method for making AI smaller."],
        answer: "Allowing the AI to process a whole sentence at once and weigh the importance of words."
      },
      {
        question: "What is a major ethical implication of the 'black box' problem?",
        options: ["It makes AI more expensive.", "It makes AI run slower.", "It makes it difficult to ensure fairness and accountability.", "It requires more electricity."],
        answer: "It makes it difficult to ensure fairness and accountability."
      }
    ]
  },
  // Chapter 6
  {
    chapter: 6,
    questions: [
      {
        question: "What is an AI 'hallucination'?",
        options: ["A special visual effect created by AI.", "When an AI generates confident but factually incorrect information.", "A type of AI-generated dream.", "A feature that allows AI to see things."],
        answer: "When an AI generates confident but factually incorrect information."
      },
      {
        question: "Why can AI models exhibit bias?",
        options: ["They are programmed to have opinions.", "Because they learn from training data that contains human biases.", "They have personal preferences.", "It's a random software bug."],
        answer: "Because they learn from training data that contains human biases."
      },
      {
        question: "According to the U.S. Copyright Office, can you copyright work generated entirely by AI?",
        options: ["Yes, automatically.", "No, not without significant human creative input.", "Only if you pay an extra fee.", "Yes, but only for images, not text."],
        answer: "No, not without significant human creative input."
      },
      {
        question: "How should you handle a potential AI hallucination?",
        options: ["Trust the AI because it's usually right.", "Ask the AI if it is sure about its answer.", "Be a fact-checker and verify the information with reliable sources.", "Delete the conversation and start again."],
        answer: "Be a fact-checker and verify the information with reliable sources."
      },
      {
        question: "The Pro-Tip 'Use AI to Fight AI Bias' suggests doing what?",
        options: ["Reporting the AI to its developers.", "Turning the AI off.", "Asking the AI to argue for an opposite perspective to reveal one-sidedness.", "Deleting the biased output."],
        answer: "Asking the AI to argue for an opposite perspective to reveal one-sidedness."
      }
    ]
  },
  // Chapter 7
  {
    chapter: 7,
    questions: [
      {
        question: "What is 'Multimodal AI'?",
        options: ["AI that can be used in multiple countries.", "AI that has multiple personalities.", "AI that can process and generate content across different data types like text, images, and audio.", "A type of transportation for AI models."],
        answer: "AI that can process and generate content across different data types like text, images, and audio."
      },
      {
        question: "What is the key difference between an AI 'Co-Pilot' and an AI 'Agent'?",
        options: ["There is no difference.", "An Agent can fly a plane, a Co-Pilot cannot.", "An Agent can autonomously take actions to complete a goal, while a Co-Pilot assists a user.", "A Co-Pilot is more expensive than an Agent."],
        answer: "An Agent can autonomously take actions to complete a goal, while a Co-Pilot assists a user."
      },
      {
        question: "The 'Democratization of AI' refers to the trend of...",
        options: ["AI being used to vote in elections.", "AI becoming more expensive and exclusive.", "AI being integrated into everyday tools, making it accessible to everyone.", "Only allowing democratic countries to develop AI."],
        answer: "AI being integrated into everyday tools, making it accessible to everyone."
      },
      {
        question: "What is an example of an AI Agent's task?",
        options: ["Answering the question 'What is the weather today?'.", "Drafting an email based on a prompt.", "Booking a restaurant reservation and adding it to your calendar.", "Translating a sentence."],
        answer: "Booking a restaurant reservation and adding it to your calendar."
      },
      {
        question: "The Pro-Tip in Chapter 7 suggests staying updated on AI by...",
        options: ["Getting a PhD in computer science.", "Reading every AI research paper published.", "Dedicating a small amount of time each week to reading newsletters and trying new tools.", "Waiting for the news to report on AI."],
        answer: "Dedicating a small amount of time each week to reading newsletters and trying new tools."
      }
    ]
  }
];

const quizQuestions = ref([]);
const userAnswers = ref({});
const score = ref(0);
const submitted = ref(false);

const scoreClass = computed(() => {
  if (!submitted.value) return '';
  const percentage = (score.value / quizQuestions.value.length) * 100;
  if (percentage < 40) {
    return 'score-low';
  }
  if (percentage < 75) {
    return 'score-medium';
  }
  return 'score-high';
});

const generateQuiz = () => {
  let selectedQuestions = [];
  // For each chapter, pick two random questions from its bank
  for (let i = 0; i < allQuestions.length; i++) { // Iterate through all chapters
    const chapterQuestions = [...allQuestions[i].questions]; // Create a shallow copy to shuffle
    // Shuffle the questions for the current chapter
    for (let j = chapterQuestions.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [chapterQuestions[j], chapterQuestions[k]] = [chapterQuestions[k], chapterQuestions[j]];
    }
    // Take the first two unique questions and shuffle their options
    [chapterQuestions[0], chapterQuestions[1]].forEach(q => {
      const newQuestion = { ...q, options: [...q.options] }; // Create copies to avoid mutating original data
      // Shuffle options using the Fisher-Yates algorithm
      for (let i = newQuestion.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newQuestion.options[i], newQuestion.options[j]] = [newQuestion.options[j], newQuestion.options[i]];
      }
      selectedQuestions.push(newQuestion);
    });
  }
  quizQuestions.value = selectedQuestions;
  userAnswers.value = {};
  score.value = 0;
  submitted.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on new quiz generation
};

const submitQuiz = () => {
  let correctAnswers = 0;
  quizQuestions.value.forEach((q, index) => {
    if (userAnswers.value[index] === q.answer) {
      correctAnswers++;
    }
  });
  score.value = correctAnswers;
  submitted.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on quiz submission
};

onMounted(() => {
  generateQuiz();
});
</script>

<template>
  <div>
    <h1>Ready to Test Your Prompting Prowess?</h1>
    <p>You've completed the course, now it's time to prove your mastery! This quiz features 14 questions. Let's see what you've learned.</p>
    
    <div v-if="!submitted">
      <form @submit.prevent="submitQuiz">
        <div v-for="(q, index) in quizQuestions" :key="index" class="quiz-question">
          <p class="question-text"><strong>{{ index + 1 }}. {{ q.question }}</strong></p>
          <div v-for="(option, oIndex) in q.options" :key="oIndex" class="option">
            <input type="radio" :id="'q' + index + 'o' + oIndex" :name="'q' + index" :value="option" v-model="userAnswers[index]">
            <label :for="'q' + index + 'o' + oIndex">{{ option }}</label>
          </div>
        </div>
        <button type="submit" class="submit-btn">Submit Quiz</button>
      </form>
    </div>

    <div v-if="submitted" class="results">
      <h2>Quiz Results</h2>
      <p class="score" :class="scoreClass">You scored: <strong>{{ score }} out of {{ quizQuestions.length }}</strong></p>
      
      <div v-for="(q, index) in quizQuestions" :key="index" class="quiz-question result-item" :class="{ correct: userAnswers[index] === q.answer, incorrect: userAnswers[index] !== q.answer }">
        <p class="question-text"><strong>{{ index + 1 }}. {{ q.question }}</strong></p>
        <p>Your answer: <span class="user-answer">{{ userAnswers[index] || "No answer" }}</span></p>
        <div v-if="userAnswers[index] !== q.answer">
          <p>Correct answer: <span class="correct-answer">{{ q.answer }}</span></p>
        </div>
      </div>
      
      <button @click="generateQuiz" class="submit-btn">Try Again with New Questions</button>
    </div>
  </div>
</template>

<style scoped>
.quiz-question {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.question-text {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
.option {
  margin: 0.5rem 0;
}
.option label {
  margin-left: 0.5rem;
}
.submit-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--vp-button-brand-bg);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;
}
.submit-btn:hover {
  background-color: var(--vp-button-brand-hover-bg);
}
.results {
  margin-top: 2rem;
}
.score {
  font-size: 1.8rem;
  padding: 1.5rem;
  color: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: background 0.5s ease-in-out;
  background: var(--vp-c-bg-soft); /* Default background */
}
.score strong {
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.score.score-low {
  background: linear-gradient(45deg, var(--vp-c-red-2), var(--vp-c-red-1));
}
.score.score-medium {
  background: linear-gradient(45deg, var(--vp-c-yellow-2), var(--vp-c-yellow-1));
}
.score.score-high {
  background: linear-gradient(45deg, var(--vp-c-green-2), var(--vp-c-green-1));
}
.result-item.correct {
  border-left: 5px solid var(--vp-c-green);
  background-color: rgba(74, 184, 12, 0.1);
}
.result-item.incorrect {
  border-left: 5px solid var(--vp-c-red);
  background-color: rgba(239, 68, 68, 0.1);
}
.user-answer {
  font-style: italic;
}
.correct-answer {
  font-weight: bold;
  color: var(--vp-c-green-dark);
}
.result-item.incorrect .user-answer {
    text-decoration: line-through;
}
</style>
