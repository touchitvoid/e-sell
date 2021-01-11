<template>
  <view>
    <status-bar title="筛选"></status-bar>
    <view class="screen-judge__card">
      <view class="screen-judge__title">交易状态</view>
      <view class="screen-judge" v-for="(status, key) in tradeStatus" :key="key">
        {{ status }}
      </view>
    </view>
    <view class="judge-divider">
      <view></view>
    </view>
    <view class="screen-judge__card">
      <view class="screen-judge__title">交易类型</view>
      <view class="screen-judge" v-for="(type, key) in tradeType" :key="key">
        {{ type }}
      </view>
    </view>
    <view class="divider-16"></view>
    <custom-line title="一级子商户" :contentShow="false"></custom-line>
    <view class="divider-16"></view>
    <view class="divider-16"></view>
    <custom-line title="查询" type="button" @click.native="$link('/pages/tool/business')"></custom-line>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import CustomLine from '@/components/custom-line.vue'

export default {
  name: "screen",
  components: {
    StatusBar,
    CustomLine
  },
  data () {
    return {
      tradeStatus: {
        0: '交易成功',
        1: '已申请退款',
        2: '退款中',
        3: '退款成功'
      },
      tradeType: {
        0: '支付：微信',
        1: '支付：支付宝',
        2: '支付：银行卡',
        3: '调账支出',
        4: '提现支出',
        5: '授权收款支出',
        6: '退款：微信',
        7: '退款：支付宝',
        8: '退款：银行卡',
        9: '调账收入',
        9: '授权收款收入',
        9: '网银转账'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .judge-divider {
    width: 100%;
    height: 1px;
    background: white;
    box-sizing: border-box;
    padding: 0 32rpx;
    view {
      width: 100%;
      height: 1px;
      background: @border-color;
    }
  }
  .screen-judge__card {
    width: 100%;
    box-sizing: border-box;
    padding: 32rpx;
    padding-bottom: 8rpx;
    background: white;
    .screen-judge__title {
      font-size: 28rpx;
      line-height: 44rpx;
      color: @title-color;
      margin-bottom: 24rpx;
    }
    .screen-judge {
      padding: 10rpx 24rpx;
      color: @title-color;
      font-size: 24rpx;
      text-align: center;
      margin-right: 40rpx;
      display: inline-block;
      height: 44rpx;
      line-height: 44rpx;
      background: white;
      border-radius: 44rpx;
      margin-bottom: 24rpx;
      border: 1px solid @border-color;
    }
  }
</style>