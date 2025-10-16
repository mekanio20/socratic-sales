<template>
  <main class="w-full h-full">
    <Loading v-if="true" />
    <router-view />
  </main>
</template>

<script setup>
import router from './router/index'
const loading = ref(false)
onMounted(() => {
  router.beforeEach((to, from, next) => {
    loading.value = true
    next()
  })
  router.afterEach(() => {
    setTimeout(() => { loading.value = false }, 400)
  })
})
</script>