import axios from "../utils/request"
import type { Res } from '../types/userInfo'
import type { EchartsListItem } from '../types/echartsList'
export const getGridList = (): Res<EchartsListItem[]> => axios.get('/gridList')