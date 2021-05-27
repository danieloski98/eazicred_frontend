import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import SmeLoan from '../../components/users/SmeLoan';
import { applySmeLoan } from '../../redux/actions/loanThunk';

const SMEContainer = ({history}) => {
    document.title = "Eazicred - SME Loan"
    const userID = useSelector(state => state["auth"].user.id)
    const [field, setField] = React.useState({
        "user_id": userID,
        "business_name": "",
        "business_address": "",
        "RC_number": "",
        "TIN_number": "",
        "business_up_time": "",
        "purpose_of_loan": "",
        'draft': false,
        "type": 2
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        switch(type){
            case "checkbox":
                setField({...field, [name]: checked})
                break
            default:
                setField({...field, [name]: value})
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(applySmeLoan(field, history))
    }

    const showNotification = useSelector(state => state["notify"].show)
    const showMsg = useSelector(state => state["notify"].message.show)
    return (
        <SmeLoan showMsg={showMsg} field={field} handleChange={handleChange} showNotification={showNotification} handleSubmit={handleSubmit}/>
    );
}

export default SMEContainer;