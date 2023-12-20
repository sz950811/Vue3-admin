import Mock from 'mockjs'
const userinfo = [
  {
    id: 1,
    name: 'admin',
    pwd: '123456',
    accessCode: [
      "Vue3-admin.*"
    ],
    token: 'Hwy7nSPHKVKtHAeMwIjcLnyrwr6VwFzl'
  },
  {
    id: 2,
    name: 'test',
    pwd: '123456',
    accessCode: [
      "Vue3-admin.dashboard.view",
      "Vue3-admin.dashboard.index.view",
      "Vue3-admin.table.view",
      "Vue3-admin.table.index.view",
      "Vue3-admin.echarts.view",
      "Vue3-admin.echarts.index.view",
    ],
    token: 'Hwy7nSPHKVKtHAeMwIjcLnyrwr6VwFzl'
  },
  {
    id: 3,
    name: 'test1',
    pwd: '123456',
    accessCode: [
      "Vue3-admin.admin.view",
      "Vue3-admin.admin.index.view",
    ],
    token: 'Hwy7nSPHKVKtHAeMwIjcLnyrwr6VwFzl'
  },
]
Mock.mock('/api/login', 'post', (opt: any) => {
  let userObj = JSON.parse(opt.body)
  let user = userinfo.find(item => item.name === userObj.name)
  if (user) {
    let pwdFalg = user.pwd === userObj.pwd
    if (pwdFalg) {
      let res = userinfo.find(item => item.name === userObj.name)
      return {
        status: 200,
        data: res
      }
    } else {
      return {
        status: 201,
        message: '用户名或密码错误'
      }
    }
  } else {
    return {
      status: 201,
      message: "用户不存在"
    }
  }
})