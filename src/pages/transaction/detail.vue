<template>
  <view>
    <status-bar title="记账明细"></status-bar>
    <view class="transaction-judge">
      <view v-for="(str, key) in tabs" :key="key">
        {{ str }}
      </view>
      <view @click="$link('/pages/tool/screen')">
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
      <view class="transaction-card">
        <view class="transaction-info">
          <view class="transaction-date">
            <view>
              <image mode="widthFix" :src="AlipayIcon"/>
              肥城帝王洁具
            </view>
            2020-12-21 21:46:06
          </view>
          <view class="transaction-amount">
            <view class="transation-amount__total">
              <text>¥</text>12,000.00
            </view>
            <view class="transation-amount__other">
              <view>
                手续费
                <view>27.60</view>
              </view>
              <view>
                应结算
                <view>27.60</view>
              </view>
            </view>
          </view>
        </view>
        <view class="transaction-remarks">
          <view>
            交易对手
            <view>5fd707a566a53a045a2dc6fe</view>
          </view>
          <view>
            备注
            <view>收款</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import AlipayIcon from '@/static/icons/alipay.png'
import WechatIcon from '@/static/icons/wechat.png'
import TradeIcon from '@/static/icons/trade.png'
import BankIcon from '@/static/icons/bank.png'

export default {
  name: "transaction-detail",
  components: {
    StatusBar
  },
  data () {
    return {
      AlipayIcon,
      WechatIcon,
      TradeIcon,
      BankIcon,
      tabs: {
        0: '全部',
        1: '交易成功',
        2: '退款成功'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .transaction-judge {
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    height: 80rpx;
    background: white;
    font-size: 28rpx;
    color: @title-color;
    box-sizing: border-box;
    padding: 0 34rpx;
    view {
      display: -webkit-flex;
      align-items: center;
      padding: 0 16rpx;
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
  .transaction-card {
    box-sizing: border-box;
    padding: 32rpx;
    background: white;
    margin-bottom: 24rpx;
    .transaction-date {
      color: #8c8c8c;
      font-weight: normal;
      font-size: 28rpx;
      line-height: 32rpx;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      view {
        color: @title-color;
        font-style: normal;
        font-weight: 600;
        font-size: 26rpx;
        line-height: 40rpx;
        display: -webkit-flex;
        align-items: center;
        image {
          width: 40rpx;
          margin-right: 12rpx;
        }
      }
    }
    .transaction-amount {
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      color: @title-color;
      height: 130rpx;
      border-bottom: 1px solid @border-color;
      margin-bottom: 23rpx;
      .transation-amount__total {
        font-weight: bold;
        font-size: 64rpx;
        height: 72rpx;
        display: -webkit-flex;
        align-items: center;
        text {
          font-size: 36rpx;
        }
      }
      .transation-amount__other {
        display: -webkit-flex;
        align-items: center;
        > view {
          margin-left: 38rpx;
          font-size: 22rpx;
          line-height: 40rpx;
          color: @subtitle-color;
          > view {
            color: @title-color;
            margin-top: 8rpx;
            font-weight: 500;
            line-height: 30rpx;
            font-size: 26rpx;
          }
        }
      }
    }
    .transaction-remarks {
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      > view {
        font-size: 22rpx;
        line-height: 40rpx;
        color: @subtitle-color;
        &:last-child {
          text-align: right;
        }
        > view {
          font-size: 28rpx;
          line-height: 44rpx;
          color: @title-color;
          margin-top: 8rpx;
          font-weight: 400;
        }
      }
    }
  }
</style>
