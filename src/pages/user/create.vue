<template>
  <view>
    <status-bar title="新增用户"></status-bar>
    <custom-line custom type="custom">
      <input placeholder="请输入手机号码" class="form-input" placeholder-class="placeholder_f" type="text">
    </custom-line>
    <view class="divider-16"></view>
    <custom-line type="button" title="确认"></custom-line>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import CustomLine from '@/components/custom-line.vue'

export default {
  name: "user-create",
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