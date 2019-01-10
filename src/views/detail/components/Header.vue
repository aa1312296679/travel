<template>
    <div class="detail-header">
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div class="header-fixed" v-show="!showAbs"  :style="opacityStyle">
          <router-link tag="div" to="/" class="iconfont header-fixed-back">&#xe624;</router-link>
        景点详情
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      // 详情头部信息的状态
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      console.log('handleScroll已触发')
      // 获取当前浏览器的滚动条的上边距
      const top = document.documentElement.scrollTop
      // 如果当前浏览器的滚动条的上边距大于60
      if (top > 60) {
        // 计算副头部信息的透明度
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        // 更新副头部信息的透明度
        this.opacityStyle = { opacity }
        // 显示副头部信息
        this.showAbs = false
      } else {
        // 显示主头部信息
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
