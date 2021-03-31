<template>
  <view>
    <full-status-bar title="订单详情" overflow></full-status-bar>
    <full-background></full-background>
    <view class="order-detail">
      <view class="order-amount">
        <view class="order-amount__money">
          {{ info.distributor && info.distributor.name }}
          <view> <text>¥</text>{{ info.amount || 0 }}</view>
        </view>
        <view class="order-amount__detail">
          <view>
            应结算金额
            <view>{{ info.should_amount }}</view>
          </view>
          <view>
            结算手续费
            <view>{{ info.charges_amount }}</view>
          </view>
          <view>
            总退款金额
            <view>{{ info.refund_amount }}</view>
          </view>
        </view>
      </view>
      <view class="divider-16"></view>
      <view class="order-info">
        <view class="order-info__line">
          订单编号 <text>{{ info.order_no || '未知' }}</text>
        </view>
        <view class="order-info__line">
          交易状态 <text>{{ info.status_name || '未知' }}</text>
        </view>
        <!-- <view class="order-info__line">
          状态描述 <text>{{ info.trans_type_name }}</text>
        </view> -->
        <view class="order-info__line">
          交易类型 <text>{{ info.trans_type_name }}</text>
        </view>
        <view class="order-info__line">
          创建时间 <text>{{ info.created_at }}</text>
        </view>
        <view class="order-info__line">
          渠道单号 <text>{{ info.third_party_transaction_id || '-' }}</text>
        </view>
        <view class="order-info__line">
          交易对手 <text>{{ info.traders || '-' }}</text>
        </view>
        <view class="order-info__line">
          订单备注 <text>{{ info.remark || '-' }}</text>
        </view>
        <view class="order-info__line">
          订单描述 <text>{{ info.trans_type_name || '-' }}</text>
        </view>
        <view class="order-info__line">
          商户简称 <text>{{ (info.customer && info.customer.sort_name) || '-' }}</text>
        </view>
        <view class="order-info__line">
          商户编号 <text>{{ info.customer && info.customer.id }}</text>
        </view>
      </view>
    </view>
    <view 
      v-if="[1, 2].includes(info.trans_type) && info.status !== 3"
      class="refund-button" 
      @click.stop="handleRefund"
    >退款</view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"
import { Refund } from '@/api'

export default {
  name: "order-detail",
  components: { FullStatusBar },
  data() {
    return {
      info: {}
    }
  },
  mounted() {
    this.info = JSON.parse(uni.getStorageSync('orderInfo'))
  },
  methods: {
    handleRefund() {
      uni.showModal({
        title: '订单退款',
        content: '您确定要申请退款吗？',
        success: async (res) => {
          if (res.confirm) {
            try {
              const { data } = await Refund({ trans_id: this.info.id })
              console.log(data)
            } catch (error) {
              console.log(error)
            }
          } 
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url("@/color.less");

.order-detail {
  box-sizing: border-box;
  padding: 44rpx 32rpx;
  padding-bottom: 48rpx;
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
.refund-button {
  width: 376rpx;
  height: 96rpx;
  border-radius: 96px;
  text-align: center;
  line-height: 96rpx;
  background: #FF3B30;
  color: white;
  font-size: 28rpx;
  margin: 0 auto;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
