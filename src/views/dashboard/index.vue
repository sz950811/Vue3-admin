<template>
  Echarts模块基本完成
  <div class="dashboard-box">
    <el-calendar v-model="value" />
    <!-- <div class="dashboard-box"> -->
    <el-calendar v-model="value" />
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(new Date())
</script>

<style lang="scss">
.dashboard-box {
  // height: 1000px;
}
</style>
