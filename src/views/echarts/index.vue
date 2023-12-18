<template>
  <div class="grid-box">
    <div class="btn-box">
      <ElButton @click="addEcharts">添加图表</ElButton>
      <ElButton @click="echartsOpt">图表配置项</ElButton>
      <ElButton @click="createEcharts">生成报表</ElButton>
    </div>
    <div class="grid-layout-box">
      <grid-layout
        ref="gridLayout"
        v-model:layout="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[16, 16]"
        :use-css-transforms="true"
      >
        <grid-item
          ref="gridItem"
          @resized="resizedEvent"
          v-for="item in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
          @resize="resizeEvent"
        >
          <div v-if="item.echartsopt" class="item-box echarts-box" :class="['echarts-box' + item.i]"></div>
          <div v-else class="item-box echarts-box no-data">没有数据</div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getGridList } from '@/api/echarts'
import type { EchartsListItem } from '@/types/echartsList'
import * as echarts from 'echarts'
import { ref, onMounted, nextTick } from 'vue'
import { debounce } from '@/utils/deTh'
const layout = ref<EchartsListItem[]>([])
onMounted(() => {
  getgridList()
})
const getgridList = async () => {
  const { status, data } = await getGridList()
  if (status == 200) {
    layout.value = data.filter((item) => item.echartsopt !== null)
    await nextTick()
    // setTimeout(() => {
    initEcharts()
    // }, 200)
  }
}
const resizedEvent = () => {}
const initEcharts = () => {
  for (let index = 0; index < layout.value.length; index++) {
    let chartDom = window.document.querySelector(`.echarts-box${layout.value[index].i}`) as HTMLElement
    layout.value[index].echartsopt && echarts.init(chartDom).setOption(layout.value[index].echartsopt as any)
  }
}
const resizeEvent = (i: any, newH: any, newW: any, newHPx: any, newWPx: any) => {
  debounce(() => {
    let dom: any
    dom = echarts.getInstanceByDom(window.document.querySelector(`.echarts-box${i}`) as HTMLElement)
    if (!dom) {
      dom = window.document.querySelector(`.echarts-box${i}`)
      echarts.init(dom)
    }
    dom.resize()
  })

  // console.log(index)
}
// 添加图表
const addEcharts = () => {}
// 新图表配置项
const echartsOpt = () => {}
// 生成报表图片
const createEcharts = () => {}
</script>

<style lang="scss">
.grid-box {
  box-sizing: border-box;
  background-color: #ccc;
  .btn-box {
    padding: 16px 16px;
    display: flex;
    justify-content: flex-end;
  }
  .vue-grid-item {
    box-sizing: border-box;
    .echarts-box {
      height: 100%;
      border: 1px solid #000;
    }
    .no-data {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .vue-grid-item.vue-grid-placeholder {
    background: skyblue !important;
  }
}
</style>
