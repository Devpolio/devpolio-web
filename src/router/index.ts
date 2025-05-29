import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/homeView.vue";
import MyPortfolio from "@/views/myPortfolio/myPortfolioView.vue";
import CreatePortfolio from "@/views/createPortfolio/createPortfolioView.vue";
import Signup from "@/views/auth/signup/signupView.vue";
import Signin from "@/views/auth/signin/signinView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/signin",
    component: Signin,
  },
  {
    path: "/my-portfolio",
    component: MyPortfolio,
  },
  {
    path: "/create-portfolio",
    component: CreatePortfolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
