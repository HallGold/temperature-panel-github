import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '',
//   withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// 拦截请求
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 拦截响应
service.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
