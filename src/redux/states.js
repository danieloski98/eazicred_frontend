import { USER_TOKEN } from '../constants/local';

export const initialStates = {
    auth:{
        isAuthenticated: false,
        loading: false,
        error: null,
        user: null,
        token: JSON.parse(localStorage.getItem(USER_TOKEN))
    },
    userLoans:{
        loading: false,
        selectedSme: {
            loan:{},
            loading:false
        },
        selectedPayday: {
            loan:{},
            loading:false
        },
        smeLoans: [],
        paydayLoans: [],
    },
    sme:{
        data: null,
        loading: false,
        error: null
    },
    payday:{
        data: null,
        loading: false,
        error: null
    },
    setting:{
        data: null,
        loading: false,
        error: null
    },
    profile:{
        data: null,
        loading: false,
        error: null
    },
    notify:{
        show: false,
        message:{
            type:"",
            message:"",
            show: false
        }
    }
}