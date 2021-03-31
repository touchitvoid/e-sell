<template>
  <view>
    <status-bar title="支付"></status-bar>
    <view class="pay-info">
      <image :src="info.wx_avatar_url" />
      <view class="pay-info__name">
        {{ info.name || '未知' }}（{{ info.wx_nickname|| '未知' }}）
        <view>{{ info.customer_name }}</view>
      </view>
    </view>
    <view class="pay-form">
      <view class="pay-input">
        <view>支付金额</view>
        <input
          v-model="form.amount"
          type="digit"
          placeholder-style="color: #bfbfbf;"
          placeholder="0.00"
        />
      </view>
      <input
        v-model="form.remark"
        class="pay-remarks"
        placeholder-style="color: #bfbfbf"
        placeholder="请输入备注"
      />
    </view>
    <button class="submit-btn" @click="openPayPanel">立即支付</button>
    <pop-panel 
      v-if="payPanel" 
      :options="payType" 
      @close="payPanel = false"
      @select="handlePay"
    >
    </pop-panel>
    <pay-code @close="closePayCode" v-if="showPayCode" :qrcode="payCodeUri"></pay-code>
  </view>
</template>

<script>
import StatusBar from "@/components/custom-status-bar"
import PopPanel from "@/components/pop-panel"
import PayCode from "@/components/pay-code"
import { Payment, GetDistributorInfo, GetPayStatus, CacheWxCode } from "@/api"
import { WxPay } from "@/utils"

export default {
  name: "pay",
  components: {
    StatusBar,
    PopPanel,
    PayCode
  },
  data() {
    return {
      form: {
        payment: "wx-mp",
        amount: ''
      },
      payPanel: false,
      payType: [
        { label: "扫码", key: "scan" },
        { label: "直接微信支付", key: "wx-mp" },
        { label: "付款码", key: "scan_agg" },
      ],
      payCodeUri: '', // 支付码
      showPayCode: false,
      info: {},
      timer: null
    }
  },
  watch: {
    'form.amount': {
      immediate: true,
      handler(newVal, oldVal) {
        if (!oldVal) return
        if (+newVal === 0 && (newVal.length > oldVal.length) && newVal == '00') {
          this.$nextTick(() => {
            this.form.amount = oldVal
          })
        }
        // console.log(newVal.includes('.') && oldVal.includes('.') && oldVal === newVal)
        if (oldVal.includes('.')) {
          if ((newVal.length > oldVal.length) && newVal.endsWith('.')) {
            this.$nextTick(() => {
              this.form.amount = oldVal
            })
          }
        }
        const arr = newVal.split('.')
        if (arr.length > 1) {
          if (arr[1].length > 2) {
            this.$nextTick(() => {
              this.form.amount = oldVal
            })
          }
        }
      }
    }
  },
  onLoad() {
    this.getInfo()
  },
  methods: {
    closePayCode() {
      this.showPayCode = false
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    openPayPanel() {
      if (this.form.amount == '.') return
      if (this.form.amount.startsWith('.')) {
        this.form.amount = '0' + this.form.amount
      }
      if (this.form.amount.endsWith('.')) {
        this.form.amount = this.form.amount.substr(0, this.form.amount.length - 1)
      }
      if (!this.form.amount) return this.$toast('请输入支付金额')
      this.payPanel = true
    },
    // 获取经销商信息
    async getInfo() {
			const { code, data } = await GetDistributorInfo()
			if (!data) return
			this.info = data
		},
    handlePay(payment) {
      this.form.payment = payment.key
      const pay = {
        'scan': this.scanPay,
        'wx-mp': this.wxPay,
        'scan_agg': this.paymentCode
      }
      pay[payment.key]()
      this.payPanel = false
    },
    scanPay() {
      wx.scanCode({
        scanType: ['qrCode'],
        success: async({ result }) => {
          try {
            const { data, error } = await Payment({
              scan_code: result,
              ...this.form
            })
            if (!data) return this.$toast(error)
            uni.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 2000
            })
            setTimeout(() => {
              uni.navigateBack({ delta: 1 })
            }, 2000)
          } catch (error) {
            console.log(error)
          }
        }
      })
    },
    wxPay() {
      wx.checkSession({
        success: async(r) => {
          try {
            const { data, error, code } = await Payment(this.form)
            // if (!data) return this.$toast(error)
            if (code && code === 2) {
              this.$toast(res.error)
            }
            WxPay(data.pay_package, () => {
              console.log("wxPay!")
            })
          } catch (error) {
            console.log(error)
          }
        },
        fail: error => {
           wx.login({
            success: async ({ code }) => {
              this.form.code = code
              await CacheWxCode({ code })
              try {
                const { data } = await Payment(this.form)
                // if (!data) return this.$toast(error)
                WxPay(data.pay_package, () => {
                  console.log("wxPay!")
                })
              } catch (error) {
                console.log(error)
              }
            },
          })
        }
      })
    },
    // 付款码
    async paymentCode() {
      try {
        const { data, error } = await Payment(this.form)
        if (!data) return this.$toast(error)
        this.showPayCode = true
        this.payCodeUri = data.pay_qr_code
        this.timer = setInterval(async() => {
          // 查询支付状态
          try {
            const query = await GetPayStatus({ order_no: data.order_no })
            if (!query.data) return
            if (query.data.pay_state === 'success') {
              this.showPayCode = false
              clearInterval(this.timer)
              this.timer = null
            }
          } catch (error) {
            console.log(error)
          }
        }, 2400)
      }catch (err) {
        console.log(err)
      }
    }
  },
}
</script>

<style lang="less" scoped>
@import url("@/color.less");

.pay-info {
  height: 176rpx;
  display: -webkit-flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 32rpx;
  image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 8rpx;
    margin-right: 24rpx;
    background-color: lightgray;
  }
  .pay-info__name {
    font-size: 28rpx;
    color: @title-color;
    view {
      color: @subtitle-color;
      font-size: 22rpx;
    }
  }
}
.pay-form {
  background-color: white;
  box-sizing: border-box;
  padding: 0 32rpx;
  .pay-input {
    height: 200rpx;
    box-sizing: border-box;
    padding-top: 32rpx;
    display: -webkit-flex;
    flex-direction: column;
    view {
      font-size: 28rpx;
      line-height: 44rpx;
      color: @title-color;
    }
    input {
      flex: 1;
      border: none;
      border-bottom: 1px solid #eeeeee;
      position: relative;
      box-sizing: border-box;
      padding: 0 52rpx;
      font-size: 72rpx;
      // font-weight: 600;
      color: @title-color;
      &::before {
        content: "¥";
        width: 36rpx;
        text-align: center;
        font-size: 36rpx;
        line-height: 52rpx;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        color: @title-color;
        font-weight: 600;
      }
    }
  }
}
.pay-remarks {
  width: 100%;
  height: 96rpx;
  font-size: 24rpx;
  color: @title-color;
}
.submit-btn {
  width: 432rpx;
  height: 96rpx;
  line-height: 96rpx;
  background: #2a58e1;
  border-radius: 96rpx;
  color: white;
  text-align: center;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 28rpx;
  margin-top: 32rpx;
}
</style>
