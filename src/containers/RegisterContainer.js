/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Redirect,
  useHistory,
} from 'react-router-dom';

import Register from '../components/Register';
import { registerUser } from '../redux/actions/authThunks';
import { DASHBOARD_URL } from '../routes/paths';

const RegisterContainer = () => {
    document.title = "Eazicred - Create Account"
    const isAuthenticated = useSelector(state => state["auth"].isAuthenticated)
    const started = useSelector(state => state.pages)
    const [field, setField] = React.useState({
        "email": started.isTrue ? started.email : "",
        "firstname": "",
        "lastname": "",
        "phone": "",
        "code": "",
        "password": "",
    })
    const error = useSelector(state => state["notify"].message)
    const dispatch = useDispatch()
    const [fieldErrors, setErrors] = React.useState({})
    const isValid = () => {
        const {email, password, firstname, lastname, phone} = field
        const errors = {}
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            errors.email = "valid email is required"
        }
        if(password.length <= 8){
            errors.password = "password is too short"
        }
        if(firstname.length === 0){
            errors.firstname = "first name is required"
        }
        if(lastname.length === 0){
            errors.lastname = "last name is required"
        }
        if(phone.length === 0){
            errors.phone = "phone number is required"
        }
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setField({...field, [name]: value})
        isValid()
    }
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isValid())return
        dispatch(registerUser(field, history))
    }
    if (isAuthenticated) {
        return <Redirect to={DASHBOARD_URL}/>
    } else {
        return (
            <Register fieldErrors={fieldErrors} error={error} handleChange={handleChange} handleSubmit={handleSubmit} field={field}/>
        );
    }

}

export default RegisterContainer;