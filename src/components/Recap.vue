<template>
  <div class="flex w-full h-full justify-center flex-col gap-3">
    <div class="text-2xl text-red-500" v-if="score < 5">Score : {{ score }}/{{ quiz.questions.length }}</div>
    <div class="text-2xl text-green-500" v-else>Score : {{ score }}/{{ quiz.questions.length }}</div>
    <RouterLink class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/">Revenir au menu principal</RouterLink>
  </div>
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
