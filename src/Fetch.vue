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
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Quiz from './components/Quiz.vue';

const quiz = ref(null)
const state = ref('loading')
const route = useRoute()
const router = useRouter()
const anime = route.params.anime

watch(state, (newState) => {
  if (newState === 'error') {
    console.error('Error while loading the quiz')
    router.push('/not-found')
  }
})

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
