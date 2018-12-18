<template>
  <!--
    新增wrapper标签解决轮播图加载时的抖动
  -->
  <div class="wrapper">
    <!--
      v-if为如果当前swiper组件接收的数组有值则显示swiper组件的视图，否则不显示
      作用：解决swiper加载完毕后默认显示为最后数组的最后一个内容
    -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- 轮播内容容器 -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- 轮播页码容器 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  // 注：
  // 自定义的swiper处的组件名不能与swiper组件同名为swiper
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      // swiper的配置信息
      swiperOption: {
        // 配置轮播页码
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true,
        // autoplay有三个参数
        // 1.false禁用自动轮播
        // 2.true启动用自动轮播时间默认
        // 3.毫秒为单位自定义自动轮播的轮播秒数
        autoplay: 5000
      }
    }
  },
  computed: {
    // 判断当前的swiper组件接收的数组是否有值
    showSwiper () {
      return this.swiperList.length
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
    padding-bottom:31%
    background:#eee
  .swiper-img
    width:100%
</style>
