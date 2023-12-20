<template>
  {{ tableData }}
</template>

<script setup lang="ts">
import { getTable } from '@/api/index'
import { onMounted, ref } from 'vue'
const tableData = ref()
onMounted(() => {
  getTableData()
})
const getTableData = async () => {
  const { data, status } = await getTable({ name: 'zs' })
  if (status == 200) {
    tableData.value = data
  }
}
</script>

<style lang="scss"></style>
