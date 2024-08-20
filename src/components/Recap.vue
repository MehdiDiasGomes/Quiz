<template>
  <div>Score : {{ score }}/{{ quiz.questions.length }}</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  answers: Array,
  quiz: Object
})


const score = computed(() => {
  return props.quiz.questions.reduce((acc, current, k) => {
    if (current.answer === props.answers[k]) {
      return acc + 1
    }
    return acc
  }, 0)
})
</script>
