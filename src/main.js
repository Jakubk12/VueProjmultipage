import { createApp } from 'vue'
import VWave from 'v-wave'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
//import router from "./components/router/index.js"

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: [],
  });


 const app = createApp(App)
//.use(router)
.use(VWave, router)
app.mount('#app')
