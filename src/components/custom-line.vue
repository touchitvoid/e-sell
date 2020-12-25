<template>
  <view class="custom-line">
    <!-- custom slot -->
    <slot v-if="custom"></slot>
    <!-- arrow line -->
    <view class="arrow-line" v-if="type === 'arrow'">
      <view>{{ title }}</view>
      <view class="arrow-line__right" :class="{ 'no-data': !content }">
        <template v-if="!arrowCustom">
          {{ content||'无' }}
          <image src="@/static/images/arrow-right.png" />
        </template>
        <slot v-if="arrowCustom"></slot>
      </view>
    </view>
    <!-- button -->
    <view class="button-line" v-if="type === 'button'">{{ title }}</view>
  </view>
</template>

<script>
export default {
  name: "custom-line",
  props: {
    custom: {
      type: Boolean,
      default: false
    },
    arrowCustom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'arrow'
    },
    title: {
      type: String,
      default: 'arrow'
    },
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .custom-line {
    width: 100%;
    height: 96rpx;
    background: white;
    box-sizing: border-box;
    padding-left: 32rpx;
    font-size: 28rpx;
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: @border-color;
      position: absolute;
      bottom: 0;
      left: 32rpx;
    }
    .arrow-line {
      width: 100%;
      height: 100%;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      color: @title-color;
      .arrow-line__right {
        box-sizing: border-box;
        padding-right: 48rpx;
        color: @subtitle-color;
        display: -webkit-flex;
        align-items: center;
        image {
          position: relative;
          z-index: 99;
          width: 16rpx;
          height: 25rpx;
          margin-left: 16rpx;
        }
        &.no-data {
          color: #bfbfbf;
        }
      }
    }
    .button-line {
      width: 100%;
      height: 100%;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      color: @title-color;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>