import fly from './config'

const api = {
  pay: '/api/payment/unified',
  password: '/api/distributor/password'
}
const pay ={
  status: '/api/payment/query'
}

// login
export const PostLogin = params => fly.post('/api/auth/login', params)

// 获取商户信息
export const GetDistributorInfo = params => fly.post('/api/distributor/info', params)
// 获取个人中心信息
export const GetUcInfo = params => fly.post('/api/distributor/uc/info', params)
// 修改密码
export const PatchPassword = params => fly.post('/api/distributor/password', params)
// 支付,
export const Payment = params => fly.post(api.pay, params)
// 支付状态
export const GetPayStatus = params => fly.post(pay.status, params)