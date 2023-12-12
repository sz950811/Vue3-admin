<template>
  <div class="head-box">
    <div class="logo-box">Logo</div>
    <div class="user-info-box">name:{{ store.userInfo?.name }} <ElButton @click="store.logOut">退出</ElButton></div>
  </div>
</template>

<script setup lang="ts">
import { UserInfoStore } from '../store'
import { ref } from 'vue'
const store = UserInfoStore()
// const mStore = menuLeftStore()
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
