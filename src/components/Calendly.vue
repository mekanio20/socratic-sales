<template>
    <!-- Calendly inline widget begin -->
    <div class="calendly-inline-widget"
        data-url="https://calendly.com/akkj/meeting-a?hide_gdpr_banner=1&background_color=0d0d0d&text_color=cccccc&primary_color=feb433"
        style="width:100%;height:700px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
        if (window.Calendly && typeof window.Calendly.initInlineWidgets === 'function') {
            window.Calendly.initInlineWidgets()
        }
    }
    document.head.appendChild(script)
})
</script>