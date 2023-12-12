<template>
  {{ '表格' }}
</template>

<script setup lang="ts">
import { getTable } from '../../api/index'
import { onMounted, ref } from 'vue'
const tableData = ref()
onMounted(() => {
  getTableData()
})
const getTableData = async () => {
  const { data, status } = await getTable()
}
</script>

<style lang="scss"></style>
