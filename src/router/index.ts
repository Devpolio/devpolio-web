import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/homeView.vue";
import MyPortfolio from "@/views/myPortfolio/myPortfolioView.vue";
import CreatePortfolio from "@/views/createPortfolio/createPortfolioView.vue";
import Signup from "@/views/auth/signup/signupView.vue";
import Signin from "@/views/auth/signin/signinView.vue";
import updatePortfolio from "@/views/updatePortfolio/updatePortfolioView.vue";
import UserManagement from "@/views/userManagement/userManagementView.vue";

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
  {
    path: "/update-portfolio/:id",
    component: updatePortfolio,
  },
  {
    path: "/user-management",
    component: UserManagement,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
