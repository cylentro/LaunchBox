<script setup>
import QuizComponent from "./QuizComponent.vue"; // Adjust path as needed
import { ProductLaunchMasteryQuestions } from "../data/ProductLaunchMasteryQuestions"; // Adjust path as needed
</script>

<template>
  <QuizComponent
    :questionsData="ProductLaunchMasteryQuestions"
    quizTitle="Ready to Test Your Launch Mastery?"
    quizDescription="You've completed the course, now it's time to prove your mastery! This quiz will test your understanding of the entire GTM playbook. Let's see what you've learned."
  />
</template>
