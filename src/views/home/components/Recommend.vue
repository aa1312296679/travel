<template>
  <div  class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg',
        title: '芭拉胡景区wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
        desc: '重庆市黔江区319国道附近wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
      },
      {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg',
        title: '芭拉胡景区wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
        desc: '重庆市黔江区319国道附近wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  /*
    line-height为height.8rem和line-height.8rem的简写
  */
  line-height:.8rem
  background: #eee
  text-indent: .2rem
.item-title,.item-desc
  ellipsis()
.item
  overflow:hidden
  display:flex
  height:1.9rem
.item-img
  width:1.7rem
  height:1.7rem
  padding:.1rem
.item-info
  flex:1
  padding:.1rem
  font-size:.32rem
  min-width:0
.item-desc
  line-height:.4rem
  color:#ccc
.item-button
  margin-top:.16rem
  background:#ff9300
  padding:0 .2rem
  border-radius:.06rem
  color:#fff
  line-height:.44rem
</style>
