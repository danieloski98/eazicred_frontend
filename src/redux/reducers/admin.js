import {
  ADMIN_DATA,
  ADMIN_TOKEN,
  USER_DATA,
  USER_TOKEN,
} from '../../constants/local';
import {
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_REGISTER_FAILED,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  GET_USER_SUCCESS,
  LOGOUT_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from '../actions/types';
import { initialStates } from '../states';

export const authReducer = (state = initialStates.auth, action) => {
    switch (action.type){

        case ADMIN_LOGIN_REQUEST:
        case ADMIN_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADMIN_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
            }
        case ADMIN_LOGIN_SUCCESS:
            localStorage.setItem(ADMIN_TOKEN, JSON.stringify(action.payload.token))
            localStorage.setItem(ADMIN_DATA, JSON.stringify(action.payload.user))
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case UPDATE_PROFILE_SUCCESS:
        case GET_USER_SUCCESS:
            return {
                ...state,
                ...state.user,
                ...action.payload,
                loading: false,
                // user: action.payload,
                isAuthenticated: true
            }
        case ADMIN_LOGIN_FAILED:
        case LOGOUT_REQUEST:
        case ADMIN_REGISTER_FAILED:
            localStorage.removeItem(USER_TOKEN)
            localStorage.removeItem(USER_DATA)
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null ,
                error: action.error
            }
        default:
            return state
    }
}