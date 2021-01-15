<template>
  <view>
    <full-status-bar title="应付账单"></full-status-bar>
    <view class="divider-22"></view>
    <view class="padding-16">
      <view class="bill-info">
        <view class="bill-basic__info">
          <view class="bill-date">
            核销时间<text>2020-12-23 23:26:37</text>
          </view>
          <view class="bill-status"> <image :src="SuccessIcon" />已核销 </view>
        </view>
        <view class="bill-amount">
          <view class="bill-amount__item">
            账单金额
            <view>
              ¥12,000.00
            </view>
          </view>
          <view class="bill-amount__item">
            已付款金额
            <view>
              ¥12,000.00
            </view>
          </view>
        </view>
      </view>
      <view class="bill-title">
        账单金额明细
      </view>
      <view class="order-info">
        <view class="order-info__line"> 本金 <text>8000.00</text> </view>
        <view class="order-info__line"> 利息 <text>1.00</text></view>
        <view class="order-info__line"> 罚息 <text>0.00</text> </view>
        <view class="order-info__line"> 违约金 <text>0.00</text> </view>
        <view class="order-info__line"> 已付金额 <text>0.00</text> </view>
        <view class="order-info__line"> 待赔付金额 <text>8000.00</text> </view>
      </view>
      <view class="bill-title">
        龙华花园门店
      </view>
      <view class="order-info">
        <view class="order-info__line"> 创建日期 <text>8000.00</text> </view>
        <view class="order-info__line"> 生效日期 <text>1.00</text></view>
        <view class="order-info__line"> 自定义编号 <text>0.00</text> </view>
        <view class="order-info__line"> 账单备注 <text>0.00</text> </view>
      </view>
    </view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"
import SuccessIcon from "@/static/icons/bill-success.png"

export default {
  name: "bill-detail",
  components: {
    FullStatusBar,
  },
  data() {
    return {
      SuccessIcon,
    }
  },
}
</script>

<style lang="less" scoped>
@import url("@/color.less");

.bill-info {
  border-radius: 16rpx;
  background: white;
  box-sizing: border-box;
  padding: 36rpx 32rpx 28rpx 32rpx;
  .bill-basic__info {
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28rpx;
    .bill-date {
      line-height: 40rpx;
      color: #8c8c8c;
      font-size: 26rpx;
      text {
        margin-left: 8rpx;
        font-size: 28rpx;
      }
    }
    .bill-status {
      display: -webkit-flex;
      align-items: center;
      image {
        width: 40rpx;
        height: 40rpx;
        margin-right: 12rpx;
      }
    }
  }
  .bill-amount {
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    .bill-amount__item {
      font-size: 26rpx;
      color: @title-color;
      line-height: 40rpx;
      view {
        font-size: 36rpx;
        line-height: 72rpx;
        font-weight: 700;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
}
.bill-title {
  color: @title-color;
  font-size: 28rpx;
  line-height: 35rpx;
  margin-top: 48rpx;
  margin-bottom: 24rpx;
  font-weight: 600;
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
      content: "";
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
</style>
