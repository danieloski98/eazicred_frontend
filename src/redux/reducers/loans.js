import {
  APPLY_PAYDAY_LOAN_FAILURE,
  APPLY_PAYDAY_LOAN_REQUEST,
  APPLY_PAYDAY_LOAN_SUCCESS,
  APPLY_SME_LOAN_FAILURE,
  APPLY_SME_LOAN_REQUEST,
  APPLY_SME_LOAN_SUCCESS,
  FILES_UPLOADED,
  FILES_UPLOADING_DONE,
  UPLOAD_FILES_FAILURE,
  UPLOAD_FILES_REQUEST,
  UPLOAD_FILES_SUCCESS,
} from '../actions/types';
import { initialStates } from '../states';

export const applyLoanReducer = (state=initialStates.loans, action) => {
    switch (action.type) {
        case APPLY_PAYDAY_LOAN_REQUEST:
        case APPLY_SME_LOAN_REQUEST:
            return {
                ...state,
                 loading: true
            }

        case FILES_UPLOADED:
            return {
                ...state,
                uploaded: true
            }
        case UPLOAD_FILES_REQUEST:
            return {
                ...state,
                uploading: true
            }
        case UPLOAD_FILES_SUCCESS:
            return {
                ...state,
                uploading: false
            }
        case UPLOAD_FILES_FAILURE:
            return {
                ...state,
                uploading: false
            }
        case FILES_UPLOADING_DONE:
            return {
                ...state,
                uploaded: false
            }
        case APPLY_PAYDAY_LOAN_SUCCESS:
            return {
                ...state,
                payday: {
                    data: action.payload,
                    error: null
                }
            }
        case APPLY_PAYDAY_LOAN_FAILURE:
            return {
                ...state,
                payday: {
                    error: action.error,
                    data: null
                }
            }

        case APPLY_SME_LOAN_SUCCESS:
            return {
                ...state,
                sme: {
                    data: action.payload,
                    error: null
                }
            }
        case APPLY_SME_LOAN_FAILURE:
            return {
                ...state,
                sme: {
                    error: action.error,
                    data: null
                }
            }
        default:
            return state
    }
}