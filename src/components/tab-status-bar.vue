<template>
  <view>
		<image class="index-bar__background" mode="widthFix" src="@/static/images/background.png" >
    <view
      class="index-bar__title"
      :style="{
        height: `${bar.height}px`,
        top: `${bar.top+2}px`,
      }"
      >
      {{ title }}
    </view>
  </view>
</template>

<script>
export default {
  name: "tab-status-bar",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      bar: {}
    }
  },
  onReady() {
    this.bar = wx.getMenuButtonBoundingClientRect()
  }
}
</script>

<style lang="less" scoped>
	/* 状态栏背景图 */
	.index-bar__background {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.index-bar__title {
		width: 100%;
		background: transparent;
		position: absolute;
		left: 0;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
		color: white;
	}
</style>
