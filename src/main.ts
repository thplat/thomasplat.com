import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { useI18n } from '@/plugins/i18n'

const app = createApp(App)

app.use(createPinia())

useI18n(app)
app.mount('#app')