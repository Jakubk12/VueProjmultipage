import { createApp } from 'vue'
import VWave from 'v-wave'

import App from './App.vue'
//import router from "./components/router/index.js"

createApp(App)
//.use(router)
.use(VWave)
.mount('#app')
