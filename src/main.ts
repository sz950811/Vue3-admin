import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import 'element-plus/dist/index.css'
import './assets/icon/iconfont.css'
import './assets/index.scss'
// import '@/assets/css/main.scss'
import pinia from './store'
import App from './App.vue'
import { i18n } from './i18n'
import 'dayjs/locale/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component as any)
}
app.use(ElementPlus).use(i18n).use(pinia).use(router)
app.mount('#app')
