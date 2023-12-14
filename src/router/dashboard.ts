const Dashboard = () => import('../views/dashboard/index.vue')
const routerList = [
  {
    path: '/dashboard/index',
    component: Dashboard,
    name: 'dashboard.index',
    code: 'dashboard.index',
    meta: {
      id: '1',
      name: 'Dashboard'
    }
  }
]
export default routerList