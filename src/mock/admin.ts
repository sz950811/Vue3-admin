import Mock from 'mockjs'

const userList = ['test']
Mock.mock('/api/userList', 'get', (opt: any) => {
  return userList
})