import { createApp } from 'vue';
import VWave from 'v-wave';
import { createRouter, createWebHistory } from 'vue-router';
import MainComponent from './components/Routes/MainComponent.vue';
import SurveyCode from './components/Routes/SurveyCode.vue';
import TodayCode from './components/Routes/TodayCode.vue';

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/components/:id',
            component: MainComponent,
            name: 'maincomponent',
        },
        {
            path: '/components/routes/:id',
            component: SurveyCode,
            name: 'surveycode'
        },
        {
            path: '/components/routes/:id',
            component: TodayCode,
            name: 'todaycode',
        }
    ],
  });


 const app = createApp(App)
//.use(router)
app.use(VWave); 
app.use(router);

app.mount('#app')