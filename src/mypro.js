var fs = require('fs')

// 读取a.txt
// fs.readFile('./data/a.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//     // 读取a.txt
//     fs.readFile('./data/b.txt', 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log(data)
//         // 读取a.txt
// fs.readFile('./data/c.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
//       }
//     })
//   }
// })

// 1.创建promise对象：承诺。能够解决回调地狱的问题，可以让代码不至于嵌套很深的层次
// Promise构造函数有一个回调参数
// 回调参数有两个参数,这两个参数都是函数，一个是操作成功的回调函数resolve,一个是操作失败的回调函数reject
var p = new Promise((resolve, reject) => {
  fs.readFile('./data/a.txt', 'utf-8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
var p2 = new Promise((resolve, reject) => {
  fs.readFile('./data/b.txt', 'utf-8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
var p3 = new Promise((resolve, reject) => {
  fs.readFile('./data/c.txt', 'utf-8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
// 2.执行promise
// then里面就传入操作成功时的回调
p
  .then((res) => {
    console.log(res)
    // 将下一步需要执行的promise对象来返回
    return p2
  })
  .then((res) => {
    console.log(res)
    return p3
  })
  .then((res) => {
    console.log(res)
  })
// catch中就传入操作失败的回调
  .catch(err => {
    console.log(err)
  })
