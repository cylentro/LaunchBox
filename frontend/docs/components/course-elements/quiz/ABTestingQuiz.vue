<script setup>
import QuizComponent from "./QuizComponent.vue"; // Adjust path as needed
import { ABTestingQuestions } from "../data/ABTestingQuestions"; // Adjust path as needed
</script>

<template>
  <QuizComponent
    :questionsData="ABTestingQuestions"
    quizTitle="Ready to Test Your A/B Testing Knowledge?"
    quizDescription="You've completed the course, now it's time to prove your mastery! This quiz will test your understanding of the entire experimentation lifecycle. Let's see what you've learned."
  />
</template>