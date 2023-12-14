import { createI18n } from 'vue-i18n'
import storage from '@/utils/storage'
import cn from './zh-cn'
import us from './en-us'
import * as zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as enUs from 'element-plus/dist/locale/en.mjs'

const messages = {
  'zh-cn': Object.assign({}, cn, zhCn),
  'en-us': Object.assign({}, us, enUs),
}
const localLang = storage.local.getItem('lang')
// const localLang = 'zh-cn'
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入
  globalInjection: true,
  // 默认语言
  locale: localLang ? localLang : 'en-us',
  messages,
})

export { i18n }
