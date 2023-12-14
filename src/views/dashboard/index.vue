<template>
  <div class="dashboard-box">
    <el-calendar v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(new Date())
</script>

<style lang="scss">
.dashboard-box {
}
</style>
