import Mock from 'mockjs'
import type { EchartsListItem } from '../types/echartsList'
const echartsList: EchartsListItem[] = [
  {
    x: 0,
    y: 0,
    w: 5,
    h: 6,
    i: +new Date(),
    echartsopt: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
  },
  {
    x: 5,
    y: 0,
    w: 4,
    h: 7,
    i: +new Date() + 1,
    echartsopt: {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  },
]
Mock.mock('/api/gridList', 'get', (opt: any) => {
  return {
    status: 200,
    data: echartsList
  }
})
Mock.mock('/api/addGrid', 'post', (opt: any) => {
  const gridOpt = JSON.parse(opt.body)
  echartsList.push(gridOpt)
  return {
    status: 200,
    data: {
      data: '成功'
    }
  }
})