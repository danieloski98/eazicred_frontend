import {
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_REGISTER_FAILED,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
} from '../types';

export const adminCreateRequest = () => {
    return {
        type: ADMIN_REGISTER_REQUEST
    }
}
export const adminCreateSuccess = (payload) => {
    return {
        type: ADMIN_REGISTER_SUCCESS, payload
    }
}
export const adminCreateFailed = (error) => {
    return {
        type: ADMIN_REGISTER_FAILED, error
    }
}

export const adminLoginRequest = () => {
    return {
        type: ADMIN_LOGIN_REQUEST
    }
}
export const adminLoginSuccess = (payload) => {
    return {
        type: ADMIN_LOGIN_SUCCESS, payload
    }
}
export const adminLoginFailed = (error) => {
    return {
        type: ADMIN_LOGIN_FAILED, error
    }
}