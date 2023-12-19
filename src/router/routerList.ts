import dashboard from './dashboard'
import echarts from './echarts'
import table from './table'
import admin from './admin'
const { VITE_APP_NAME } = import.meta.env
const routers = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      code: `${VITE_APP_NAME}.dashboard.view`,
      id: '1',
      name: 'Dashboard'
    },
    children: dashboard
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      code: `${VITE_APP_NAME}.table.view`,
      id: '2',
      name: 'Table'
    },
    children: table,
  },
  {
    path: '/echarts',
    name: 'echarts',
    meta: {
      code: `${VITE_APP_NAME}.echarts.view`,
      id: '3',
      name: 'ECharts'
    },
    children: echarts
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      code: `${VITE_APP_NAME}.admin.view`,
      id: '4',
      name: "Admin"
    },
    children: admin
  },

]
export default routers 