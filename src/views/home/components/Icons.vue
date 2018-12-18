<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page"
       :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl"/>
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      // 总页数组
      // 存放拆分为二维数组后的每个页码数组
      const pages = []
      // 分页内容的内容数
      // 8为每8条数据为一页
      const number = 8
      // 获取数据源使用分页算法进行分页
      // 将数据源的一维数组拆分为二维数组并存放所有的分页内容
      this.iconList.forEach((item, index) => {
        // 计算当前元素所对应的页码数组
        const page = Math.floor(index / number)
        // 如果当前元素所对应的页码数组不存在则创建
        if (!pages[page]) {
          pages[page] = []
        }
        // 如果当前元素元素所对应的页码数组存在则使用当前元素所对应的页码数组存储当前元素
        pages[page].push(item)
      })
      // 拆分完毕的总页二维数组返回到外部
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons
    margin-top:.1rem
  .icons >>> .swiper-container
    height:0
    padding-bottom:50%
  .icon
    position relative
    overflow:hidden
    float:left
    /*
      height:0为父元素icon限制子元素icon-img撑开父元素的高度
    */
    height:0
    width:25%
    padding-bottom:25%
  .icon-img
    position absolute
    top:0
    left:0
    right:0
    /*
      设置定位布局的图片容器的响应式高度
      百分比为设计稿的1:1情况下的高度/Html选择器的font-size
    */
    bottom:.44rem
    /*
      将该元素的像素的内外边距添加到该元素的像素中
    */
    box-sizing:border-box
    padding:.1rem
  .icon-img-content
    /*
      display配合margin将图片元素居中
    */
    display:block
    margin 0 auto
    height:100%
  .icon-desc
    position absolute
    bottom:0
    left:0
    right:0
    height:.44rem
    line-height:.44rem
    color:$darkTextColor
    text-align center
    ellipsis()
</style>
