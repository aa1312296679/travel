<template>
  <div class="home">
    <home-header :city="city"></home-header>
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
// 导入首页的axios组件
import Axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    // 请求当前页的数据源
    getHomeInfo () {
      Axios.get('/api/index.json')
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
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>
