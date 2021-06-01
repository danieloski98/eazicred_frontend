import { atom } from 'recoil'

let sub: any;

export const paydayloanAtom = atom({
  key: 'PayDayLoan',
  default: sub,
})
