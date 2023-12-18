const Dashboard = () => import('../views/dashboard/index.vue')
const routerList = [
  {
    path: '/dashboard/index',
    component: Dashboard,
    name: 'dashboard.index',
    meta: {
      id: '1',
      name: 'Dashboard',
      code: 'dashboard.index',
    }
  }
]
export default routerList