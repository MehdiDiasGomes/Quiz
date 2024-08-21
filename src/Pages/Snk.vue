<template>
  <Fecth_snk />
</template>

<script setup>
  import Fecth_snk from '@/Fecth_snk.vue';

  const props = defineProps({
    quiz: Object,
  })

  console.log(props.quiz)

</script>
