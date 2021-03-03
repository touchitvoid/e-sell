<template>
  <image class="index-bar__background" mode="widthFix" src="@/static/images/background.png" >
</template>

<script>
export default {
  name: 'full-background',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  /* 状态栏背景图 */
	.index-bar__background {
		width: 100%;
    height: 750rpx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
    transition: all .3s;
	}
</style>