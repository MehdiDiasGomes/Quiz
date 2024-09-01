<template>
  <div class="flex justify-center">
    <div class="w-full flex flex-wrap justify-center mt-10 gap-8">
    <RouterLink to="/quiz/snk" class="w-[20rem] h-[20rem] p-3 gap-5 relative group">
      <img
        class="w-full h-full object-cover opacity-35 rounded-lg group-hover:opacity-70 group-hover:scale-105 duration-300"
        src="../assets/snk_wallpaper.jpg"
        alt="snk"
      />

      <h3 class="absolute text-2xl bottom-5 left-5 text-white font-bold">Attaques des titans</h3>
    </RouterLink>

    <RouterLink to="/quiz/bleach" class="w-[20rem] h-[20rem] p-3 gap-5 relative group">
      <img
        class="w-full h-full object-cover rounded-lg opacity-35 group-hover:opacity-70 group-hover:scale-105 duration-300"
        src="../assets/bleach_wallpaper.jpg"
        alt="snk"
      />
      <h3 class="absolute text-2xl bottom-5 left-5 text-white font-bold">Bleach</h3>
    </RouterLink>
  </div>
  </div>
  
</template>
