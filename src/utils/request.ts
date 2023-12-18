import axios from 'axios'
import { ElMessage } from 'element-plus'
import { UserInfoStore } from '../store'
const request = axios.create({
  // baseURL: '/m1/3726619-0-default',
  baseURL: '/api',
  timeout: 5000
})
import router from '@/router'
// 请求拦截器
request.interceptors.request.use((config: any) => {
  // const store = UserInfoStore()
  const token = sessionStorage.getItem('DEMO_TOKEN')
  if (token) {
    config.headers['Access-Token'] = token
    // request.defaults.headers.common['Access-Token'] = token
  }
  return config
})

// 响应拦截器
request.interceptors.response.use((response: any) => {
  const store = UserInfoStore()
  const data = response.data
  if (data.status == 401) {
    ElMessage({
      message: '权限过期，重新登陆',
      type: 'warning',
    })
    store.logOut()
    return router.push('/logIn')
  } else if (data.status == 201) {
    ElMessage({
      message: '账号或密码错误',
      type: 'warning',
    })
    return
  }
  // 对响应数据做点什么
  return data
})
export default request