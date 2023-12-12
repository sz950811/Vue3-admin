import { defineStore } from 'pinia'
import { ref, nextTick } from 'vue'
export const menuLeftStore = defineStore('menuLeftStore', () => {
  const isCollapse = ref(false)
  const openMenu = () => {
    isCollapse.value = !isCollapse.value
  }
  return { isCollapse, openMenu, }
})