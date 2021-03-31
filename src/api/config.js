import Fly from "flyio/dist/npm/wx"

const fly = new Fly()

fly.config.baseURL = "https://fenxiaoapi.qiyehoutai.com"
fly.config.timeout = 50000;

fly.interceptors.request.use((config, promise)=>{
  // console.log(config)
  //给所有请求添加自定义header
  config.headers['Authorization'] = uni.getStorageSync('token')
  if (config.url !== '/api/payment/query') {
    uni.showLoading({
      title: '请求中'
    })
  }
  return config
})

fly.interceptors.response.use(function(response) {
  if (response.data.code === 401) {
    uni.reLaunch({
      url: '/pages/login/index'
    })
  }
  if (response.data.code !== 200) {
    const result = response.request.body && response.request.body.toast
    // console.log(result)
    if (!result) {
      uni.showToast({
        title: response.data.error,
        icon: "none"
      })
    }
    throw error('error')
  }
  uni.hideLoading()
  return response.data
},
(err) => {
  //发生网络错误后会走到这里
  if (err.status === 500) {
    uni.showToast({
      title: '服务器错误，请稍后重试',
      icon: 'none'
    })
  }
  uni.hideLoading()
  return Promise.resolve(err)
})

export default fly
