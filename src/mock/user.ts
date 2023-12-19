import Mock from 'mockjs'
// const { VITE_APP_NAME } = import.meta.env
const userinfo = {
  name: 'admin',
  asscode: [
    "VUE DEMO.dashboard",
    "VUE DEMO.dashboard.index",
    "VUE DEMO.index",
    "VUE DEMO.index.table",
    "VUE DEMO.index2",
    "VUE DEMO.index2.table2",
    "VUE DEMO.logo",
    "VUE DEMO.index3",
    "VUE DEMO.admin",
    'VUE DEMO.admin.index'
  ],
  token: 'Hwy7nSPHKVKtHAeMwIjcLnyrwr6VwFzl'
}
Mock.mock('/api/login', 'post', (opt: any) => {
  let userObj = JSON.parse(opt.body)
  if (userObj.name == 'admin') {
    return {
      status: 200,
      data: userinfo
    }
  } else if (userObj.name == 'test') {
    return {
      status: 200,
      data: {
        name: 'test',
        asscode: [
          "VUE DEMO.dashboard",
          "VUE DEMO.dashboard.index",
          "VUE DEMO.index",
          "VUE DEMO.index.table",
          "VUE DEMO.index2",
          "VUE DEMO.index2.table2",
          "VUE DEMO.logo",
          "VUE DEMO.index3",
        ],
        token: 'Hwy7nSPHKVKtHAeMwIjcLnyrwr6VwFzl'
      }
    }
  } else {
    return {
      status: 201,
      data: {}
    }
  }

})