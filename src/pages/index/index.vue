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
		>
		<view v-if="page === 'qrcode'" class="status-bar__controller" @click.stop="page = 'home'">	
    	<image src="@/static/images/status-bar-left.png" />
		</view>
		{{ title[page] }}</view>
		<view class="padding-16" v-if="page === 'home'">
			<view class="user-info">
				<view class="user-info__name flex-ai--c" @click="accountPanelShow = true">
					{{ info.name || '' }}<span v-if="info.wx_nickname">（{{ info.wx_nickname }}）</span>
					<image src="@/static/images/arrow-down.png"/>
				</view>
				<image @click="page = 'qrcode'" class="user-info__qrcode" src="@/static/images/qrcode.png"/>
			</view>
			<view class="account-info padding-16">
				<view class="account-info__title">回款账户信息</view>
				<view class="account-info__line">
				<!-- 企业名称：{{ info.customer_name||'' }} -->
				企业名称：帝欧家居股份有限公司
				</view>
				<view class="account-info__line flex-ai--c">
					子账簿账号：{{ info.bank_sub_account||'未知' }} <button class="copy" @click.stop="onCopy">复制</button>
				</view>
			</view>
			<view class="statistics-line number">
				今日支付{{ info.today_pay_num||0 }}笔
				<view>
					<text>¥</text>{{ info.today_pay_amount||0 }}
				</view>
			</view>
			<view class="statistics-line amount">
				子账薄累计
				<view>
					<text>¥</text>{{ info.cumulative_amount||0 }}
				</view>
			</view>
			<view class="controller">
				<view 
					class="controller-primary controller-item" 
					@click.stop="controller">
					<view class="controller-item__title">
						{{ role === 2? '客户管理': '支付' }}
						<view class="controller-item__subtitle">
							{{ role === 2? 'Account': 'Pay' }}
						</view>
					</view>
					<image mode="widthFix" v-if="role === 2" src="@/static/images/user-model.png" />
					<image v-else src="@/static/images/pay.png" />
				</view>
				<view class="controller-default">
					<view class="trade-record controller-item" @click.stop="$link('/pages/transaction/detail')">
						<view class="controller-item__title">
							交易明细
							<view class="controller-item__subtitle">
								Transaction details
							</view>
						</view>
						<image src="@/static/images/document.png" />
					</view>
					<view class="trade-statistics controller-item" @click.stop="$link('/pages/transaction/statistics')">
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
			<view class="divider-16"></view>
			<view v-if="role === 3" class="controller">
				<view class="controller-default" style="width: 100%">
					<view class="bill controller-item" @click.stop="$link('/pages/bill/pay')">
						<view class="controller-item__title">
							应付账单
							<view class="controller-item__subtitle">
								Transaction summary
							</view>
						</view>
						<image mode="widthFix" src="@/static/icons/bill.png" />
					</view>
				</view>
			</view>
		</view>
		<me-page v-if="page === 'me'"></me-page>
		<qrcode v-if="page === 'qrcode'" :info="info"></qrcode>
		<view class="bottom-line"></view>
		<fixed-bottom-nav v-if="page !== 'qrcode'" @switch="page = $event" :page="page"></fixed-bottom-nav>
		<pop-panel v-if="accountPanelShow" @success="accountPanelShow = false" @close="accountPanelShow = false"></pop-panel>
	</view>
</template>

<script>
	import FixedBottomNav from '@/components/fixed-bottom-nav.vue'
	// uniapp好难用哦 解决自定义tabbar性能问题
	import MePage from '../me/index.vue'
	import Qrcode from '@/components/qrcode.vue'
	import PopPanel from '@/components/pop-panel'
	// api
	import { GetDistributorInfo } from '@/api'

	export default {
		data() {
			return {
				bar: {},
				page: 'home',
				accountPanelShow: false,
				title: {
					'me': '个人中心',
					'home': '帝欧微分销',
					'qrcode': '固定收款码'
				},
				user: {
					name: ''
				},
				info: {},
				role: 1 // 1-主角色 2-普通商户 3-经销商
			}
		},
		components: {
			FixedBottomNav,
			MePage,
			PopPanel,
			Qrcode
		},
		watch: {
			'page': {
				immediate: true,
				handler(page) {
					if (page === 'home') {
						this.getInfo()
					}
				}
			}
		},
		onReady() {
			this.role = uni.getStorageSync('role')
		},
		onShow() {
			// 获取左上角胶囊位置信息
			this.bar = wx.getMenuButtonBoundingClientRect()
		},
		methods: {
			// 复制
			onCopy() {
				uni.showToast({
					title: "复制成功"
				})
			},
			controller() {
				console.log(this.role)
				if (this.role === 2) return this.$link('/pages/business/index')
				this.$link('/pages/pay/index')
			},
			async getInfo() {
				const { code, data } = await GetDistributorInfo()
				if (!data) return
				this.info = data
			}
		}
	}
</script>

<style lang="less" scoped>
	@radius-px: 8px;

	.bottom-line {
		width: 100%;
		height: 124rpx;
	}
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
		font-size: 33rpx;
		.status-bar__controller {
			width: 30rpx;
			position: absolute;
			height: 100%;
			left: 0;
			display: -webkit-flex;
			align-items: center;
			padding-left: 24px;
			image {
				width: 7.78px;
				height: 13px;
			}
		}
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
				&.bill {
					background-color: #007AFF;
					image {
						width: 90rpx;
						margin-right: 32rpx;
					}
				}
			}
		}
	}
</style>
