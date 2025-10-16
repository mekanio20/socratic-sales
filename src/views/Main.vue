<template>
    <div class="min-h-screen bg-black text-white overflow-x-hidden mt-[70px]">
        <!-- Header -->
        <Header />

        <div class="relative h-auto pb-20">
            <!-- Background Video -->
            <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
                <source src="/videos/bg.mp4" type="video/mp4" />
            </video>

            <div class="flex items-center justify-center mb-10 px-4 bottom_scroll pt-10">
                <div
                    class="flex items-center space-x-4 border border-[#626262] pr-6 sm:pr-10 pl-4 sm:pl-6 py-1 rounded-full text-bg-gradient text-center">
                    <div class="w-2 h-2 bg-white rounded-full white-pulse-shadow"></div>
                    <h2 class="w-fit font-inter sm:text-[15px] text-[12px] text-wrap">
                        For Agency Owners, Coaches, & Closers
                    </h2>
                </div>
            </div>
            <!-- Hero Section -->
            <section ref="heroSection" class="max-w-[1000px] mx-auto px-4 text-center">
                <h2 class="text-[32px] sm:text-[36px] font-sans leading-tight bottom_scroll">
                    Steal My Human-Brain Based Closing Method That <span class="text-gradient font-semibold">100+
                        Businesses
                        Use</span> To Turn Basic <span class="text-gradient font-semibold">Conversations Into
                        4–5 Figure Clients</span> Every Month.
                </h2>
                <p class="font-inter text-lg text-white my-[30px] leading-[100%] bottom_scroll">
                    Watch the video below to see how it works.
                </p>

                <!-- Hero Video -->
                <div class="relative mb-[30px] max-w-4xl mx-auto bottom_scroll">
                    <div class="relative w-full bg-gray-900 rounded-lg overflow-hidden font-inter">

                        <!-- Plyr Video Player -->
                        <vue-plyr class="absolute inset-0 w-full h-full" :options="plyrOptions">
                            <video id="hero-video" ref="heroVideo" playsinline webkit-playsinline x5-playsinline
                                autoplay controls preload="auto" class="w-full h-full object-contain"
                                :muted="isHeroMuted" @loadedmetadata="onVideoLoaded">
                                <source src="/3/main.mp4" type="video/mp4" />
                                Your browser does not support the video element.
                            </video>
                        </vue-plyr>

                        <!-- Custom Mute Button -->
                        <Mute v-if="isHeroMuted" class="sm:w-[40%] w-[35%]" @click="toggleHeroMute" />
                    </div>
                </div>

                <Button name="CLICK HERE TO APPLY NOW" @click="handleClick" />
            </section>
        </div>

        <!-- Main Content -->
        <div>

            <!-- Testimonials Section -->
            <section ref="testimonialsSection" class="container mx-auto pt-20 px-4">
                <h2
                    class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-10 bottom_scroll">
                    What Our Clients Are Saying
                </h2>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <VideoCart v-for="(item, index) in testimonials" :key="index" :id="item.id"
                        :videoSource="item.video" :poster="item.poster" :name="item.name" :desc="item.desc"
                        class="bottom_scroll" />
                </div>
            </section>

            <!-- Calendly -->
            <section class="container mx-auto py-20 px-4">
                <div class="flex sm:flex-row sm:space-x-4 flex-col items-center justify-center sm:mb-0 mb-16">
                    <h1 class="text-[40px] text-center font-medium font-sans leading-tight bottom_scroll">
                        Schedule Your
                    </h1>
                    <h1 class="text-[40px] text-center font-medium font-sans leading-tight bottom_scroll">
                        Socratic Call
                    </h1>
                </div>
                <Calendly />
            </section>

            <!-- Discovery Call Section -->
            <section class="relative px-4 overflow-hidden">
                <div class="absolute -top-20 left-0 w-[200px] h-[700px]">
                    <img class="w-full h-full object-cover" src="/images/socrates.png" />
                </div>
                <div class="absolute -top-20 right-0 w-[200px] h-[700px]">
                    <img class="w-full h-full object-cover scale-x-[-1]" src="/images/socrates.png" />
                </div>

                <div class="container mx-auto">
                    <h2
                        class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-10 bottom_scroll">
                        What You’ll Unlock With The Socratic Sales Method
                    </h2>

                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-10 pt-10">
                        <SimpleCart v-for="(item, index) in simpleCarts" :key="index" :data="item" />
                    </div>

                    <div class="flex items-center justify-center pt-10">
                        <Button name="Apply now" @click="handleClick" />
                    </div>
                </div>
            </section>

            <!-- Results Section -->
            <section class="pt-[100px] pb-20 relative px-4 overflow-hidden">
                <div class="absolute left-0 w-[60px] sm:w-[100px] h-[120px] sm:h-[200px]">
                    <img class="w-full h-full object-cover" src="/images/mask.png" />
                </div>
                <div class="absolute right-0 w-[60px] sm:w-[100px] h-[120px] sm:h-[200px]">
                    <img class="w-full h-full object-cover scale-x-[-1]" src="/images/mask.png" />
                </div>

                <div class="flex items-center justify-center">
                    <div class="w-[80px] sm:w-[120px] h-[80px] sm:h-[108px]">
                        <img class="w-full h-full object-cover" src="/images/sezar.png" />
                    </div>
                </div>

                <h2
                    class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-[50px] bottom_scroll">
                    Hear From Our Clients
                </h2>

                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                        <VideoCart v-for="(item, index) in videos" :key="index" :id="item.id" :videoSource="item.video"
                            :poster="item.poster" :name="item.name" class="bottom_scroll" />
                    </div>

                    <div class="flex items-center justify-center pt-14">
                        <Button name="Apply now" @click="handleClick" />
                    </div>
                </div>
            </section>

            <!-- Community CTA -->
            <section class="px-4">
                <BgFixed>
                    <div
                        class="h-[500px] flex flex-col items-center justify-center space-y-10 sm:space-y-14 text-center">
                        <h2 class="text-[28px] sm:text-[56px] font-sans font-medium leading-tight bottom_scroll">
                            Join The Free Socratic Sales Community
                        </h2>
                        <p class="text-white font-inter sm:text-base text-sm font-medium max-w-[660px]">
                            Sharpen your closing skills, learn psychology-driven sales, and
                            connect with other business owners mastering the Socratic Method.
                        </p>
                        <Button name="Join community" @click="joinCommunity" />
                    </div>
                </BgFixed>
            </section>

            <!-- FAQ Section -->
            <section class="pb-10 px-4">
                <h2
                    class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-10 sm:mb-20 bottom_scroll">
                    Common Questions
                </h2>

                <Accordion />

                <div class="flex items-center justify-center pt-[50px] container mx-auto px-4 sm:px-0">
                    <Button name="Apply now" @click="handleClick" />
                </div>
            </section>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'
