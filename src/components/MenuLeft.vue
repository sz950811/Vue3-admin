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
console.log({ route })
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
    name: 'Index',
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
    name: 'Index2',
    path: '/index2',
    code: 'index2',
    child: [
      {
        id: '2-1',
        name: 'Table2',
        code: 'index2.table2',
        path: '/index2/table2',
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
  console.log(item)
}
// 激活菜单
const activeMenu = computed(() => {
  return route.meta.id
})
</script>

<style lang="scss">
.menu-box {
  height: 100%;
  .el-menu {
    border-right: none;
    &.el-menu-vertical-demo {
      height: calc(100% - 30px);
    }
  }
  .close-box {
    cursor: pointer;
    text-align: right;
    width: auto;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
