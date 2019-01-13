<template>
    <div>
      <detail-banner :signtName="signtName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <!--
            遍历所有列表数据并通过列表项组件创建列表项
        -->
        <detail-list :list='item' v-for='(item,key) in list' :key="item.title+key"></detail-list>
      </div>
    </div>
</template>

<script>
import DetailBanner from './components/Bannaer'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      signtName: '',
      gallaryImgs: [],
      list: [],
      bannerImg: ''
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    // 请求当前页的数据源
    getHomeInfo () {
      // 根据当前详情页的路由参数请求详情信息
      this.$axios.get('/api/detail.json', {
        id: this.$route.params.id
      })
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
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.signtName = data.sightName
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        this.bannerImg = data.bannerImg
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
