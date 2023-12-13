<template>
  <div class="menu-box">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="store.isCollapse"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in codeList">
        <el-sub-menu :index="item.id" v-if="item.child" :key="item.id">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group v-for="x in item.child" @click="onJump(x)">
            <el-menu-item :index="x.id">{{ x.name }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else :index="item.id" @click="onJump(item)">
          <el-icon><location /></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="close-box" @click="store.openMenu">{{ store.isCollapse ? '打开' : '关闭' }}</div>
  </div>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { menuLeftStore, UserInfoStore } from '@/store'
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const store = menuLeftStore()
const userInfoStore = UserInfoStore()
const router = useRouter()
const route = useRoute()
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
type MenuListItem = {
  id: string
  name: string
  path: string
  code: string
  child?: MenuListItem[]
}
const menuList = ref([
  {
    id: '1',
    name: 'Table',
    path: '/index',
    code: 'index',
    child: [
      {
        id: '1-1',
        name: 'Table',
        path: '/index/table',
        code: 'index.table',
      },
    ],
  },
  {
    id: '2',
    name: 'ECharts',
    path: '/echarts',
    code: 'index2',
    child: [
      {
        id: '2-1',
        name: 'ECharts',
        code: 'index2.table2',
        path: '/echarts/echarts',
      },
    ],
  },
  {
    id: '3',
    name: 'Index3',
    path: '/index3',
    code: 'index3',
  },
])
// 菜单权限
const codeList = computed(() => {
  const filterMenus = (menus: any, accessList: string[]) => {
    let newMenus = menus.filter((item: any) => {
      return accessList.find((n) => n == item.code)
    })
    newMenus.forEach((x: any) => x.child && ((x.child = filterMenus(x.child, accessList)) as void))
    return newMenus
  }
  if (userInfoStore.userInfo?.asscode && userInfoStore.userInfo.asscode.length) {
    return filterMenus(menuList.value as MenuListItem[], userInfoStore.userInfo.asscode)
  }
  return []
})
// 跳转
const onJump = (item: any) => {
  router.push(item.path)
}
// 激活菜单
const activeMenu = computed(() => {
  return route.meta.id
})
</script>

<style lang="scss">
.menu-box {
  height: 100%;
  border-radius: 0 4px 4px 0;
  overflow: hidden;
  // background-color: skyblue;
  border-right: 1px solid #dcdfe6;
  .el-menu {
    border-right: none;
    // box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

    overflow: hidden;
    &.el-menu-vertical-demo {
      height: calc(100% - 30px);
      // border-radius: 0 4px 4px 0;
      border-bottom: 1px solid #dcdfe6;
    }
  }
  .close-box {
    cursor: pointer;
    text-align: right;
    width: auto;
    // border-top: 1px solid #cccc;
    font-size: 12px;
    line-height: 30px;
    padding-right: 8px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
