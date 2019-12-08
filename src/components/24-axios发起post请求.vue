<template>
  <div class="post">
    <h1>这个文件主要用于演示如何使用axios发起post方式的请求</h1>分类名称：
    <input type="text" v-model="cate.name" />
    <br />分类别名：
    <input type="text" v-model="cate.slug" />
    <br />
    <button @click='addCate'>添加分类</button>
  </div>
</template>

<script>
// import axios from 'axios'
// import axios from '@/utils/myaxios.js'
import { addCate } from '@/api/cate.js'
export default {
  data () {
    return {
      cate: {
        slug: '',
        name: ''
      }
    }
  },
  methods: {
    addCate () {
      addCate(this.cate)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })

      // axios.post('http://127.0.0.1:4444/addCate', this.cate)
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.log(err)
      // })

      // axios({
      //   url: '/addCate',
      //   method: 'post',
      //   data: this.cate,
      //   baseURL: 'http://127.0.0.1:4444'
      // })
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })

      // axios({
      //   url: '/addCate',
      //   method: 'post',
      //   data: this.cate
      // })
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  }
}
</script>

<style>
</style>
