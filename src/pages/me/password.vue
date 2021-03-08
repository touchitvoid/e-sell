<template>
  <view>
    <status-bar title="密码"></status-bar>
    <custom-line custom type="custom">
      <input v-model="form.old_password" placeholder="请输入旧密码" class="form-input" placeholder-class="placeholder_f" type="password">
    </custom-line>
    <view class="divider-16"></view>
    <custom-line custom type="custom">
      <input v-model="form.password" placeholder="请输入新密码" class="form-input" placeholder-class="placeholder_f" type="password">
    </custom-line>
    <view class="divider-16"></view>
    <custom-line custom type="custom">
      <input v-model="form.confirm_password" placeholder="再次输入新密码" class="form-input" placeholder-class="placeholder_f" type="password">
    </custom-line>
    <view class="tips">
      注意：密码智能是字母+数字+特殊字符(!@#$%&*_.?)的组合，介于8-20位之间
    </view>
    <custom-line @click.native="patchPassword" type="button" title="保存"></custom-line>
    <view class="forget">忘记密码？</view>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import CustomLine from '@/components/custom-line.vue'
import { PatchPassword } from '@/api'

export default {
  name: "password",
  components: {
    StatusBar,
    CustomLine
  },
  data () {
    return {
      form: {
        old_password: '',
        password: '',
        confirm_password: ''
      }
    }
  },
  methods: {
    async patchPassword() {
      if (!this.form.old_password) return this.$toast('请输入旧密码')
      if (!this.form.password) return this.$toast('请输入新密码')
      if (this.form.password !== this.form.confirm_password) return this.$toast('请确定两次密码输入一致')
      try {
        const { data } = await PatchPassword(this.form)
        if (data) {
          this.form = {
            old_password: '',
            password: '',
            confirm_password: ''
          }
          this.$toast('修改成功')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('@/color.less');

  .forget {
    width: 100%;
    text-align: center;
    font-size: 28rpx;
    line-height: 44rpx;
    font-weight: 400;
    color: @title-color;
    padding: 26rpx 0;
  }
</style>