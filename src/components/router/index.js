import { createRouter, createWebHistory } from "vue-router";
import MainComponent from './src/components/MainComponent.vue';
import AboutPreprocessors from './section/AboutPreprocessors.vue';
import AboutBootstrapTailwind from './section/AboutBootstrapTailwind.vue'; 
import AboutES6 from './section/AboutES6.vue'; 
import AboutHTML5 from './section/AboutHTML5.vue'; 
import AboutVue from './section/AboutVue.vue'; 
import AboutRwd from './section/AboutRwd.vue'; 
import AboutRequests from './section/AboutRequests.vue'; 
import AboutJsTs from './section/AboutJsTs.vue'; 
import AboutSEO from './section/AboutSEO.vue'; 
import AboutFrameworks from '../section/AboutFrameworks.vue'; 
import AboutMore from '../section/AboutMore.vue'; 

const routes = [{
    path: '/src/components/MainComponent.vue',
    name: "home",
    component: MainComponent,

},
{
    path: 'src/AboutPreprocessors.vue',
    name: 'AboutPreprocessors',
    component: AboutPreprocessors,
},
{
    path: '/AboutBootstrapTailwind.vue',
    name: 'AboutBootstrapTailwind',
    component: AboutBootstrapTailwind,
},
{
    path: '/AboutES6.vue',
    name: 'AboutES6',
    component: AboutES6,
},
{
    path: '/AboutHTML5.vue',
    name: 'AboutHTML5',
    component: AboutHTML5,
},
{
    path: '/AboutVue.vue',
    name: 'AboutVue',
    component: AboutVue ,
},
{
    path: '/AboutRwd.vue',
    name: 'AboutRwd',
    component: AboutRwd,
},
{
    path: '/AboutRequests.vue',
    name: 'AboutRequests',
    component: AboutRequests,
},
{
    path: '/AboutJsTs.vue',
    name: 'AboutJsTs',
    component: AboutJsTs,
},
{
    path: '/AboutSEO.vue',
    name: 'AboutSEO',
    component: AboutSEO,
},
{
    path: '/AboutFrameworks.vue',
    name: 'AboutFrameworks',
    component: AboutFrameworks,
},
{
    path: '/AboutMore.vue',
    name: 'AboutMore',
    component: AboutMore,
},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;