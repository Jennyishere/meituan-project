<template>
  <div class="com">
      <h1>这个文件主要说明计算属性的创建和使用以及相关的特性</h1>
      <input type="text" v-model="msg">
      <p>{{msg}}</p>
      <p>{{msg.substring(0,1).toUpperCase()+msg.substring(1).toLowerCase()}}</p>
      <p>{{msg.substring(0,1).toUpperCase()+msg.substring(1).toLowerCase()}}</p>
      <p>{{msg.substring(0,1).toUpperCase()+msg.substring(1).toLowerCase()}}</p>
      <p>{{msg.substring(0,1).toUpperCase()+msg.substring(1).toLowerCase()}}</p>
      <h1>{{formatString}}</h1>
      <h1>{{formatString}}</h1>
      <h1>{{formatString}}</h1>
      <h1>{{formatString}}</h1>
      <h1>{{formatString}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'heLLo'
    //   formatString: ''
    }
  },
  // 添加计算属性
  computed: {
    // 定义一个格式化字符串的计算属性
    formatString () {
      console.log('123')
      // 不要在计算属性中直接修改依赖项的值
      // this.msg = 'hello you'
      console.log('aaa')
      return this.msg.substring(0, 1).toUpperCase() + this.msg.substring(1).toLowerCase()
    }
  },
  methods: {
    // formatString () {
    //   console.log('123')
    //   return this.msg.substring(0, 1).toUpperCase() + this.msg.substring(1).toLowerCase()
    // }
  }
}
</script>

<style>

</style>
