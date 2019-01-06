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
              <div class="button">{{this.$store.state.city}}</div>
          </div>
        </li>
        <li class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
              <div class="button" v-for="hotItem of hot" :key="hotItem.id" @click="handleCity(hotItem.name)">{{hotItem.name}}</div>
          </div>
        </li>
        <li class="area" v-for="(items, key) of citites" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
            <ul v-for="item of items"  class="item-list"  :key="item.id">
              <li class="item border-bottom">{{item.name}}</li>
            </ul>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    // 热门城市
    hot: Array,
    // 所有城市
    citites: Object,
    // 当前被选中的城市字母
    letter: String
  },
  mounted () {
    // 滑动内容挂在到Bscroll滑动插件中
    // 将滑动对象挂载到当前组件中
    // 注：scrollY为自定义属性，可任意命名
    this.scrollY = new this.$Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        // 根据当前组件的字母名获取指定名称的字母元素
        const Element = this.$refs[this.letter][0]
        // 通过btter-scroll插件的scrollToElement方法查找字母元素的位置并将滚动条滑动至该位置
        this.scrollY.scrollToElement(Element)
      }
    }
  },
  methods: {
    handleCity (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
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
      @media screen and (min-width 375px)
        width 30.2%
      @media screen and (max-width 375px)
        width 29.8%
      box-sizing border-box
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
  .area
    overflow hidden
</style>
