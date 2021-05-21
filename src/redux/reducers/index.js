import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { notifyReducer } from './notify';
import pagesReducer from './pages';
import { paydayLoanReducer } from './payday';
import { settingReducer } from './setting';
import { smeLoanReducer } from './sme';
import { userLoans } from './userLoans';

const rootReducer = combineReducers({
    auth: authReducer,
    sme: smeLoanReducer,
    userLoans: userLoans,
    payday: paydayLoanReducer,
    setting: settingReducer,
    notify: notifyReducer,
    pages: pagesReducer,
})
export default rootReducer