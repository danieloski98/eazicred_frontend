import {
  USER_DATA,
  USER_TOKEN,
} from '../../constants/local';
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from '../actions/types';
import { initialStates } from '../states';

export const authReducer = (state = initialStates.auth, action) => {
    switch (action.type){
        case UPDATE_PROFILE_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem(USER_TOKEN, JSON.stringify(action.payload.token))
            localStorage.setItem(USER_DATA, JSON.stringify(action.payload.user))
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                error: null
            }
        case UPDATE_PROFILE_SUCCESS:
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
                loading: false,
                isAuthenticated: true
            }
        // case UPDATE_PROFILE_FAILURE:
        case LOGIN_FAILED:
        case LOGOUT_REQUEST:
        case REGISTER_FAILED:
        case GET_USER_FAILURE:
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