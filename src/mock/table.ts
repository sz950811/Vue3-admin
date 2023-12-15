import Mock from 'mockjs'
const tableData = [{
  id: 1,
  name: 'zs'
}]
Mock.mock('/api/table', 'post', (op: any) => {
  console.log({ op })
  console.log(JSON.parse(op.body))
  return {
    status: 0,
    data: tableData
  }
})