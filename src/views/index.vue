<template>
  <el-container class="box">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside>
        <!-- <el-card class="box-card"> -->
        <MenuLeft></MenuLeft>
        <!-- </el-card> -->
      </el-aside>
      <el-main>
        <el-card class="box-card">
          <RouterView></RouterView>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import MenuLeft from '@/components/MenuLeft.vue'
import { menuLeftStore } from '../store/index'
const mstore = menuLeftStore()
</script>

<style lang="scss">
.box {
  height: 100%;
}
.el-header {
  height: auto;
  padding: 0;
}
.el-aside {
  width: auto !important;
  .el-card {
    height: 100%;
  }
}
.el-main {
  box-sizing: border-box;
  .el-card {
    height: 100%;
  }
}
</style>
