import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$link = url => uni.navigateTo({ url })
Vue.prototype.$reLaunch = url => uni.reLaunch({ url })
Vue.prototype.$redirectTo = url => uni.redirectTo({ url })
Vue.prototype.$switchTab = url => uni.switchTab({ url })
// show tip
Vue.prototype.$toast = title => uni.showToast({
  title,
  icon: 'none'
})

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
