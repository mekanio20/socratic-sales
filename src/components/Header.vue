<template>
    <header class="fixed top-0 right-0 left-0 z-40">
        <nav class="border-b border-[#4F4F4F] bg-black px-4 py-3">
            <!-- Logo & Title Container -->
            <div class="flex justify-center items-center">
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