<template>
  <div class="flex w-full flex-col gap-5">
    <h3>{{ question.question }}</h3>
    <ul>
      <li class="list-none" v-for="(choice, index) in question.options" :key="choice">
        <label class="flex items-center gap-2" :for="`answer${index}`">
          <input
            :id="`answer${index}`"
            type="radio"
            name="answer"
            v-model="answer"
            :value="choice"
          />
          <p>{{ choice }}</p>
        </label>
      </li>
    </ul>
    <button :disabled="!hasAnswer" @click="emit('answer', answer), correctAnswer(answer)" class="p-3 bottom-0 right-0">
      Question suivante
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  question: Object
})

const answer = ref(null)
const emit = defineEmits(['answer'])

const hasAnswer = computed(() => answer.value !== null)

const correctAnswer = (choice) => {
  if (choice === props.question.correctAnswer) {
    alert('Bravo! La réponse est correcte.')
  } else {
    alert(`Désolé, la réponse est incorrecte. La bonne réponse était ${props.question.answer}.`)
  }
}

</script>