<template>
  <view class="status-bar" :style="{
    height: `${bar.top+bar.height+6}px`
  }">
		<image class="status-bar__background" mode="widthFix" src="@/static/images/background.png" >
  </view>
</template>

<script>
export default {
  name: "custom-status-bar",
  data () {
    return {
      bar: {}
    }
  },
  mounted() {
		this.bar = wx.getMenuButtonBoundingClientRect()
    console.log(this.bar)
  }
}
</script>

<style lang="less" scoped>
  .status-bar {
    width: 100%;
    overflow-y: hidden;
    .status-bar__background {
      width: 100%;
      position: relative;
      z-index: -1;
    }
  }
</style>