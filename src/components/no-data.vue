<template>
  <div class="no-data">
    <image mode="widthFix" class="image-show" :src="PngNull" />
  </div>
</template>

<script>
import PngNull from '@/static/images/null.png'

export default {
  name: 'no-data',
  data () {
    return {
      PngNull
    }
  }
}
</script>

<style lang="less" scoped>
  .no-data {
    width: 100%;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  .image-show {
    width: 480rpx;
    max-width: 80%;
    margin-top: 240rpx;
  }
</style>
