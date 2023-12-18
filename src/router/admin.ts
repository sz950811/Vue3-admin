const Admin = () => import('@/components/Adimn.vue')
const routerList = [{
  path: '/admin/index',
  component: Admin,
  name: 'admin.index',
  meta: {
    id: '4-1',
    name: 'Admin',
    code: 'admin.index',
  }
}]
export default routerList