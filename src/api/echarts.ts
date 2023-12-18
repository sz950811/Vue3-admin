import axios from "../utils/request"
import type { Res } from '../types/userInfo'
import type { EchartsListItem } from '../types/echartsList'
export const getGridList = (): Res<EchartsListItem[]> => axios.get('/gridList')
export const addGridEcharts = (data: any): Res<{ data: "成功" }> => axios.post('/addGrid', data)