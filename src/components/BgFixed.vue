<template>
    <div class="relative h-[600px] mb-20 overflow-hidden">
        <!-- Background Video -->
        <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
            <source src="/videos/bg.mp4" type="video/mp4" />
        </video>

        <!-- Content Overlay -->
        <div class="relative z-10 h-full py-16 px-4 sm:px-6 lg:px-8 flex items-center">
            <div class="container mx-auto">
                <slot></slot>
            </div>
        </div>
    </div>
</template>