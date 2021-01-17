<template>
  <view>
    <full-status-bar title="交易详情"></full-status-bar>
    <view class="divider-22"></view>
    <view class="padding-16">
      <view class="order-info">
        <view class="order-info__line primary">
          <view class="order-primary__info">
            <view>
              <image mode="widthFix" :src="WechatIcon"/>
              肥城帝王洁具
            </view>
            <view>
              <image mode="widthFix" :src="WechatIcon"/>
              交易成功
            </view>
          </view>
          <view class="order-primary__amount">
            <text>¥</text>12,000.00
          </view>
        </view>
        <view class="order-info__line">
          状态描述 <text>支付成功,SUCCESS</text>
        </view>
        <view class="order-info__line"> 创建时间 <text>微信小程序</text> </view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
      </view>
      <view class="divider-16"></view>
      <view class="order-info">
        <view class="order-info__line title">交易认款</view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
      </view>
      <view class="divider-16"></view>
      <view class="order-info">
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
      </view>
      <view class="divider-16"></view>
      <view class="order-info">
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
        <view class="order-info__line"> 交易类型 <text>微信小程序</text> </view>
      </view>
      <button class="controller">退款</button>
    </view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"
import WechatIcon from "@/static/icons/wechat.png"

export default {
  name: "trade-detail",
  components: { FullStatusBar },
  data() {
    return {
      WechatIcon,
      tradeInfo: {
        0: "2020-12-15 22:39:32",
        1: "5fd707a566a53a045a2dc6fe",
        2: '16079277165371',
        3: '123',
        4: '',
        5: ''
      },
      keyNames: {
        0: "创建时间",
        1: "5fd707a566a53a045a2dc6fe",
        2: '16079277165371',
        3: '123',
        4: '',
        5: ''
      }
    }
  },
}
</script>

<style lang="less" scoped>
@import url("@/color.less");

.order-info {
  border-radius: 16rpx;
  overflow: hidden;
  .order-info__line {
    width: 100%;
    height: 80rpx;
    background: white;
    line-height: 80rpx;
    font-size: 24rpx;
    color: @subtitle-color;
    box-sizing: border-box;
    padding: 0 32rpx;
    position: relative;
    overflow: hidden;
    font-weight: 400;
    &.title {
      color: @title-color;
      font-weight: 600;
    }
    &.primary {
      min-height: 200rpx;
      box-sizing: border-box;
      padding: 36rpx;
      .order-primary__info {
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;
        color: @title-color;
        view {
          height: 40rpx;
          display: -webkit-flex;
          align-items: center;
          font-size: 26rpx;
          font-weight: 600;
          image {
            width: 40rpx;
            margin-right: 12rpx;
          }
        }
      }
      .order-primary__amount {
        height: 120rpx;
        display: -webkit-flex;
        align-items: center;
        font-size: 64rpx;
        font-weight: 700;
        color: @title-color;
        text {
          width: 36rpx;
          text-align: center;
          font-size: 36rpx;
        }
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: @border-color;
      position: absolute;
      bottom: 0;
      left: 32rpx;
    }
    > text {
      color: @title-color;
      margin-left: 64rpx;
    }
  }
}
.controller {
  width: 376rpx;
  height: 96rpx;
  line-height: 96rpx;
  border-radius: 96rpx;
  color: white;
  background-color: #FF3B30;
  margin: 48rpx auto;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 28rpx;
  letter-spacing: 1px;
  &::after {
    border: none;
  }
}
</style>
