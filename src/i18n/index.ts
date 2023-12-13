import { createI18n } from 'vue-i18n'
import cn from "./zhCn"
import us from "./zhEn"
import * as zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as enUs from 'element-plus/dist/locale/en.mjs'

const messages = {
  'en-us': Object.assign({}, us, enUs),
  'zh-cn': Object.assign({}, cn, zhCn),
}
const localLang = 'en-us'
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入
  globalInjection: true,
  // 默认语言
  locale: localLang ? localLang : 'zh-cn',
  messages,
})

export { i18n }
