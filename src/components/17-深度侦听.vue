<template>
  <div class="shen">
      <h1>这个文件说明如果实现深度侦听</h1>
      <p>{{msg}}</p>
      <input type="text" v-model="users.username">
      <input type="text" v-model="users.password">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello',
      users: {
        username: '',
        password: ''
      }
    }
  },
  watch: {
    msg (n, o) {
      console.log(n, o)
    },
    // users: {
    //   // 添加handler方法,这个函数可以侦听指定对象的属性值的变化
    //   // 修改这个对象的任何一个属性都会触发
    //   handler (n,o) {
    //     console.log('aa')
    //   },
    //   // 设置当前侦听为深度侦听
    //   deep: true
    // }

    // 侦听指定的属性值的变化
    'users.username' (n, o) {
      console.log(n, o)
    }
  }
}
</script>

<style>

</style>
