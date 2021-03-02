<template>
  <view>
    <view class="account-info">
      <image class="account-avatar" :src="info.wx_avatar_url ? info.wx_avatar_url : defaultAvatar" />
      <view class="account-info__show" @click="$link('/pages/me/username')">
        <view v-if="info.level" class="account-type">
          {{ info.level }}
        </view>
        <view class="account-name">
          {{ info.name }}
          <text>({{ info.username }})</text>
        </view>
        <view class="account-code">
          {{ info.bank_sub_account }}
        </view>
      </view>
    </view>
    <view class="basic-info">
      <custom-line title="用户名" :content="info.username" @click.native="$link('/pages/me/username')"></custom-line>
      <custom-line title="密码" content="已有密码" @click.native="$link('/pages/me/password')"></custom-line>
      <custom-line title="手机号码" :content="info.telephone" @click.native="$link('/pages/me/phone')"></custom-line>
      <custom-line title="邮箱" :content="info.email" @click.native="$link('/pages/me/email')"></custom-line>
      <custom-line title="微信" :content="info.wx_nickname" @click.native="$link('/pages/me/wechat')"></custom-line>
    </view>
    <view class="divider-16"></view>
    <custom-line @click.native="$link('/pages/user/manage')" title="用户管理" :contentShow="false"></custom-line>
    <view class="divider-16"></view>
    <view>
      <custom-line title="查看商户绑定的银行卡" :content="info.bank_sub_account"></custom-line>
      <custom-line title="是否接收支付通知" arrowCustom>
        <custom-switch v-model="switchStatus" style="margin-right: -6px"></custom-switch>
      </custom-line>
      <custom-line title="推送信息"></custom-line>
    </view>
    <view class="divider-16"></view>
    <custom-line @click.native="$link('/pages/login/index')" type="button" title="退出登录"></custom-line>
  </view>
</template>

<script>
import defaultAvatar from '@/static/images/default-avatar.png'
import CustomLine from '@/components/custom-line.vue'
import CustomSwitch from '@/components/custom-switch.vue'
import { GetUcInfo } from '@/api'

export default {
  name: "me",
  data () {
    return {
      defaultAvatar,
      switchStatus: true,
      info: {}
    }
  },
  components: {
    CustomLine,
    CustomSwitch
  },
  onReady() {
    this.getUcInfo()
  },
  methods: {
    async getUcInfo() {
      try {
        const { data } = await GetUcInfo()
        this.info = data
      } catch (error) {
        console.log(error)
      }
    },
    switchPayNotice(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
  .account-info {
    padding: 36rpx 48rpx 48rpx 64rpx;
    display: -webkit-flex;
    align-items: center;
    box-sizing: border-box;
    .account-avatar {
      width: 128rpx;
      height: 128rpx;
      border-radius: 128rpx;
      margin-right: 24rpx;
    }
    .account-info__show {
      view {
        margin-bottom: 8px;
        font-size: 28rpx;
        color: #2A58E1;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .account-type {
        width: 100rpx;
        height: 40rpx;
        line-height: 40rpx;
        text-align: center;
        background: #FFF1B8;
        font-size: 22rpx;
        color: #D48806;
        border-radius: 3px;
      }
      .account-name {
        line-height: 44rpx;
        text {
          font-size: 24rpx;
          margin-left: 12rpx;
        }
      }
      .account-code {
        line-height: 32rpx;
      }
    }
  }
</style>