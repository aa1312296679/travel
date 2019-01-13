<template>
    <ul>
      <!--
          当前列表组件的列表项信息
      -->
      <li class="item-title" @click='toggle'>
         <!--
            根据当前列表项的子数据存在情况以不同方式输出该列表项
          -->
          <div v-if="isFolder">
            <span class="item-title-icon"></span>
            {{list.title}}-更多详情
          </div>
          <div v-else>
            <span class="item-title-icon"> </span>
            {{list.title}}
          </div>
        </li>
      <fadeAnimation>
        <!--
          列表项的子选项容器
        -->
        <li v-show="open" v-if="isFolder" class="item-chilren">
          <!--
            1.如果当前列表项存在子数据则遍历列表项下的所有子数据
            2.递归调用列表项组件处理的子数据
          -->
          <detail-list v-for='(item,key) in list.children' :list="item" :key="item.title+key"></detail-list>
        </li>
      </fadeAnimation>
    </ul>
</template>

<script>
import fadeAnimation from 'common/fade/fadeAinimation'
export default {
  name: 'detailList',
  components: {
    fadeAnimation
  },
  props: {
    // 当前列表组件的列表项信息
    list: Object
  },
  data () {
    return {
      // 当前列表项的子选项显示状态
      open: true
    }
  },
  computed: {
    // 当前列表项的子数据情况
    isFolder () {
      return this.list.children && this.list.children.length
    }
  },
  methods: {
    // 更新列表项的展开状态
    toggle () {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-chilren
    padding: 0 .2rem
</style>
