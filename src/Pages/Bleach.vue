<template>
  <Fecth_bleach />
</template>

<script setup>
import Fecth_bleach from '@/Fetch.vue'

const props = defineProps({
  quiz: Object
})

console.log(props.quiz)
</script>
