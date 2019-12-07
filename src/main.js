import Vue from 'vue'
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
import App from './components/13-案例-全局过滤器.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
