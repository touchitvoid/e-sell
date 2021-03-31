// import wx from 'jweixin-module'

export const GetStatusBarHeight = () => wx.getSystemInfoSync()

export const WxConfig = (api_list, cb = () => {}) => {
  getSign({
    api_list
  }).then(res => {
    wx.config(res.data)
    wx.ready(cb)
  })
}

export const verifyPhone = phone => /^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)

export const WxPay = (config, success = () => {}) => {
  // #ifdef H5
  WxConfig(['chooseWXPay'], () => {
    wx.chooseWXPay({
      ...config,
      success
    });
  })
  // #endif

  // #ifdef MP-WEIXIN
  wx.requestPayment({
    ...config,
    success,
    complete: m => {
      console.log('调用完了')
      console.log(m)
    },
    fail: err => {
      console.log(err)
    }
  })
  // #endif
}