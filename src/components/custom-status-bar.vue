<template>
  <view class="status-bar" :style="{
    height: `${bar.top+bar.height+6}px`
  }">
		<image class="status-bar__background" mode="widthFix" src="@/static/images/background.png" >
    <view class="status-bar__title" 
			:style="{
				height: `${bar.height+3}px`,
				top: `${bar.top}px`
			}"
		>
      <view @click.stop="controller()" class="status-bar__controller">
        <image src="@/static/images/status-bar-left.png" />
      </view>
      {{ title }}
    </view>
  </view>
</template>

<script>
export default {
  name: "custom-status-bar",
  props: {
    title: {
      type: String,
      default: "帝欧微分销"
    },
    customArrow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      bar: {}
    }
  },
  mounted() {
		this.bar = wx.getMenuButtonBoundingClientRect()
    console.log(this.bar)
  },
  methods: {
    controller() {
      if (this.customArrow) return this.$emit('controller')
      uni.navigateBack()
    }
  }
}
</script>

<style lang="less" scoped>
  .status-bar {
    width: 100%;
    height: 176rpx;
    overflow-y: hidden;
    // transition: all .3s;
    position: sticky;
    top: 0;
    left: 0;
    .status-bar__background {
      width: 100%;
      position: relative;
      z-index: -1;
    }
    .status-bar__title {
      width: 100%;
      background: transparent;
      position: absolute;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 31rpx;
      font-weight: 500;
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
  }
</style>