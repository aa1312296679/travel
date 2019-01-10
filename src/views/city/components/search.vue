<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" @click="handleCity(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'citySearch',
  props: {
    // 城市信息
    cities: Object
  },
  data () {
    return {
      // 查询输入框的双向绑定内容
      keyword: '',
      // 查询输入框的的提示信息
      list: [],
      // 查询内容的提示频率
      timer: null
    }
  },
  watch: {
    // 监听查询输入框的查询内容
    // 作用：实现查询输入框的查询提示信息实时更新
    keyword () {
      // 如果查询关键词监听的执行频率定时器存在则清楚
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果查询关键词为空则清除查询内容的提示信息
      if (!this.keyword) {
        this.list = []
        return
      }
      // 清空查询输入框的所有查询提示信息
      this.list = []
      // 如果查询内容关键词不为空则100毫秒后搜索与查询关键词相匹配的信息
      this.timer = setTimeout(() => {
        // 遍历所有的城市信息并找出与查询输入框相匹配的信息
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            // 如果查询内容与查询输入框相匹配则添加至查询提示信息数组
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              // 将该当前城市信息添加到查询提示中
              this.list.push(value)
            }
          })
        }
      }, 100)
    }
  },
  computed: {
    // 查询结果
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new this.$Bscroll(this.$refs.search)
  },
  methods: {
    handleCity (city) {
      // 清空查询内容
      this.keyword = ''
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      padding 0 .1rem
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
