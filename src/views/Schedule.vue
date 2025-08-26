<template>
    <div class="min-h-screen bg-black text-white overflow-x-hidden">
        <!-- Header -->
        <Header />

        <div class="relative h-[900px] -mt-28 mb-20 overflow-hidden">
            <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
                <source src="/videos/bg.mp4" type="video/mp4" />
            </video>
            <div class="relative z-10 h-full py-16 px-4 sm:px-6 lg:px-8 mt-28">
                <h1 class="text-[40px] text-center font-medium font-sans leading-tight lg:mb-40 mb-48 bottom_scroll">
                    Schedule Your Socratic Call
                </h1>
                <section class="container mx-auto -mt-40">
                    <Calendly />
                </section>
            </div>
        </div>

        <div class="mb-10">
            <h1 class="text-[34px] text-center text-gradient font-medium font-sans mb-10">Trusted by:</h1>
            <Swiper />
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import ScrollReveal from 'scrollreveal'
// Reactive refs
const isMenuOpen = ref(false)
const heroSection = ref(null)
const testimonialsSection = ref(null)
const playingVideo = ref(null)

const simpleCarts = ref([
    {
        id: 1,
        name: 'Patrice Mougeot',
        desc: '“It’s the best decision that we’ve done as a company in our field. It’s been 2 weeks since I started with Arslan and we’ve actually booked over $26.000 in 2 weeks, our revenue has bumped up dramatically.”',
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
})
</script>