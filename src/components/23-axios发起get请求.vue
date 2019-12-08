<template>
  <div class="get">
      <h1>这个文件主要用于演示如何使用axios发起get请求</h1>
      <button @click='getCateList'>get方式的无参请求</button>
      <button @click='getPostById'>get方式的带参请求-url传参</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    // 获取所有分类数据
    getCateList () {
      axios.get('http://127.0.0.1:4444/getCateList')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 根据id获取文章详情数据
    getPostById () {
    //   axios.get('http://127.0.0.1:4444/getPostById?id=5')
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
      axios.get('http://127.0.0.1:4444/getPostById', {
        params: {
          id: 10
        }
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
