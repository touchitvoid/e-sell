<template>
  <view>
    <full-status-bar title="一级商户"></full-status-bar>
    <view class="search padding-16">
      <input
        placeholder="输入名称、手机号码、姓名进行搜索"
        placeholder-style="color: #C1C7D0;"
      />
    </view>
    <view class="padding-16">
      <view class="business-card" v-for="business in result" :key="business">
        <view class="business-info">
          <image class="business-avatar" :src="defaultAvatar" />
          <view class="business-info__show" @click="$link('/pages/me/username')">
            <view class="business-type">
              入驻商户
            </view>
            <view class="business-name">
              内蒙锡盟二连浩特帝王吴军
            </view>
            <view class="business-code">
              3421984853953369
            </view>
          </view>
        </view>
      </view>
      <view v-if="result.length === 0" class="flex-just-center">
        <image mode="widthFix" class="image-show" :src="PngNull" />
      </view>
    </view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"
import defaultAvatar from '@/static/icons/business-avatar.png'
import Png404 from '@/static/images/404.png'
import PngNull from '@/static/images/null.png'

export default {
  name: "business",
  components: {
    FullStatusBar,
  },
  data() {
    return {
      defaultAvatar,
      Png404,
      PngNull,
      result: []
    }
  },
}
</script>

<style lang="less" scoped>
@import url("@/color.less");


.image-show {
  width: 480rpx;
  max-width: 80%;
  margin-top: 240rpx;
}
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
      content: "";
      width: 80rpx;
      height: inherit;
      background: url("@/static/icons/search.png") no-repeat center / 40rpx;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
.business-card {
  background: white;
  border-radius: 16rpx;
  margin-top: 32rpx;
}
.business-info {
  padding: 36rpx 32rpx 32rpx 32rpx;
  display: -webkit-flex;
  align-items: center;
  box-sizing: border-box;
  .business-avatar {
    width: 128rpx;
    height: 128rpx;
    border-radius: 128rpx;
    margin-right: 24rpx;
  }
  .business-info__show {
    view {
      margin-bottom: 8px;
      font-size: 28rpx;
      color: @subtitle-color;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .business-type {
      width: 100rpx;
      height: 40rpx;
      line-height: 40rpx;
      text-align: center;
      background: #fff1b8;
      font-size: 22rpx;
      color: #d48806;
      border-radius: 3px;
    }
    .business-name {
      line-height: 44rpx;
      font-weight: 600;
      text {
        font-size: 24rpx;
        margin-left: 12rpx;
      }
    }
    .business-code {
      line-height: 32rpx;
    }
  }
}
</style>
