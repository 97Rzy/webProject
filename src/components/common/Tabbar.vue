<template>
  <div class="tabbar ">
    <router-link to="/" tag="div" class="tabbar-item">首页</router-link>
    <router-link to="/category" tag="div" class="tabbar-item">
      分类
    </router-link>
    <router-link to="/cart" tag="div" class="tabbar-item">购物车</router-link>
    <router-link to="/profile" tag="div" class="tabbar-item">个人中心</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.tabbar
  width 100%
  height 43px
  line-height 43px
  font-size 16px
  position fixed
  bottom 0
  left 0
  right 0
  display flex
  .tabbar-item
    flex 1
    text-align center
    margin 0 5px
    background #00bcd4
    border-radius 5px
</style>
