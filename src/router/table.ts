const Table = () => import('../views/table/Table.vue')
// const Index = () => import('../views/index.vue')
const routerList = [
  {
    path: '/index/table',
    component: Table,
    name: 'index.table',
    code: 'index.table',
    meta: {
      id: '1-1',
      name: 'Table'
    }
  }
]
export default routerList