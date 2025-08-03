<template>
    <div class="p-5 rounded-[20px] bg-[#0D0D0D] flex flex-col space-y-5">
        <div class="relative h-[80%] rounded-2xl group cursor-pointer">
            <VideoPlayer :videoSource="'/videos/demo.mp4'" :hls_master="null" name="Video Name" desc="Video Description" />
        </div>
        <h3 class="text-gradient font-sf_pro font-medium text-[16px] text-black">{{ name }}</h3>
        <p class="font-sf_pro text-sm text-[#8A8F98]">
            {{ desc }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    videoSource: {
        type: String,
        default: ''
    },
    hls_master: {
        type: String,
        default: null
    }
})
</script>