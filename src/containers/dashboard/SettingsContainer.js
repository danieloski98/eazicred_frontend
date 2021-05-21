import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Setting from '../../components/users/Setting';
import { changePassword } from '../../redux/actions/users/settingThunk';

const SettingsContainer = () => {
    document.title = 'Manage your account settings'
    const [field, setField] = React.useState({
        "newpassword": "",
        "oldpassword": ""
    })
    const userID = useSelector(state => state.auth.user.id)
    const showMsg = useSelector(state => state.notify.message.show)
    const handleChange = ({target: {name, value}}) => {
        setField({...field, [name]:value})
    }
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(changePassword(field, userID))
    }

    return (
        <Setting showMsg={showMsg} field={field} handleChange={handleChange} handleSubmit={handleSubmit}/>
    );
}

export default SettingsContainer;