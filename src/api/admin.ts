import request from "@/utils/request"
import type { Res } from '@/types/userInfo'
import type { UserList } from '@/types/admin'
export const getUserList = (): Res<UserList> => request.get('/userList')