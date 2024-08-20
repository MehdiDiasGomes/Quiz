<template>
  <div class="flex justify-center mt-10 h-full">
    <div class="w-1/3 bg-[#2a2e38] p-10">
      <div class="items-start flex flex-col gap-3">
        <h2 class="text-3xl">{{ quiz.title }}</h2>
        <Progress :value="step" :max="quiz.questions.length - 1" />
        <Question
          :key="question.question"
          :question="question"
          v-if="state === 'question'"
          @answer="addNewAnswer"
        />
        <Recap v-if="state === 'recap'" :quiz="quiz" :answers="answers" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Progress from './Progress.vue'
import Question from './Question.vue'
import Recap from './Recap.vue'
import { ref, computed } from 'vue'

const props = defineProps({
  quiz: Object
})

const state = ref('question')
const answers = ref([props.quiz.questions.map(() => null)])
const step = ref(0)
const question = computed(() => props.quiz.questions[step.value])
const addNewAnswer = (answer) => {
  answers.value[step.value] = answer
  if (step.value === props.quiz.questions.length - 1) {
    state.value = 'recap'
  } else {
    step.value++
  }
}
</script>
