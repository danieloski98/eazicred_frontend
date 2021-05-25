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
import { DASHBOARD_LOAN_APPLICATION_URL } from '../../routes/paths';
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

export const uploadFiles = (files, history) => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {headers: {"Content-Type": "multipart/form-data"}}
    if(token){config.headers["Authorization"] = `Bearer ${token}`}
    const loan = localStorage.getItem("loanId")
    const formData = new FormData()
    for(let key in files){
        formData.append(`${key}`, files[key])
    }

    dispatch(uploadFilesRequest())
    axiosInstance.post(`${PAYDAY_LOAN_UPLOAD_ENDPOINT}${loan}`, formData, config)
        .then(res => {
            dispatch(uploadFilesSuccess(res.data.date))
            dispatch(filesUploaded())
            localStorage.removeItem("loanId")
            setTimeout(() => {
                history.push(DASHBOARD_LOAN_APPLICATION_URL)
                dispatch(filesUploadingDone())
            }, 5000)

        })
        .catch(err => {
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
            dispatch(showMessage({message: "Please all fields are required", type: 'error'}))
        })
}

export const applySmeLoan = data => (dispatch, getState) => {
    dispatch(applySmeRequest())
    axiosInstance.post(SME_LOAN_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(applySmeSuccess(res.data.data))
            dispatch(showNotification())
        })
        .catch((err) => {
            dispatch(applySmeFailure(err))
            dispatch(showMessage({message: "Please all fields are required", type: 'error'}))
        })
}
