// 防抖
let timer: any
export function debounce(fn: any, time = 500) {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    fn()
  }, time);
}