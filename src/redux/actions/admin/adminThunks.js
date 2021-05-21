import axiosInstance from '../../../helpers/axios';
import {
  showError,
  tokenConfig,
} from '../../../helpers/utilities';
import {
  ADMIN_CREATE_ENDPOINT,
  ADMIN_LOGIN_ENDPOINT,
} from '../../../routes/endpoints';
import {
  adminCreateFailed,
  adminCreateRequest,
  adminCreateSuccess,
  adminLoginFailed,
  adminLoginRequest,
  adminLoginSuccess,
} from './adminAction';

export const adminLogin = (data) => (dispatch, getState) => {
    dispatch(adminLoginRequest())
    console.log(data)
    axiosInstance.post(ADMIN_LOGIN_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(adminLoginSuccess(res.data.data))
        })
        .catch(err => {
            dispatch(adminLoginFailed(showError(err, "Please check and try again")))
        })
}

export const adminCreate = (data) => (dispatch, getState) => {
    dispatch(adminCreateRequest())
    axiosInstance.post(ADMIN_CREATE_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(adminCreateSuccess(res.data.data))
        })
        .catch(err => {
            dispatch(adminCreateFailed(showError(err, "Please check and try again")))
        })
}