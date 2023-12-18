<template>
  <el-config-provider :locale="elLang">
    <el-container class="box">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <!-- <el-card class="box-card"> -->
          <MenuLeft></MenuLeft>
          <!-- </el-card> -->
        </el-aside>
        <el-main>
          <el-scrollbar style="height: 100%" wrap-class="scrollbar-class">
            <el-card class="box-card">
              <RouterView></RouterView>
            </el-card>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import MenuLeft from '@/components/MenuLeft.vue'
import { menuLeftStore } from '../store/index'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import enUs from 'element-plus/dist/locale/en.mjs'
import { ref, watch } from 'vue'
const { locale } = useI18n()
const elLang = ref(locale.value === 'zh-cn' ? zhCn : enUs)
watch(locale, (v) => {
  elLang.value = v === 'zh-cn' ? zhCn : enUs
})
const mstore = menuLeftStore()
</script>

<style lang="scss">
.box {
  height: 100%;
}
.el-header {
  height: auto;
  padding: 0;
}
.el-aside {
  width: auto !important;
  .el-card {
    height: 100%;
  }
}
.el-main {
  box-sizing: border-box;
  background-color: rgba(179, 174, 172, 0.2);
  height: calc(100vh - 60px);
  padding: 16px;
  .el-scrollbar__view {
    // height: 1;
  }
  .el-card {
    min-height: 100%;
    .el-card__body {
      padding: 0;
    }
  }
  .el-scrollbar__thumb {
    background-color: #000 !important;
  }
}
</style>
