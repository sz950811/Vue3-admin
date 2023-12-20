import Mock from 'mockjs'
import type { UserList } from '@/types/admin'
const userList: UserList = [
  {
    id: 1,
    name: 'admin',
    accessCode: [
      "Vue3-admin.*"
    ],
    tip: "超级管理员",
    createDate: '2023-01-12',
    email: 'www.xxx@xx.com'
  },
  {
    id: 2,
    name: 'test',
    accessCode: [
      "Vue3-admin.dashboard.view",
      "Vue3-admin.dashboard.index.view",
      "Vue3-admin.table.view",
      "Vue3-admin.table.index.view",
      "Vue3-admin.echarts.view",
      "Vue3-admin.echarts.index.view",
    ],
    tip: "其他",
    createDate: '2023-01-12',
    email: 'www.xxx@xx.com'
  },
  {
    id: 3,
    name: 'test1',
    accessCode: [
    ],
    tip: "新人",
    createDate: '2023-01-12',
    email: 'www.xxx@xx.com'
  }
]
Mock.mock('/api/userList', 'get', (opt: any) => {
  return {
    status: 200,
    data: userList
  }
})