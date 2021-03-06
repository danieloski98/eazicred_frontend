import axiosInstance from '../../helpers/axios';
import { tokenConfig } from '../../helpers/utilities';
import {
  FETCH_SELECTED_PAYDAYLOAN_ENDPOINT,
  FETCH_SELECTED_SMELOAN_ENDPOINT,
  PAYDAY_LOAN_ENDPOINT,
  PAYDAY_LOAN_UPLOAD_ENDPOINT,
  SME_LOAN_ENDPOINT,
  USER_PAYDAY_LOANS_ENDPOINT,
  USER_SME_LOANS_ENDPOINT,
} from '../../routes/endpoints';
import {DASHBOARD_HISTORY_URL} from '../../routes/paths';
import {
  showMessage,
  showNotification,
} from './actions';
import {
  applyPaydayFailure,
  applyPaydayRequest,
  applyPaydaySuccess,
  applySmeFailure,
  applySmeRequest,
  applySmeSuccess,
  fetchUserLoansRequest,
  fetchUserPaydayLoansFailure,
  fetchUserPaydayLoansRequest,
  fetchUserPaydayLoansSuccess,
  fetchUserSelectedPaydayLoansRequest,
  fetchUserSelectedPaydayLoansSuccess,
  fetchUserSelectedSmeLoansRequest,
  fetchUserSelectedSmeLoansSuccess,
  fetchUserSmeLoansFailure,
  fetchUserSmeLoansSuccess,
  filesUploaded,
  filesUploadingDone,
  uploadFilesFailure,
  uploadFilesRequest,
  uploadFilesSuccess,
} from './users/loans';

export const fetchSelectedPaydayLoan = loanId => (dispatch, getState) => {
    if(loanId){
        dispatch(fetchUserSelectedPaydayLoansRequest())
        axiosInstance.get(`${FETCH_SELECTED_PAYDAYLOAN_ENDPOINT}${loanId}`, tokenConfig(getState))
            .then(res => {
                dispatch(fetchUserSelectedPaydayLoansSuccess(res.data.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const fetchUserPaydayLoans = () => (dispatch, getState) => {
    const user_id = getState().auth.user.id
    dispatch(fetchUserPaydayLoansRequest())
    axiosInstance.get(`${USER_PAYDAY_LOANS_ENDPOINT}${user_id}`, tokenConfig(getState))
        .then(res => {
            dispatch(fetchUserPaydayLoansSuccess(res.data.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchUserPaydayLoansFailure())
        })
}

export const uploadFiles = (files, history) => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {headers: {"Content-Type": "multipart/form-data"}}
    if(token){config.headers["Authorization"] = `Bearer ${token}`}
    const loan = localStorage.getItem("loanId")
    const formData = new FormData()

    formData.append('passport', files['passport'])
    formData.append('government_ID', files['government_ID'])
    formData.append('company_id', files['company_id'])
    formData.append('letter_of_employment', files['letter_of_employment'])
    formData.append('utility_bill', files['utility_bill'])

    dispatch(uploadFilesRequest())
    axiosInstance.post(`${PAYDAY_LOAN_UPLOAD_ENDPOINT}${loan}`, formData, config)
        .then(res => {
            dispatch(uploadFilesSuccess(res.data.date))
            dispatch(filesUploaded())
            localStorage.removeItem("loanId")
            setTimeout(() => {
                history.push(DASHBOARD_HISTORY_URL)
                dispatch(filesUploadingDone())
            }, 5000)

        })
        .catch(err => {
            console.log(err.response.data)
            dispatch(uploadFilesFailure(err))
        })
}

export const fetchSelectedSmeLoan = loanId => (dispatch, getState) => {
    if(loanId){
        dispatch(fetchUserSelectedSmeLoansRequest())
        axiosInstance.get(`${FETCH_SELECTED_SMELOAN_ENDPOINT}${loanId}`, tokenConfig(getState))
            .then(res => {
                dispatch(fetchUserSelectedSmeLoansSuccess(res.data.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const fetchAllUserLoans = () => (dispatch, getState) => {
    dispatch(fetchUserLoansRequest())
    const userID = getState().auth.user.id
    const payday = axiosInstance.get(`${USER_PAYDAY_LOANS_ENDPOINT}${userID}`, tokenConfig(getState))
    const sme = axiosInstance.get(`${USER_SME_LOANS_ENDPOINT}${userID}`, tokenConfig(getState))
    Promise.all([payday, sme])
        .then(res => {
            dispatch(fetchUserPaydayLoansSuccess(res[0].data.data))
            dispatch(fetchUserSmeLoansSuccess(res[1].data.data))
        })
        .catch(err => {
            dispatch(fetchUserPaydayLoansFailure(err))
            dispatch(fetchUserSmeLoansFailure(err))
        })
}

export const applyPaydayLoan = data => (dispatch, getState) => {
    dispatch(applyPaydayRequest())

    axiosInstance.post(PAYDAY_LOAN_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(applyPaydaySuccess(res.data.data))
            dispatch(showNotification())
            localStorage.setItem("loanId", res.data.data.id)
        })
        .catch(err => {
            dispatch(applyPaydayFailure(err))
            dispatch(showMessage({message: err.response.data['errorMessage'], type: 'error'}))
        })
}

export const applySmeLoan = (data, history) => (dispatch, getState) => {
    dispatch(applySmeRequest())
    axiosInstance.post(SME_LOAN_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(applySmeSuccess(res.data.data))
            dispatch(showNotification())
            history.push(DASHBOARD_HISTORY_URL)
        })
        .catch((err) => {
            dispatch(applySmeFailure(err))
            dispatch(showMessage({message: err.response.data['errorMessage'], type: 'error'}))
        })
}
