// 这个文件用于封装当前项目中的axios
// 我会在这个axios上进行全局的配置，以简化请求
import axios from 'axios'

// 设置全局的baseURL--基准路径
axios.defaults.baseURL = 'http://127.0.0.1:4444'

export default axios
