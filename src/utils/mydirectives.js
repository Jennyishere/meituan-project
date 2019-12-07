// import Vue from 'vue'

// module.exports = {
//   // 聚焦指令
//   myfocus: Vue.directive('myfocus', {
//     inserted (el) {
//       console.log('这是全局指令的功劳')
//       el.focus()
//     }
//   })
// }

// export default {} // 导出默认对象，一个文件只能有一个默认对象
// 聚焦指令
// export:导出
// const:常量，只能使用，不能修改
// export const aa = Vue.directive('aaaaa', {
//   inserted (el) {
//     console.log('这是全局指令的功劳')
//     el.focus()
//   }
// })

export const myFocus = {
  inserted (el) {
    console.log('这是全局指令的功劳')
    el.focus()
  }
}

// 设置颜色指令
// export const setcolor = Vue.directive('setcolor', {
//   inserted (el, binding) {
//     el.style.color = binding.value
//   }
// })
export const setcolor = {
  inserted (el, binding) {
    el.style.color = binding.value
  }
}
