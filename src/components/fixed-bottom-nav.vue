<template>
  <view class="fixed-bottom__nav">
    <view @click="$emit('switch', 'home')" :class="{ current: page === 'home'}">
      <image mode="heightFix" :src="page === 'home'? homeImagec: homeImage" />
      首页
    </view>
    <view @click="$emit('switch', 'me')" :class="{ current: page !== 'home'}">
      <image mode="heightFix" :src="page === 'home'? userImage: userImagec" />
      个人中心
    </view>
  </view>
</template>

<script>
import homeImage from '@/static/images/home.png'
import homeImagec from '@/static/images/home-c.png'
import userImage from '@/static/images/user.png'
import userImagec from '@/static/images/user-c.png'


export default {
  name: "fixed",
  props: {
    page: {
      type: String,
      default: 'home'
    } 
  },
  data () {
    return {
      homeImage,
      homeImagec,
      userImage,
      userImagec
    }
  }
}
</script>

<style lang="less" scoped>
  .fixed-bottom__nav {
    width: 100%;
    height: 96rpx;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    > view {
      width: 88rpx;
      display: -webkit-flex;
      flex-direction: column;
      align-items: center;
      font-size: 22rpx;
      margin: 0 44rpx;
      color: #595959;
      &.current {
        color: #2A58E1;
      }
    }
    image {
      height: 40rpx;
      display: block;
      margin-bottom: 4rpx;
    }
  }
</style>