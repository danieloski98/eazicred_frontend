import {
  APPLY_SME_LOAN_FAILURE,
  APPLY_SME_LOAN_REQUEST,
  APPLY_SME_LOAN_SUCCESS,
} from '../actions/types';
import { initialStates } from '../states';

export const smeLoanReducer = (state=initialStates.sme, action) => {
    switch (action.type) {
        case APPLY_SME_LOAN_REQUEST:
            return {
                ...state,
                 loading: true
            }
        case APPLY_SME_LOAN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case APPLY_SME_LOAN_FAILURE:
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