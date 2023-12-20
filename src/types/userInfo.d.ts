export type Res<T> = {
  status: number
  data: T
}
export type UserInfo = {
  name: string
  token: string
  accessCode: string[]
}
