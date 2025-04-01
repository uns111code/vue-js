import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/home.css'
import './assets/css/grid-base.css'
import './assets/css/huge-table.css'
import './assets/css/team.css'
import './assets/css/testimonials.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
