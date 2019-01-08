<template>
    <div class="banner" @click="handleBanerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1812/eb/eb2b3a1bb0015b53a3.img.jpg_600x330_fdedc90a.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">
          大连圣亚海洋世界（AAA景区）
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>39
        </div>
      </div>
      <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Bannaer',
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  props: {
    bannerImgs: Array
  },
  methods: {
    handleBanerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
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
