import Mock from 'mockjs'
const tableData = [{
  id: 1,
  name: 'zs'
}]
Mock.mock('/api/table', 'post', (op: any) => {
  return {
    status: 200,
    data: tableData
  }
})