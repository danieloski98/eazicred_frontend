import {
  HIDE_MESSAGE,
  HIDE_NOTIFICATION,
  SHOW_MESSAGE,
  SHOW_NOTIFICATION,
} from '../actions/types';
import { initialStates } from '../states';

export const notifyReducer = (state=initialStates.notify, action) => {
    switch (action.type) {
        case HIDE_MESSAGE:
            return {
                ...state,
                message: {
                    message: "",
                    show: false,
                    type: ""
                }
            }
        case SHOW_MESSAGE:
            return {
                ...state,
                message: {
                    message: action.payload.message,
                    show: true,
                    type: action.payload.type
                }
            }
        case SHOW_NOTIFICATION:
            return {
                ...state,
                 show: true
            }
        case HIDE_NOTIFICATION:
            return {
                ...state,
                show: false,
            }
        default:
            return state
    }
}