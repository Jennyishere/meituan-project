// import Vue from 'vue'

// 写个注释
// export const dateformat = Vue.filter('dateformat', (data, spe) => {
//   spe = spe || '-'
//   var year = data.getFullYear()
//   var month = data.getMonth() + 1
//   var day = data.getDate()
//   return year + spe + month + spe + day
// })

export const dateformat = (data, spe) => {
  spe = spe || '/'
  var year = data.getFullYear()
  var month = data.getMonth() + 1
  var day = data.getDate()
  return year + spe + month + spe + day
}