const router = useRouter()
// Reactive refs
const heroSection = ref(null)
const testimonialsSection = ref(null)

const heroVideo = ref(null)
const isHeroMuted = ref(true)
const videoStarted = ref(false)

// Plyr options - Mobil uyumlu ayarlar
const plyrOptions = {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    clickToPlay: true,
    hideControls: false,
    resetOnEnd: true,
    fullscreen: {
        enabled: true,
        fallback: true,
        iosNative: true,
        container: null
    },
    ratio: '16:9',
    storage: { enabled: false },
    muted: true,
    playsinline: true,
    autopause: true
}

const toggleHeroMute = () => {
    isHeroMuted.value = !isHeroMuted.value
    videoStarted.value = true

    if (heroVideo.value) {
        heroVideo.value.muted = isHeroMuted.value

        // Plyr instance'a da uygula
        const plyrInstance = heroVideo.value.closest('.plyr')?.plyr
        if (plyrInstance) {
            plyrInstance.muted = isHeroMuted.value
            // Unmute edildiğinde video'yu başlat
            if (!isHeroMuted.value && plyrInstance.paused) {
                plyrInstance.play().catch(err => {
                    console.log('Autoplay prevented:', err)
                })
            }
        }
    }
}

const onVideoLoaded = () => {
    if (heroVideo.value) {
        heroVideo.value.muted = true
        isHeroMuted.value = true
    }
}

onMounted(() => {
    // Video element hazır olduğunda
    if (heroVideo.value) {
        heroVideo.value.muted = true
        isHeroMuted.value = true

        // Plyr yüklendikten sonra ayarları uygula
        setTimeout(() => {
            const plyrInstance = heroVideo.value?.closest('.plyr')?.plyr
            if (plyrInstance) {
                plyrInstance.muted = true

                // Video başlatıldığında custom mute button'u gizle
                plyrInstance.on('play', () => {
                    videoStarted.value = true
                })

                // Fullscreen olaylarını dinle
                plyrInstance.on('enterfullscreen', () => {
                    // iOS Safari'de object-fit ayarını koru
                    if (heroVideo.value) {
                        heroVideo.value.style.objectFit = 'contain'
                    }
                })
            }
        }, 100)
    }
})

