<template>
  <view>
    <status-bar title="记账明细"></status-bar>
    <view class="transaction-judge">
      <view>
        起止日期
        <img mode="widthFix" src="@/static/icons/arrow-bottom.svg" />
      </view>
      <view>
        筛选
        <img mode="widthFix" src="@/static/icons/arrow-bottom.svg" />
      </view>
    </view>
    <view class="transaction-statistics">
      <view class="transaction-statistics__judge">
        本月
        <img src="@/static/icons/triangle-bottom.svg" />
      </view>
      <view class="transaction-statistics__data">
        <view>
          本月支出
          <text>¥12,345,678.89</text>
        </view>
        <view>
          本月收入
          <text>¥12,345,678.89</text>
        </view>
      </view>
    </view>
    <view class="transaction-list">
      <view class="transaction-line" v-for="num in 5" :key="num" @click.stop="$link('/pages/order/detail')">
        <image :src="num%2 === 1? IncomeIcon: ExpenditureIcon" />
        <view class="transaction-content">
          支付手续费
          <view class="date">2020-12-14 23:05:33</view>
        </view>
        <view class="transaction-amount">
          -2.07
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import ExpenditureIcon from '@/static/icons/expenditure.png'
import IncomeIcon from '@/static/icons/income.png'

export default {
  name: "transaction",
  components: {
    StatusBar
  },
  data () {
    return {
      ExpenditureIcon,
      IncomeIcon
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .transaction-judge {
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    height: 80rpx;
    background: white;
    font-size: 28rpx;
    color: @title-color;
    view {
      display: -webkit-flex;
      align-items: center;
      &:first-child {
        margin-right: 105rpx;
      }
    }
    image {
      width: 18rpx;
      height: 20rpx;
      margin-left: 10rpx;
    }
  }
  .transaction-statistics {
    box-sizing: border-box;
    padding: 32rpx;
    .transaction-statistics__judge {
      color: @title-color;
      font-size: 28rpx;
      height: 39.2rpx;
      font-weight: 400;
      display: -webkit-flex;
      align-items: center;
      image {
        width: 15rpx;
        height: 9rpx;
        margin-left: 12rpx;
      }
    }
    .transaction-statistics__data {
      font-size: 22rpx;
      display: -webkit-flex;
      align-items: center;
      margin-top: 24rpx;
      view {
        color: @subtitle-color;
        margin-right: 24rpx;
        line-height: 31rpx;
        text {
          margin-left: 16rpx;
        }
      }
    }
  }
  .transaction-line {
    box-sizing: border-box;
    padding: 24rpx 32rpx;
    background: white;
    display: -webkit-flex;
    align-items: center;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: @border-color;
      position: absolute;
      bottom: 0;
      left: 32rpx;
    }
    image {
      width: 80rpx;
      height: 80rpx;
      margin-right: 24rpx;
    }
    .transaction-content {
      flex: 1;
      font-size: 28rpx;
      line-height: 39.2rpx;
      color: @title-color;
      view.date {
        font-size: 22rpx;
        line-height: 26.6rpx;
        margin-top: 8rpx;
        color: @subtitle-color;
      }
    }
    .transaction-amount {
      font-weight: 500;
      font-size: 28rpx;
      text-align: right;
      color: #FF4D4F;
    }
    &.income {
      .transaction-amount {
        color: @title-color;
      }
    }
  }
</style>
