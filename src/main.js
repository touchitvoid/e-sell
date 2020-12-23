import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$link = url => uni.navigateTo({ url })

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
