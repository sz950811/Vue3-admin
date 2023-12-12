<template>
  401
  <ElButton @click="store.logOut">跳转登陆</ElButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserInfoStore } from '../store'
const store = UserInfoStore()
// const onJumpLog = () => {}
</script>

<style lang="scss"></style>
