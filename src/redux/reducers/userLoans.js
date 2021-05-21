import {
  FETCH_USER_LOANS_REQUEST,
  FETCH_USER_PAYDAY_LOAN_FAILURE,
  FETCH_USER_PAYDAY_LOAN_SUCCESS,
  FETCH_USER_SELECTED_PAYDAY_LOAN_FAILURE,
  FETCH_USER_SELECTED_PAYDAY_LOAN_REQUEST,
  FETCH_USER_SELECTED_PAYDAY_LOAN_SUCCESS,
  FETCH_USER_SELECTED_SME_LOAN_FAILURE,
  FETCH_USER_SELECTED_SME_LOAN_REQUEST,
  FETCH_USER_SELECTED_SME_LOAN_SUCCESS,
  FETCH_USER_SME_LOAN_FAILURE,
  FETCH_USER_SME_LOAN_SUCCESS,
} from '../actions/types';
import { initialStates } from '../states';

export const userLoans = (state= initialStates.userLoans, action) => {
    switch (action.type) {

        case FETCH_USER_SELECTED_SME_LOAN_REQUEST:
            return {
                ...state,
                selectedSme: {
                    loading: true
                }
            }

        case FETCH_USER_SELECTED_SME_LOAN_SUCCESS:
            return {
                ...state,
                selectedSme: {
                    loading: false,
                    loan: action.payload
                }
            }

        case FETCH_USER_SELECTED_SME_LOAN_FAILURE:
            return {
                ...state,
                selectedSme: {
                    loading: false,
                    loan: {}
                }
            }


        case FETCH_USER_SELECTED_PAYDAY_LOAN_REQUEST:
            return {
                ...state,
                selectedPayday: {
                    loading: true
                }
            }

        case FETCH_USER_SELECTED_PAYDAY_LOAN_SUCCESS:
            return {
                ...state,
                selectedPayday: {
                    loading: false,
                    loan: action.payload
                }
            }

        case FETCH_USER_SELECTED_PAYDAY_LOAN_FAILURE:
            return {
                ...state,
                selectedPayday: {
                    loading: false,
                    loan: {}
                }
            }

        case FETCH_USER_LOANS_REQUEST:
            return {
                ...state,
                 loading: true
            }
        case FETCH_USER_SME_LOAN_SUCCESS:
            return {
                ...state,
                loading: false,
                smeLoans: action.payload,
            }

        case FETCH_USER_PAYDAY_LOAN_SUCCESS:
            return {
                ...state,
                loading: false,
                paydayLoans: action.payload
            }

        case FETCH_USER_PAYDAY_LOAN_FAILURE:
            return {
                ...state,
                loading: false,
                payday: []
            }
        case FETCH_USER_SME_LOAN_FAILURE:
            return {
                ...state,
                loading: false,
                sme: []
            }
        default:
            return state
    }
}