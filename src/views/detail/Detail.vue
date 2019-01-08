<template>
    <div>
      <detail-banner :bannerImgs="bannerImg"></detail-banner>
    </div>
</template>

<script>
import DetailBanner from './components/Bannaer'
export default {
  name: 'Detail',
  components: {
    DetailBanner
  },
  data () {
    return {
      bannerImg: ['http://img1.qunarzz.com/sight/p0/1812/4e/4ea37928505e370da3.img.jpg_r_800x800_a8f51919.jpg', 'http://img1.qunarzz.com/sight/p0/1812/eb/eb2b3a1bb0015b53a3.img.jpg_r_800x800_5b46b448.jpg']
    }
  }
}
</script>

<style scoped>

</style>
