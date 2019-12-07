<template>
  <div class="on">
    <h1>这个文件主要用来说明v-on如何为元素绑定事件</h1>
    <button v-on:click='sayhi'>点我啊-sayhi</button>
    <button v-on:click='say("最帅我聪哥",$event)'>再点我啊-say</button>
    <button @click='sayhi'>简写方式来点名了</button>
    <button @[type]='sayhi'>动态事件</button>
    <a href="http://www.baidu.com" @click.prevent='doo'>使用事件修饰符阻止元素的默认行为</a>
    <input type="text" @keyup.13.once='show' v-model='myname'>
  </div>
</template>

<script>
export default {
  // data中只定义数据，其它的都不定义
  data () { // 只是一个结构标识
    return {
      type: 'dblclick',
      myname: 'jack'
    //   sayhi () {
    //     console.log(this) // null
    //   // console.log(this.myname + '向你问好')
    //   }
    }
  },
  methods: {// 只是一个结构标识
    sayhi () {
      console.log(this)
      console.log(this.myname + '向你问好')
    //   this.say()
    },
    say (name, event) {
      console.log(name)
      console.log(event)
    },
    doo (event) {
    //   event.preventDefault()
      console.log('我是a元素的事件')
    },
    show () {
      console.log(this.myname)
    }
  }
}
</script>

<style>

</style>
