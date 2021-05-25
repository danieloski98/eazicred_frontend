import {
  APPLY_PAYDAY_LOAN_FAILURE,
  APPLY_PAYDAY_LOAN_REQUEST,
  APPLY_PAYDAY_LOAN_SUCCESS,
  APPLY_SME_LOAN_FAILURE,
  APPLY_SME_LOAN_REQUEST,
  APPLY_SME_LOAN_SUCCESS,
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
  FILES_UPLOADED,
  FILES_UPLOADING_DONE,
  UPLOAD_FILES_FAILURE,
  UPLOAD_FILES_REQUEST,
  UPLOAD_FILES_SUCCESS,
} from '../types';

export const fetchUserSelectedPaydayLoansRequest = () => {
    return {type: FETCH_USER_SELECTED_PAYDAY_LOAN_REQUEST}
}

export const fetchUserSelectedPaydayLoansSuccess = (payload) => {
    return {type: FETCH_USER_SELECTED_PAYDAY_LOAN_SUCCESS, payload}
}

export const fetchUserSelectedPaydayLoansFailure = (error) => {
    return {type: FETCH_USER_SELECTED_PAYDAY_LOAN_FAILURE, error}
}


export const fetchUserLoansRequest = () => {
    return {type: FETCH_USER_LOANS_REQUEST}
}

export const fetchUserPaydayLoansSuccess = (payload) => {
    return {type: FETCH_USER_PAYDAY_LOAN_SUCCESS, payload}
}

export const fetchUserPaydayLoansFailure = (error) => {
    return {type: FETCH_USER_PAYDAY_LOAN_FAILURE, error}
}

export const fetchUserSmeLoansSuccess = (payload) => {
    return {type: FETCH_USER_SME_LOAN_SUCCESS, payload}
}

export const fetchUserSmeLoansFailure = (error) => {
    return {type: FETCH_USER_SME_LOAN_FAILURE, error}
}

export const applyPaydayRequest = () => {
    return {type: APPLY_PAYDAY_LOAN_REQUEST}
}

export const applyPaydaySuccess = (payload) => {
    return {type: APPLY_PAYDAY_LOAN_SUCCESS, payload}
}

export const applyPaydayFailure = (error) => {
    return {type: APPLY_PAYDAY_LOAN_FAILURE, error}
}


export const fetchUserSelectedSmeLoansRequest = () => {
    return {type: FETCH_USER_SELECTED_SME_LOAN_REQUEST}
}

export const fetchUserSelectedSmeLoansSuccess = (payload) => {
    return {type: FETCH_USER_SELECTED_SME_LOAN_SUCCESS, payload}
}

export const fetchUserSelectedSmeLoansFailure = (error) => {
    return {type: FETCH_USER_SELECTED_SME_LOAN_FAILURE, error}
}


export const uploadFilesRequest = () => {
    return {type: UPLOAD_FILES_REQUEST}
}

export const uploadFilesSuccess = (payload) => {
    return {type: UPLOAD_FILES_SUCCESS, payload}
}

export const uploadFilesFailure = (error) => {
    return {type: UPLOAD_FILES_FAILURE, error}
}

export const filesUploaded = () => {
    return {type: FILES_UPLOADED}
}

export const filesUploadingDone = () => {
    return {type: FILES_UPLOADING_DONE}
}

export const applySmeRequest = () => {
    return {type: APPLY_SME_LOAN_REQUEST}
}

export const applySmeSuccess = (payload) => {
    return {type: APPLY_SME_LOAN_SUCCESS, payload}
}

export const applySmeFailure = (error) => {
    return {type: APPLY_SME_LOAN_FAILURE, error}
}