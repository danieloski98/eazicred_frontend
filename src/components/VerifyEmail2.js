import React from 'react';

const VerifyEmail2 = () => {
    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="h-2">Request For Sign up Code</h2>
                        <p>Enter your email address to request for a sign up code. We'll email you details shortly</p>
                        <div className="input-group">
                            <label htmlFor="">Email Address</label>
                            <input type="email" placeholder="Enter Email Address"/>
                        </div>
                        <button className="btn btn-blue">Request Code</button>
                    </div>
                </div>
                <div className="account__image">
                    <img src={"assets/verify-image-2.png"} alt="photo of a man smiling"/>
                </div>
            </div>
        </div>
    );
}

export default VerifyEmail2;