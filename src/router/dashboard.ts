const Dashboard = () => import('../views/dashboard/index.vue')
const { VITE_APP_NAME } = import.meta.env
const routerList = [
  {
    path: '/dashboard/index',
    component: Dashboard,
    name: 'dashboard.index',
    meta: {
      id: '1',
      name: 'Dashboard',
      code: `${VITE_APP_NAME}.dashboard.index.view`,
    }
  }
]
export default routerList