import Fly from "flyio/dist/npm/wx"

const fly = new Fly()

fly.config.baseURL = "https://fenxiaoapi.qiyehoutai.com"
fly.config.timeout=5000;

fly.interceptors.request.use((config, promise)=>{
  //给所有请求添加自定义header
  config.headers["X-Tag"] = "flyio"
  config.headers['Authorization'] = uni.getStorageSync('token')
  return config
})
fly.interceptors.response.use(response => response.data)

export default fly