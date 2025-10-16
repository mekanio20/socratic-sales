<template>
    <div class="min-h-screen bg-black text-white overflow-x-hidden mt-[70px]">
        <!-- Header -->
        <Header />

        <div class="relative h-[900px] -mt-28 mb-20 overflow-hidden">
            <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
                <source src="/videos/bg.mp4" type="video/mp4" />
            </video>
            <div class="relative z-10 h-full py-16 px-4 sm:px-6 lg:px-8 mt-28">
                <div class="flex sm:flex-row sm:space-x-4 flex-col items-center justify-center lg:mb-40 mb-56">
                    <h1 class="text-[40px] text-center font-medium font-sans leading-tight bottom_scroll">
                        Schedule Your
                    </h1>
                    <h1 class="text-[40px] text-center font-medium font-sans leading-tight bottom_scroll">
                        Socratic Call
                    </h1>
                </div>
                <section class="container mx-auto -mt-40">
                    <Calendly />
                </section>
            </div>
        </div>

        <div class="">
            <h1 class="sm:text-[34px] text-[28px] text-center text-gradient font-medium font-sans sm:mb-10">Trusted by:</h1>
            <Swiper />
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import ScrollReveal from 'scrollreveal'

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