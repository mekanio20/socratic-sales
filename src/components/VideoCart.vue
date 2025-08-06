<template>
    <div class="p-5 rounded-[20px] bg-[#0D0D0D] flex flex-col space-y-5">
        <div class="relative h-[300px] sm:h-[400px] rounded-2xl group cursor-pointer font-inter" @click="togglePlay">
            <vue-plyr ref="player" :options="{ controls: true }" class="w-full h-full">
                <video ref="video" playsinline preload="auto" class="w-full h-full object-cover cursor-pointer">
                    <source src="/videos/demo.mp4" type="video/mp4" />
                </video>
            </vue-plyr>
            <!-- Orta Play Butonu -->
            <button v-if="!isPlaying" @click.stop="togglePlay"
                class="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black/30 hover:bg-black/50 transition">
                ▶
            </button>
        </div>
        <h3 class="text-gradient font-sf_pro font-medium text-[16px] text-black">
            {{ name }}
        </h3>
        <p class="font-sf_pro text-sm text-[#8A8F98]">
            {{ desc }}
        </p>
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
defineProps({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    videoSource: {
        type: String,
        default: ''
    },
    hls_master: {
        type: String,
        default: null
    }
})
</script>