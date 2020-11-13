import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './css/global.css'
import axios from './js/axios.min.js'
import './css/admin.css'
import './css/pintuer.css'


Vue.config.productionTip = false

axios.defaults.baseURL="http://192.168.3.56:8080/department/"
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http=axios



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
