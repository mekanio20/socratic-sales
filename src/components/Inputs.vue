<template>
    <div class="flex items-center justify-center px-4 sm:px-6 md:px-8 mt-5">
        <div class="w-full max-w-4xl mx-auto">
            <!-- Form Container -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Name & Email Row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <!-- Name -->
                    <div class="relative font-inter">
                        <input v-model="formData.name" type="text" placeholder="Name"
                            class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-[#0D0D0D] border border-[#414141] rounded-2xl text-white placeholder-gray-500 text-base sm:text-lg outline-none"
                            :class="{ 'border-red-500': errors.name }" />
                        <div v-if="errors.name" class="absolute -bottom-5 left-2 text-red-400 text-xs sm:text-sm">
                            {{ errors.name }}
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="relative font-inter">
                        <input v-model="formData.email" type="email" placeholder="Email"
                            class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-[#0D0D0D] border border-[#414141] rounded-2xl text-white placeholder-gray-500 text-base sm:text-lg outline-none"
                            :class="{ 'border-red-500': errors.email }" />
                        <div v-if="errors.email" class="absolute -bottom-5 left-2 text-red-400 text-xs sm:text-sm">
                            {{ errors.email }}
                        </div>
                    </div>
                </div>

                <!-- Phone Row -->
                <div class="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-6">
                    <!-- Country Select -->
                    <div class="relative font-inter">
                        <button type="button" @click="toggleCountryDropdown"
                            class="w-full px-4 py-3 sm:py-4 bg-[#0D0D0D] flex items-center justify-between border border-[#414141] rounded-2xl text-white text-base sm:text-lg outline-none"
                            :class="{ 'bg-[#0D0D0D]': isCountryDropdownOpen }">
                            <div class="flex items-center space-x-2 sm:space-x-3">
                                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden flex-shrink-0">
                                    <img :src="selectedCountry.flag" :alt="selectedCountry.name"
                                        class="w-full h-full object-cover" />
                                </div>
                                <span>{{ selectedCountry.code }}</span>
                            </div>
                            <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200"
                                :class="{ 'rotate-180': isCountryDropdownOpen }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- Dropdown -->
                        <div v-show="isCountryDropdownOpen"
                            class="absolute top-full left-0 right-0 mt-2 bg-[#0D0D0D] border border-[#414141] rounded-2xl shadow-2xl z-50 max-h-64 overflow-hidden">
                            <!-- Search -->
                            <div class="p-4 border-b border-[#0D0D0D]">
                                <input ref="searchInput" v-model="countrySearchQuery" type="text"
                                    placeholder="Search country..."
                                    class="w-full px-4 py-2 bg-[#0D0D0D] border border-[#414141] rounded-xl text-white placeholder-gray-500 text-sm outline-none" />
                            </div>

                            <!-- Country List -->
                            <div class="max-h-48 overflow-y-auto custom-scrollbar font-inter">
                                <button v-for="country in filteredCountries" :key="country.code" type="button"
                                    @click="selectCountry(country)"
                                    class="w-full px-4 py-3 flex items-center space-x-3 hover:bg-[#1A1A1A] transition-colors duration-200 text-left">
                                    <div class="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                        <img :src="country.flag" :alt="country.name"
                                            class="w-full h-full object-cover" />
                                    </div>
                                    <span class="text-white text-sm truncate">{{ country.name }}</span>
                                    <span class="text-gray-400 text-sm ml-auto">{{ country.code }}</span>
                                </button>

                                <div v-if="filteredCountries.length === 0"
                                    class="px-4 py-3 text-gray-500 text-sm text-center">
                                    No countries found
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phone Input -->
                    <div class="relative font-inter">
                        <input type="tel" placeholder="Phone" v-model="formData.phone"
                            class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-[#0D0D0D] border border-[#414141] rounded-2xl text-white placeholder-gray-500 text-base sm:text-lg outline-none"
                            :class="{ 'border-red-500': errors.phone }" />
                        <div v-if="errors.phone" class="absolute -bottom-5 left-2 text-red-400 text-xs sm:text-sm">
                            {{ errors.phone }}
                        </div>
                    </div>
                </div>

                <!-- Submit -->
                <div class="pt-4">
                    <button type="submit"
                        class="w-full sm:w-auto px-6 sm:px-20 py-3 sm:py-4 bg-[#0D0D0D] text-white rounded-2xl border border-[#414141] font-inter font-medium text-base sm:text-lg hover:bg-[#232323] transition-colors duration-300 outline-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>

        <!-- Overlay -->
        <div v-if="isCountryDropdownOpen" @click="closeCountryDropdown" class="fixed inset-0 z-40"></div>
    </div>
</template>

<script setup>
// Form Data
const formData = ref({
    name: '',
    email: '',
    phone: ''
})

// Form Validation Errors
const errors = ref({
    name: '',
    email: '',
    phone: ''
})

// Country Dropdown State
const isCountryDropdownOpen = ref(false)
const countrySearchQuery = ref('')
const searchInput = ref(null)

// Countries Data with Flags
const countries = ref([
    { code: '+1', name: 'United States', flag: 'https://flagcdn.com/24x18/us.png' },
    { code: '+44', name: 'United Kingdom', flag: 'https://flagcdn.com/24x18/gb.png' },
    { code: '+33', name: 'France', flag: 'https://flagcdn.com/24x18/fr.png' },
    { code: '+49', name: 'Germany', flag: 'https://flagcdn.com/24x18/de.png' },
    { code: '+39', name: 'Italy', flag: 'https://flagcdn.com/24x18/it.png' },
    { code: '+34', name: 'Spain', flag: 'https://flagcdn.com/24x18/es.png' },
    { code: '+31', name: 'Netherlands', flag: 'https://flagcdn.com/24x18/nl.png' },
    { code: '+41', name: 'Switzerland', flag: 'https://flagcdn.com/24x18/ch.png' },
    { code: '+43', name: 'Austria', flag: 'https://flagcdn.com/24x18/at.png' },
    { code: '+45', name: 'Denmark', flag: 'https://flagcdn.com/24x18/dk.png' },
    { code: '+46', name: 'Sweden', flag: 'https://flagcdn.com/24x18/se.png' },
    { code: '+47', name: 'Norway', flag: 'https://flagcdn.com/24x18/no.png' },
    { code: '+358', name: 'Finland', flag: 'https://flagcdn.com/24x18/fi.png' },
    { code: '+90', name: 'Turkey', flag: 'https://flagcdn.com/24x18/tr.png' },
    { code: '+993', name: 'Turkmenistan', flag: 'https://flagcdn.com/24x18/tm.png' },
    { code: '+7', name: 'Russia', flag: 'https://flagcdn.com/24x18/ru.png' },
    { code: '+81', name: 'Japan', flag: 'https://flagcdn.com/24x18/jp.png' },
    { code: '+82', name: 'South Korea', flag: 'https://flagcdn.com/24x18/kr.png' },
    { code: '+86', name: 'China', flag: 'https://flagcdn.com/24x18/cn.png' },
    { code: '+91', name: 'India', flag: 'https://flagcdn.com/24x18/in.png' },
    { code: '+61', name: 'Australia', flag: 'https://flagcdn.com/24x18/au.png' },
    { code: '+64', name: 'New Zealand', flag: 'https://flagcdn.com/24x18/nz.png' },
    { code: '+55', name: 'Brazil', flag: 'https://flagcdn.com/24x18/br.png' },
    { code: '+52', name: 'Mexico', flag: 'https://flagcdn.com/24x18/mx.png' },
    { code: '+54', name: 'Argentina', flag: 'https://flagcdn.com/24x18/ar.png' }
])

// Selected Country (default: Turkmenistan as shown in image)
const selectedCountry = ref(countries.value.find(c => c.code === '+993') || countries.value[0])

// Filtered Countries for Search
const filteredCountries = computed(() => {
    const query = countrySearchQuery.value.toLowerCase().trim()
    if (!query) return countries.value

    return countries.value.filter(country =>
        country.name.toLowerCase().includes(query) ||
        country.code.includes(query)
    )
})

// Form Validation
const validateForm = () => {
    errors.value = { name: '', email: '', phone: '' }
    let isValid = true

    // Name validation
    if (!formData.value.name.trim()) {
        errors.value.name = 'Name is required'
        isValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.value.email.trim()) {
        errors.value.email = 'Email is required'
        isValid = false
    } else if (!emailRegex.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email'
        isValid = false
    }
    const phoneRegex = /^\d{8,11}$/
    if (!phoneRegex.test(formData.value.phone)) {
        errors.value.phone = 'Please enter a valid phone number'
        isValid = false
    }
    // Phone validation
    if (!formData.value.phone.trim()) {
        errors.value.phone = 'Phone number is required'
        isValid = false
    }

    return isValid
}

// Form Submit
const handleSubmit = () => {
    if (validateForm()) {
        const submitData = {
            name: formData.value.name,
            email: formData.value.email,
            phone: selectedCountry.value.code + formData.value.phone,
            countryCode: selectedCountry.value.code,
            country: selectedCountry.value.name
        }

        console.log('Form submitted:', submitData)

        // Here you would typically send the data to your API
        alert('Form submitted successfully!')
    }
}

// Country Dropdown Methods
const toggleCountryDropdown = async () => {
    isCountryDropdownOpen.value = !isCountryDropdownOpen.value

    if (isCountryDropdownOpen.value) {
        await nextTick()
        if (searchInput.value) {
            searchInput.value.focus()
        }
    } else {
        countrySearchQuery.value = ''
    }
}

const closeCountryDropdown = () => {
    isCountryDropdownOpen.value = false
    countrySearchQuery.value = ''
}

const selectCountry = (country) => {
    selectedCountry.value = country
    closeCountryDropdown()
}

// Keyboard Navigation
const handleKeydown = (event) => {
    if (event.key === 'Escape' && isCountryDropdownOpen.value) {
        closeCountryDropdown()
    }
}

// Lifecycle
onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(75, 85, 99, 0.2);
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(156, 163, 175, 0.5);
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(156, 163, 175, 0.7);
}

/* Smooth Transitions */
* {
    transition: all 0.2s ease;
}
</style>