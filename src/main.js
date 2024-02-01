import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@/scss/fonts.scss'
import '@/scss/_vars.scss'
import '@/scss/style.scss'
import '@/scss/svg.scss'

createApp(App).use(store).mount('#app')
