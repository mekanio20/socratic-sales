<template>
   <div v-if="show"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-6 py-4 rounded-lg shadow-lg border border-black animate-bounce cursor-pointer z-50 lg:w-[300px] md:w-[200px] w-[180px]"
      @click="unmute">
      <div class="flex flex-col items-center space-y-2 font-inter font-medium text-center break-words">
         <p class="font-bold text-nowrap" style="font-size: clamp(0.75rem, 2.5vw, 1rem);">
            Your video has started
         </p>
         <img class="w-[25%] max-w-[60px] h-auto pb-2" src="/icons/mute.svg" />
         <p class="font-semibold text-nowrap" style="font-size: clamp(0.75rem, 2.5vw, 1rem);">
            Click to listen
         </p>
      </div>
   </div>
</template>

<script setup>
const show = ref(true)
const emit = defineEmits(['click'])

const unmute = () => {
   const video = document.querySelector('#hero-video')
   if (video) {
      video.muted = false
      video.volume = 1
      const playPromise = video.play?.()
      if (playPromise && typeof playPromise.then === 'function') {
         playPromise.catch(() => {})
      }
   }
   show.value = false
   emit('click')
}
</script>

<style scoped>
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