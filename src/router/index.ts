import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Signup from "@/views/auth/signup/signupView.vue";
import Signin from "@/views/auth/signin/signinView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/signin",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
