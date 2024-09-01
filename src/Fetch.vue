<template>
  <div>
    <div v-if="state === 'loading'">Chargement...</div>
    <div v-if="state === 'idle'">
      <Quiz :quiz="quiz" v-if="quiz" />
    </div>
    <div v-if="state === 'error'">Erreur de chargement</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Quiz from './components/Quiz.vue';

const quiz = ref(null)
const state = ref('loading')
const route = useRoute()
const anime = route.params.anime

onMounted(() => {
  fetch(`/quiz_${anime}.json`)
    .then((r) => r.json())
    .then((data) => {
      quiz.value = data
      state.value = 'idle'
    })
    .catch(() => (state.value = 'error'))
})
</script>
