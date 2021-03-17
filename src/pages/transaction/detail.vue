<template>
  <load-conatiner>
    <status-bar title="交易明细"></status-bar>
    <view class="transaction-judge">
      <view :class="{ checked: key == params.status }" @click="handleChangeTab(key)" v-for="(str, key) in tabs" :key="key">
        {{ str }}
      </view>
      <view @click="onScreen">
        筛选
        <img mode="widthFix" src="@/static/icons/arrow-bottom.svg" />
      </view>
    </view>
    <view class="transaction-statistics">
      <view class="transaction-statistics__judge" @click="pickerShow = true">
        {{ selectDate }}
        <img src="@/static/icons/triangle-bottom.svg" />
      </view>
      <view class="transaction-statistics__data">
        <view>
          本{{ pickerValue.type === 1? '年': '月' }}支出
          <text>¥{{ totalData.out_amount || 0 }}</text>
        </view>
        <view>
          本{{ pickerValue.type === 1? '年': '月' }}收入
          <text>¥{{ totalData.in_amount || 0 }}</text>
        </view>
      </view>
    </view>
    <view class="transaction-list">
      <view v-for="(item, index) in list" :key="index" class="transaction-card">
        <view class="transaction-info">
          <view class="transaction-date">
            <view>
              <image mode="widthFix" :src="item.trans_type === 1? WechatIcon : AlipayIcon"/>
              {{ item.distributor && item.distributor.name }}
            </view>
            {{ item[statusTime[item.status]] }}
          </view>
          <view class="transaction-amount">
            <view class="transation-amount__total">
              <text>¥</text>{{ item.amount }}
            </view>
            <view class="transation-amount__other">
              <view>
                手续费
                <view>
                  {{ item.charges_amount }}
                </view>
              </view>
              <view>
                应结算
                <view>{{ item.should_amount }}</view>
              </view>
            </view>
          </view>
        </view>
        <view class="transaction-remarks">
          <view>
            交易对手
            <view>{{ item.traders || '未知' }}</view>
          </view>
          <view>
            备注
            <view>{{ item.remark || '无' }}</view>
          </view>
        </view>
      </view>
    </view>
    <no-data v-if="!list.length"></no-data>
    <custom-picker 
      v-if="pickerShow"
      v-model="pickerValue"
      @close="pickerShow = false"
      @change="changeDateType"
    >
    </custom-picker>
    <screen
      v-show="screenShow"
      @primary="inputScreenParams"
    ></screen>
  </load-conatiner>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import AlipayIcon from '@/static/icons/alipay.png'
import WechatIcon from '@/static/icons/wechat.png'
import TradeIcon from '@/static/icons/trade.png'
import BankIcon from '@/static/icons/bank.png'
import LoadContainer from '@/components/load-container'
import NoData from '@/components/no-data'
import { GetTransactionList, GetTransactionTotal } from '@/api'
import CustomPicker from '@/components/custom-picker'
import Screen from '@/components/screen'

