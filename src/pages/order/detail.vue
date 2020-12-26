<template>
  <view>
    <full-status-bar title="订单详情"></full-status-bar>
    <view class="order-detail">
      <view class="order-amount">
        <view class="order-amount__money">
          肥城帝王洁具（董帅）
          <view> <text>¥</text>12,000.00 </view>
        </view>
        <view class="order-amount__detail">
          <view>
            应结算金额
            <view>11,987.40</view>
          </view>
          <view>
            结算手续费
            <view>27.60</view>
          </view>
          <view>
            总退款金额
            <view>27.60</view>
          </view>
        </view>
      </view>
      <view class="divider-16"></view>
      <view class="order-info">
        <view class="order-info__line">
          交易状态 <text>支付成功</text>
        </view>
        <view class="order-info__line">
          状态描述 <text>支付成功,SUCCESS</text>
        </view>
        <view class="order-info__line">
          交易类型 <text>微信小程序</text>
        </view>
        <view class="order-info__line">
          交易类型 <text>微信小程序</text>
        </view>
        <view class="order-info__line">
          交易类型 <text>微信小程序</text>
        </view>
        <view class="order-info__line">
          交易类型 <text>微信小程序</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"

export default {
  name: "order-detail",
  components: { FullStatusBar },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
@import url("@/color.less");

.order-detail {
  box-sizing: border-box;
  padding: 44rpx 32rpx;
  .order-amount {
    box-sizing: border-box;
    padding: 32rpx;
    background: white;
    border-radius: 16rpx;
    .order-amount__money {
      width: 100%;
      text-align: center;
      color: @title-color;
      font-size: 26rpx;
      line-height: 40rpx;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 32rpx;
      view {
        font-size: 64rpx;
        line-height: 72rpx;
        margin-top: 24rpx;
        font-weight: 700;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        text {
          font-size: 36rpx;
          width: 36rpx;
          text-align: center;
        }
      }
    }
    .order-amount__detail {
      padding-top: 22rpx;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      view {
        color: @subtitle-color;
        font-size: 22rpx;
        text-align: center;
        line-height: 40rpx;
        &:nth-child(2) {
          margin: 0 100rpx;
        }
        view {
          font-size: 26rpx;
          line-height: 30rpx;
          color: @title-color;
          font-weight: 500;
        }
      }
    }
  }
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
      &::after {
        content: '';
        width: 100%;
        height: 1px;
        background: @border-color;
        position: absolute;
        bottom: 0;
        left: 32rpx;
      }
      text {
        color: @title-color;
        margin-left: 64rpx;
      }
    }
  }
}
</style>
