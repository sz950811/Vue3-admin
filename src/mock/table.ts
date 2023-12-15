import Mock from 'mockjs'
const tableData = [{
  id: 1,
  name: 'zs'
}]
Mock.mock('/api/table', 'get', {
  status: 0,
  data: tableData
})