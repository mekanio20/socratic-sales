<template>
    <div class="p-5 rounded-[20px] bg-[#0D0D0D] flex flex-col space-y-1">
        <div class="relative h-[400px] sm:h-[500px] rounded-2xl group cursor-pointer font-inter"
             @mouseenter="isHovered = true" @mouseleave="isHovered = false">
            <vue-plyr :options="{ controls: true, muted: false }" class="w-full h-full">
                <video :id="`video-${id}`" playsinline preload="auto" class="w-full h-full object-cover cursor-pointer rounded-sm">
                    <source :src="videoSource" type="video/mp4" />
                </video>
            </vue-plyr>
            <button v-if="isHovered" @click.stop="togglePlay"
                class="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black/30 hover:bg-black/50 transition">
                <img v-if="!isPlaying" class="w-[60px] h-[60px]" src="/icons/play.png" />
                <img v-else class="w-[60px] h-[60px]" src="/icons/pause.png" />
            </button>
        </div>
        <h3 class="text-gradient font-sf_pro font-semibold text-[22px] pt-4 text-black">
            {{ name }}
        </h3>
        <p class="font-sf_pro text-base text-white">
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

        // Keep local state in sync with actual video events
        video.value.addEventListener('playing', onVideoPlaying)
        video.value.addEventListener('pause', onVideoPaused)
        video.value.addEventListener('ended', onVideoPaused)
        video.value.addEventListener('play', onAnyPlay)
    }
})

onBeforeUnmount(() => {
    if (!video.value) return
    video.value.removeEventListener('playing', onVideoPlaying)
    video.value.removeEventListener('pause', onVideoPaused)
    video.value.removeEventListener('ended', onVideoPaused)
    video.value.removeEventListener('play', onAnyPlay)
})

const onVideoPlaying = () => {
    isPlaying.value = true
}

const onVideoPaused = () => {
    isPlaying.value = false
}

const onAnyPlay = () => {
    pauseOtherVideos(props.id)
}

const pauseOtherVideos = (currentId) => {
    const videos = document.querySelectorAll('video[id^="video-"]')
    videos.forEach((el) => {
        if (!(el instanceof HTMLVideoElement)) return
        if (el.id !== `video-${currentId}`) {
            el.pause()
        }
    })
}

const togglePlay = () => {
    if (!video.value) return

    if (video.value.paused) {
        video.value.muted = false
        // When starting this video, pause all others
        pauseOtherVideos(props.id)
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