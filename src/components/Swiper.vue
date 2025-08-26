<template>
    <div class="bg-black px-4">
        <div class="max-w-7xl mx-auto font-inter">
            <!-- Trusted by Section -->
            <!-- <div class="text-center mb-16">
                <h2 class="text-gradient font-inter text-[26px] mb-8">Trusted by:</h2>

                <div class="flex justify-center items-center space-x-4 mb-12">
                    <div v-for="(avatar, index) in trustedAvatars" :key="index" @click="handleAvatarClick(avatar.id)"
                        class="w-[44px] h-[44px] rounded-full overflow-hidden p-1 border border-[#0D0D0D] hover:border-yellow-500 duration-300 cursor-pointer"
                        :class="getAvatarIsActive(avatar.id) ? 'border-yellow-500' : 'border-[#0D0D0D]'"
                        :style="{ animationDelay: `${index * 100}ms` }">
                        <img :src="avatar.image" :alt="avatar.name" class="w-full h-full object-cover rounded-full"
                            loading="lazy" />
                    </div>
                </div>
            </div> -->

            <!-- Testimonials Swiper -->
            <div class="relative bottom_scroll">
                <swiper :modules="modules" :slides-per-view="3" :space-between="30" :loop="true"
                    :loop-additional-slides="3" :autoplay="{
                    delay: 1000,
                    disableOnInteraction: false,
                }" :breakpoints="{
                    640: { slidesPerView: 1, spaceBetween: 30 },
                    700: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                    1280: { slidesPerView: 3, spaceBetween: 50 },
                }" class="testimonial-swiper" @swiper="onSwiper" @slide-change="onSlideChange">
                    <swiper-slide v-for="(testimonial, index) in testimonials" :key="index" class="h-auto">
                        <div class="testimonial-card bg-[#0D0D0D] backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:bg-[#0D0D0D] hover:border-[#FFB433]"
                            :class="{ 'featured-card': testimonial.featured }">
                            <!-- Quote -->
                            <div class="flex-1 mb-8">
                                <blockquote class="text-white text-[20px] font-medium leading-relaxed">
                                    {{ testimonial.quote }}
                                </blockquote>
                            </div>

                            <!-- Author -->
                            <div class="flex items-center space-x-4 mt-auto">
                                <div class="space-y-2">
                                    <h4 class="text-gradient font-inter font-semibold text-lg">{{ testimonial.author.name }}</h4>
                                    <p class="text-white text-sm">{{ testimonial.author.title }}</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const modules = [Navigation, Autoplay, EffectCoverflow]

// Trusted by avatars
const trustedAvatars = ref([
    { id: 1, name: 'Person 1', image: '/images/person-1.png' },
    { id: 2, name: 'Person 2', image: '/images/person-2.png' },
    { id: 3, name: 'Person 3', image: '/images/person-3.png' },
    { id: 4, name: 'Person 4', image: '/images/person-4.png' },
    { id: 5, name: 'Person 5', image: '/images/person-5.png' },
    { id: 6, name: 'Person 6', image: '/images/person-6.png' }
])

// Testimonials data
const testimonials = ref([
    {
        id: 1,
        quote: "“It’s the best decision that we’ve done as a company in our field. It’s been 2 weeks since I started with Arslan and we’ve actually booked over $26.000 in 2 weeks, our revenue has bumped up dramatically.”",
        author: {
            name: "Patrice Mougeot",
            title: "Co-Founder of Moojo Autospa",
            avatar: "/images/person-1.png"
        },
        featured: false
    },
    {
        id: 2,
        quote: "“It’s cutting maybe even years out of your trial and errors. He’s provided all the information and knowledge that I need to move forward, to just sit there and go through it bit by bit.”",
        author: {
            name: "Katherine Jones",
            title: "Founder of Green Volts Media",
            avatar: "/images/person-2.png"
        },
        featured: false
    },
    {
        id: 3,
        quote: '"I gotta say, it\'s the best decision I have ever made. Recently in the past 2 weeks I\'ve actually collected $ 5.500 for my first 2 clients. None of that would be possible without Arslan. Eternally grateful!"',
        author: {
            name: "Michael DiBari",
            title: "Founder of Dicohr Marketing",
            avatar: "/images/person-3.png"
        },
        featured: false
    },
    {
        id: 4,
        quote: "“It’s the best decision that we’ve done as a company in our field. It’s been 2 weeks since I started with Arslan and we’ve actually booked over $26.000 in 2 weeks, our revenue has bumped up dramatically.”",
        author: {
            name: "Patrice Mougeot",
            title: "Co-Founder of Moojo Autospa",
            avatar: "/images/person-1.png"
        },
        featured: false
    },
    {
        id: 5,
        quote: "“It’s cutting maybe even years out of your trial and errors. He’s provided all the information and knowledge that I need to move forward, to just sit there and go through it bit by bit.”",
        author: {
            name: "Katherine Jones",
            title: "Founder of Green Volts Media",
            avatar: "/images/person-2.png"
        },
        featured: false
    },
    {
        id: 6,
        quote: '"I gotta say, it\'s the best decision I have ever made. Recently in the past 2 weeks I\'ve actually collected $ 5.500 for my first 2 clients. None of that would be possible without Arslan. Eternally grateful!"',
        author: {
            name: "Michael DiBari",
            title: "Founder of Dicohr Marketing",
            avatar: "/images/person-3.png"
        },
        featured: false
    },

])

const handleAvatarClick = (avatarId) => {
    testimonials.value.forEach(t => t.featured = false)

    const index = testimonials.value.findIndex(t => t.id === avatarId)
    if (index !== -1) {
        testimonials.value[index].featured = true

        swiperInstance.value?.slideToLoop(index)
    }
}

const getAvatarIsActive = (id) => {
    return testimonials.value.some(t => t.id === id && t.featured)
}

const swiperInstance = ref(null)

const onSwiper = (swiper) => {
    swiperInstance.value = swiper
}

const onSlideChange = () => {
    console.log('slide change')
}

onMounted(() => {
    // Animation delays for trusted avatars
    const avatars = document.querySelectorAll('.w-12.h-12.rounded-full')
    avatars.forEach((avatar, index) => {
        avatar.style.animationDelay = `${index * 100}ms`
        avatar.classList.add('animate-fade-in-up')
    })
})
</script>

<style scoped>
/* Testimonial Swiper Custom Styles */
.testimonial-swiper {
    padding-top: 2rem;
}

.testimonial-swiper :deep(.swiper-slide) {
    height: auto;
    display: flex;
}

.testimonial-card {
    will-change: transform;
}

.featured-card {
    border-color: rgba(234, 179, 8, 0.3) !important;
    background: #0D0D0D !important;
    transform: scale(1.05);
}

.featured-card:hover {
    border-color: rgba(234, 179, 8, 0.5) !important;
    transform: scale(1.1) !important;
}

/* Avatar Animation */
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
    opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {

    .testimonial-card {
        padding: 1.5rem;
    }

    .featured-card {
        transform: none;
    }

    .featured-card:hover {
        transform: none;
    }
}

/* Smooth scrolling */
.testimonial-swiper :deep(.swiper-wrapper) {
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Loading skeleton animation */
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>