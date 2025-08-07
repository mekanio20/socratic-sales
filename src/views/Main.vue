<template>
    <div class="min-h-screen bg-black text-white overflow-x-hidden">
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
                        For Infopreneurs, Coaches, & Consultants
                    </h2>
                </div>
            </div>
            <!-- Hero Section -->
            <section ref="heroSection" class="max-w-[1000px] mx-auto px-4 text-center">
                <h2 class="text-[32px] sm:text-[40px] font-sans leading-tight mb-10 sm:mb-20 bottom_scroll">
                    Would You Like Me To Work 1:1 With You and Install My 5 Info/Coaching Scaling Systems?
                </h2>

                <!-- Hero Video -->
                <div class="relative mb-12 max-w-4xl mx-auto bottom_scroll">
                    <div class="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl font-inter relative">
                        <vue-plyr class="w-full h-full">
                            <video ref="heroVideo" playsinline controls preload="auto"
                                class="w-full h-full object-cover" :muted="isHeroMuted" autoplay>
                                <source src="/videos/demo.mp4" type="video/mp4" />
                                Your browser does not support the video element.
                            </video>
                        </vue-plyr>
                        <button v-if="isHeroMuted" @click="unmuteHeroVideo"
                            class="absolute top-4 right-4 z-10 bg-black/60 rounded-full p-3 hover:bg-black/80 transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 9V15H9L14 20V4L9 9H5Z" fill="currentColor" />

                                <line x1="3" y1="3" x2="21" y2="21" stroke="red" stroke-width="2" />
                            </svg>
                        </button>
                    </div>
                </div>

                <Button name="CLICK HERE TO APPLY NOW" @click="handleClick" />
            </section>
        </div>

        <!-- Main Content -->
        <div>

            <!-- Testimonials Section -->
            <section ref="testimonialsSection" class="container mx-auto py-20 px-4">
                <h2
                    class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-10 bottom_scroll">
                    Hear From Our Clients
                </h2>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <VideoCart v-for="(testimonial, index) in 3" :key="index" :id="index" name="Davis Pfaff"
                        desc="Co-Founder of Pfaff Brothers" class="bottom_scroll" />
                </div>
            </section>

            <!-- Calendly & Inputs -->
            <section class="container mx-auto py-20 px-4">
                <Calendly />
            </section>

            <section class="container mx-auto py-20 px-4">
                <h2
                    class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-10 bottom_scroll">
                    Fill in the forms to apply
                </h2>
            </section>

            <!-- Discovery Call Section -->
            <section class="py-20 relative px-4 overflow-hidden">
                <div class="absolute -top-20 left-0 w-[100px] sm:w-[200px] h-[300px] sm:h-[700px]">
                    <img class="w-full h-full object-cover" src="/images/socrates.png" />
                </div>
                <div class="absolute -top-20 right-0 w-[100px] sm:w-[200px] h-[300px] sm:h-[700px]">
                    <img class="w-full h-full object-cover scale-x-[-1]" src="/images/socrates.png" />
                </div>

                <div class="container mx-auto">
                    <h2
                        class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-10 bottom_scroll">
                        What to Expect on Your Discovery Call
                    </h2>

                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
                        <SimpleCart v-for="(item, index) in simpleCarts" :key="index" :data="item" />
                    </div>

                    <div class="flex items-center justify-center pt-10">
                        <Button name="Apply now" @click="handleClick" />
                    </div>
                </div>
            </section>

            <!-- Results Section -->
            <section class="py-20 relative px-4 overflow-hidden">
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
                    class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-10 bottom_scroll">
                    Results We Have Gotten
                </h2>

                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-10">
                        <VideoCart v-for="(testimonial, index) in 8" :key="index" name="Davis Pfaff"
                            desc="Co-Founder of Pfaff Brothers" class="bottom_scroll" />
                    </div>

                    <div class="flex items-center justify-center pt-14">
                        <Button name="Apply now" @click="handleClick" />
                    </div>
                </div>
            </section>

            <!-- Community CTA -->
            <section class="py-20 px-4">
                <BgFixed>
                    <div
                        class="h-[500px] flex flex-col items-center justify-center space-y-10 sm:space-y-20 text-center">
                        <h2 class="text-[36px] sm:text-[56px] font-sans font-medium leading-tight bottom_scroll">
                            Join Our Free Community
                        </h2>
                        <p class="text-[#8A8F98] max-w-[660px]">
                            Our mission is to support your business at every stage by providing expert guidance,
                            rigorous analysis, and hands-on support.
                        </p>
                        <Button name="Join community" @click="handleClick" />
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

                <div class="flex items-center justify-center pt-14">
                    <Button name="Apply now" @click="handleClick" />
                </div>
            </section>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import ScrollReveal from 'scrollreveal'
import { ref, onMounted } from 'vue'
const router = useRouter()
// Reactive refs
const isMenuOpen = ref(false)
const heroSection = ref(null)
const testimonialsSection = ref(null)
const playingVideo = ref(null)

const heroVideo = ref(null)
const isHeroMuted = ref(true)
const unmuteHeroVideo = () => {
    if (heroVideo.value) {
        heroVideo.value.muted = false
        isHeroMuted.value = false
    }
}

const simpleCarts = ref([
    {
        id: 1,
        name: 'Negative Acquisition Flywheel',
        desc: 'Get paid to acquire customers. Our system flips the model - turning content into both revenue and demand. You install it. ',
        icon: '/icons/box.svg'
    },
    {
        id: 2,
        name: 'Negative Acquisition Flywheel',
        desc: 'Get paid to acquire customers. Our system flips the model - turning content into both revenue and demand. You install it. ',
        icon: '/icons/box.svg'
    },
    {
        id: 3,
        name: 'Negative Acquisition Flywheel',
        desc: 'Get paid to acquire customers. Our system flips the model - turning content into both revenue and demand. You install it. ',
        icon: '/icons/box.svg'
    },
    {
        id: 4,
        name: 'Negative Acquisition Flywheel',
        desc: 'Get paid to acquire customers. Our system flips the model - turning content into both revenue and demand. You install it. ',
        icon: '/icons/box.svg'
    },
])

const handleClick = () => {
    router.push({ name: 'Schedule' })
}

// Intersection observer for animations
const { stop: stopHeroObserver } = useIntersectionObserver(
    heroSection,
    ([{ isIntersecting }]) => {
        if (isIntersecting) {
            // Hero animation trigger
        }
    }
)

const { stop: stopTestimonialsObserver } = useIntersectionObserver(
    testimonialsSection,
    ([{ isIntersecting }]) => {
        if (isIntersecting) {
            // Testimonials animation trigger
        }
    }
)

// Mock video play function
const playVideo = (index) => {
    playingVideo.value = playingVideo.value === index ? null : index
}

// Menu toggle
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
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
})
</script>