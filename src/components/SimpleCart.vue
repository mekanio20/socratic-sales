<template>
    <div class="bg-black flex items-center justify-center p-4">
        <div class="w-full transform transition-all duration-1000 ease-out"
            :class="{ 'translate-y-4 opacity-0': !isLoaded, 'translate-y-0 opacity-100': isLoaded }">
            <!-- Main Card -->
            <article
                class="bg-[#0D0D0D] backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 sm:p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-gray-900/90 group"
                @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <!-- Icon -->
                <div class="mb-8">
                    <div class="w-[18px] h-[20px] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        :class="{ 'animate-pulse': isHovered }">
                        <img :src="data.icon" class="w-full h-full" />
                    </div>
                </div>

                <!-- Title -->
                <h1 class="text-white text-[24px] font-medium mb-8 leading-tight tracking-tight">
                    <span class="inline-block transform transition-all duration-500 hover:scale-105"
                        :class="{ 'animate-fade-in-up': isLoaded }" :style="{ animationDelay: '200ms' }">
                        {{ data.name }}
                    </span>
                </h1>

                <!-- Description -->
                <p class="text-[#8A8F98] max-w-3xl transform transition-all duration-700"
                    :class="{ 'animate-fade-in-up': isLoaded }" :style="{ animationDelay: '800ms' }">
                    {{ data.desc }}
                </p>

                <!-- Hover Effect Overlay -->
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"
                    :class="{ 'opacity-100': isHovered }"></div>
            </article>
        </div>
    </div>
</template>

<script setup>
const isLoaded = ref(false)
const isHovered = ref(false)

defineProps({
    data: {
        type: Object,
        required: true
    }
})

const handleMouseEnter = () => {
    isHovered.value = true
}

const handleMouseLeave = () => {
    isHovered.value = false
}

onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true
    }, 100)
})
</script>

<style scoped>
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
}

.shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
}
</style>