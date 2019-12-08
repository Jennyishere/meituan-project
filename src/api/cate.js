import axios from '@/utils/myaxios.js'

export const addCate = (data) => {
  return axios({
    url: '/addCate',
    method: 'post',
    data
  })
}
