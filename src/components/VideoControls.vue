<script setup>
const props = defineProps({
  isPlaying: Boolean,
  currentTime: String,
  duration: String,
  progress: Number,
  bufferProgress: Number,
  volume: Number,
  isMuted: Boolean,
  isFullscreen: Boolean,
  playbackRate: Number,
  isquality: String,
  isOpenquality: Boolean,
  availableQualities: {
    type: Array,
    default: () => ['Auto']
  }
})

const emit = defineEmits([
  'play',
  'seek',
  'volume-change',
  'toggle-mute',
  'toggle-fullscreen',
  'set-playback-rate',
  'mouseenter',
  'mouseleave',
  'set-quality'
])

const isSettingsOpen = ref(false)
const progressBarRef = ref(null)

function handleProgressClick(event) {
  if (!progressBarRef.value) return
  
  const rect = progressBarRef.value.getBoundingClientRect()
  const position = (event.clientX - rect.left) / rect.width
  const percentage = Math.max(0, Math.min(100, position * 100))
  
  emit('seek', percentage)
}

function toggleSettings() {
  isSettingsOpen.value = !isSettingsOpen.value
}
</script>

<template>
  <div 
    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-2 transition-opacity duration-300 overflow-auto"
    @mouseenter="emit('mouseenter')"
    @mouseleave="emit('mouseleave')"
  >
    <!-- Progress Bar -->
    <div 
      ref="progressBarRef"
      class="relative h-1 w-full bg-gray-600 cursor-pointer mb-2 group"
      @click="handleProgressClick"
    >
      <!-- Buffer Progress -->
      <div 
        class="absolute top-0 left-0 h-full bg-gray-400"
        :style="{ width: `${bufferProgress}%` }"
      ></div>
      
      <!-- Playback Progress -->
      <div 
        class="absolute top-0 left-0 h-full bg-[#FFB942]"
        :style="{ width: `${progress}%` }"
      ></div>
      
      <!-- Thumb (handle) -->
      <div 
        class="absolute top-1/2 h-3 w-3 bg-[#FFB942] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        :style="{ left: `${progress}%` }"
      ></div>
    </div>
    
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <!-- Play/Pause Button -->
        <button @click="emit('play')" class="player-btn">
          <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        
        <!-- Volume Control -->
        <div class="flex items-center space-x-1">
          <button @click="emit('toggle-mute')" class="player-btn">
            <svg v-if="isMuted || volume === 0" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
            <svg v-else-if="volume < 0.5" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10a3 3 0 011 2 3 3 0 01-1 2" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10a5 5 0 011 3 5 5 0 01-1 3m5-6a9 9 0 011 4 9 9 0 01-1 4" />
            </svg>
          </button>
          
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            :value="volume" 
            @input="emit('volume-change', parseFloat($event.target.value))" 
            class="player-slider w-16 md:w-16 hidden sm:block"
          />
        </div>
        
        <!-- Time Display -->
        <div class="text-xs text-white font-inter">
          <span>{{ currentTime }}</span>
          <span class="mx-1">/</span>
          <span>{{ duration }}</span>
        </div>
      </div>
      
      <div class="flex items-center space-x-2">
        <!-- Settings Button -->
        <div class="relative">
          <button @click="toggleSettings" class="player-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          <!-- Settings Menu -->
          <div 
            v-if="isSettingsOpen" 
            class="absolute bottom-12 right-0 bg-player-gray rounded shadow-lg p-2 w-48 animate-fade-in font-inter"
          >
            <!-- Playback Speed -->
            <div class="mb-2">
              <p class="text-white text-xs mb-2">Скорость воспроизведения</p>
              <div class="grid grid-cols-4 gap-1">
                <button 
                  v-for="rate in [0.5, 1, 1.5, 2]" 
                  :key="rate"
                  @click="emit('set-playback-rate', rate);"
                  :class="[
                    'text-xs py-1 px-2 rounded',
                    playbackRate === rate ? 'bg-[#FFB942] text-white' : 'bg-player-hover text-gray-200'
                  ]"
                >
                  {{ rate }}x
                </button>
              </div>
            </div>
            
            <!-- Quality Selection -->
            <div v-if="isOpenquality">
              <p class="text-white text-xs mb-1">Качество</p>
              <div class="grid grid-cols-2 gap-1">
                <button 
                  v-for="quality in availableQualities" 
                  :key="quality"
                  @click="emit('set-quality', quality);"
                  :class="[
                    'text-xs py-1 px-2 rounded',
                    isquality === quality ? 'bg-[#FFB942] text-white' : 'bg-player-hover text-gray-200'
                  ]"
                >
                  {{ quality }}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Fullscreen Button -->
        <button @click="emit('toggle-fullscreen')" class="player-btn">
          <svg v-if="isFullscreen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>