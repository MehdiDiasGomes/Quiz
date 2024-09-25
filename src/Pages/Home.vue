<template>
  <div class="flex justify-center">
    <div class="w-full flex flex-wrap justify-center mt-10 gap-8">
    <RouterLink to="/quiz/snk" class="w-[20rem] h-[20rem] p-3 gap-5 relative group">
      <img
        class="w-full h-full object-cover opacity-35 rounded-lg group-hover:opacity-70 group-hover:scale-105 duration-300"
        src="../assets/snk_wallpaper.jpg"
        alt="Attaques des titans"
      />

      <h3 class="absolute text-2xl bottom-5 left-5 text-white font-bold">Attaques des titans</h3>
    </RouterLink>

    <RouterLink to="/quiz/bleach" class="w-[20rem] h-[20rem] p-3 gap-5 relative group">
      <img
        class="w-full h-full object-cover rounded-lg opacity-35 group-hover:opacity-70 group-hover:scale-105 duration-300"
        src="../assets/bleach_wallpaper.jpg"
        alt="Bleach"
      />
      <h3 class="absolute text-2xl bottom-5 left-5 text-white font-bold">Bleach</h3>
    </RouterLink>

    <RouterLink to="/quiz/naruto" class="w-[20rem] h-[20rem] p-3 gap-5 relative group">
      <img
        class="w-full h-full object-cover rounded-lg opacity-35 group-hover:opacity-70 group-hover:scale-105 duration-300"
        src="../assets/naruto_wallpaper.png"
        alt="Naruto"
      />
      <h3 class="absolute text-2xl bottom-5 left-5 text-white font-bold">Naruto</h3>
    </RouterLink>

    <RouterLink to="/quiz/knb" class="w-[20rem] h-[20rem] p-3 gap-5 relative group">
      <img
        class="w-full h-full object-cover rounded-lg opacity-35 group-hover:opacity-70 group-hover:scale-105 duration-300"
        src="../assets/knb_wallpaper.jpg"
        alt="Kuruko's basket"
      />
      <h3 class="absolute text-2xl bottom-5 left-5 text-white font-bold">Kuruko's basket</h3>
    </RouterLink>
    
    <RouterLink to="/quiz/blue-lock" class="w-[20rem] h-[20rem] p-3 gap-5 relative group">
      <img
         class="w-full h-full object-cover rounded-lg opacity-35 group-hover:opacity-70 group-hover:scale-105 duration-300"
        src="../assets/blue-lock_wallpaper.jpg"
        alt="Blue Lock"
      />
      <h3 class="absolute text-2xl bottom-5 left-5 text-white font-bold">Blue Lock</h3>
    </RouterLink>
  </div>
  </div>
  
</template>
