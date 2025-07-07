<script setup>
import { ref, onMounted, computed } from "vue";

// Accept allQuestions as a prop
const props = defineProps({
	questionsData: {
		type: Array,
		required: true,
	},
	quizTitle: {
		type: String,
		default: "Test Your Knowledge!",
	},
	quizDescription: {
		type: String,
		default:
			"You've completed the course, now it's time to prove your mastery! Let's see what you've learned.",
	},
	questionsPerChapter: {
		type: Number,
		default: 2,
	},
});

const quizQuestions = ref([]);
const userAnswers = ref({});
const score = ref(0);
const submitted = ref(false);

const scoreClass = computed(() => {
	if (!submitted.value) return "";
	const percentage = (score.value / quizQuestions.value.length) * 100;
	if (percentage < 40) {
		return "score-low";
	}
	if (percentage < 75) {
		return "score-medium";
	}
	return "score-high";
});

const shuffle = (array) => {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

const generateQuiz = () => {
	const selectedQuestions = props.questionsData.flatMap((chapter) => {
		// Shuffle questions in the chapter and pick the first two
		const chapterQuestions = shuffle(chapter.questions).slice(
			0,
			props.questionsPerChapter,
		);
		// For each selected question, create a new object with shuffled options
		return chapterQuestions.map((q) => ({
			...q,
			options: shuffle(q.options),
		}));
	});

	// Shuffle the final list of questions
	quizQuestions.value = shuffle(selectedQuestions);

	// Reset state
	userAnswers.value = {};
	score.value = 0;
	submitted.value = false;
	window.scrollTo({ top: 0, behavior: "smooth" });
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
	window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
	generateQuiz();
});
</script>

<template>
  <div>
    <h1>{{ quizTitle }}</h1>
    <p>{{ quizDescription }}</p>

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
/* All the shared styles from your original components go here */
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