import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-dark-cyan/theme.css'

import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(PrimeVue)

app.mount('#app')
