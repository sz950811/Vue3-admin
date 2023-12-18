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
            <i class="iconfont" :class="[item.icon]"></i>
            <span class="title">{{ item.name }}</span>
          </template>
          <el-menu-item-group v-for="x in item.child" @click="onJump(x)">
            <el-menu-item :index="x.id">{{ x.name }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else :index="item.id" @click="onJump(item)">
          <i class="iconfont" :class="[item.icon]"></i>
          <span class="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="close-box" @click="store.openMenu">{{ store.isCollapse ? $t('cp:打开') : $t('cp:关闭') }}</div>
  </div>
</template>

<script setup lang="ts">
import { menuLeftStore, UserInfoStore } from '@/store'
import { ref, computed, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const store = menuLeftStore()
const userInfoStore = UserInfoStore()
const router = useRouter()
const route = useRoute()
const handleOpen = (key: string, keyPath: string[]) => {}
const handleClose = (key: string, keyPath: string[]) => {}
type MenuListItem = {
  id: string
  name: string
  path: string
  code: string
  child?: MenuListItem[]
}
// const menuList = ref([
//   {
//     id: '1',
//     name: t('cp:表格'),
//     path: '/index',
//     code: 'index',
//     child: [
//       {
//         id: '1-1',
//         name: 'Table',
//         path: '/index/table',
//         code: 'index.table',
//       },
//     ],
//   },
//   {
//     id: '2',
//     name: 'ECharts',
//     path: '/echarts',
//     code: 'index2',
//     child: [
//       {
//         id: '2-1',
//         name: 'ECharts',
//         code: 'index2.table2',
//         path: '/echarts/echarts',
//       },
//     ],
//   },
//   {
//     id: '3',
//     name: 'Index3',
//     path: '/index3',
//     code: 'index3',
//   },
// ])
// 菜单权限
const codeList = computed(() => {
  let menuList = [
    {
      id: '1',
      name: t('cp:仪表盘'),
      path: '/dashboard/index',
      code: 'dashboard',
      icon: 'icon-piechart',
    },
    {
      id: '2',
      name: t('cp:表格'),
      path: '/index',
      code: 'index',
      icon: 'icon-database',
      child: [
        {
          id: '2-1',
          name: 'Table',
          path: '/index/table',
          code: 'index.table',
        },
      ],
    },
    {
      id: '3',
      name: t('cp:图表'),
      path: '/echarts',
      code: 'index2',
      icon: 'icon-piechart',
      child: [
        {
          id: '3-1',
          name: 'ECharts',
          code: 'index2.table2',
          path: '/echarts/echarts',
        },
      ],
    },
    {
      id: '4',
      name: t('cp:管理员'),
      path: '/admin',
      code: 'admin',
      icon: 'icon-piechart',
      child: [
        {
          id: '4-1',
          name: 'Admin',
          code: 'admin.index',
          path: '/admin/index',
        },
      ],
    },
  ]
  const filterMenus = (menus: any, accessList: string[]) => {
    let newMenus = menus.filter((item: any) => {
      return accessList.find((n) => n == item.code)
    })
    newMenus.forEach((x: any) => x.child && ((x.child = filterMenus(x.child, accessList)) as void))
    return newMenus
  }
  if (userInfoStore.userInfo?.asscode && userInfoStore.userInfo.asscode.length) {
    return filterMenus(menuList as MenuListItem[], userInfoStore.userInfo.asscode)
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
  border-right: 1px solid #dcdfe6;
  .el-menu {
    border-right: none;
    overflow: hidden;
    &.el-menu-vertical-demo {
      height: calc(100% - 30px);
      border-bottom: 1px solid #dcdfe6;
      // .iconfont {
      //   margin-right: 8px;
      // }
      .title {
        margin-left: 8px;
      }
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
