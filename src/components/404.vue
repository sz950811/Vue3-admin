<template>
  <div class="box-401">
    <div class="main-box">
      <div class="text">404</div>
      <ElButton @click="back">返回首页</ElButton>
    </div>
  </div>
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
