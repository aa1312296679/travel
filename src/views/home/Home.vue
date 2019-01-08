<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :List="weekendList"></HomeWeekend>
  </div>
</template>

<script>
// 导入首页的所有视图组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    // 将vuex的当前城市映射到当前组件，以此作为ajax的请求参数
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  // 当前组件被渲染的内容不是从keep-alive的缓存获取时才触发
  // 如果当前组件被渲染的内容从keep-alive的缓存获取则不触发
  mounted () {
    // 将请求参数记录在组件本地
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 该组件被使用时激活
  // 不管组件的渲染内容是否从缓存获取，只要组件被渲染完成就立即触发
  activated () {
    // 如果本地记录的vuex信息与vuex中的当前信息不匹配
    if (this.lastCity !== this.city) {
      // 更新组件本的请求参数
      this.lastCity = this.city
      // 重新请求新数据
      this.getHomeInfo()
    }
  },
  // 该组件被停用时激活
  deactivated () {
    console.log('ww')
  },
  methods: {
    // 请求当前页的数据源
    getHomeInfo () {
      // 通过vuex的当前城市请求指定的城市信息
      this.$axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * 请求信息解析函数
     *  @res res为axios请求成功时的resolve
    */
    getHomeInfoSucc (res) {
      // 获取请求成功时的resolve对象中的请求结果
      // axios的请求结果存储在data中，必须通过data获取
      res = res.data
      // 如果请求成功
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>
