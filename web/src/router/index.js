import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/Auth.vue"),
    },
    {
      path: "/app",
      name: "app",
      component: () => import("../views/App.vue"),
    },
    {
      path: "/:patchMatch(.*)*",
      component: () => import("../views/Error404.vue"),
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        el: to.hash,
      };
    } else {
      return {
        top: 0,
        left: 0,
      };
    }
  },
})

export default router