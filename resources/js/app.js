import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './components/App'
import routes from './routes'

import 'vfonts/Inter.css'
import '../css/app.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

const vm = app.mount('#app')

/* 

import 'vfonts/Inter.css'

import App from './components/App'


const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)
const vm = app.mount('#app') */