export default {
  name: "transaction-detail",
  components: {
    StatusBar,
    LoadContainer,
    NoData,
    CustomPicker,
    Screen
  },
  data () {
    return {
      AlipayIcon,
      WechatIcon,
      TradeIcon,
      BankIcon,
      pickerShow: false,
      pickerValue: {
        type: 2,
        value: new Date().getMonth()+1,
        month: new Date().getMonth()+1,
        year: new Date().getFullYear()
      },
      tabs: {
        '0': '全部',
        1: '交易成功',
        4: '退款成功'
      },
      statusTime: {
        1: 'pay_time',
        4: 'refund_time'
      },
      params: {
        page: 1,
        pageSize: 999,
        status: 0
      },
      list: [],
      totalData: {
        out_amount: 0,
        in_amount: 0
      },
      screenShow: false // 筛选
    }
  },
  onLoad(option) {
    if (option.subId) {
      this.params.sub_cd_id = +option.subId
    }
    this.getList()
    this.getTotalData()
  },
  methods: {
    // 载入筛选参数
    inputScreenParams(params = {}) {
      this.params = {
          ...this.params,
          ...params
      }
      if (!params.status) this.params.status = 0
      this.getList()
      this.screenShow = false
    },
    onScreen() {
      this.screenShow = true
    },
    changeDateType() {
      // 修改日期
      console.log(this.pickerValue)
      this.getTotalData()
      this.getList()
    },
    handleChangeTab(status) {
      this.params.status = status
      this.getList()
    },
    async getTotalData() {
      try {
        const { type, month, year } = this.pickerValue
        const { data } = await GetTransactionTotal({
          ...this.params,
          date_type: type,
          date: type === 1 ? year : `${year}-${month}`
        })
        this.totalData = data
      } catch (error) {
        console.log(error)
      }
    },
    async getList() {
      try {
        const { type, month, year } = this.pickerValue
        const { data } = await GetTransactionList({
          ...this.params,
          date_type: type,
          date: type === 1 ? year : `${year}-${month}`
        })
        this.list = data
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    selectDate() {
      const { type, year, month } = this.pickerValue
      return type === 1 ? `${year}年` : `${year}年${month}月`
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .transaction-judge {
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    height: 80rpx;
    background: white;
    font-size: 28rpx;
    color: @title-color;
    box-sizing: border-box;
    padding: 0 34rpx;
    view {
      height: inherit;
      display: -webkit-flex;
      align-items: center;
      padding: 0 16rpx;
      &.checked {
        color: #2A58E1;
        border-bottom: 2px solid #2A58E1;
      }
    }
    image {
      width: 18rpx;
      height: 20rpx;
      margin-left: 10rpx;
    }
  }
  .transaction-statistics {
    box-sizing: border-box;
    padding: 32rpx;
    .transaction-statistics__judge {
      color: @title-color;
      font-size: 28rpx;
      height: 39.2rpx;
      font-weight: 400;
      display: -webkit-flex;
      align-items: center;
      image {
        width: 15rpx;
        height: 9rpx;
        margin-left: 12rpx;
      }
    }
    .transaction-statistics__data {
      font-size: 22rpx;
      display: -webkit-flex;
      align-items: center;
      margin-top: 24rpx;
      view {
        color: @subtitle-color;
        margin-right: 24rpx;
        line-height: 31rpx;
        text {
          margin-left: 16rpx;
        }
      }
    }
  }
  .transaction-card {
    box-sizing: border-box;
    padding: 32rpx;
    background: white;
    margin-bottom: 24rpx;
    .transaction-date {
      color: #8c8c8c;
      font-weight: normal;
      font-size: 28rpx;
      line-height: 32rpx;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      view {
        color: @title-color;
        font-style: normal;
        font-weight: 600;
        font-size: 26rpx;
        line-height: 40rpx;
        display: -webkit-flex;
        align-items: center;
        image {
          width: 40rpx;
          margin-right: 12rpx;
        }
      }
    }
    .transaction-amount {
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      color: @title-color;
      height: 130rpx;
      border-bottom: 1px solid @border-color;
      margin-bottom: 23rpx;
      .transation-amount__total {
        font-weight: bold;
        font-size: 64rpx;
        height: 72rpx;
        display: -webkit-flex;
        align-items: center;
        text {
          font-size: 36rpx;
        }
      }
      .transation-amount__other {
        display: -webkit-flex;
        align-items: center;
        > view {
          margin-left: 38rpx;
          font-size: 22rpx;
          line-height: 40rpx;
          color: @subtitle-color;
          > view {
            color: @title-color;
            margin-top: 8rpx;
            font-weight: 500;
            line-height: 30rpx;
            font-size: 26rpx;
          }
        }
      }
    }
    .transaction-remarks {
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      > view {
        font-size: 22rpx;
        line-height: 40rpx;
        color: @subtitle-color;
        &:last-child {
          text-align: right;
        }
        > view {
          font-size: 28rpx;
          line-height: 44rpx;
          color: @title-color;
          margin-top: 8rpx;
          font-weight: 400;
        }
      }
    }
  }
</style>
