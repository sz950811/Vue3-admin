import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routerList from './routerList'
const LogoInVue = () => import('../components/LogoIn.vue')
const IndexVue = () => import('../views/index.vue')
const No404 = () => import('../components/404.vue')
import No401 from '../components/401.vue'
const wList = ['/logIn', '/404', '/401']
import { UserInfoStore } from '../store'
const { VITE_APP_NAME } = import.meta.env
const routes: any = [
  {
    path: '/', component: IndexVue, name: 'Index', redirect: (to: any, next: any) => {
      const store = UserInfoStore()
      if (store.userInfo?.token) {
        if (store.userInfo.asscode.some(item => item == `${VITE_APP_NAME}.*`)) return '/dashboard/index'
        const fistMeun = routerList.find(x => {
          if (x.children) {
            return x.children.find(y => {
              return store.userInfo?.asscode.find(z => {
                return y.meta.code == z
              })
            })
          } else {
            return store.userInfo?.asscode.find(y => y == x.meta.code)
          }
        })
        if (fistMeun) {
          if (fistMeun.children) {
            return fistMeun.children[0].path
          } else {
            return fistMeun.path
          }
        } else {
          return '/401'
        }
      } else {
        return '/logIn'
      }
    },
    children: routerList
  },
  { path: '/401', component: No401, name: '401', meta: { name: '401' } },
  { path: '/logIn', component: LogoInVue, name: 'logIn', meta: { name: 'LogIn' } },
  { path: '/404', component: No404, name: '404', meta: { name: '404' } },
]
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const store = UserInfoStore()
  if (to.matched.length > 0) {
    const token = store.userInfo?.token
    const codeList = store.userInfo?.asscode as []
    if (token) {
      // 根据路由中meta信息判断是否有权限访问，白名单，超级管理员则放行,
      if (codeList.some(item => item == to.meta.code) || wList.some(item => item == to.path) || store.userInfo?.asscode.some(item => item == `${VITE_APP_NAME}.*`)) {
        next()
      } else {
        router.push(`/401`)
      }
    } else {
      if (wList.some(item => item == to.path)) {
        next()
      } else {
        router.push(`/logIn?path=${to.path}`)
      }
    }
  } else {
    router.push('/404')
  }
})
router.afterEach((to) => {
  document.title = VITE_APP_NAME + '-' + to.meta.name
})
export default router