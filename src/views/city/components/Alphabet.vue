<template>
  <div class="Alphabet">
    <ul class="list">
      <li class="item" v-for="(item,key,index) of citites" :key="key+index">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    citites: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width  .4rem
    border 1px solid red
    height 100%
    .item
      line-height  .44rem
      text-align center
      color $bgColor
</style>
