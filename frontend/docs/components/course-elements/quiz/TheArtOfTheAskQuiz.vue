<script setup>
import QuizComponent from './QuizComponent.vue'; // Adjust path as needed
import { artOfTheAskQuestions } from '../data/TheartOfTheAskQuestions'; // Adjust path as needed
</script>

<template>
  <QuizComponent
    :questionsData="artOfTheAskQuestions"
    quizTitle="Ready to Test Your User Interview Mastery?"
    quizDescription="You've completed the course, now it's time to prove your mastery! This quiz features 14 questions. Let's see what you've learned."
  />
</template>