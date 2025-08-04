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

      <section class="py-20 relative">
        <!-- Left image -->
        <div class="absolute -top-20 left-0 w-[200px] h-[700px]">
          <img class="w-full h-full object-cover" src="/images/socrates.png">
        </div>
        <!-- Left image -->
        <div class="absolute -top-20 right-0 w-[200px] h-[700px]">
          <img class="w-full h-full object-cover scale-x-[-1]" src="/images/socrates.png">
        </div>
        <div class="container mx-auto">
          <h2 class="text-[56px] font-sans font-medium text-center leading-tight mb-10" v-motion-slide-visible-once-left
            :delay="300">What to Expect on Your Discovery Call
          </h2>

          <div class="grid grid-cols-2 gap-2 pt-10">
            <SimpleCart v-for="(item, index) in simpleCarts" :key="index" :data="item" />
          </div>
          <div class="flex items-center justify-center pt-10">
            <Button name="Apply now" />
          </div>
        </div>
      </section>

      <section class="py-20 relative">
        <!-- Left image -->
        <div class="absolute left-0 w-[100px] h-[200px]">
          <img class="w-full h-full object-cover" src="/images/mask.png">
        </div>
        <!-- Left image -->
        <div class="absolute right-0 w-[100px] h-[200px]">
          <img class="w-full h-full object-cover scale-x-[-1]" src="/images/mask.png">
        </div>
        <div class="flex items-center justify-center">
          <div class="w-[120px] h-[108px]">
            <img class="w-full h-full object-cover" src="/images/sezar.png">
          </div>
        </div>
        <h2 class="text-[56px] font-sans font-medium text-center leading-tight mb-10" v-motion-slide-visible-once-left
          :delay="300">Results We Have Gotten
        </h2>
        <div class="container mx-auto">
          <div class="grid grid-cols-4 gap-8 pt-10">
            <VideoCart v-for="(testimonial, index) in 8" :key="index" name="Davis Pfaff"
              desc="Co-Founder of Pfaff Brothers" v-motion-slide-visible-once-bottom :delay="300 + (index * 100)" />
          </div>
          <div class="flex items-center justify-center pt-14">
            <Button name="Apply now" />
          </div>
        </div>
      </section>

      <section class="py-20">
        <BgFixed>
          <div class="h-[500px] flex flex-col items-center justify-center space-y-20">
            <h2 class="text-[56px] font-sans font-medium text-center leading-tight" v-motion-slide-visible-once-left
              :delay="300">Join Our Free Community
            </h2>
            <p class="text-[#8A8F98] max-w-[660px] text-center transform transition-all duration-700">
              Our mission is to support your business at every stage by providing expert guidance, rigorous analysis,
              and hands-on support.
            </p>
            <Button name="join community" />
          </div>
        </BgFixed>
      </section>

      <section class="pb-10">
        <h2 class="text-[56px] font-sans font-medium text-center leading-tight mb-20" v-motion-slide-visible-once-left
          :delay="300">Common Questions
        </h2>
        <Accordion />
        <div class="flex items-center justify-center pt-14">
            <Button name="Apply now" />
          </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />

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