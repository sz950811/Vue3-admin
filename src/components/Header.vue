<template>
  <el-card class="head-card">
    <div class="head-box">
      <div class="logo-box">Logo</div>
      <div class="user-info-box">
        <div class="user-info">
          <el-dropdown trigger="click">
            <i class="iconfont icon-user"></i>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>{{ store.userInfo?.name }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <ElButton style="text-align: center" @click="store.logOut" text circle>
          <i class="iconfont icon-exit"></i>
        </ElButton>
        <ElButton text circle @click="changeLang(!langFlag)">{{ localeLang == 'zh-cn' ? 'En' : '中' }}</ElButton>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { UserInfoStore } from '../store'
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import storage from '@/utils/storage'
import { LOCAL_key } from '@/enum/storage-key'
const store = UserInfoStore()
const { locale } = useI18n()
const localeLang = reactive(locale)
const langFlag = ref(true)
// 切换语言
const changeLang = (flag: boolean) => {
  // localeLang.value = langTxt.value === 'EN' ? 'en-us' : 'zh-cn'
  langFlag.value = flag
  flag ? (localeLang.value = 'zh-cn') : (localeLang.value = 'en-us')
  storage.local.setItem(LOCAL_key.LANG, localeLang.value)
}
</script>

<style lang="scss">
.head-card {
  .el-card__body {
    padding: 0;
  }
  // .el-button {
  //   cursor: pointer !important;
  // }
}
.head-box {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: skyblue;
  align-items: center;
  height: 60px;
  padding: 16px;
  .user-info-box {
    cursor: pointer;
    display: flex;
    align-items: center;
    .user-info {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .user-info:hover {
      background-color: #fff;
    }
    .el-button {
      margin-left: 0;
    }
  }
}
</style>
