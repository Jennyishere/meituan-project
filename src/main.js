import Vue from 'vue'

// @就代表src目录
import '@/styles/animate.css'

// import App from './App.vue'
// import App from './components/01-回顾v-bind.vue'
// import App from './components/02-v-for.vue'
// import App from './components/03-v-on.vue'
// import App from './components/04-v-show和v-if.vue'
// import App from './components/05-v-if做为分支结构.vue'
// import App from './components/06-other directives.vue'
// import App from './components/07-案例-基本结构.vue'
// import App from './components/08-案例-数据动态展示.vue'
// import App from './components/09-案例-数据添加.vue'
// import App from './components/10-案例-局部自定义指令.vue'
// import App from './components/11-案例-全局指令.vue'
// import App from './components/12-案例-局部过滤器.vue'
// import App from './components/13-案例-全局过滤器.vue'
// import App from './components/14-计算属性.vue'
// import App from './components/16-侦听器初体验.vue'
// import App from './components/17-深度侦听.vue'
// import App from './components/18-案例-搜索.vue'
// import App from './components/19-补充说明input.vue'
// import App from './components/20-自定义类样式实现过渡动画.vue'
// import App from './components/21-使用样式名称实现过渡动画.vue'
// import App from './components/22-使用js钩子来实现过渡动画.vue'
// import App from './components/23-axios发起get请求.vue'
import App from './components/24-axios发起post请求.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
