import axios from '../utils/request'
import type { Res, UserInfo } from '@/types/userInfo'
export const goAxiox = () => axios.get('/getgrild')
export const logoIn = (data: any): Res<UserInfo> => axios.post('/login', data)
export const getTable = (data: any): Res<any> => axios.post('/table', data)