<template>
  <div class="grid-box" v-loading="loading">
    <div class="btn-box">
      <ElButton @click="addEcharts">添加图表</ElButton>
      <ElButton @click="echartsOpt">图表配置项</ElButton>
      <ElButton @click="downloadImg('.grid-layout-box', 'img')">生成本地报表</ElButton>
    </div>
    <div class="grid-layout-box">
      <grid-layout
        v-if="layout.length > 0"
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
  <el-dialog v-model="dialogVisible" title="添加图表" width="50%" class="add-echarts-box" :before-close="handleClose">
    <el-form :model="addObj" label-width="120px">
      <el-form-item label="X轴坐标">
        <el-input v-model.number="addObj.x" />
      </el-form-item>
      <el-form-item label="Y轴坐标">
        <el-input v-model.number="addObj.y" />
      </el-form-item>
      <el-form-item label="宽度">
        <el-input v-model.number="addObj.w" />
      </el-form-item>
      <el-form-item label="高度">
        <el-input v-model.number="addObj.h" />
      </el-form-item>
      <el-form-item label="图表配置项">
        <json-editor-vue ref="jsonEditor" class="editor" v-model="addObj.echartsopt" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitEcharts"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { getGridList, addGridEcharts } from '@/api/echarts'
import type { EchartsListItem } from '@/types/echartsList'
import * as echarts from 'echarts'
import { ref, onMounted, nextTick, reactive } from 'vue'
import { debounce } from '@/utils/deTh'
import { downloadImg } from '@/utils/html2canvas'
import JsonEditorVue from 'json-editor-vue3'
const layout = ref<EchartsListItem[]>([])
const dialogVisible = ref(false)
const loading = ref(false)
const addObj = ref<EchartsListItem>({
  x: 3,
  y: 3,
  w: 6,
  h: 6,
  i: +new Date(),
  echartsopt: null,
})
onMounted(() => {
  getgridList()
})
const getgridList = async () => {
  loading.value = true
  const { status, data } = await getGridList()
  if (status == 200) {
    layout.value = data
    // await nextTick()
    setTimeout(() => {
      initEcharts()
    }, 200)
    setTimeout(() => {
      loading.value = false
    }, 500)
  }
}
const resizedEvent = () => {}
// 渲染ECharts 图表
const initEcharts = () => {
  for (let index = 0; index < layout.value.length; index++) {
    let dom
    dom = echarts.getInstanceByDom(window.document.querySelector(`.echarts-box${layout.value[index].i}`) as HTMLElement)
    if (!dom) {
      echarts
        .init(window.document.querySelector(`.echarts-box${layout.value[index].i}`) as HTMLElement)
        .setOption(layout.value[index].echartsopt as any)
    }
    // let chartDom = window.document.querySelector(`.echarts-box${layout.value[index].i}`) as HTMLElement
    // layout.value[index].echartsopt && echarts.init(chartDom).setOption(layout.value[index].echartsopt as any)
  }
}
// resize图表
const resizeEvent = (i: any) => {
  debounce(() => {
    let dom: any
    dom = echarts.getInstanceByDom(window.document.querySelector(`.echarts-box${i}`) as HTMLElement)
    if (!dom) {
      dom = window.document.querySelector(`.echarts-box${i}`)
      echarts.init(dom)
    }
    dom.resize()
  })
}
// 添加图表
const addEcharts = () => {
  dialogVisible.value = true
}
// 新图表配置项
const echartsOpt = () => {
  window.open('https://tushuo.baidu.com/')
}
// 关闭弹窗
const handleClose = () => {
  dialogVisible.value = false
  setTimeout(() => {
    addObj.value = {
      x: 3,
      y: 3,
      w: 6,
      h: 6,
      i: +new Date(),
      echartsopt: null,
    }
  }, 200)
}
// 提交图表配置项
const submitEcharts = async () => {
  let btn = window.document.querySelector('.jsoneditor-repair') as HTMLElement
  btn.click()
  // addObj.value.i = +new Date()
  const { status, data } = await addGridEcharts(addObj.value)
  if (status == 200) {
    await nextTick()
    getgridList()
    handleClose()
  }
}
</script>

<style lang="scss">
.grid-box {
  box-sizing: border-box;
  padding-bottom: 16px;
  height: 100%;
  .btn-box {
    padding: 16px 16px;
    display: flex;
    justify-content: flex-end;
  }
  .grid-layout-box {
    height: auto;
    width: auto;
    background-color: rgba(179, 174, 172, 0.2);
    .vue-grid-item {
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 4px;
      .echarts-box {
        height: 100%;
        // border: 1px solid #000;
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
}
.add-echarts-box {
  .container.editor {
    width: 100%;
  }
  .jsoneditor-menu {
    display: none;
  }
}
</style>
