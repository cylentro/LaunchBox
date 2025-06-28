<script setup>
import QuizComponent from './QuizComponent.vue'; // Adjust path as needed
import { metricsMasteryQuestions } from '../data/MetricsMasteryQuestions'; // Adjust path as needed
</script>

<template>
  <QuizComponent
    :questionsData="metricsMasteryQuestions"
    quizTitle="Ready to Test Your Metrics Mastery?"
    quizDescription="You've completed the course, now it's time to prove your mastery! This quiz features 12 questions, pulling randomly from all six modules. Let's see what you've learned."
  />
</template>