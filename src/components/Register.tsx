import React from 'react';

import { Link } from 'react-router-dom';

import MessageAlert from '../Common/MessageAlert';
import { LOGIN_URL } from '../routes/paths';

const Register = () => {
    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="h-2">Create Account</h2>
                        <p className="pt-14">Access SME and Consumer Loans On The Go</p>
                        <form >
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input  id="email" type="email"
                                       placeholder="johndoe@eazycred.com" className="email" required/>

                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Phone Number</label>
                                <input id="phone" type="text"
                                       placeholder="080 *** *** ***" className="phone" required/>

                            </div>
                            <div className="input-groups">
                                <div className="input-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input
                                           id="firstname" type="text" placeholder="John" className="first_name"
                                           required/>

                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input id="lastname"
                                           type="text" placeholder="Doe" className="last_name" required/>

                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input id="password"
                                       type="password" placeholder="***********" className="password" required/>

                            </div>
                            <div className="input-group">
                                <label htmlFor="code">Referral Code</label>
                                <input id="code" type="text"
                                       className="phone"/>
                            </div>
                            <p className="blue">Enter the referral code if you have one.</p>
                            {/* {!error.show &&
                            <input type="submit" value="Create Account" id='submit' className="btn btn-blue"/>}
                            {error.show && <MessageAlert>
                                <input type="button" value={error.message} disabled className="alert alert-red"/>
                            </MessageAlert>} */}
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
