<template>
  <div id="app">
    <!-- 展示具体的页面 -->
    <router-view />
    <!-- 底部导航 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
export default {
  name: "App",
  components: {
    Tabbar
  }
};
</script>

<style scoped lang="stylus">
#app
  width 100vw
  height 100vh
</style>
