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
                        class="text-white text-base font-inter sm:text-lg font-medium leading-relaxed pr-4 group-hover:text-gray-100 transition-colors duration-200">
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
                    <div class="px-8 pb-6 text-white sm:text-base text-sm leading-relaxed"
                        :class="{ 'animate-fade-in': item.isOpen }">
                        <div class="border-t font-inter border-gray-800/80 pt-4">
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
        question: "Who is the Socratic Sales Method for?",
        answer: "This program is for agencies, coaches, and high ticket closers who want to stop relying on scripts and start signing consistent four and five figure clients. It works whether you are just starting out or already experienced.",
        isOpen: false,
        contentHeight: 0
    },
    {
        question: "How is this different from other sales coaching?",
        answer: "Most sales trainings give you scripts, memorized lines, or surface level tactics. The Socratic Method goes deeper. It teaches you how the human brain makes decisions and how to guide conversations naturally. No BS tactics. Just pure psychology, philosophy and human nature applied to sales.",
        isOpen: false,
        contentHeight: 0
    },
    {
        question: "Can I get personal coaching or mentorship?",
        answer: "Yes. You get one-on-one coaching and personalized WhatsApp access, so you basically have direct access to our brains whenever you need guidance.",
        isOpen: false,
        contentHeight: 0
    },
    {
        question: "How fast will I see results?",
        answer: "Most clients begin closing four and five figure business owners within 30 to 60 days depending on effort and number of calls.",
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