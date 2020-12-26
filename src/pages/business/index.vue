<template>
  <view>
    <full-status-bar></full-status-bar>
    <view class="search padding-16">
      <view class="search-describe">
        共144个商户
        <text>按业务层级筛选</text>
      </view>
      <input placeholder="输入名称、手机号码、姓名进行搜索" placeholder-style="color: #C1C7D0;" />
    </view>
    <view class="divider-16"></view>
    <view class="padding-16">
      <view class="business-card" v-for="item in 4" :key="item">
        <view class="business-card__content">
          <view class="business-card__title">
            内蒙锡盟二连浩特帝王吴军
            <text>15250008</text>
          </view>
          <view>负责人姓名: 吴军</view>
          <view>手机号码: 13664791828</view>
          <view>子账薄账号: 9902001366413522</view>
        </view>
        <view class="business-card__controller">
          <view>
            <image mode="widthFix" src="@/static/icons/qrcode.png" />
            固定支付码
          </view>
          <view>
            <image mode="widthFix" src="@/static/icons/document.png" />
            交易明细
          </view>
          <view>
            <image mode="widthFix" src="@/static/icons/user.png" />
            管理用户
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"

export default {
  name: "business",
  components: {
    FullStatusBar
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .search {
    margin-top: 36rpx;
    .search-describe {
      color: white;
      font-size: 28rpx;
      margin-bottom: 22rpx;
      display: -webkit-flex;
      justify-content: space-between;
      font-weight: 600;
      text {
        font-weight: 400;
      }
    }
    input {
      width: 100%;
      height: 72rpx;
      background: white;
      border-radius: 8rpx;
      box-sizing: border-box;
      padding: 0 32rpx 0 80rpx;
      position: relative;
      font-size: 26rpx;
      color: @subtitle-color;
      &::before {
        content: '';
        width: 80rpx;
        height: inherit;
        background: url('@/static/icons/search.png') no-repeat center / 40rpx;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
  .business-card {
    width: 100%;
    box-sizing: border-box;
    padding: 32rpx;
    padding-bottom: 0;
    background: white;
    border-radius: 16rpx;
    margin-bottom: 24rpx;
    .business-card__content {
      border-bottom: 1px solid #eeeeee;
      .business-card__title {
        color: @title-color;
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        font-size: 28rpx;
        height: 44rpx;
        text {
          font-weight: 400;
        }
      }
      view {
        margin-bottom: 24rpx;
        font-size: 22rpx;
        line-height: 30rpx;
        color: @subtitle-color;
      }
    }
    .business-card__controller {
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      height: 95rpx;
      box-sizing: border-box;
      padding: 0 4rpx;
      view {
        font-size: 24rpx;
        font-weight: 400;
        display: -webkit-flex;
        align-items: center;
      }
      image {
        width: 38rpx;
        margin-right: 14rpx;
      }
    }
  }
</style>