<template>
  <div class="header">
    <div class="header-left" >
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
    </div>
    <div class="header-right">
      城市
      <i class="iconfont arrow-icon">&#xe64a;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!--
  scoped为使该组件的CSS只作用于该组件渲染输出的DOM
  如果不设置scoped，css会作用于当前页的所有组件所渲染输出的DOM
-->
<style lang="stylus" scoped>
  // CSS预处理部分通过别名导入预处理模块，必须为别名变量添加~转义
  @import '~styles/varibles.styl'
    .header
      height: .86rem
      line-height: .86rem
      display: flex
      background: $bgColor
      color: #fff
    .header-left
      width: .64rem
      float: left
    .header-left .back-icon
      text-align:center
      width:100%
      height:100%
      display block
      font-size:.4rem
    .header-input
      flex: 1
      height :.64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left .2rem
      background: #fff
      border-radius: .1rem
      color:#ccc
      padding-left:.2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
    .header-right .arrow-icon
      margin-left:-.04rem
      font-size:.24rem
</style>
