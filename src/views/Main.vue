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
                        For Agencies, Coaches, & Closers
                    </h2>
                </div>
            </div>
            <!-- Hero Section -->
            <section ref="heroSection" class="max-w-[1300px] mx-auto px-4 text-center">
                <h2 class="text-[32px] sm:text-[40px] font-sans leading-tight bottom_scroll">
                    STEAL The Human-Brain Based Closing Method That 100+ Businesses Use To Turn Basic Conversations Into
                    4–5 Figure Clients Every Month.
                </h2>
                <p class="font-inter text-[#FFFFFFCC] my-14 leading-[100%] bottom_scroll">
                    If you don’t close clients, we don’t get paid. Watch the video below to see how it works.
                </p>

                <!-- Hero Video -->
                <div class="relative mb-12 max-w-4xl mx-auto bottom_scroll">
                    <div class="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl font-inter relative">
                        <vue-plyr class="w-full h-full">
                            <video id="hero-video" ref="heroVideo" playsinline controls preload="auto"
                                class="w-full h-full object-cover" :muted="isHeroMuted" autoplay>
                                <source src="/3/main.mp4" type="video/mp4" />
                                Your browser does not support the video element.
                            </video>
                        </vue-plyr>
                        <Mute class="sm:w-[40%] w-[35%]" v-if="isHeroMuted" @click="toggleHeroMute" />
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
                    What Our Clients Are Saying
                </h2>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <VideoCart v-for="(item, index) in testimonials" :key="index" :id="item.id"
                        :videoSource="item.video" :name="item.name" :desc="item.desc" class="bottom_scroll" />
                </div>
            </section>

            <!-- Calendly -->
            <section class="container mx-auto py-20 px-4">
                <h2
                    class="text-[36px] sm:text-[56px] font-sans font-medium text-center leading-tight mb-10 bottom_scroll">
                    Schedule Your Socratic Call
                </h2>
                <Calendly />
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
                        What You’ll Unlock With The Socratic Sales Method
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
                    Hear From Our Clients
                </h2>

                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-10">
                        <VideoCart v-for="(item, index) in videos" :key="index" :id="item.id" :videoSource="item.video"
                            :name="item.name" class="bottom_scroll" />
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
                            Join The Free Socratic Sales Community
                        </h2>
                        <p class="text-[#8A8F98] max-w-[660px]">
                            Sharpen your closing skills, learn psychology-driven sales, and connect with other business
                            owners mastering the Socratic Method.
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
const heroSection = ref(null)
const testimonialsSection = ref(null)

const heroVideo = ref(null)
const isHeroMuted = ref(true)

const toggleHeroMute = () => {
    isHeroMuted.value = !isHeroMuted.value
    
    if (heroVideo.value) {
        heroVideo.value.muted = isHeroMuted.value
        
        const plyrInstance = heroVideo.value.closest('.plyr')?.plyr
        if (plyrInstance) {
            plyrInstance.muted = isHeroMuted.value
        }
    }
}

const testimonials = ref([
    {
        id: 1,
        video: '/3/1.mp4',
        name: 'Patrice Mougeot',
        desc: 'Co-Founder of Moojo Autospa'
    },
    {
        id: 2,
        video: '/3/2.mp4',
        name: 'Katherine Jones',
        desc: 'Founder of Green Volts Media'
    },
    {
        id: 3,
        video: '/3/3.mp4',
        name: 'Michael DiBari',
        desc: 'Founder of Dicohr Marketing'
    }
])

const videos = ref([
    {
        id: 4,
        video: '/6/1.mp4',
        name: 'Goce Spiroski'
    },
    {
        id: 5,
        video: '/6/2.mp4',
        name: 'Aiden Oosahwe'
    },
    {
        id: 6,
        video: '/6/3.mp4',
        name: 'Marius Bernard'
    },
    {
        id: 7,
        video: '/6/4.mp4',
        name: 'Noah Christopher'
    },
    {
        id: 8,
        video: '/6/5.mp4',
        name: 'Mitchell Parrish'
    },
    {
        id: 9,
        video: '/6/6.mp4',
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