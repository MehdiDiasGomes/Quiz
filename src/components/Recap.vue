<template>
  <div class="flex w-full h-full justify-center flex-col gap-3">
    <div class="text-2xl text-red-500" v-if="score < 5">Score : {{ score }}/{{ quiz.questions.length }}</div>
    <div class="text-2xl text-green-500" v-else>Score : {{ score }}/{{ quiz.questions.length }}</div>
    <img class="rounded"
      src="https://comicvine.gamespot.com/a/uploads/original/11144/111444934/8849973-efe7e68f-e50c-44bc-ac30-d9f518bca2bc.gif"
      alt="Image naruto qui sourit gif" v-if="score > 5">
    <img class="rounded" src="https://i.pinimg.com/originals/99/62/79/996279409bcab56de0f7fce3d135a84c.gif"
      alt="Meliodas qui fait un 0 avec ses doigts gif" v-else>
    <RouterLink class="bg-[rgb(82,78,203)] hover:bg-[rgb(108,101,255)] text-white font-bold py-2 px-4 rounded" to="/">
      Revenir au menu
      principal</RouterLink>
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
