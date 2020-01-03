import Vue from 'vue'
// 引入路由模块
import router from '@/router/index.js'
import { Toast } from 'vant';
Vue.use(Toast)
// @就代表src目录
import App from '@/App.vue'

Vue.config.productionTip = false
import './styles/reset.css'
new Vue({
  // 注入,记得要通过 router 配置参数注入路由，
  // 从而让整个应用都有路由功能
  router,
  render: h => h(App)
}).$mount('#app')
