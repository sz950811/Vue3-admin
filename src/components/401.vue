<template>
  <div class="box-401">
    <div class="main-box">
      <div class="text">401</div>
      <ElButton @click="store.logOut">跳转登陆</ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserInfoStore } from '../store'
const store = UserInfoStore()
// const onJumpLog = () => {}
</script>

<style lang="scss">
.box-401 {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  // align-items: center;
  .main-box {
    margin-top: 100px;
    text-align: center;
    .text {
      font-size: 100px;
    }
  }
}
</style>
