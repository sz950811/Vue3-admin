const ECharts = () => import('../views/echarts/index.vue')
// const Index = () => import('../views/index.vue')
const routerList = [
  {
    path: '/echarts/echarts',
    component: ECharts,
    name: 'echarts.echarts',
    meta: {
      id: '3-1',
      name: 'Echarts',
      code: 'index2.table2',
    }
  }
]
export default routerList