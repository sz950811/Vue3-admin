const Table = () => import('../views/table/Table.vue')
const { VITE_APP_NAME } = import.meta.env
const routerList = [
  {
    path: '/index/table',
    component: Table,
    name: 'table.index',
    meta: {
      id: '2-1',
      name: 'Table',
      code: `${VITE_APP_NAME}.table.index.view`,
    }
  }
]
export default routerList