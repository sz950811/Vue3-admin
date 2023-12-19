const ECharts = () => import('../views/echarts/index.vue')
const { VITE_APP_NAME } = import.meta.env
// const Index = () => import('../views/index.vue')
const routerList = [
  {
    path: '/echarts/echarts',
    component: ECharts,
    name: 'echarts.echarts',
    meta: {
      id: '3-1',
      name: 'Echarts',
      code: `${VITE_APP_NAME}.echarts.index.view`,
    }
  }
]
export default routerList