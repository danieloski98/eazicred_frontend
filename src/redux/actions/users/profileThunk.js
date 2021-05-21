import axiosInstance from '../../../helpers/axios';
import {
  showError,
  tokenConfig,
} from '../../../helpers/utilities';
import { CHANGE_USER_ENDPOINT } from '../../../routes/endpoints';
import {
  showMessage,
  updateProfileFailure,
  updateProfileRequest,
  updateProfileSuccess,
} from '../actions';

export const changeProfile = (data) => (dispatch, getState) => {
    dispatch(updateProfileRequest())
    axiosInstance.put(CHANGE_USER_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(updateProfileSuccess(res.data.data))
            dispatch(showMessage({message: res.data["successMessage"], type: 'success'}))
        })
        .catch(err => {
            dispatch(updateProfileFailure(showError(err, "Error profile could not be updated check and try again later")))
            dispatch(showMessage({message: getState().auth.error, type: 'error'}))
        })
}