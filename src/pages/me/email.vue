<template>
  <view>
    <status-bar title="邮箱"></status-bar>
    <custom-line custom type="custom">
      <input placeholder="请输入邮箱" class="form-input" placeholder-class="placeholder_f" type="text">
    </custom-line>
    <view class="divider-16"></view> 
    <custom-line custom type="custom">
      <view class="verify-code">
        <input placeholder="请输入验证码" class="form-input" placeholder-class="placeholder_f" type="text">
        <button @click="getCode">
          {{ codeText }}
        </button>
      </view>
    </custom-line>
    <view class="divider-16"></view> 
    <custom-line type="button" title="绑定"></custom-line>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import CustomLine from '@/components/custom-line.vue'

export default {
  name: "phone",
  components: {
    StatusBar,
    CustomLine
  },
  data () {
    return {
      codeText: "获取验证码"
    }
  },
  methods: {
    getCode() {
      if (this.getCode.timer) return
      this.codeText = 5
      this.getCode.timer = setInterval(()=> {
        this.codeText -= 1
        if (this.codeText === 0) {
          clearInterval(this.getCode.timer)
          this.getCode.timer = null
          this.codeText = "获取验证码"
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>

</style>