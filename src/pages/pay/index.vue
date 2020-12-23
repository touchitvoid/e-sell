<template>
  <view>
    <status-bar></status-bar>
    pay
  </view>
</template>

<script>

import StatusBar from '@/components/custom-status-bar'

export default {
  name: "pay",
  components: {
    StatusBar
  },
  data () {
    return {

    }
  },
  onLoad() {
		// console.log(wx.getMenuButtonBoundingClientRect())
  }
}
</script>

<style lang="less" scoped>

</style>