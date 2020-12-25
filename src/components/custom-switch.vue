<template>
  <view class="switch" :class="{ off: !value }" @click.stop="handleSwitch">
    <view class="switch-status">
      {{ value? '开': '关' }}
    </view>
  </view>
</template>

<script>
export default {
  name: "custom-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleSwitch() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="less" scoped>
  .switch {
    width: 112rpx;
    height: 48rpx;
    background-color: #d4def9;
    border-radius: 48rpx;
    display: inline-block;
    position: relative;
    transition: all .3s;
    &.off {
      background: #f5f5f5;
      .switch-status {
        background: #cccccc;
        transform: translate(-48rpx, -50%);
      }
    }
    .switch-status {
      width: 64rpx;
      height: 64rpx;
      border-radius: 64rpx;
      background-color: #2A58E1;
      border-radius: 64rpx;
      text-align: center;
      line-height: 64rpx;
      color: white;
      font-size: 30rpx;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 0;
      transition: all .3s;
    }
  }
</style>