<template>
  <view>
    <full-status-bar title="历史账单"></full-status-bar>
    <view class="divider-22"></view>
    <view class="padding-16">
      <view @click="$link('/pages/bill/detail')" class="bill-history__card">
        <view class="bill-history__date"
          >付款完成时间：<text>2020-12-23 23:26:37</text></view
        >
        <view class="bill-history__info">
          <view>
            已付款金额
            <view>12,312.44</view>
          </view>
          <image :src="SuccessIcon" />
        </view>
      </view>
      <view class="bill-history__card">
        <view class="bill-history__date"
          >付款完成时间：<text>2020-12-23 23:26:37</text></view
        >
        <view class="bill-history__info">
          <view>
            已付款金额
            <view>12,312.44</view>
          </view>
          <image :src="SuccessIcon" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"
import SuccessIcon from "@/static/icons/bill-success.png"

export default {
  name: "history",
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
@import url('@/color.less');

.bill-history__card {
  margin-bottom: 24rpx;
  padding: 32rpx;
  padding-bottom: 40rpx;
  box-sizing: border-box;
  background: white;
  border-radius: 16rpx;
  .bill-history__date {
    line-height: 40rpx;
    color: #8c8c8c;
    font-size: 26rpx;
    margin-bottom: 24rpx;
    text {
      margin-left: 8rpx;
      font-size: 28rpx;
    }
  }
  .bill-history__info {
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    image {
      width: 40rpx;
      height: 40rpx;
    }
    > view {
      font-size: 26rpx;
      color: @title-color;
      view {
        margin-top: 8rpx;
        font-size: 36rpx;
        font-weight: 700;
      }
    }
  }
}
</style>
