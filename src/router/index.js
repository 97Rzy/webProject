import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/home/Home";
import Cart from "@/view/cart/Cart";
import Category from "@/view/category/Category";
import Profile from "@/view/profile/Profile";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/category",
      component: Category
    },
    {
      path: "/profile",
      component: Profile
    }
  ]
});
