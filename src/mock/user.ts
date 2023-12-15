import Mock from 'mockjs'

const userinfo = {
  name: 'zs',
  asscode: ["dashboard",
    "dashboard.index",
    "index",
    "index.table",
    "index2",
    "index2.table2",
    "logo",
    "index3"],
  token: 'Hwy7nSPHKVKtHAeMwIjcLnyrwr6VwFzl'

}
Mock.mock('/api/login', 'post', {
  status: 0,
  data: userinfo
})