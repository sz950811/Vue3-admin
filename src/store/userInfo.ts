import { defineStore } from 'pinia'
import { ref } from 'vue'
import { logoIn } from '../api'
import type { UserInfo } from '../types/userInfo'
import { useRouter, useRoute } from 'vue-router'
export const UserInfoStore = defineStore('UserInfoStore', () => {
  const userInfo = ref<UserInfo | null>(JSON.parse(sessionStorage.getItem('DEMO_USERINFO') as any) || null)
  const token = ref(JSON.parse(sessionStorage.getItem('DEMO_TOKEN') as string))
  const router = useRouter()
  const route = useRoute()
  const onlogIn = async (parms: any) => {
    const { data, status } = await logoIn(parms)
    if (status == 0) {
      userInfo.value = data
      token.value = data.token
      sessionStorage.setItem('DEMO_TOKEN', JSON.stringify(userInfo.value.token))
      sessionStorage.setItem('DEMO_USERINFO', JSON.stringify(userInfo.value))
      if (route.query?.path) {
        router.push(route.query.path as any)
      } else {
        router.push('/')
      }
    }
  }
  const logOut = () => {
    sessionStorage.removeItem('DEMO_TOKEN')
    sessionStorage.removeItem('DEMO_USERINFO')
    userInfo.value = null
    router.push('/logIn')
  }
  // const delUSerInfo = () => { }
  return { userInfo, onlogIn, token, logOut }
})