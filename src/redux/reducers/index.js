import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { applyLoanReducer } from './loans';
import { notifyReducer } from './notify';
import pagesReducer from './pages';
import { settingReducer } from './setting';
import { userLoans } from './userLoans';

const rootReducer = combineReducers({
    auth: authReducer,
    userLoans: userLoans,
    applyLoan: applyLoanReducer,
    setting: settingReducer,
    notify: notifyReducer,
    pages: pagesReducer,
})
export default rootReducer
