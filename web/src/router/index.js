import { createRouter, createWebHistory } from "vue-router"
import { getCurrentUser } from "vuefire";

import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Error404 from "../views/Error404.vue";

const router = createRouter({
  history: createWebHistory("/training-lab/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
      meta: {
        requiresNoUser: true,
      },
    },
    {
      path: "/:patchMatch(.*)*",
      component: Error404,
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

export default router