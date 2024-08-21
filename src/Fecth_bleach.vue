<template>
  <div v-if="state === 'error'">
    <p>Impossible de récupérer le json</p>
  </div>
  <div :aria-busy="state === 'loading'">
    <Quiz :quiz="quiz" v-if="quiz" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Quiz from './components/Quiz.vue'
const quiz = ref(null)
const state = ref('loading')

onMounted(() => {
  fetch('/quiz_bleach.json')
    .then((r) => {
      if (r.ok) {
        return r.json()
      } else {
        throw new Error('Impossible de charger le json')
      }
    })
    .then((data) => {
      quiz.value = data
      state.value = 'idle'
    })
    .catch((state.value = 'error'))
})
</script>
