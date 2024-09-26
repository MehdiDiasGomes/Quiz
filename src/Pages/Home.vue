<template>
  <div class="flex flex-col justify-center items-center mt-10">
    <nav class="flex flex-col gap-3 items-center md:flex-row">
      <img class="w-20" src="../assets/logo/logo.png" alt="Logo quiz">
      <div class="flex flex-col items-center md:items-start">
        <h1 class="text-2xl bebas-neue">Quiz Anime Challenge</h1>
        <h2 class="bebas-neue">Teste tes Connaissances en Anime 🥢</h2>
      </div>
    </nav>
    <div class="w-full flex flex-wrap justify-center mt-10 gap-8">
      <RouterLink v-for="(q, index) in quizs" :to="q.to" class="w-[20rem] h-[20rem] p-3 gap-5 relative group">
        <img
          class="w-full h-full object-cover opacity-35 rounded-lg group-hover:opacity-70 group-hover:scale-105 duration-300"
          :src="`./img/${q.name}_wallpaper.jpg`" :alt="q.title" />
        <h3 class="absolute text-2xl bottom-5 left-5 text-white font-bold">{{ q.title }}</h3>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import quiz from '@/constants/quiz';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const quizs = ref()

onMounted(() => {
  quizs.value = quiz;
  console.log(quizs.value); // to debug, remove later
})

</script>