<template>
  <view>
    <full-status-bar :arrowShow="false"></full-status-bar>
    <view class="logo">
      <image mode="widthFix" src="@/static/images/logo.png"/>
    </view>
    <view class="padding-16">
      <view class="login-box">
        <input v-model="form.account" placeholder="请输入用户名" type="text"/>
        <input v-model="form.password" placeholder="请输入密码" type="password"/>
        <button class="login-btn" @click="handleLogin">登录</button>
        <button 
          class="login-wechat" 
          open-type="getUserInfo" 
          @getuserinfo="getUserInfo">微信一键登录</button>
        <view class="check-line">
          <image src="@/static/icons/checkbox.png"/>
          阅读并同意<text>《交E销用户使用协议》《交E销个人隐私协议》</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import FullStatusBar from '@/components/full-status-bar'
import { PostLogin } from '@/api'

export default {
  name: "login",
  components: {
    FullStatusBar
  },
  data () {
    return {
      form: {
        code: ''
      }
    }
  },
  methods: {
    // login default params
    loginParams: () => ({
        user_type: 'distributor',
        grant_type: 'account',
        platform_type: 'mini_program'
    }),
    async handleLogin() {
      if (!this.form.account) return this.$toast('请输入用户名')
      if (!this.form.password) return this.$toast('请输入密码')
      const { data, code, error } = await PostLogin({...this.form, ...this.loginParams()})
      // verify error
      if (!data) return this.$toast(error)
      uni.setStorageSync('token', data.token)
      // return uri
      this.$redirectTo('/pages/index/index')
    },
    getUserInfo({ detail }) {
      if (detail.errMsg === "getUserInfo:fail auth deny") return this.$toast("用户取消授权");
      wx.login({
        success: ({ code }) => this.code = code
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .logo {
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    padding: 12rpx 0 48rpx 0;
    image {
      width: 388rpx;
    }
  }
  .login-box {
    box-sizing: border-box;
    width: 100%;
    min-height: 600rpx;
    background: white;
    border-radius: 32rpx;
    box-sizing: border-box;
    padding: 48rpx;
    button, input {
      width: 100%;
      height: 80rpx;
      border: 1px solid #D9D9D9;
      box-sizing: border-box;
      padding: 0 32rpx;
      border-radius: 40rpx;
    }
    input {
      margin-bottom: 48rpx;
      font-size: 24rpx;
    }
    button {
      margin-bottom: 32rpx;
      font-size: 32rpx;
      border: none;
      overflow: visible;
      &::after {
        border: none;
      }
      &.login-btn {
        background: #2A58E1;
        color: white;
        border: 1px solid #2A58E1;
      }
      &.login-wechat {
        background: #F6FFED;
        color: #52C41A;
        border: 1px solid #52C41A;
      }
    }
    .check-line {
      display: -webkit-flex;
      align-items: center;
      font-size: 20rpx;
      line-height: 28rpx;
      text {
        color: #2A58E1;
      }
      image {
        width: 24rpx;
        height: 24rpx;
        margin-right: 20rpx;
      }
    }
  }
</style>