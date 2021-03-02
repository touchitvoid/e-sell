<template>
  <view class="pay-code__box" @click="$emit('close')">
    <view class="pay-code">
      <view>使用支付宝/微信扫描</view>
      <img :src="qrcode" />
    </view>
  </view>
</template>

<script>
export default {
  name: "pay-code",
  props: {
    qrcode: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .pay-code__box {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .1);
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    .pay-code {
      width: 400rpx;
      height: 400rpx;
      transform: translate(0, -40rpx);
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 44rpx 38rpx;
      padding-bottom: 60rpx;
      background: white;
      text-align: center;
      > view:first-child {
        margin-bottom: 24rpx;
        color: @title-color;
        font-size: 28rpx;
      }
      img {
        width: 320rpx;
        height: 320rpx;
      }
    }
  }
</style>