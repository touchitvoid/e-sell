<template>
  <view class="pop" @click="$emit('close')">
    <view class="pop-panel">
      <view @click.stop="$emit('success', '华北办事处')">华北办事处</view>
      <view @click.stop="$emit('success', '华北办事处')">华北办事处</view>
      <view @click.stop="$emit('success', '华北办事处')">华北办事处</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "pop-panel",
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .pop {
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    animation: fade .3s;
    .pop-panel {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: white;
      animation: slide-top .25s;
      view {
        width: 100%;
        text-align: center;
        height: 112rpx;
        line-height: 112rpx;
        color: #262626;
      }
    }
  }
  @keyframes fade {
    0% { opacity: .5; }
    100% { opacity: 1; }
  }
  @keyframes slide-top {
    0% { transform: translate(0, 20px); }
    100% { transform: translate(0, 0); }
  }
</style>