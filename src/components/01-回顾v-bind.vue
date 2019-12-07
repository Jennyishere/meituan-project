<template>
  <div class="bind">
      <h1>回顾v-bind</h1>
      用户名：<input type="text" v-bind:value="username" >
      用户名2：<input type="text" value="请输入用户名" >
      <input type="number" placeholder="请输入你想设置的字体大小" v-model="fs">
      <p :style="'font-size:'+fs+'px'">可以自由的设置字体大小</p>
      <!-- 样式达到--使用对象 -->
      <!-- 语法：:class="{样式名称：bool值}"
      样式名称：就是指你在style样式中定义的样式名称
      bool值为true则添加这个样式，否则不添加这个样式 -->
      <p class='red'>文字是什么颜色啊？</p>
      <p :class='{red:isred}'>文字是什么颜色啊？</p>
      <!-- 样式绑定--使用数组 -->
      <!-- 语法：:class="[样式A,样式B]"
      样式A：必须是定义好的变量，而不是指style中定义的样式名称
      变量定义的方式：  变量名称:样式名称-->
      <p :class="[red,blue]">看看我什么颜色啊？</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'jack',
      fs: 20,
      isred: true,
      red: 'blue',
      blue: 'under'
    }
  }
}
</script>

<style>
.red{
    color:red;
}
.blue{
    color:blue;
}
.under{
    text-decoration: underline;
}
</style>
