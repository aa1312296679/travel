<template>
    <div>
      <detail-banner :bannerImgs="bannerImg"></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :list="list"></detail-list>
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
      bannerImg: ['http://img1.qunarzz.com/sight/p0/1812/4e/4ea37928505e370da3.img.jpg_r_800x800_a8f51919.jpg', 'http://img1.qunarzz.com/sight/p0/1812/eb/eb2b3a1bb0015b53a3.img.jpg_r_800x800_5b46b448.jpg'],
      list: [
        { title: '成人票',
          children: [
            { title: '成人三馆联票',
              children: [{
                title: '成人三馆联票-连锁店1'
              },
              {
                title: '成人三馆联票-连锁店2'
              }]
            },
            { title: '成人五馆联票' }
          ]
        },
        { title: '学生票' },
        { title: '儿童票' },
        { title: '特惠票' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
