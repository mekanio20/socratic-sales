<template>
   <div v-if="show"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-6 py-4 rounded-lg shadow-lg border border-black animate-bounce cursor-pointer z-50"
      @click="unmute">
      <div class="flex flex-col items-center space-y-2 font-inter font-medium">
         <p class="font-bold text-lg text-center">Your video has started</p>
         <img class="w-[90px] pb-2" src="/icons/mute.svg" />
         <p class="text-sm text-center font-semibold">Click to listen</p>
      </div>
   </div>
</template>

<script setup>
const iconPulse = ref(false)
const show = ref(true)

const unmute = () => {
   const video = document.querySelector('video')
   if (video) {
      video.muted = false
      video.volume = 1
   }

   show.value = false
}
</script>

<style scoped>
/* Opsiyonel: Yumuşak animasyon geçişi için */
@keyframes bounce {

   0%,
   100% {
      transform: translate(-50%, -50%) translateY(0);
   }

   50% {
      transform: translate(-50%, -50%) translateY(-10px);
   }
}

.animate-bounce {
   animation: bounce 1.2s infinite;
}
</style>