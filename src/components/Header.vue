<template>
    <header class="relative z-50 mb-10">
        <nav class="border-b border-[#4F4F4F] bg-black px-4 py-3" v-motion-fade-in-down :delay="100">
            <!-- Logo & Title Container -->
            <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <!-- Logo -->
                <div class="w-[48px] h-[42px] cursor-pointer" @click="handleClick">
                    <img src="/icons/logo.png" alt="Socratic Sales Logo" class="object-contain" />
                </div>

                <!-- Title -->
                <h1 class="text-white text-center sm:text-left text-base font-montserrat font-medium tracking-wider cursor-pointer"
                    @click="handleClick">
                    SOCRATIC SALES
                </h1>
            </div>
        </nav>
    </header>
</template>

<script setup>
const router = useRouter()
const handleClick = () => {
    router.push({ name: 'Main' })
}
</script>