import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Profile from '../../components/users/Profile';
import { changeProfile } from '../../redux/actions/users/profileThunk';

const ProfileContainer = () => {
    document.title = "Update your Eazicred Profile"

    const currentUser = useSelector(state => state.auth.user)

    const state = useSelector(state => state.auth)

    const [field, setField] = React.useState({
        firstname:currentUser.firstname,
        lastname:currentUser.lastname,
        phone:currentUser.phone,
    })

    const showMsg = useSelector(state => state.notify.message.show)

    const handleChange = (e) => {
        setField({...field, [e.target.name]:e.target.value})
    }
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(changeProfile(field))
    }

    return (
        <Profile state={state} showMsg={showMsg} field={field} handleChange={handleChange} handleSubmit={handleSubmit}/>
    );
}

export default ProfileContainer;