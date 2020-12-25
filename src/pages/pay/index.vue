<template>
  <view>
    <status-bar title="支付"></status-bar>
    <view class="pay-info">
      <image />
      <view class="pay-info__name">
        肥城帝王洁具（董帅）
        <view>帝欧家居股份有限公司</view>
      </view>
    </view>
    <view class="pay-form">
      <view class="pay-input">
        <view>支付金额</view>
        <input type="number" placeholder-style="color: #bfbfbf;" placeholder="0.00" />
      </view>
      <input class="pay-remarks" placeholder-style="color: #bfbfbf" placeholder="请输入备注"/>
    </view>
  </view>
</template>

<script>

import StatusBar from '@/components/custom-status-bar'

export default {
  name: "pay",
  components: {
    StatusBar
  },
  data () {
    return {

    }
  },
  onLoad() {
		// console.log(wx.getMenuButtonBoundingClientRect())
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .pay-info {
    height: 176rpx;
    display: -webkit-flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 32rpx;
    image {
      width: 80rpx;
      height: 80rpx;
      border-radius: 8rpx;
      margin-right: 24rpx;
      background-color: lightgray;
    }
    .pay-info__name {
      font-size: 28rpx;
      color: @title-color;
      view {
        color: @subtitle-color;
        font-size: 22rpx;
      }
    }
  }
  .pay-form {
    background-color: white;
    box-sizing: border-box;
    padding: 0 32rpx;
    .pay-input {
      height: 200rpx;
      box-sizing: border-box;
      padding-top: 32rpx;
      display: -webkit-flex;
      flex-direction: column;
      view {
        font-size: 28rpx;
        line-height: 44rpx;
        color: @title-color;
      }
      input {
        flex: 1;
        border: none;
        border-bottom: 1px solid #eeeeee;
        position: relative;
        box-sizing: border-box;
        padding: 0 52rpx;
        font-size: 72rpx;
        // font-weight: 600;
        color: @title-color;
        &::before {
          content: '¥';
          width: 36rpx;
          text-align: center;
          font-size: 36rpx;
          line-height: 52rpx;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(0, -50%);
          color: @title-color;
          font-weight: 600;
        }
      }
    }
  }
  .pay-remarks {
    width: 100%;
    height: 96rpx;
    font-size: 24rpx;
    color: @title-color;
  }
</style>