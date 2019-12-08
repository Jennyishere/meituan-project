<template>
  <div class="tran">
      <h1>这个文件说明如何使用自定义的样式来实现过渡动画效果</h1>
      <button @click="isshow=!isshow">切换</button>
      <transition
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut">
        <p v-show='isshow'>我可以显示和隐藏</p>
      </transition>
  </div>
</template>

<script>
// 局部引入样式
// import '../styles/animate.css'
export default {
  data () {
    return {
      isshow: false
    }
  }
}
</script>

<style>
p{
    width: 200px;
    background-color: pink;
}
</style>
