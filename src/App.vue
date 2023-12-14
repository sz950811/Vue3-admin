<template>
  <!-- <el-config-provider :locale="locale"> -->
  <div>
    <RouterView></RouterView>
  </div>
  <!-- </el-config-provider> -->
</template>

<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import enUs from 'element-plus/dist/locale/en.mjs'
import { ref } from 'vue'
import { watch } from 'vue'
// const { locale } = useI18n()
// const lang = ref(false)
// const elLang = ref(locale.value === 'en-us' ? enUs : zhCn)
// watch(
//   () => lang.value,
//   (v) => {
//     qiehuan()
//   },
// )
// const qiehuan = () => {
//   if (lang.value) {
//     locale.value = zhCn
//   } else {
//     locale.value = enUs
//   }
// }
</script>

<style lang="scss">
body {
  margin: 0;
  #app {
    height: 100vh;
    .el-container {
      height: 100vh;
    }
  }
}
</style>
