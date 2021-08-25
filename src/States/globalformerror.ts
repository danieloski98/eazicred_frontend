import { atom } from 'recoil';

export interface IGlobalError {
    page: number;
    error: boolean;
}

export const globalFormError = atom({
    key: 'FormError',
    default: {page: 1, error: true}
})