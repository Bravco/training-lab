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
  const currentUser = await getCurrentUser();
  const requiresNoUser = to.matched.some((record) => record.meta.requiresNoUser);

  if (requiresNoUser && currentUser) {
    next("/");
  } else {
    next();
  }
});

router.onError((error, to) => {
  if (error.message.includes('Failed to fetch dynamically imported module')) {
    window.location = to.fullPath;
  }
});

export default router