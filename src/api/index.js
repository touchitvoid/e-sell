import fly from './config'

const api = {
  pay: '/api/payment/unified',
  password: '/api/distributor/password',
  customer: '/api/distributor/sub/lists'
}
const pay = {
  status: '/api/payment/query'
}
const transaction = {
  list: '/api/transaction/lists',
  type: '/api/transaction/trans_type',
  total: '/api/transaction/total'
}

// 缓存微信code
export const CacheWxCode = params => fly.post('/api/auth/wx/code', params)
export const BindWechat = params => fly.post('/api/distributor/bind/wx', params)

// 获取交易汇总信息
export const GetTransactionTotal = params => fly.post(transaction.total, params)
// 获取交易明细
export const GetTransactionList = params => fly.post(transaction.list, params) 
// 获取交易类型
export const GetTransactionType = params => fly.post(transaction.type, params)

// login
export const PostLogin = params => fly.post('/api/auth/login', params)

// 获取商户信息
export const GetDistributorInfo = params => fly.post('/api/distributor/info', params)
// 获取个人中心信息
export const GetUcInfo = params => fly.post('/api/distributor/uc/info', params)
// 修改密码
export const PatchPassword = params => fly.post('/api/distributor/password', params)
// 支付
export const Payment = params => fly.post(api.pay, params)
// 支付状态
export const GetPayStatus = params => fly.post(pay.status, { ...params})
// 获取客户列表
export const GetCustomerList = params => fly.post(api.customer, params)
// 获取业务层级数据
export const GetLevelList = params => fly.post('/api/distributor/level/lists', params)
// 订单退款
export const Refund = params => fly.post('/api/transaction/refund', params)

// 用户管理
const user = {
  list: '/api/distributor/user/lists',
  create: '/api/distributor/user/create',
  edit: '/api/distributor/user/modify'
}

export const GetUserList = params => fly.post(user.list, params)
export const CreateUser = params => fly.post(user.create, params)
export const EditUser = params => fly.post(user.edit, params)