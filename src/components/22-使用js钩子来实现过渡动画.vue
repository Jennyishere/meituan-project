<template>
  <div class="tran">
    <h1>这个文件说明如何使用自定义的样式来实现过渡动画效果</h1>
    <button @click="isshow=!isshow">切换</button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
    >
      <p v-show="isshow">我可以显示和隐藏</p>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    // el:当前添加了这个钩子的元素，通过这个元素可以直接操作dom
    beforeEnter: function (el) {
      el.style.marginLeft = '200px'
      el.style.opacity = 0
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      var dis = 200
      var timeid = setInterval(() => {
        dis--
        el.style.marginLeft = `${dis}px`
        el.style.opacity = (200 - dis) / 200
        if (dis === 0) {
          clearInterval(timeid)
          done()
        }
      }, 10)
    },
    afterEnter: function (el) {
    // ...
    },
    beforeLeave: function (el) {
    // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
    // ...
      done()
    },
    afterLeave: function (el) {
    // ...
    }
  }
}
</script>

<style>
p {
  width: 200px;
  background-color: pink;
}
</style>
