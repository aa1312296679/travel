<template>
    <div class="banner" @click="handleBanerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle">
          {{signtName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>39
        </div>
      </div>
      <fade-animation>
        <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
import FadeAnimation from 'common/fade/fadeAinimation'
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Bannaer',
  data () {
    return {
      // 公用局部组件的显示状态
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    gallaryImgs: Array,
    signtName: String,
    bannerImg: String
  },
  methods: {
    handleBanerClick () {
      // 显示公用组件中的景区图组件
      this.showGallary = true
    },
    handleGallaryClose () {
      // 隐藏公用组件中的景区图组件
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
