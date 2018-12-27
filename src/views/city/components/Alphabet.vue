<template>
  <div class="Alphabet">
    <ul class="list">
      <li class="item" v-for="item of letters" :ref="item" :key="item" @click="handleLetterClick" @touchstart.prevent="handleTotchStart" @touchmove="handleTotchMove" @touchend="handleTotchEnd">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      // 字母组件的字幕的触摸状态
      touchStart: false,
      // 字幕元素A距离当前组件的总容Alphabet元素的高度
      startY: 0,
      // 屏幕滑动执行流的定时器
      timer: null
    }
  },
  props: {
    cities: Object
  },
  updated () {
    // 获取字幕元素A距离当前组件的总容Alphabet元素的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    // 字母集合
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTotchStart (e) {
      this.touchStart = true
    },
    handleTotchMove (e) {
      if (this.touchStart) {
        // 如果屏幕滑动执行流的定时器存在则清除
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 创建当前组件的屏幕滑动执行流的定时器
        // 定时器的秒数用于限制该事件的触发频率
        this.timer = setTimeout(() => {
          // 阻止手指屏幕滑动时被触碰元素的默认事件
          e.preventDefault()
          // e.touches[0].clientY为获取当前手指触摸位置距离页面顶部的高度
          // 79为顶部元素的总高度
          // 当前手指距离页面顶部的高度-多余高度：
          // 通过顶部元素总高度计算当前手指距离当前组件的Alphabet元素的高度
          const touchY = e.touches[0].clientY - 79
          // 计算当前被点字母元素所对应的字母数组中的元素下标
          // 21.6为每个字母元素的高度
          const index = Math.floor((touchY - this.startY) / 21.6)
          // 获取手指点击区域所对应的字母并将字母传至父组件
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTotchEnd (e) {
      this.touchStart = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .Alphabet
    height 11.75rem
    .list
      display flex
      flex-direction column
      justify-content center
      position absolute
      top 1.58rem
      right 0
      bottom 0
      width  .4rem
      height 11.75rem
      box-sizing border-box
      .item
        line-height  .44rem
        text-align center
        color $bgColor
</style>
