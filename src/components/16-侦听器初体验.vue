<template>
  <div class="watch">
      <h1>这个文件说明侦听器的使用</h1>
      <input type="text" v-model="msg">
      <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello',
      myname: 'jack'
    }
  },
  watch: {
    // 你想侦听哪个属性，就必须以这个属性做为侦听器的名称
    // newv:新的值, oldv：旧的值
    msg (newv, oldv) {
      console.log(newv, oldv)
    },
    myname () {

    }
  }
}
</script>

<style>

</style>
