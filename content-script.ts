import { createApp } from 'vue'
import App from './src/App.vue'

const sideBar = document.querySelector(".navbar-side__nav")!
sideBar.insertAdjacentHTML('beforeend', '<div id="app"></div>')

const selector = '#app'
createApp(App).mount(selector)
