import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // MAIN
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  },
  // SCEDULE
  {
    path: "/schedule",
    name: "Schedule",
    component: () => import("@/views/Schedule.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;