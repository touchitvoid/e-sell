<template>
  <view>
    <status-bar title="用户管理"></status-bar>
    <view class="user-manage">
      <view class="user-card">
        <image mode="widthFix" :src="UserIcon" />
        <view class="user-card__info">
          <view>用户名：吴军</view>
          <view>手机号：13664791828</view>
          <view>微信昵称：9902001366413522</view>
        </view>
      </view>
    </view>
    <fixed-tool @add="$link('/pages/user/create')"></fixed-tool>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import UserIcon from '@/static/icons/user-card.png'
import FixedTool from '@/components/fixed-tool.vue'

export default {
  name: "user-manage",
  components: {
    StatusBar,
    FixedTool
  },
  data () {
    return {
      UserIcon
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .user-manage {
    padding: 32rpx;
    box-sizing: border-box;
  }
  .user-card {
    box-sizing: border-box;
    padding: 32rpx 36rpx;
    background: white;
    border-radius: 16rpx;
    display: -webkit-flex;
    margin-bottom: 24rpx;
    image {
      width: 44rpx;
      margin-right: 24rpx;
    }
    .user-card__info {
      view {
        font-size: 22rpx;
        line-height: 31rpx;
        color: @title-color;
        margin-bottom: 24rpx;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>