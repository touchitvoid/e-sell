<template>
  <view>
    <view class="account-info">
      <image class="account-avatar" :src="defaultAvatar" />
      <view class="account-info__show" @click="$link('/pages/me/username')">
        <view class="account-type">
          办事处
        </view>
        <view class="account-name">
          华北办事处
          <text>(dw602601)</text>
        </view>
        <view class="account-code">
          3421984853953369
        </view>
      </view>
    </view>
    <view class="basic-info">
      <custom-line title="密码" content="已有密码" @click.native="$link('/pages/me/password')"></custom-line>
      <custom-line title="手机号码" @click.native="$link('/pages/me/phone')"></custom-line>
      <custom-line title="邮箱" @click.native="$link('/pages/me/email')"></custom-line>
      <custom-line title="微信" content="帝王洁具" @click.native="$link('/pages/me/wechat')"></custom-line>
    </view>
    <view class="divider-16"></view>
    <custom-line @click.native="$link('/pages/user/manage')" title="用户管理" :contentShow="false"></custom-line>
    <view class="divider-16"></view>
    <view>
      <custom-line title="查看商户绑定的银行卡"></custom-line>
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

export default {
  name: "me",
  data () {
    return {
      defaultAvatar,
      switchStatus: true
    }
  },
  components: {
    CustomLine,
    CustomSwitch
  },
  onLoad() {},
  methods: {
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