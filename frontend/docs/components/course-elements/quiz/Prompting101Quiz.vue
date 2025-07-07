<script setup>
import QuizComponent from "./QuizComponent.vue"; // Adjust path as needed
import { prompting101Questions } from "../data/Prompting101Questions"; // Adjust path as needed
</script>

<template>
  <QuizComponent
    :questionsData="prompting101Questions"
    quizTitle="Ready to Test Your Prompting Prowess?"
    quizDescription="You've completed the course, now it's time to prove your mastery! This quiz features 14 questions. Let's see what you've learned."
  />
</template>