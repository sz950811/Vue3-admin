import { createRouter, createWebHashHistory } from 'vue-router'
import routerList from './routerList'
const LogoInVue = () => import('../components/LogoIn.vue')
const IndexVue = () => import('../views/index.vue')
const No404 = () => import('../components/404.vue')
import No401 from '../components/401.vue'
const wList = ['/logIn', '/404']
import { UserInfoStore } from '../store'
const routes: any = [
  { path: '/401', component: No401, name: '401' },
  {
    path: '/', component: IndexVue, name: 'Index', redirect: (to: any, next: any) => {
      const store = UserInfoStore()
      if (store.userInfo?.token) {
        const fistMeun = routerList.find(x => {
          if (x.children) {
            return x.children.find(y => {
              return store.userInfo?.asscode.find(z => {
                return y.code == z
              })
            })
          } else {
            return store.userInfo?.asscode.find(y => y == x.code)
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
  { path: '/logIn', component: LogoInVue, name: 'logIn', meta: { name: 'LogIn' } },
  { path: '/404', component: No404, name: '404', meta: { name: '404' } },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const store = UserInfoStore()
  if (to.matched.length > 0) {
    const token = store.userInfo?.token
    if (token) {
      next()
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
  console.log({ to })
  document.title = 'Vue3-demo -' + to.meta.name
})
export default router