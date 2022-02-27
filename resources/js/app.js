import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './components/App'
import routes from './routes'
import { createServices } from './services'

import 'vfonts/Inter.css'
import '../css/app.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const services = createServices({ router })

const app = createApp(App)

app.use(router)
app.use(services)

const vm = app.mount('#app')
