<template>
  <div class="icons">
    <!-- 设置选项轮播 -->
    <swiper ref="mySwiper" :options="swiperOptions" class="myswiper">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icom-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
      },
      iconList: [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        "desc": "景点门票"
      },{
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
        "desc": "滑雪季"
      },{
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        "desc": "泡温泉"
      },{
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        "desc": "动植园"
      },{
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
        "desc": "游乐园"
      },{
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        "desc": "必游榜单"
      },{
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
        "desc": "演出"
      },{
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        "desc": "城市观光"
      },{
        "id": "0009",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
        "desc": "一日游"
      }],
    }
  },
  comments: {},
  methods: {},
  computed: {
    pages () {
      const pages=[];
      this.iconList.forEach((item,index) => {
        // 具体所在的页面
        const page=Math.floor(index/8);
        if(!pages[page]) {
          pages[page]=[];
        }
        pages[page].push(item);
      })
      return pages;
    }
  },
}
</script>
<style lang="stylus" scoped>
.icons >>> .swiper-pagination-bullet-active
  background-color red
.icons
  margin-top 5px
  .myswiper
    height 200px
    .icon
      width 25%
      height 0px
      float left
      padding-bottom 25%
      position relative
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom 22px
        .icom-img-content
          display block
          height 100%
          margin 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        line-height 22px
        text-align center
</style>