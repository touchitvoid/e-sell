<template>
  <view>
    <status-bar title="筛选"></status-bar>
    <view class="screen-judge__card">
      <view class="screen-judge__title">交易状态</view>
      <view 
        class="screen-judge"
        :class="{ checked: key == params.status }"
        v-for="(status, key) in tradeStatus" :key="key"
        @click="params.status = key"
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
        :class="{ checked: type.id === params.type }"
        @click.stop="params.type = type.id"
        >
        {{ type.name }}
      </view>
    </view>
    <view class="divider-16"></view>
    <custom-line title="一级子商户" :contentShow="false"></custom-line>
    <view class="divider-16"></view>
    <view class="divider-16"></view>
    <custom-line title="查询" type="button" @click.native="$link('/pages/tool/business')"></custom-line>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import CustomLine from '@/components/custom-line.vue'
import { GetTransactionType } from '@/api'

export default {
  name: "screen",
  components: {
    StatusBar,
    CustomLine
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
        type: '',
        status: ''
      },
      tradeType: []
    }
  },
  onLoad() {
    this.getTypes()
  },
  methods: {
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