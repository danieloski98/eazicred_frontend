import React from 'react';

const VerifyEmail = () => {
    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="h-2">Verify Email Address</h2>
                        <p>We sent a code to your email address. Type it here to verify your email address</p>
                        <div className="input-group">
                            <label htmlFor="">Verification Code</label>
                            <input type="text" placeholder="6 Digit Code"/>
                        </div>
                        <button className="btn btn-blue">Verify Email</button>
                    </div>
                </div>
                <div className="account__image">
                    <img src={"assets/verify-image.png"} alt="photo of a man smiling"/>
                </div>
            </div>
        </div>
    );
}

export default VerifyEmail;