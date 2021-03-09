<template>
  <view>
    <full-status-bar title="商户列表" overflow></full-status-bar>
    <full-background></full-background>
    <view class="search padding-16">
      <view class="search-describe">
        共{{ total }}个商户
        <text>按业务层级筛选</text>
      </view>
      <input 
        v-model="search"
        placeholder="输入名称、手机号码、姓名进行搜索"
        placeholder-style="color: #C1C7D0;"
        @blur="getList"
        @keyup.enter="getList"
      />
    </view>
    <view class="divider-16"></view>
    <view class="padding-16">
      <view class="business-card" v-for="info in list" :key="info.id">
        <view class="business-card__content">
          <view class="business-card__title">
            {{info.name + info.wx_nickname}}
            <text>{{ info.id }}</text>
          </view>
          <view>负责人姓名: {{ info.real_name }}</view>
          <view>手机号码: {{ info.telephone }}</view>
          <view>子账薄账号: {{ info.bank_sub_account || '' }}</view>
        </view>
        <view class="business-card__controller">
          <view>
            <image mode="widthFix" src="@/static/icons/qrcode.png" />
            固定支付码
          </view>
          <view @click="viewTradeDetail(info)">
            <image mode="widthFix" src="@/static/icons/document.png" />
            交易明细
          </view>
          <view>
            <image mode="widthFix" src="@/static/icons/user.png" />
            管理用户
          </view>
        </view>
      </view>
      <no-data v-if="list.length === 0"></no-data>
    </view>
  </view>
</template>

<script>
import FullStatusBar from "@/components/full-status-bar.vue"
import NoData from '@/components/no-data'
import { GetCustomerList, GetLevelList } from '@/api'

export default {
  name: "business",
  components: {
    FullStatusBar,
    NoData
  },
  data () {
    return {
      list: [],
      search: '',
      sub_cd_id: 0,
      total: 0
    }
  },
  onLoad() {
    this.getLevelList()
  },
  methods: {
    viewTradeDetail(info) {
      console.log(info)
      this.$link(`/pages/transaction/detail?subId=${info.id}`)
    },
    async getList() {
      try {
        const { data } =  await GetCustomerList({ 
          is_total: 1,
          keyword: this.search,
          sub_cd_id: this.sub_cd_id
        })
        this.list = data.list
        this.total = +data.num
      } catch (error) {
        console.log(error)
      }
    },
    async getLevelList() {
      try {
        const { data } = await GetLevelList()
        if (!data.length) return
        this.sub_cd_id = data[0].id
        this.getList()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .search {
    margin-top: 36rpx;
    .search-describe {
      color: white;
      font-size: 28rpx;
      margin-bottom: 22rpx;
      display: -webkit-flex;
      justify-content: space-between;
      font-weight: 600;
      text {
        font-weight: 400;
      }
    }
    input {
      width: 100%;
      height: 72rpx;
      background: white;
      border-radius: 8rpx;
      box-sizing: border-box;
      padding: 0 32rpx 0 80rpx;
      position: relative;
      font-size: 26rpx;
      color: @subtitle-color;
      &::before {
        content: '';
        width: 80rpx;
        height: inherit;
        background: url('@/static/icons/search.png') no-repeat center / 40rpx;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
  .business-card {
    width: 100%;
    box-sizing: border-box;
    padding: 32rpx;
    padding-bottom: 0;
    background: white;
    border-radius: 16rpx;
    margin-bottom: 24rpx;
    .business-card__content {
      border-bottom: 1px solid #eeeeee;
      .business-card__title {
        color: @title-color;
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        font-size: 28rpx;
        height: 44rpx;
        text {
          font-weight: 400;
        }
      }
      view {
        margin-bottom: 24rpx;
        font-size: 22rpx;
        line-height: 30rpx;
        color: @subtitle-color;
      }
    }
    .business-card__controller {
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      height: 95rpx;
      box-sizing: border-box;
      padding: 0 4rpx;
      view {
        font-size: 24rpx;
        font-weight: 400;
        display: -webkit-flex;
        align-items: center;
        &:nth-child(1) {
          image {
            width: 38rpx;
            height: 38rpx;
          }
        }
        &:nth-child(2) {
          image {
            width: 40rpx;
            height: 40rpx;
          }
        }
        &:nth-child(3) {
          image {
            width: 38rpx;
            height: 43rpx;
          }
        }
      }
      image {
        margin-right: 14rpx;
      }
    }
  }
</style>