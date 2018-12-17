<template>
  <!--
    新增wrapper标签解决轮播图加载时的抖动
  -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  // 注：
  // 自定义的swiper处的组件名不能与swiper组件同名为swiper
  name: 'HomeSwiper',
  data () {
    return {
      // swiper的配置信息
      swiperOption: {
        // 显示轮播页码
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      },
      swiperList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
      },
      {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/47/a51fe403715df102.jpg_750x200_085792b6.jpg'
      },
      {
        id: '03',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
      },
      {
        id: '04',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // >>>为获取子组件的中的元素的类名
  // 当前组件的模板中没有该类名 该类名属于子组件的模板内容，该选择器要获取子组件的模板内容就必须>>>
   >>> .swiper-pagination-bullet-active
    background:white!important
  .wrapper
    overflow:hidden
    width: 100%
    height:0
    // padding-bootom为该元素的自适应高度
    padding-bottom:26%
    background:#eee
  .swiper-img
    width:100%
</style>
