<template>
  <div class="dashboard-box">
    <ul>
      <li v-for="item in list">{{ item.text }} <ElButton @click="router.push(item.path)">跳转</ElButton></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const list = ref([
  {
    text: 'echarts模块基本完成',
    path: '/echarts/echarts',
  },
])
</script>

<style lang="scss">
.dashboard-box {
  padding: 16px;
  height: 1000px;
}
</style>
