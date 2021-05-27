import axiosInstance from '../../../helpers/axios';
import { CHANGE_PASSWORD_ENDPOINT } from '../../../routes/endpoints';
import {
  showMessage,
  updateSettingFailure,
  updateSettingRequest,
  updateSettingSuccess,
} from '../actions';
import {showError} from "../../../helpers/utilities";

export const changePassword = (data, userID) => dispatch => {
    dispatch(updateSettingRequest())
    axiosInstance.post(`${CHANGE_PASSWORD_ENDPOINT}${userID}`, {...data})
        .then(res => {
            dispatch(updateSettingSuccess(res.data))
            dispatch(showMessage({message: res.data["successMessage"], type: 'success'}))
        })
        .catch(err => {
            dispatch(updateSettingFailure(err))
            dispatch(showMessage({message: showError(err), type: 'error'}))
        })
}