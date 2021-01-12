<template>
  <view class="fixed-button__group">
    <button @click="$emit('add')" class="fixed-button">
      <image :src="AddIcon"/>
    </button>
  </view>
</template>

<script>
import AddIcon from '@/static/icons/button-add.png'

export default {
  name: "fixed-tool",
  data () {
    return {
      AddIcon
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .fixed-button__group {
    position: fixed;
    right: 48rpx;
    bottom: 128rpx;
  }
  .fixed-button {
    width: 80rpx;
    height: 80rpx;
    padding: 0;
    border-radius: 80rpx;
    position: relative;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    background: @primary-color;
    border: none;
    overflow: visible;
    box-shadow: 0px 4px 16px rgba(42, 88, 225, 0.4);
    &::after {
      border: none;
    }
    image {
      width: 28rpx;
      height: 28rpx;
      position: relative;
      z-index: 1;
    }
  }
</style>