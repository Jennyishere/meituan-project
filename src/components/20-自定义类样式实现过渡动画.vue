<template>
  <div class="tran">
      <h1>这个文件说明如何使用自定义的样式来实现过渡动画效果</h1>
      <button @click="isshow=!isshow">切换</button>
      <transition name="move">
        <p v-show='isshow'>我可以显示和隐藏</p>
      </transition>
  </div>
</template>

<script>
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
.move-enter{
    margin-left: 200px;
    opacity: 0;
}
.move-enter-active{
    transition: all 1s;
}
.move-enter-to{
    margin-left: 0px;
    opacity: 1;
}
.move-leave{
    margin-left: 0px;
    opacity: 1;
}
.move-leave-active{
    transition: all 1s;
}
.move-leave-to{
    margin-left: 200px;
    opacity: 0;
}
</style>
