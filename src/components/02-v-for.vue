<template>
  <div class="for">
    <!-- 你想循环生成什么结构就在这个结构中添加v-for -->
    <!-- 遍历数组
    语法：<标签 v-for='(value,index) in 数组 :key='唯一索引值'> -->
    <p v-for='(value,index) in arr' :key='index' v-text='value'></p>
    <!-- 遍历对象
    语法：<标签 v-for='(value,key,index) in 对象' :key='key|index'> -->
    <h1 v-for='(value,key) in obj' :key = 'key'>{{value}}</h1>
    <table border="1">
        <tr>
            <th>id</th>
            <th>年龄</th>
            <th>年龄</th>
        </tr>
        <tr v-for='value in userList' :key='value.id'>
            <td>{{value.id}}</td>
            <td>{{value.name}}</td>
            <td>{{value.age}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [1, 3, 5, 7, 9],
      obj: {
        name: '聪哥',
        age: 20
      },
      userList: [
        {
          id: 1,
          name: '聪哥',
          age: 20 },
        {
          id: 2,
          name: '没有',
          age: 18 }
      ]
    }
  }
}
</script>

<style>

</style>
