<template>
	<view 
		style="box-sizing: border-box"
		:style="{
			paddingTop: `${bar.top + bar.height+2}px`
		}">
		<image class="index-bar__background" mode="widthFix" src="@/static/images/background.png" >
		<view class="index-bar__title" 
			:style="{
				height: `${bar.height+2}px`,
				top: `${bar.top}px`
			}"
		>交E销</view>
		<view class="padding-16" v-if="page === 'home'">
			<view class="user-info">
				<view class="user-info__name flex-ai--c">
					肥城帝王洁具（董帅）
					<image src="@/static/images/arrow-down.png"/>
				</view>
				<image class="user-info__qrcode" src="@/static/images/qrcode.png"/>
			</view>
			<view class="account-info padding-16">
				<view class="account-info__title">回款账户信息</view>
				<view class="account-info__line">
				企业名称：帝欧家居股份有限公司
				</view>
				<view class="account-info__line flex-ai--c">
					子账簿账号：607065225000030 <button class="copy">复制</button>
				</view>
			</view>
			<view class="statistics-line number">
				今日支付0笔
				<view>
					<text>¥</text>0
				</view>
			</view>
			<view class="statistics-line amount">
				子账薄累计
				<view>
					<text>¥</text>809,932.12
				</view>
			</view>
			<view class="controller">
				<view 
					class="controller-primary controller-item" 
					@click.stop="$link('/pages/pay/index')">
					<view class="controller-item__title">
						支付
						<view class="controller-item__subtitle">
							Pay
						</view>
					</view>
					<image src="@/static/images/pay.png" />
				</view>
				<view class="controller-default">
					<view class="trade-record controller-item">
						<view class="controller-item__title">
							交易明细
							<view class="controller-item__subtitle">
								Transaction details
							</view>
						</view>
						<image src="@/static/images/document.png" />
					</view>
					<view class="trade-statistics controller-item">
						<view class="controller-item__title">
							交易汇总
							<view class="controller-item__subtitle">
								Transaction summary
							</view>
						</view>
						<image src="@/static/images/trade.png" />
					</view>
				</view>
			</view>
		</view>
		<me-page v-else></me-page>
		<fixed-bottom-nav @switch="page = $event" :page="page"></fixed-bottom-nav>
	</view>
</template>

<script>
	import FixedBottomNav from '@/components/fixed-bottom-nav.vue'
	// uniapp真难用 解决自定义tabbar性能问题
	import MePage from '../me/index.vue'

	export default {
		data() {
			return {
				bar: {},
				page: 'me'
			}
		},
		components: {
			FixedBottomNav,
			MePage
		},
		onLoad() {
			// 获取左上角胶囊位置信息
			this.bar = wx.getMenuButtonBoundingClientRect()
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	@radius-px: 8px;

	/* 状态栏背景图 */
	.index-bar__background {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.index-bar__title {
		width: 100%;
		background: transparent;
		position: absolute;
		left: 0;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
		color: white;
	}
	/* 登录用户信息 */
	.user-info {
		height: 122rpx;
		color: white;
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1px;
		.user-info__name {
			font-size: 30rpx;
			image {
				width: 44rpx;
				height: 44rpx;
			}
		}
		.user-info__qrcode {
			width: 36rpx;
			height: 36rpx;
		}
	}
	/* 账户信息 */
	.account-info {
		width: 100%;
		height: 272rpx;
		background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
		border-radius: 8px;
		padding-top: 34rpx;
		color: #262626;
		margin-bottom: 20rpx;
		.account-info__title {
			font-weight: bold;
			font-size: 34rpx;
		}
		.account-info__line {
			font-size: 13px;
			margin-top: 40rpx;
			line-height: 18px;
			button.copy {
				background-color: white;
				width: 84rpx;
				height: 48rpx;
				border-radius: 48rpx;
				line-height: 48rpx;
				color: #2A58E1;
				border: none;
				font-size: 11px;
				padding: 0;
				text-align: center;
				margin: 0;
				margin-left: 4px;
				&::after {
					border: none;
				}
			}
		}
	}
	/* 统计显示 */
	.statistics-line {
		width: 100%;
		height: 128rpx;
		display: -webkit-flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 16px;
		margin-bottom: 32rpx;
		border-radius: 8px;
		position: relative;
		overflow: hidden;
		&::after, &::before {
			content: '';
			position: absolute;
			width: 96rpx;
			height: 96rpx;
			border-radius: 48rpx;
		}
		&::after {
			left: -48rpx;
			top: -48rpx;
			background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
		}
		&::before {
			right: -48rpx;
			bottom: -48rpx;
			background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
			opacity: 0.5;
		}
		& > view {
			font-size: 40rpx;
			display: -webkit-flex;
			align-items: center;
			text { 
				font-size: 30rpx;
				margin-right: 4px;
			}
		}
		&.number {
			background: linear-gradient(90deg, #FEEFDF 0%, #FFD0B2 100%);
			color: #D46B08;
		}
		&.amount {
			background: linear-gradient(90deg, #DFEBFE 0%, #B2CCFF 100%);
			color: #2A58E1;
		}
	}
	/* 操作菜单 */
	.controller {
		display: -webkit-flex;
		& > view {
			width: 50%;
		}
		.controller-item {
			color: white;
			box-sizing: border-box;
			padding: 32rpx;
			position: relative;
			overflow: hidden;
			&::after {
				content: '';
				position: absolute;
				width: 96rpx;
				height: 96rpx;
				left: -48rpx;
				top: -48rpx;
				border-radius: 48rpx;
				background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
			}
			.controller-item__title {
				font-size: 34rpx;
				line-height: 44rpx;
				.controller-item__subtitle {
					font-size: 11px;
					color: hsla(0 ,0%, 100%, .4);
					margin-top: 4px;
					line-height: 26rpx;
				}
			}
			image {
				position: absolute;
			}
		}
		.controller-primary {
			margin-right: 30rpx;
			height: 320rpx;
			background: #5856D6;
			border-radius: @radius-px;
			image {
				width: 160rpx;
				height: 144rpx;
				right: 32rpx;
				bottom: 40rpx;
			}
		}
		.controller-default {
			display: -webkit-flex;
			flex-direction: column;
			view {
				border-radius: @radius-px;
				flex: 1;
				overflow: hidden;
				image {
					top: 50%;
					transform: translate(0, -50%);
					right: 0;
					width: 80rpx;
				}
				&.trade-record {
					background-color: #52C41A;
					margin-bottom: 30rpx;
					image {
						height: 80rpx;
					}
				}
				&.trade-statistics {
					background-color: #13C2C2;
					image {
						height: 64rpx;
					}
				}
			}
		}
	}
</style>