const testimonials = ref([
    {
        id: 1,
        video: '/3/1.mp4',
        poster: '/3/1.webp',
        name: 'Patrice Mougeot',
        desc: 'Co-Founder of Moojo Autospa'
    },
    {
        id: 2,
        video: '/3/2.mp4',
        poster: '/3/2.webp',
        name: 'Katherine Jones',
        desc: 'Founder of Green Volts Media'
    },
    {
        id: 3,
        video: '/3/3.mp4',
        poster: '/3/3.webp',
        name: 'Michael DiBari',
        desc: 'Founder of Dicohr Marketing'
    }
])

const videos = ref([
    {
        id: 4,
        video: '/6/1.mp4',
        poster: '/6/1.webp',
        name: 'Goce Spiroski'
    },
    {
        id: 5,
        video: '/6/2.mp4',
        poster: '/6/2.webp',
        name: 'Aiden Oosahwe'
    },
    {
        id: 6,
        video: '/6/3.mp4',
        poster: '/6/3.webp',
        name: 'Marius Bernard'
    },
    {
        id: 7,
        video: '/6/4.mp4',
        poster: '/6/4.webp',
        name: 'Noah Christopher'
    },
    {
        id: 8,
        video: '/6/5.mp4',
        poster: '/6/5.webp',
        name: 'Mitchell Parrish'
    },
    {
        id: 9,
        video: '/6/6.mp4',
        poster: '/6/6.webp',
        name: 'Emil Delster'
    }
])

const simpleCarts = ref([
    {
        id: 1,
        name: 'Socratic Objection Flip',
        desc: 'Turn objections into opportunities using brain-based questioning that makes prospects sell themselves.',
        icon: '/icons/question.svg'
    },
    {
        id: 2,
        name: 'Socratic Closing Psychology',
        desc: 'Discover how to guide conversations naturally. No scripts, no pressure, just high-ticket clients saying “yes.”',
        icon: '/icons/streamline_target.svg'
    },
    {
        id: 3,
        name: 'Socratic Money Flow',
        desc: 'Build predictable cash flow signing 4–5 figure business owners every month by mastering how people really decide.',
        icon: '/icons/statistic.svg'
    },
    {
        id: 4,
        name: 'Socratic Mastery',
        desc: 'Move beyond quick wins. Master a psychology driven framework you will use for life in sales, negotiations, and influence.',
        icon: '/icons/sahmat.svg'
    },
])

const handleClick = () => {
    router.push({ name: 'Schedule' })
}

const joinCommunity = () => {
    window.open('https://whop.com/socraticsales/', '_blank')
}

onMounted(() => {
    // Initialize any additional animations
    ScrollReveal().reveal('.bottom_scroll', {
        distance: '40px',
        duration: 900,
        easing: 'ease',
        origin: 'bottom',
        interval: 120,
        opacity: 0,
        reset: true
    });

    if (heroVideo.value) {
        heroVideo.value.muted = true
        isHeroMuted.value = true
    }

    setTimeout(() => {
        if (heroVideo.value) {
            const plyrInstance = heroVideo.value.closest('.plyr')?.plyr
            if (plyrInstance) {
                plyrInstance.muted = true
            }
        }
    }, 200)
})
</script>

<style scoped>
/* Plyr özelleştirmeleri */
:deep(.plyr) {
    width: 100%;
    height: 100%;
}

:deep(.plyr__video-wrapper) {
    background: #000;
}

:deep(.plyr video) {
    object-fit: contain !important;
    width: 100% !important;
    height: 100% !important;
}

/* Mobil cihazlarda play button'un daha görünür olması için */
:deep(.plyr__control--overlaid) {
    background: rgba(255, 255, 255, 0.9) !important;
    padding: 1.5rem !important;
}

:deep(.plyr__control--overlaid:hover) {
    background: rgba(255, 255, 255, 1) !important;
}

:deep(.plyr__control--overlaid svg) {
    width: 2rem !important;
    height: 2rem !important;
}

/* Fullscreen modunda video'nun doğru görünmesi */
:deep(.plyr--fullscreen video) {
    object-fit: contain !important;
    max-height: 100vh !important;
}

/* iOS Safari için özel düzeltmeler */
@supports (-webkit-touch-callout: none) {
    :deep(.plyr video) {
        object-fit: contain !important;
        -webkit-object-fit: contain !important;
    }

    :deep(.plyr--fullscreen video) {
        width: 100% !important;
        height: 100% !important;
    }
}

/* Android için */
@media screen and (max-width: 768px) {
    :deep(.plyr__control--overlaid) {
        padding: 2rem !important;
    }

    :deep(.plyr__control--overlaid svg) {
        width: 2.5rem !important;
        height: 2.5rem !important;
    }
}
</style>