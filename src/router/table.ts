const Table = () => import('../views/table/Table.vue')
// const Index = () => import('../views/index.vue')
const routerList = [
  {
    path: '/index/table',
    component: Table,
    name: 'index.table',
    meta: {
      id: '2-1',
      name: 'Table',
      code: 'index.table',
    }
  }
]
export default routerList