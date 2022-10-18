import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/MainComponent.vue"),
    },
    {
      path: "/routes/",
      name: "todaycode",
      component: () => import("@/components/Routes/TodayCode.vue"),
    },
    {
      path: "/routes/",
      name: "Survey",
      component: () => import("@/components/Routes/SurveyCode.vue"),
    },
  ];
   export const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
