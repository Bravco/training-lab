import { createRouter, createWebHistory } from "vue-router"
import { getCurrentUser } from "vuefire";

const router = createRouter({
  history: createWebHistory("/training-lab/"),
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
      meta: {
        requiresNoUser: true,
      },
    },
    {
      path: "/:patchMatch(.*)*",
      component: () => import("../views/Error404.vue"),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const requiresNoUser = to.matched.some((record) => record.meta.requiresNoUser);
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const currentUser = await getCurrentUser();

  if (requiresAuth && !currentUser) {
    next("/auth");
  } else if (requiresNoUser && currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router