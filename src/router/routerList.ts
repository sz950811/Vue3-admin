const TableVue = () => import('../views/table/Table.vue')
// const Index3 = () => import('../views/index3/index.vue')
import Index3 from './index3'
import index2 from './index2'
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
    path: '/index2',
    name: 'index2',
    code: 'index2',
    meta: {
      id: '2'
    },
    children: index2
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
console.log({ routers })
export default routers 