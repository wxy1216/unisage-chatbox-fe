import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/pages/LoginView.vue";
import HomeView from "@/pages/HomeView.vue";
import store from '@/store';

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    component: LoginView,
  },
  // 可以添加其他路由
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
    console.log(store);
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // 这里检查用户是否登录
      console.log(store);
      if (!store.getters.isLoggedIn) {
        next({
          path: '/login',
        //   query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });

export default router;
