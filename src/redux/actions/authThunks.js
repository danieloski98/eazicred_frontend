import axiosInstance from '../../helpers/axios';
import { tokenConfig } from '../../helpers/utilities';
import {
  GET_USER_ENDPOINT,
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
} from '../../routes/endpoints';
import { LOGIN_URL } from '../../routes/paths';
import {
  getUserFailure,
  getUserRequest,
  getUserSuccess,
  loginFailed,
  loginRequest,
  loginSuccess,
  registerFailed,
  registerRequest,
  registerSuccess,
  showMessage,
} from './actions';

export const getUser = () => (dispatch, getState) => {
    dispatch(getUserRequest())
    const id = getState().auth.user.id
    axiosInstance.get(`${GET_USER_ENDPOINT}${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(getUserSuccess(res.data.data))
        })
        .catch(err => {
            dispatch(getUserFailure(err))
        })
}

export const loginUser = (data) => (dispatch, getState) => {
    dispatch(loginRequest())
    axiosInstance.post(LOGIN_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(loginSuccess(res.data.data))
            dispatch(getUser)
        })
        .catch(err => {
            dispatch(loginFailed(err.response.data['errorMessage']))
            dispatch(showMessage({
                message: err.response.data['errorMessage'],
                type: 'error'
            }))
        })
}

export const registerUser = (data, useHistory) => (dispatch, getState) => {
    dispatch(registerRequest())
    axiosInstance.post(REGISTER_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(registerSuccess(res.data.data))
            useHistory.push(LOGIN_URL)
        })
        .catch(err => {
            dispatch(registerFailed(err.response.data['errorMessage']))
            dispatch(showMessage({
                message: err.response.data['errorMessage'],
                type: 'error'
            }))
        })
}