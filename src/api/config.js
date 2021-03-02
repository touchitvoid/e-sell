import Fly from "flyio/dist/npm/wx"

const fly = new Fly()

fly.config.baseURL = "https://fenxiaoapi.qiyehoutai.com"
fly.config.timeout= 50000;

fly.interceptors.request.use((config, promise)=>{
  //给所有请求添加自定义header
  config.headers['Authorization'] = uni.getStorageSync('token')
  uni.showLoading({
    title: '请求中'
  })
  return config
})
fly.interceptors.response.use(response => {
  if (response.data.code === 401) {
    uni.reLaunch({
      url: '/pages/login/index'
    })
  }
  uni.hideLoading()
  return response.data
})

export default fly