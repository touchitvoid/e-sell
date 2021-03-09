<template>
  <view class="custom-picker" @click="$emit('close')">
    <view class="picker-box" @click.stop>
      <view class="picker-header">
        <text>日期选择</text>
        <text @click="handlePrimary">确认</text>
      </view>
      <view class="date-type__selector">
        <view class="date-type">
          <view :class="{ selected: dateType === 1 }" @click="changeType(1)">年</view>
          <view :class="{ selected: dateType === 2 }" @click="changeType(2)">月</view>
        </view>
      </view>
      <picker-view 
        class="picker-view"
        :indicator-style="indicatorStyle"
        :value="value2"
        @change="handleChange"
      >
        <picker-view-column v-if="dateType === 1">
          <view class="item" v-for="year in years" :key="year">{{year}}年</view>
        </picker-view-column>
        <picker-view-column v-else>
          <view class="item" v-for="month in months" :key="month">{{month}}月</view>
        </picker-view-column>
      </picker-view>
    </view>
  </view>
</template>

<script>
const years = []
const year = new Date().getFullYear()
for (let i = 1990; i <= year; i++) {
  years.push(i)
}

export default {
  name: "picker",
  props: {
    value: Object
  },
  data() {
    return {
      dateType: 1,
      years,
      value2: [],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      indicatorStyle: `height: 40px;`,
      inputValue: {}
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.inputValue = val
        this.dateType = val.type
        const index = this[val.type === 1? 'years': 'months'].findIndex(d => d === val.value)
        this.value2 = [index]
      }
    }
  },
  onShow() {
    this.years = new Date().getFullYear()
    console.log(this.years)
  },
  methods: {
    handlePrimary() {
      if (!this.inputValue.value) return
      this.$emit('input', this.inputValue)
      this.$emit('close')
      this.$emit('change')
    },
    changeType(type) {
      this.dateType = type
      const d = new Date()
      // 切换显示还原
      const index = this[type === 1? 'years': 'months'].findIndex(d => d === this.inputValue[type === 1 ? 'year': 'month'])
      this.value2 = [index]
      this.inputValue.type = type
      this.inputValue.value = this.inputValue[type === 1? 'year' : 'month']
      // 切换默认修改值为 当前年 当前月
    },
    handleChange(e) {
      this.inputValue.type = this.dateType
      this.inputValue.value = this[this.dateType === 1? 'years': 'months'][e.detail.value]
      this.inputValue[this.dateType === 1? 'year': 'month'] = this[this.dateType === 1? 'years': 'months'][e.detail.value]
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');
  .picker-view {
    width: 750rpx;
    height: 600rpx;
  }
  .item {
    height: 40px;
    line-height: 40px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 28rpx;
  }

  .custom-picker {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .picker-box {
      width: 100%;
      height: 800rpx;
      background-color: white;
      position: absolute;
      bottom: 0;
      left: 0;
      .picker-header {
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 32rpx;
        width: 100%;
        height: 96rpx;
        font-weight: 600;
        font-size: 26rpx;
        color: @title-color;
        border-bottom: 1px solid #EEEEEE;
        text {
          height: 96rpx;
          line-height: 96rpx;
        }
        text:last-child {
          color: @primary-color;
        }
      }
      .date-type__selector {
        width: 100%;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        padding: 30rpx 0 24rpx 0;
        .date-type {
          width: 194rpx;
          height: 64rpx;
          background: #F5F5F5;
          border-radius: 8rpx;
          display: -webkit-flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8rpx;
          view {
            text-align: center;
            width: 94rpx;
            height: 48rpx;
            line-height: 48rpx;
            color: #BFBFBF;
            font-size: 22rpx;
            font-weight: 600;
            &.selected {
              background-color: white;
              color: @title-color;
            }
          }
        }
      }
    }
  }
</style>