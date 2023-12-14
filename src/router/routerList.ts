import dashboard from './dashboard'
import echarts from './echarts'
import table from './table'
const routers = [
  {
    path: '/dashboard',
    name: 'dashboard',
    code: 'dashboard',
    meta: {
      id: '1',
      name: 'Dashboard'
    },
    children: dashboard
  },
  {
    path: '/index',
    name: 'index',
    code: 'index',
    meta: {
      id: '2'
    },
    children: table,
  },
  {
    path: '/echarts',
    name: 'echarts',
    code: 'index2',
    meta: {
      id: '3'
    },
    children: echarts
  },

]
export default routers 