<template>
  <!--
      better-scroll的视图层
      1.必须绝对定位
      2.必须固定宽高且隐藏溢出内容：overflow:hideen
  -->
  <div class="list" ref="wrapper">
      <!--
        better-scroll的内容层
        如果为纵向则宽100%，高不固定
        如果为横向则高100%，宽不固定
      -->
      <ul class="list-content">
        <!--内容层 显示具体内容-->
        <li class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button">北京</div>
          </div>
        </li>
        <li class="area">
          <!--
              为该元素添加上下一像素边框
              原理：
              给该元素添加伪元素伪造上下1物理像素的边框
          -->
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
              <div class="button" v-for="(item, index) of hot" :key="index">{{item.name}}</div>
          </div>
        </li>
        <li class="area" v-for="(item, key, index) of citites" :key="key+index">
          <div class="title border-topbottom">{{key}}</div>
          <ul class="item-list" v-for="item of item" :key="item.id">
            <li class="item border-bottom">{{item.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
// import Bscroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    hot: Array,
    citites: Object
  },
  mounted () {
    // 滑动内容挂在到Bscroll滑动插件中
    this.scroll = new this.$store.state.Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  // 将容器进行定位布局
  // 配合插件实现拖拽区域的拖拽
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    height 11.76rem
  .list-content
    width 100%
  // 为1像素边框的元素重写CSS边框色
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem
  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button
      float left
      margin .1rem
      padding .1rem 0
      text-align center
      border .02rem solid #ccc
      border-radius .06rem
      width 30.2%
      box-sizing border-box
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
  .area
    overflow hidden
</style>
