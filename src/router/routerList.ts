import dashboard from './dashboard'
import echarts from './echarts'
import table from './table'
import admin from './admin'
const routers = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      code: 'dashboard',
      id: '1',
      name: 'Dashboard'
    },
    children: dashboard
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      code: 'index',
      id: '2',
      name: 'Table'
    },
    children: table,
  },
  {
    path: '/echarts',
    name: 'echarts',
    meta: {
      code: 'index2',
      id: '3',
      name: 'ECharts'
    },
    children: echarts
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      code: 'admin',
      id: '4',
      name: "Admin"
    },
    children: admin
  },

]
export default routers 