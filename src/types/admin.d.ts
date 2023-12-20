export type UserList = UserListItem[]
export type UserListItem = {
  id: number
  name: string,
  accessCode?: string[],
  tip: string,
  createDate: string
  email: string
}
export type Form = {
  userId: number
  appname: string
  lv1menu: string
  lv2menu: string | null
  code: string
}