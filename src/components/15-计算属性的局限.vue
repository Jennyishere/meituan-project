<template>
  <div class="com">
      <h1>这个文件主要说明计算属性的创建和使用以及相关的特性</h1>
      <input type="text" v-model="msg">
      <p>{{msg}}</p>
      <h1>{{formatString}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'heLLo'
    }
  },
  // 添加计算属性
  computed: {
    // 定义一个格式化字符串的计算属性
    formatString () {
      console.log('123')
      return this.msg.substring(0, 1).toUpperCase() + this.msg.substring(1).toLowerCase()
    }
  }
}
</script>

<style>

</style>
