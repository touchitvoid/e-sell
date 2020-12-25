<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	body {
		background-color: #f5f5f5;
	}
	.padding-16 {
		box-sizing: border-box;
		padding: 0 16px;
	}
	.flex {
		display: -webkit-flex;
	}
	.flex-ai--c {
		display: -webkit-flex;
		align-items: center;
	}
	.flex-jc--sb {
		display: -webkit-flex;
		justify-content: space-between;
	}
	.divider-16 {
		width: 100%;
		height: 32rpx;
	}
</style>
