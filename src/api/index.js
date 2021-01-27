import fly from './config'

// login
export const PostLogin = params => fly.post('/api/auth/login', params)

// 获取商户信息
export const GetDistributorInfo = params => fly.post('/api/distributor/info', params)