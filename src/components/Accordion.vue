<template>
    <div class="container mx-auto px-4 sm:px-0">
        <!-- Accordion Container -->
        <div class="space-y-4">
            <!-- Accordion Items -->
            <div v-for="(item, index) in accordionItems" :key="index"
                class="accordion-item bg-[#0D0D0D] backdrop-blur-sm rounded-2xl border border-[#414141] overflow-hidden transition-all duration-300 hover:border-gray-700/70 bottom_scroll"
                :class="{ 'accordion-active': item.isOpen }">
                <!-- Accordion Header -->
                <button @click="toggleAccordion(index)"
                    class="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none transition-all duration-200 group"
                    :class="{ 'pb-4': item.isOpen }">
                    <!-- Question Text -->
                    <h3
                        class="text-white text-lg font-inter sm:text-xl font-medium leading-relaxed pr-4 group-hover:text-gray-100 transition-colors duration-200">
                        {{ item.question }}
                    </h3>

                    <!-- Plus/Minus Icon -->
                    <div class="flex-shrink-0 ml-4">
                        <div class="w-6 h-6 flex items-center justify-center transition-all duration-300 ease-in-out"
                            :class="{ 'rotate-45': item.isOpen }">
                            <!-- Plus Icon -->
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                class="text-white transition-all duration-300" :class="{ 'scale-110': item.isOpen }">
                                <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </button>

                <!-- Accordion Content -->
                <div class="accordion-content overflow-hidden transition-all duration-500 ease-in-out" :style="{
                maxHeight: item.isOpen ? item.contentHeight + 'px' : '0px',
                opacity: item.isOpen ? 1 : 0
            }" ref="contentRefs">
                    <div class="px-8 pb-6 text-gray-300 text-base leading-relaxed"
                        :class="{ 'animate-fade-in': item.isOpen }">
                        <div class="border-t border-gray-800/80 pt-4">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const contentRefs = ref([])
const accordionItems = ref([
    {
        question: "What Is Socratic Sales?",
        answer: "Socratic Sales is a methodology that uses strategic questioning to guide prospects through a discovery process. Instead of pitching features, you ask thoughtful questions that help prospects identify their own problems and arrive at solutions naturally. This approach builds trust, reduces resistance, and leads to more meaningful conversations that convert better.",
        isOpen: false,
        contentHeight: 0
    },
    {
        question: "How long will it take to see results?",
        answer: "Most users see initial improvements in their conversation quality within the first week of implementation. Significant results in conversion rates typically appear within 30-60 days as you master the techniques. However, the timeline varies based on your current skill level, industry, and how consistently you apply the methods. We provide ongoing support and metrics tracking to help you measure progress.",
        isOpen: false,
        contentHeight: 0
    },
    {
        question: "Is this license only beneficial for infopreneurs?",
        answer: "Not at all! While infopreneurs can definitely benefit from Socratic Sales, this methodology works across all industries and business types. Whether you're in B2B software, consulting, e-commerce, real estate, or any other field that involves selling, these questioning techniques will improve your results. The principles are universal and can be adapted to any sales context.",
        isOpen: false,
        contentHeight: 0
    },
    {
        question: "What makes Quantum different from other options I've considered?",
        answer: "Quantum combines cutting-edge AI technology with proven sales psychology in a way that no other platform does. While other tools focus on automation or basic CRM features, Quantum provides intelligent conversation guidance, real-time coaching, and adaptive learning that evolves with your selling style. Plus, our implementation support ensures you actually use what you learn, rather than just consuming more content.",
        isOpen: false,
        contentHeight: 0
    },
    {
        question: "What Is Socratic Sales?",
        answer: "Socratic Sales is a methodology that uses strategic questioning to guide prospects through a discovery process. Instead of pitching features, you ask thoughtful questions that help prospects identify their own problems and arrive at solutions naturally. This approach builds trust, reduces resistance, and leads to more meaningful conversations that convert better.",
        isOpen: false,
        contentHeight: 0
    }
])

const toggleAccordion = async (index) => {
    // Close all other accordions
    accordionItems.value.forEach((item, i) => {
        if (i !== index) {
            item.isOpen = false
        }
    })

    // Toggle current accordion
    accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen

    // Calculate content height for smooth animation
    if (accordionItems.value[index].isOpen) {
        await nextTick()
        const contentEl = contentRefs.value[index]
        if (contentEl) {
            accordionItems.value[index].contentHeight = contentEl.scrollHeight
        }
    }
}

// Calculate initial content heights
onMounted(async () => {
    await nextTick()
    accordionItems.value.forEach((item, index) => {
        const contentEl = contentRefs.value[index]
        if (contentEl) {
            item.contentHeight = contentEl.scrollHeight
        }
    })
})
</script>

<style scoped>
/* Smooth accordion animations */
.accordion-item {
    transform: translateY(0);
    transition: all 0.3s ease;
}

.accordion-item:hover {
    transform: translateY(-2px);
}

.accordion-active {
    background: #0D0D0D !important;
}

.accordion-content {
    will-change: max-height, opacity;
}

/* Fade in animation for content */
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.4s ease-out 0.1s both;
}

/* Focus states for accessibility */
button:focus {
    outline: none;
}

/* Smooth icon rotation */
.rotate-45 {
    transform: rotate(45deg);
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .accordion-item button {
        padding: 1.25rem;
    }

    .accordion-content>div {
        padding: 1.25rem;
        padding-top: 1rem;
    }
}

/* Hover effect for the plus icon */
.group:hover svg {
    transform: scale(1.1);
    color: rgba(255, 255, 255, 0.9);
}

/* Backdrop blur support check */
@supports not (backdrop-filter: blur(12px)) {
    .accordion-item {
        background: rgba(17, 24, 39, 0.95);
    }
}
</style>