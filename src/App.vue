<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- Header -->
    <Header />
    <div class="flex items-center justify-center mb-10">
      <div class="flex items-center space-x-4 border border-[#626262] pr-10 pl-6 py-1 rounded-full text-bg-gradient">
        <img class="w-8" src="/icons/dote.svg" />
        <h2 class="w-fit font-inter text-[15px]">
          For Infopreneurs, Coaches, & Consultants
        </h2>
      </div>
    </div>
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section ref="heroSection" class="max-w-[1000px] mx-auto px-4 text-center">
        <!-- Main Headline -->
        <h2 class="text-[40px] font-sans leading-tight mb-20" v-motion-slide-visible-once-left :delay="300">
          Would You Like Me To Work 1:1 With You and Install My 5 Info/Coaching Scaling Systems?
        </h2>

        <!-- Hero Image -->
        <div class="relative mb-12 max-w-4xl mx-auto" v-motion-fade-visible-once :delay="500">
          <div class="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <img src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
              alt="Business meeting in conference room"
              class="w-full h-full object-cover opacity-80 hover:opacity-90 transition-opacity duration-500"
              loading="lazy">
          </div>
        </div>

        <Button name="CLICK HERE TO APPLY NOW" />
      </section>

      <!-- Testimonials Section -->
      <section ref="testimonialsSection" class="container mx-auto py-20">
        <!-- Section Title -->
        <h2 class="text-[56px] font-sans font-medium text-center leading-tight mb-10" v-motion-slide-visible-once-left
          :delay="300">
          Hear From Our Clients
        </h2>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <VideoCart v-for="(testimonial, index) in 3" :key="index" name="Davis Pfaff"
            desc="Co-Founder of Pfaff Brothers" v-motion-slide-visible-once-bottom :delay="300 + (index * 100)" />
        </div>

      </section>

      <section class="container mx-auto py-20">
        <h2 class="text-[56px] font-sans font-medium text-center leading-tight mb-10" v-motion-slide-visible-once-left
          :delay="300">Fill in the forms to apply
        </h2>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-12 mt-20">
      <div class="container mx-auto px-4 text-center">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div class="w-3 h-3 bg-black rounded-full"></div>
          </div>
          <span class="text-lg font-bold tracking-wider">SOCRATIC SALES</span>
        </div>
        <p class="text-gray-400 text-sm">
          © 2024 Socratic Sales. All rights reserved.
        </p>
      </div>
    </footer>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-95 z-50 lg:hidden" v-motion-fade
      @click="toggleMenu">
      <div class="flex items-center justify-center h-full">
        <nav class="text-center space-y-8">
          <a href="#"
            class="block text-2xl font-semibold hover:text-orange-custom transition-colors duration-300">Home</a>
          <a href="#"
            class="block text-2xl font-semibold hover:text-orange-custom transition-colors duration-300">About</a>
          <a href="#"
            class="block text-2xl font-semibold hover:text-orange-custom transition-colors duration-300">Services</a>
          <a href="#"
            class="block text-2xl font-semibold hover:text-orange-custom transition-colors duration-300">Contact</a>
        </nav>
      </div>
    </div>

  </div>
</template>

<script setup>
// Reactive refs
const isMenuOpen = ref(false)
const heroSection = ref(null)
const testimonialsSection = ref(null)
const playingVideo = ref(null)

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
})
</script>