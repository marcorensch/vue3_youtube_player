import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import YouTube from 'vue3-youtube'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.component('YouTube', YouTube)
app.use(router)
app.mount('#app')
