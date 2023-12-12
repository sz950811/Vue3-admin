const Index2 = () => import('../views/index2/index.vue')
// const Index = () => import('../views/index.vue')
const routerList = [
  {
    path: '/index2/table2',
    component: Index2,
    name: 'index2.table2',
    code: 'index2.table2',
    meta: {
      id: '2-1',
      name: 'Table2'
    }
  }
]
export default routerList