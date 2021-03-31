<template>
  <view class="screen-body">
    <status-bar title="筛选" customArrow @controller="$emit('primary')"></status-bar>
    <view class="screen-judge__card">
      <view class="screen-judge__title">交易状态</view>
      <view 
        class="screen-judge"
        :class="{ checked: key == params.status }"
        v-for="(status, key) in tradeStatus" :key="key"
        @click="changeParams('status', key)"
      >
        {{ status }}
      </view>
    </view>
    <view class="judge-divider">
      <view></view>
    </view>
    <view class="screen-judge__card">
      <view class="screen-judge__title">交易类型</view>
      <view
        v-for="type in tradeType" :key="type.id"
        class="screen-judge" 
        :class="{ checked: type.id === params.trans_type }"
        @click.stop="changeParams('trans_type', type.id)"
        >
        {{ type.name }}
      </view>
    </view>
    <view class="divider-16"></view>
    <custom-line 
      title="一级子商户" 
      :contentShow="false" 
      @click.native="$link('/pages/tool/business?page=detail')">
    </custom-line>
    <view class="divider-16"></view>
    <view class="divider-16"></view>
    <custom-line title="查询" type="button" @click.native="onPrimary"></custom-line>
  </view>
</template>

<script>
import CustomLine from '@/components/custom-line.vue'
import StatusBar from "@/components/custom-status-bar"
import { GetTransactionType } from '@/api'

export default {
  name: "screen",
  components: {
    CustomLine,
    StatusBar
  },
  data () {
    return {
      tradeStatus: {
        1: '交易成功',
        2: '已申请退款',
        3: '退款中',
        4: '退款成功'
      },
      params: {
        trans_type: '',
        status: ''
      },
      tradeType: []
    }
  },
  mounted() {
    console.log('m')
    this.getTypes()
  },
  methods: {
    onPrimary() {
      this.$emit('primary', this.params)
    },
    changeParams(key, val) {
      if (this.params[key] === val) {
        this.params[key] = ''
        return
      }
      this.params[key] = val
    },
    async getTypes() {
      try {
        const { data } = await GetTransactionType()
        this.tradeType = data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .screen-body {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    overflow-y: auto;
    background: #f5f5f5;
  }
  .judge-divider {
    width: 100%;
    height: 1px;
    background: white;
    box-sizing: border-box;
    padding: 0 32rpx;
    view {
      width: 100%;
      height: 1px;
      background: @border-color;
    }
  }
  .screen-judge__card {
    width: 100%;
    box-sizing: border-box;
    padding: 32rpx;
    padding-bottom: 8rpx;
    background: white;
    .screen-judge__title {
      font-size: 28rpx;
      line-height: 44rpx;
      color: @title-color;
      margin-bottom: 24rpx;
    }
    .screen-judge {
      padding: 10rpx 24rpx;
      color: @title-color;
      font-size: 24rpx;
      text-align: center;
      margin-right: 40rpx;
      display: inline-block;
      height: 44rpx;
      line-height: 44rpx;
      background: white;
      border-radius: 44rpx;
      margin-bottom: 24rpx;
      border: 1px solid @border-color;
      &.checked {
        background-color: @primary-color;
        color: hsla(0, 0%, 100%, 8);
      }
    }
  }
</style>