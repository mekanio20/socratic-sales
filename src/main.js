import { MotionPlugin } from '@vueuse/motion'
import router from "./router";
import App from './App.vue'
import './style.css'
import 'vue-plyr/dist/vue-plyr.css'
import VuePlyr from 'vue-plyr'

const app = createApp(App)
app.use(MotionPlugin)
app.use(VuePlyr)
app.use(router)
app.mount('#app')