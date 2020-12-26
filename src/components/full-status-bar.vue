<template>
  <view class="status-bar__full" :style="{
    height: `${bar.top+bar.height+2}px`
  }">
		<image class="index-bar__background" mode="widthFix" src="@/static/images/background.png" >
    <view
      class="index-bar__title"
      :style="{
        height: `${bar.height}px`,
        top: `${bar.top+2}px`,
      }"
      >
      <view class="status-bar__controller" @click="controller">	
        <image src="@/static/images/status-bar-left.png" />
      </view>
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
  },
  methods: {
    controller() {
      uni.navigateBack()
    }
  }
}
</script>

<style lang="less" scoped>
  // .status-bar__full {
  //   position: fixed;
  //   width: 100%;
  //   top: 0;
  //   left: 0;
  //   z-index: 99;
  // }
	/* 状态栏背景图 */
	.index-bar__background {
		width: 100%;
		position: relative;
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
    .status-bar__controller {
      width: 30rpx;
      position: absolute;
      height: 100%;
      left: 0;
      display: -webkit-flex;
      align-items: center;
      padding-left: 24px;
      image {
        width: 7.78px;
        height: 13px;
      }
    }
	}
</style>
