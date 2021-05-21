import React from 'react';

import { Link } from 'react-router-dom';

import MessageAlert from '../Common/MessageAlert';
import {
  ABOUT_URL,
  LOGIN_URL,
} from '../routes/paths';

const Register = ({handleChange, field, handleSubmit, error, fieldErrors}) => {
    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="h-2">Create Account</h2>
                        <p>Access SME and Consumer Loans On The Go</p>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input onChange={handleChange} name='email' value={field.email} id="email" type="email"
                                       placeholder="johndoe@eazycred.com" className="email" required/>
                                {fieldErrors.email && <div style={{color: "red"}}>{fieldErrors.email}</div>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Phone Number</label>
                                <input onChange={handleChange} name='phone' value={field.phone} id="phone" type="text"
                                       placeholder="080 *** *** ***" className="phone" required/>
                                {fieldErrors.phone && <div style={{color: "red"}}>{fieldErrors.phone}</div>}
                            </div>
                            <div className="input-groups">
                                <div className="input-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input onChange={handleChange} name='firstname' value={field.firstname}
                                           id="firstname" type="text" placeholder="John" className="first_name"
                                           required/>
                                    {fieldErrors.firstname && <div style={{color: "red"}}>{fieldErrors.firstname}</div>}
                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input onChange={handleChange} name='lastname' value={field.lastname} id="lastname"
                                           type="text" placeholder="Doe" className="last_name" required/>
                                    {fieldErrors.lastname && <div style={{color: "red"}}>{fieldErrors.lastname}</div>}
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input onChange={handleChange} name='password' value={field.password} id="password"
                                       type="password" placeholder="***********" className="password" required/>
                                {fieldErrors.password && <div style={{color: "red"}}>{fieldErrors.password}</div>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="code">Referral Code</label>
                                <input onChange={handleChange} name='code' value={field.code} id="code" type="text"
                                       className="phone"/>
                            </div>
                            <p className="blue">Enter the referral code of the person who referred you to join EaziCred.
                                Don't have a code - <Link to={ABOUT_URL} className="primary-color">Request one from
                                    us</Link></p>
                            {!error.show &&
                            <input type="submit" value="Create Account" id='submit' className="btn btn-blue"/>}
                            {error.show && <MessageAlert><input type="button" value={"Error occurred, try using another email or try again later"} disabled
                                                                className="alert alert-red"/></MessageAlert>}
                            <p>Already Have An Account? <Link to={LOGIN_URL} className="primary-color">Log In</Link></p>
                        </form>
                    </div>
                </div>
                <div className="account__image register__image"/>
            </div>
        </div>
    )
}

export default Register