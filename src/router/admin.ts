const Admin = () => import('@/components/Adimn.vue')
const { VITE_APP_NAME } = import.meta.env
const routerList = [{
  path: '/admin/index',
  component: Admin,
  name: 'admin.index',
  meta: {
    id: '4-1',
    name: 'Admin',
    code: `${VITE_APP_NAME}.admin.index.view`,
  }
}]
export default routerList