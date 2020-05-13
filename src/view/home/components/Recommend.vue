<template>
  <div>
    <div class="title iconfont icon-icon-test">
      <s class="title-text">猜你喜欢</s>
    </div>
    <ul>
      <li class="item">
        <img class="item-img" src="../../../assets/image/b.png" alt="">
        <div class="item-info">
          <p class="item-title">标题标题标题标题标题标题标题标题</p>
          <p class="item-desc">内容标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
        </div>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data () {
    return {
      msg: ''
    }
  },
  comments: {},
  methods: {},
}
</script>
 
<style lang="stylus" scoped>
.title
  line-height 30px
  background-color #eeeeee
  font-size 20px
  font-weight bold
  color red
  position relative
  margin-left 5px
  .title-text
    color #000
    font-size 16px
    margin-left 5px
    position absolute
    top -1px
    font-weight normal
.item
  display flex
  height 100px
  .item-img
    width 90px
    height 90px
    padding 5px
  .item-info
    flex 1
    padding 5px
    min-width 0
    .item-title
      line-height 30px
      font-size 16px
      overflow hidden
      white-space nowrap
      // 文本溢出以...代替
      text-overflow ellipsis
    .item-desc
      line-height 20px
      color #ccc
      overflow hidden
      white-space nowrap
      // 文本溢出以...代替
      text-overflow ellipsis
</style>