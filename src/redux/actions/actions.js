import {
  CLEAR_GETTING_STARTED,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GETTING_STARTED,
  HIDE_MESSAGE,
  HIDE_NOTIFICATION,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SHOW_MESSAGE,
  SHOW_NOTIFICATION,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_SETTING_FAILURE,
  UPDATE_SETTING_REQUEST,
  UPDATE_SETTING_SUCCESS,
} from './types';

export const showMessage = (payload) => {
    return {type: SHOW_MESSAGE, payload}
}

export const gettingStarted = (payload) => {
    return {
        type: GETTING_STARTED, payload
    }
}

export const clearGettingStarted = () => {
    return {
        type: CLEAR_GETTING_STARTED
    }
}

export const hideMessage = () => {
    return {type: HIDE_MESSAGE}
}

export const showNotification = () => {
    return {type: SHOW_NOTIFICATION}
}

export const hideNotification = () => {
    return {type: HIDE_NOTIFICATION}
}

export const updateProfileRequest = () => {
    return {type: UPDATE_PROFILE_REQUEST}
}

export const updateProfileSuccess = (payload) => {
    return {type: UPDATE_PROFILE_SUCCESS, payload}
}

export const updateProfileFailure = (payload) => {
    return {type: UPDATE_PROFILE_FAILURE, payload}
}

export const updateSettingRequest = () => {
    return {type: UPDATE_SETTING_REQUEST}
}

export const updateSettingSuccess = (payload) => {
    return {type: UPDATE_SETTING_SUCCESS, payload}
}

export const updateSettingFailure = (error) => {
    return {type: UPDATE_SETTING_FAILURE, error}
}

export const getUserRequest = () => {
    return {type: GET_USER_REQUEST}
}

export const getUserSuccess = (payload) => {
    return {type: GET_USER_SUCCESS, payload}
}

export const getUserFailure = error => {
    return {type: GET_USER_FAILURE, error}
}

export const logoutRequest = () => {
    return {type: LOGOUT_REQUEST}
}
export const loginRequest = () => {
    return {type: LOGIN_REQUEST}
}
export const loginSuccess = (payload) => {
    return {type: LOGIN_SUCCESS, payload}
}
export const loginFailed = (error) => {
    return {type : LOGIN_FAILED, error}
}

export const registerRequest = () => {
    return {type : REGISTER_REQUEST}
}
export const registerSuccess = (payload) => {
    return {type : REGISTER_SUCCESS, payload}
}
export const registerFailed = (error) => {
    return {type : REGISTER_FAILED, error}
}