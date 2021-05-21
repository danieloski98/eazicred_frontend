import {
  CLEAR_GETTING_STARTED,
  GETTING_STARTED,
} from '../actions/types';

export const pagesReducer = (state = {email: '', isTrue: false}, action) => {
    switch (action.type) {
        case GETTING_STARTED:
            return {
                ...state,
                isTrue: true, email: action.payload
            }
        case CLEAR_GETTING_STARTED:
            return {
                ...state,
                isTrue: false, email: ''
            }
        default:
            return state
    }
}

export default pagesReducer