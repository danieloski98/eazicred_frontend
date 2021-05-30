import { atom } from 'recoil'
import { IUser } from '../helpers/UserType'

let user: IUser = {token: '', firstname: '', lastname: '', phone: '', SMEloans: [], email: '', id: '', paydayloans: []};

export const UserState = atom({
  key: 'UserState',
  default: user,
})
