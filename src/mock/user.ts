import Mock from 'mockjs'

const userinfo = {
  name: 'admin',
  asscode: ["dashboard",
    "dashboard.index",
    "index",
    "index.table",
    "index2",
    "index2.table2",
    "logo",
    "index3",
    "admin",
    'admin.index'
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
        asscode: ["dashboard",
          "dashboard.index",
          "index",
          "index.table",
          "index2",
          "index2.table2",
          "logo",
          "index3",
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