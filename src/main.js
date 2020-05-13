// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// 一相素样式
import "./assets/styles/border.css";
// 设置网站的基础样式
import "./assets/styles/reset.css";
// 引入图标
import "./assets/styles/iconfont.css";
// 引入mintUI组件
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
// 手动安装
Vue.use(MintUI);

// 轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
// 手动安装
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
