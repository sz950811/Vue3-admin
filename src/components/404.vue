<template>
  404
  <ElButton @click="back">返回首页</ElButton>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
// import { ref } from 'vue'
const back = () => {
  router.push('/')
}
</script>

<style lang="scss"></style>
