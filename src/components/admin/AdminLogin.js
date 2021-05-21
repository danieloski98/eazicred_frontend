import React from 'react';

import { useDispatch } from 'react-redux';

import { adminLogin } from '../../redux/actions/admin/adminThunks';

const AdminLogin = () => {
    document.title = "EaziCred - Admin Login"
    const [field, setField] = React.useState({email:"", password: ""})
    const dispatch = useDispatch()
    const handleChange = e => {
        setField({...field, [e.target.name]:e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(adminLogin(field))
    }

    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="h-2">Admin Log In</h2>
                        <p>Enter your credentials to continue</p>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input onChange={handleChange}  value={field.email} name="email" type="email" id="email" placeholder="admin@eazicred.com" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input onChange={handleChange} value={field.password} id="password" type="password" name="password" placeholder="***********" required/>
                            </div>
                            <p className="text-align-right">Forgot Password?</p>
                            <input type="submit" value="Log In" className="btn btn-blue"/>
                        </form>
                    </div>
                </div>
                <div className="account__image login__image"/>
            </div>
        </div>
    );
}

export default AdminLogin;