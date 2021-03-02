import fly from './config'

const api = {
  pay: '/api/payment/unified'
}
const pay ={
  status: '/api/payment/query'
}

// login
export const PostLogin = params => fly.post('/api/auth/login', params)

// 获取商户信息
export const GetDistributorInfo = params => fly.post('/api/distributor/info', params)
// 支付
export const Payment = params => fly.post(api.pay, params)
// 支付状态
export const GetPayStatus = params => fly.post(pay.status, params)