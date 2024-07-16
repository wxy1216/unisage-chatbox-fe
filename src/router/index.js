import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../pages/LoginView.vue";
import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  // 可以添加其他路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
