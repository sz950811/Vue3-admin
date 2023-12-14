<template>
  <div class="head-box">
    <div class="logo-box">Logo</div>
    <div class="user-info-box">
      name:{{ store.userInfo?.name }} <ElButton @click="store.logOut">{{ $t('cp:登出') }}</ElButton>
      <ElButton @click="changeLang(!langFlag)">切换</ElButton>
    </div>
  </div>
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
.head-box {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: skyblue;
  align-items: center;
  height: 60px;
  padding: 16px;
}
</style>
