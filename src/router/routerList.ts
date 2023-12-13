import Index3 from './index3'
import echarts from './echarts'
import table from './table'
const routers = [
  {
    path: '/index',
    name: 'index',
    code: 'index',
    meta: {
      id: '1'
    },
    children: table,
  },
  {
    path: '/echarts',
    name: 'echarts',
    code: 'index2',
    meta: {
      id: '2'
    },
    children: echarts
  },
  {
    path: '/index3',
    name: 'index3',
    code: 'index3',
    meta: {
      id: '3',
      name: 'Index3'
    },
    children: Index3
  },
]
export default routers 