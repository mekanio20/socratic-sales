<script setup>
import VideoControls from './VideoControls.vue'
import Hls from 'hls.js'

const props = defineProps({
    videoSource: {
        type: String,
        required: false
    },
    hls_master: {
        type: String,
        required: false
    },
    isOpenquality: {
        type: Boolean,
        default: true
    }
})

const videoRef = ref(null)
const containerRef = ref(null)
const isPlaying = ref(false)
const showControls = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(1)
const isMuted = ref(false)
const isFullscreen = ref(false)
const hideControlsTimeout = ref(null)
const isControlsHovered = ref(false)
const bufferProgress = ref(0)
const playbackRate = ref(1)
const isquality = ref('Auto')
const hls = ref(null)
const availableQualities = ref(['Auto'])

const formattedCurrentTime = computed(() => formatTime(currentTime.value))
const formattedDuration = computed(() => formatTime(duration.value))
const progressPercentage = computed(() => (currentTime.value / duration.value) * 100 || 0)

// Format time from seconds to MM:SS
function formatTime(timeInSeconds) {
    if (!timeInSeconds) return '0:00'

    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

// Video control functions
function togglePlay() {
    if (!videoRef.value) return

    if (videoRef.value.paused) {
        videoRef.value.play()
        isPlaying.value = true
    } else {
        videoRef.value.pause()
        isPlaying.value = false
    }

    resetControlsTimer()
}

function updateVolume(value) {
    if (!videoRef.value) return

    volume.value = value
    videoRef.value.volume = value
    isMuted.value = value === 0
}

function toggleMute() {
    if (!videoRef.value) return

    if (isMuted.value) {
        isMuted.value = false
        videoRef.value.volume = volume.value || 1
    } else {
        isMuted.value = true
        videoRef.value.volume = 0
    }
}

function setProgress(value) {
    if (!videoRef.value || !duration.value) return

    const newTime = (value / 100) * duration.value
    videoRef.value.currentTime = newTime
    currentTime.value = newTime
}

function toggleFullscreen() {
    if (!containerRef.value) return

    if (!document.fullscreenElement) {
        containerRef.value.requestFullscreen().then(() => {
            isFullscreen.value = true
        }).catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`)
        })
    } else {
        document.exitFullscreen().then(() => {
            isFullscreen.value = false
        })
    }
}

function setPlaybackRate(rate) {
    if (!videoRef.value) return

    playbackRate.value = rate
    videoRef.value.playbackRate = rate
}

function setQuality(quality) {
    if (!videoRef.value) return
    isquality.value = quality

    if (hls.value) {
        const levels = hls.value.levels
        if (quality === 'Auto') {
            hls.value.currentLevel = -1 // Auto quality
        } else {
            // Find the closest quality level
            const targetHeight = parseInt(quality)
            const level = levels.findIndex(level => level.height === targetHeight)
            if (level !== -1) {
                hls.value.currentLevel = level
            }
        }
    }
}

// Control visibility handling
function resetControlsTimer() {
    if (hideControlsTimeout.value) {
        clearTimeout(hideControlsTimeout.value)
    }

    showControls.value = true

    if (isPlaying.value && !isControlsHovered.value) {
        hideControlsTimeout.value = setTimeout(() => {
            showControls.value = false
        }, 500)
    }
}

function onControlsMouseEnter() {
    isControlsHovered.value = true
    showControls.value = true
    if (hideControlsTimeout.value) {
        clearTimeout(hideControlsTimeout.value)
    }
}

function onControlsMouseLeave() {
    isControlsHovered.value = false
    resetControlsTimer()
}

// Video event handlers
function onTimeUpdate() {
    if (!videoRef.value) return

    currentTime.value = videoRef.value.currentTime

    // Update buffer progress
    if (videoRef.value.buffered.length > 0) {
        bufferProgress.value = (videoRef.value.buffered.end(0) / duration.value) * 100
    }
}

function onLoadedMetadata() {
    if (!videoRef.value) return

    duration.value = videoRef.value.duration
}

function onEnded() {
    isPlaying.value = false
    showControls.value = true
}

function onKeyDown(event) {
    if (!videoRef.value) return

    switch (event.key) {
        case 'ArrowRight':
            videoRef.value.currentTime += 10
            resetControlsTimer()
            event.preventDefault()
            break
        case 'ArrowLeft':
            videoRef.value.currentTime -= 10
            resetControlsTimer()
            event.preventDefault()
            break
    }
}

// Lifecycle hooks
onMounted(() => {
    document.addEventListener('keydown', onKeyDown)
    if (videoRef.value) {
        videoRef.value.volume = volume.value

        // HLS stream varsa
        if (props.hls_master) {
            if (Hls.isSupported()) {
                hls.value = new Hls({
                    maxBufferLength: 30,
                    maxMaxBufferLength: 600,
                    enableWorker: true,
                    lowLatencyMode: true,
                })
                hls.value.loadSource(props.hls_master)
                hls.value.attachMedia(videoRef.value)

                hls.value.on(Hls.Events.MANIFEST_PARSED, () => {
                    // Get unique quality levels and sort them
                    const qualities = hls.value.levels
                        .map(level => level.height)
                        .filter((height, index, self) => self.indexOf(height) === index)
                        .sort((a, b) => b - a)

                    availableQualities.value = ['Auto', ...qualities.map(height => `${height}p`)]
                })
            } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
                // iOS Safari
                videoRef.value.src = props.hls_master
            } else {
                console.error('HLS desteklenmiyor')
            }
        }
    }
})

onUnmounted(() => {
    document.removeEventListener('keydown', onKeyDown)
    if (hideControlsTimeout.value) {
        clearTimeout(hideControlsTimeout.value)
    }
    if (hls.value) {
        hls.value.destroy()
    }
})

watch(isPlaying, (newValue) => {
    resetControlsTimer()
})
</script>

<template>
    <div ref="containerRef" class="relative w-full h-full bg-black" @mousemove="resetControlsTimer"
        @mouseleave="resetControlsTimer">
        <!-- Video Element -->
        <video ref="videoRef" :src="!props.hls_master ? props.videoSource : undefined" class="w-full h-full rounded-2xl"
            @click="togglePlay" @timeupdate="onTimeUpdate" @loadedmetadata="onLoadedMetadata" @ended="onEnded"
            @play="isPlaying = true" @pause="isPlaying = false"></video>

        <!-- Play/Pause Overlay -->
        <div v-if="!isPlaying"
            class="absolute inset-0 bottom-1/2 translate-y-1/2 flex items-center justify-center">
            <button @click="togglePlay"
                class="sm:w-20 w-14 sm:h-20 h-14 bg-player-gray bg-opacity-70 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-12 h-8 sm:w-12 w-8 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>

        <!-- Video Controls -->
        <VideoControls v-show="showControls" :isPlaying="isPlaying" :currentTime="formattedCurrentTime"
            :duration="formattedDuration" :progress="progressPercentage" :bufferProgress="bufferProgress"
            :volume="volume" :isMuted="isMuted" :isFullscreen="isFullscreen" :playbackRate="playbackRate"
            :isquality="isquality" :isOpenquality="isOpenquality" :availableQualities="availableQualities"
            @set-quality="setQuality" @play="togglePlay" @seek="setProgress" @volume-change="updateVolume"
            @toggle-mute="toggleMute" @toggle-fullscreen="toggleFullscreen" @set-playback-rate="setPlaybackRate"
            @mouseenter="onControlsMouseEnter" @mouseleave="onControlsMouseLeave" />
    </div>

</template>