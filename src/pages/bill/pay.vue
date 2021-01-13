<template>
  <view>
    <full-status-bar title="应付账单"></full-status-bar>
    <view class="divider-16"></view>
    <view class="padding-16">
      <view class="account-info padding-16">
        <view class="account-info__title">还款账户信息</view>
        <view class="account-info__line">
          企业名称：深证市乐宝云天文化发展有限公司
        </view>
        <view class="account-info__line flex-ai--c">
          子账簿账号：607065225000030
        </view>
        <view class="account-info__line flex-ai--c">
          开户行：交通银行东莞虎门支行
        </view>
      </view>
    </view>
    <view class="padding-16">
      <view class="bill-title">
        应付账单
        <text>查询历史账单</text>
      </view>
      <view class="bill-card" v-for="item in 3">
        <view class="bill-info">
          <view class="bill-info__amount">
            <image mode="widthFix" :src="BillOrderIcon" />
            <view>
              账单金额
              <view>12,312.44</view>
            </view>
          </view>
          <view class="bill-date">
            <text>还款日</text>2020-12-12
          </view>
        </view>
        <view class="bill-pay">
          立即支付
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"
import BillOrderIcon from "@/static/icons/order.png"

export default {
  name: "pay-bill",
  components: {
    FullStatusBar,
  },
  data() {
    return {
      BillOrderIcon
    }
  },
}
</script>

<style lang="less" scoped>
@import url('@/color.less');

/* 账户信息 */
.account-info {
  width: 100%;
  height: 310rpx;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 8px;
  padding-top: 34rpx;
  color: #262626;
  .account-info__title {
    font-weight: bold;
    font-size: 34rpx;
  }
  .account-info__line {
    font-size: 13px;
    margin-top: 36rpx;
    line-height: 18px;
  }
}
.bill-title {
  margin-top: 48rpx;
  margin-bottom: 24rpx;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 28rpx;
  color: @title-color;
  text {
    font-size: 24rpx;
    color: #2A58E1;
  }
}
.bill-card {
  box-sizing: border-box;
  padding: 32rpx;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
  background: white;
  border-radius: 16rpx;
  .bill-info {
    .bill-info__amount {
      display: -webkit-flex;
      align-items: center;
      > view {
        font-size: 26rpx;
        color: @title-color;
        view {
          margin-top: 8rpx;
          font-weight: 700;
          font-size: 36rpx;
        }
      }
    }
    .bill-date {
      margin-top: 24rpx;
      color: #8c8c8c;
      height: 33rpx;
      display: -webkit-flex;
      align-items: center;
      font-size: 28rpx;
      text {
        font-size: 22rpx;
        margin-right: 8rpx;
      }
    }
    image {
      width: 45rpx;
      margin-right: 25rpx;
    }
  }
  .bill-pay {
    color: #2A58E1;
    font-size: 28rpx;
  }
}
</style>
