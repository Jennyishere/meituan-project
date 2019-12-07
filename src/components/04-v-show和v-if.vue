<template>
  <div class="show">
      <h1>这个文件主要说明v-show和v-if的使用</h1>
      <button @click="isShow=!isShow">toggle</button>
      <p v-show='isShow'>能不能看到我？</p>
      <p v-if='isShow'>你能不能看到我？</p>
      <p v-if='false'>你能不能看到我？123</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style>

</style>
