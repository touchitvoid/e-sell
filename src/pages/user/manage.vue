<template>
  <view>
    <status-bar title="用户管理"></status-bar>
    <view class="user-manage">
      <view
        class="user-card"
        v-for="card in listData"
        :key="card.id"
      >
        <image mode="widthFix" :src="UserIcon" />
        <view class="user-card__info">
          <view>用户名：{{ card.username || '无' }}</view>
          <view>手机号：{{ card.telephone || '无' }}</view>
          <view>微信昵称：{{ card.wx_nickname || '无' }}</view>
        </view>
      </view>
    </view>
    <fixed-tool @add="toCreate"></fixed-tool>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import UserIcon from '@/static/icons/user-card.png'
import FixedTool from '@/components/fixed-tool.vue'
import { GetUserList } from '@/api'

export default {
  name: "user-manage",
  components: {
    StatusBar,
    FixedTool
  },
  data () {
    return {
      UserIcon,
      params: {
        page: 1,
        pageSize: 9999
      },
      total: 0,
      listData: [],
      subId: ''
    }
  },
  onLoad(option) {
    if (option.subId) {
      this.subId = option.subId
      this.params.sub_cd_id = option.subId
    }
  },
  onShow() {
    this.getList()
  },
  methods: {
    toCreate() {
      if (this.subId) {
        this.$link('/pages/user/create?subId='+this.subId)
        return
      }
      this.$link('/pages/user/create')
    },
    async getList() {
      try {
        const { data, code } = await GetUserList(this.params)
        if (code !== 200) return
        this.listData = data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .user-manage {
    padding: 32rpx;
    box-sizing: border-box;
  }
  .user-card {
    box-sizing: border-box;
    padding: 32rpx 36rpx;
    background: white;
    border-radius: 16rpx;
    display: -webkit-flex;
    margin-bottom: 24rpx;
    image {
      width: 44rpx;
      margin-right: 24rpx;
    }
    .user-card__info {
      view {
        font-size: 22rpx;
        line-height: 31rpx;
        color: @title-color;
        margin-bottom: 24rpx;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>