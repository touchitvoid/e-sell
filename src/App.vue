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
	.tips {
		width: 100%;
		min-height: 96rpx;
		font-size: 22rpx;
		color: #595959;
		text-align: left;
		box-sizing: border-box;
		padding: 36rpx 32rpx;
		line-height: 26rpx;
	}
	.form-input {
		width: 100%;
    height: inherit;
    box-sizing: border-box;
    color: #262626;
    font-size: 28rpx;
	}
	.placeholder_f {
		color: #bfbfbf;
		font-weight: 400;
		font-size: 28rpx;
	}

	.verify-code {
		display: -webkit-flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.verify-code input {
		flex: 1;
	}
	.verify-code button {
		width: 200rpx;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0;
		margin: 0;
		border: none;
		border-left: 1px solid #eeeeee;
		background: transparent;
		color: #2A58E1;
		font-size: 28rpx;
		border-radius: 0;
	}
	.verify-code button::after {
		border: none;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
