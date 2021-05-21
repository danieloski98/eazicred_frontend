import {
  UPDATE_SETTING_FAILURE,
  UPDATE_SETTING_REQUEST,
  UPDATE_SETTING_SUCCESS,
} from '../actions/types';
import { initialStates } from '../states';

export const settingReducer = (state = initialStates.setting, action) => {
    switch (action.type){
        case UPDATE_SETTING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_SETTING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case UPDATE_SETTING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: null
            }
        default:
            return state
    }
}