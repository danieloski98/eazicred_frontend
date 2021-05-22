import React from 'react';

import OnPageSignUp from './OnPageSignUp';

const Support = () => {
    document.title = 'Eazicred - Support'
    return (
        <React.Fragment>
            <header>
                <div className="hero-support">
                    <div className="container">
                        <div className="support-box">
                            <h2 className="h-2">Support</h2>
                            <p>Get in touch and a representative will respond shortly</p>
                            <div className="support__inner">
                                <div className="support__col--1">
                                    <h3 className="h-3">Lagos</h3>
                                    <p className="address">5 Adebisi Ladejobi street, Ilupeju<br/>
                                        +234 802 074 0286<br/>
                                        contact@eazicred.com
                                    </p>
                                </div>
                                <div className="support__col--1">
                                    <a href="tel:+2349016888927">
                                        <img src={"assets/phone.svg"} alt="phone icon"/>
                                    </a>
                                    <a href="mailto:contact@eazicred.com">
                                        <img src={"assets/message.svg"} alt="message icon"/>
                                    </a>
                                </div>
                            </div>
                            <p>Alternatively, You can also fill the form below</p>
                            <form className="support__form">
                                <div className="input-groups">
                                    <div className="input-group">
                                        <label htmlFor="">Name</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="">Email Address</label>
                                        <input type="email"/>
                                    </div>
                                </div>
                                <div className="message-box">
                                    <label htmlFor="">Message</label>
                                    <textarea/>
                                </div>
                                <button className="btn btn-blue">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            <OnPageSignUp/>
        </React.Fragment>
    );
}

export default Support;