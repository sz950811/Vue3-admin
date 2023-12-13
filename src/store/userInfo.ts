import { defineStore } from 'pinia'
import { ref } from 'vue'
import { logoIn } from '../api'
import type { UserInfo } from '../types/userInfo'
import router from '@/router'
// import { useRouter, useRoute } from 'vue-router'
// const route = useRoute()
// const router = useRouter()
export const UserInfoStore = defineStore('UserInfoStore', () => {
  // const router = useRouter()
  const userInfo = ref<UserInfo | null>(JSON.parse(sessionStorage.getItem('DEMO_USERINFO') as any) || null)
  const token = ref(JSON.parse(sessionStorage.getItem('DEMO_TOKEN') as string))
  // const route = useRoute()
  const onlogIn = async (parms: any, path?: any) => {

    const { data, status } = await logoIn(parms)
    if (status == 0) {
      userInfo.value = data
      token.value = data.token
      sessionStorage.setItem('DEMO_TOKEN', JSON.stringify(userInfo.value.token))
      sessionStorage.setItem('DEMO_USERINFO', JSON.stringify(userInfo.value))
      // const path = route?.query?.path
      if (path) {
        router.push(path)
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
  return { userInfo, onlogIn, token, logOut }
})