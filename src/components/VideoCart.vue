<template>
    <div class="p-5 rounded-[20px] bg-[#0D0D0D] flex flex-col space-y-5">
        <div class="relative h-[300px] sm:h-[400px] rounded-2xl group cursor-pointer font-inter"
             @mouseenter="isHovered = true" @mouseleave="isHovered = false">
            <vue-plyr :options="{ controls: true, muted: false }" class="w-full h-full">
                <video :id="`video-${id}`" playsinline class="w-full h-full object-cover cursor-pointer">
                    <source :src="videoSource" type="video/mp4" />
                </video>
            </vue-plyr>
            <button v-if="isHovered" @click.stop="togglePlay"
                class="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black/30 hover:bg-black/50 transition">
                <span v-if="!isPlaying">▶</span>
                <span v-else>⏸</span>
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
const isHovered = ref(false)
const video = ref(null)

onMounted(() => {
    video.value = document.querySelector(`#video-${props.id}`)
    if (video.value) {
        video.value.muted = false
    }
})

const togglePlay = () => {
    if (!video.value) return

    if (video.value.paused) {
        video.value.muted = false
        video.value.play()
        isPlaying.value = true
    } else {
        video.value.pause()
        isPlaying.value = false
    }
}

const props = defineProps({
    name: String,
    desc: String,
    videoSource: {
        type: String,
        default: '/videos/bg.mp4'
    },
    hls_master: {
        type: String,
        default: null
    },
    id: {
        type: [String, Number],
        required: true
    }
})
</script>