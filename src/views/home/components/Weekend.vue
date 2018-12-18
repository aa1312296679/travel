<template>
    <div class="weekend">
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl"/>
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'weekend',
  data () {
    return {
      recommendList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
        title: '芭拉胡景区',
        desc: '重庆市黔江区319国道附近'
      },
      {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg',
        title: '芭拉胡景区',
        desc: '重庆市黔江区319国道附近'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top:.2rem
    line-height:.8rem
    background: #eee
    text-indent: .2rem
  .item-title,.item-desc
    ellipsis()
  .item-img-wrapper
    overflow:hidden
    height:0
    padding-bottom:33.9%
    .item-img
      width:100%
  .item-info
    padding:.1rem
  .item-title
    line-height:.54rem
    font-size:.32rem
  .item-desc
    line-height:.4rem
    color:#ccc

</style>
