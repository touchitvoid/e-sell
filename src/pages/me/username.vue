<template>
  <view>
    <status-bar title="用户名"></status-bar>
    <custom-line custom type="custom">
      <input placeholder="请输入用户名" class="form-input" placeholder-class="placeholder_f" type="text">
    </custom-line>
    <view class="tips">
      注意：用户名必须是6为以上，20位以下纯字母或字母+数字的组合
    </view>
    <custom-line type="button" title="保存"></custom-line>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import CustomLine from '@/components/custom-line.vue'

export default {
  name: "username",
  components: {
    StatusBar,
    CustomLine
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>