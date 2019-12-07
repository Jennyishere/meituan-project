<template>
  <div class="other">
      <p v-pre>{{msg}}</p>
      <p>{{msg}}</p>
      <input type="text" v-model="msg">
      <hr>
      <p v-once>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<style>

</style>
