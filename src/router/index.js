// 这个文件就是封装的路由模块

// 1.引入vue和vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由所映射的组件
import Index from '@/views/Index.vue'
import Login from '../views/login.vue'

// 挂载：让Vue使用VueRouter进行路由管理,use之后，就会在vue实例上挂载相应的成员，如$route,$router
Vue.use(VueRouter)

// 2.创建路由对象
var router = new VueRouter({
  // 3.配置路由，通过routes配置路由,它是一个数组，里面的每一个成员都是一个单独的路由对象
  routes: [
    // 4.配置具体的路由，一般来说有如下的几个参数
    // path:路由路径，以后这个值就是url的值
    // name:路由的名称
    // component:当前路由所映射的组件，它是一个组件对象，绝对不要写成字符串
    {
      name: 'default',
      path: '/',
      // component: Index
      // redirect:重定向
      redirect: { name: 'index' }
    },
    {
      name: 'index',
      path: '/index',
      component: Index
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})

// 暴露
export default router
