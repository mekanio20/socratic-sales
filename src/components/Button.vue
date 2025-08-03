<template>
    <button 
        type="button" 
        class="button-bg-gradient font-ebgaramond font-bold text-[20px] text-black uppercase px-12 py-4 rounded-xl 
               transition-all duration-300 ease-in-out 
               hover:scale-105 hover:shadow-lg
               relative overflow-hidden
               before:absolute before:inset-0 before:rounded-xl 
               before:p-[2px]
               before:opacity-0 before:transition-opacity before:duration-300
               hover:before:opacity-100
               before:-z-10"
    >
        <span class="relative z-10">{{ name }}</span>
    </button>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
})
</script>

<style scoped>
.hover\:border-gradient:hover {
    background: linear-gradient(to right, #FFB433, #FFD48B, #FFB942, #F5D49A) padding-box,
                linear-gradient(135deg, #ff9c23 0%, #FFD700 50%, #FFA500 100%) border-box;
    border: 2px solid transparent;
}

@keyframes borderGlow {
    0%, 100% { 
        box-shadow: 0 0 5px rgba(255, 180, 51, 0.3);
    }
    50% { 
        box-shadow: 0 0 20px rgba(255, 180, 51, 0.6), 0 0 30px rgba(255, 165, 0, 0.4);
    }
}

.button-bg-gradient:hover {
    animation: borderGlow 2s ease-in-out infinite;
}
</style>