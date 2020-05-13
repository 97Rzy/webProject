<template>
  <div class="header">
    <navbar>
      <div slot="left" class="iconfont icon-zuojiantou"></div>
      <div slot="center" class="header-input">
        <span class="iconfont icon-chazhao"></span>
        <span>输入城市/景点/游玩</span>
      </div>
      <div slot="right" class="header-right">
        天津 <i class="iconfont icon-sanjiaodown"></i>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
export default {
  name: "vueName",
  data () {
    return {
      msg: ""
    };
  },
  components: {
    Navbar
  }
};
</script>

<style lang="stylus" scoped>
.header
  background-color #00bcd4
  text-align center
  color #fff
  .header-input
    background-color #fff
    height 34px
    line-height 34px
    color #ccc
    border-radius 5px
    margin-top 5px
</style>
