<template>
   <div class="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black group">
      <video-plyr ref="player" :options="{ controls: true }" class="w-full h-full">
         <video ref="video" playsinline preload="auto" class="w-full h-full object-cover cursor-pointer"
            @click="togglePlay">
            <source src="/videos/demo.mp4" type="video/mp4" />
            Tarayıcınız video öğesini desteklemiyor.
         </video>
      </video-plyr>

      <!-- Orta Play Butonu -->
      <button v-if="!isPlaying" @click="togglePlay"
         class="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black/50 hover:bg-black/70 transition">
         ▶
      </button>
   </div>
</template>

<script setup>
const isPlaying = ref(false)
const video = ref(null)

const togglePlay = () => {
   if (!video.value) return

   if (video.value.paused) {
      video.value.play()
      isPlaying.value = true
   } else {
      video.value.pause()
      isPlaying.value = false
   }
}
</script>