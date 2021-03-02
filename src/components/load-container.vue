<template>
	<scroll-view
		scroll-y
		class="loadmore"
		:style="{ height }"
		:lower-threshold="bottom"
		@scrolltolower="loadmore"
	>
		<slot/>
	</scroll-view>
</template>
<script>
export default {
	props: {
		height: String,
		// 上拉加载更多状态：0 加载完毕， 1 可加载， 2 加载中
		bottomStatus: {
			type: Number,
			default: 1
		},
		bottom: {
			type: Number,
			default: 50
		}
	},
	methods: {
		loadmore () {
			if (this.bottomStatus !== 1) return
			this.$emit('load')
		}
	}
}
</script>
<style lang="less" scoped>
.loadmore {
	box-sizing: border-box;
	height: 100vh;
}
</style>
