/**
 * storage本地缓存的key值管理
 */

/**
 * local级本地缓存
 */
export const enum LOCAL_key {
  // 国际化语言 zh-cn｜ en-us
  LANG = 'lang',
}

/**
 * session级缓存
 */
export const enum SESSION_KEY {
  USER_TOKEN = 'Access-Token',
  // 账号ID ｜ Account ID
  LION_ID = 'lionid',
}
