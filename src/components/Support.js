import React from 'react';
import phone from '../assets/phone.svg';
import message from '../assets/message.svg';
import emailjs from 'emailjs-com';

import OnPageSignUp from '../Common/OnPageSignUp';

const Support = () => {
    document.title = 'Eazicred - Support'
    const [form, setForm] = React.useState({name: '', email: '', message: ""})
    const handleChange = e => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const template_id = 'o9emy69';
        const service_id = 'gmail';
        const user_id = 'user_q4Px58peEZuDjpc9c4wh9';

        emailjs.sendForm(service_id, template_id, e.target, user_id)
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    }

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
                                        <img src={phone} alt="phone icon"/>
                                    </a>
                                    <a href="mailto:contact@eazicred.com">
                                        <img src={message} alt="message icon"/>
                                    </a>
                                </div>
                            </div>
                            <p>Alternatively, You can also fill the form below</p>
                            <form className="support__form" onSubmit={handleSubmit}>
                                <div className="input-groups">
                                    <div className="input-group">
                                        <label htmlFor="name">Name</label>
                                        <input value={form.name} onChange={handleChange} name="name" id="name" type="text"/>
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input value={form.email} onChange={handleChange} name="email" id="email" type="email"/>
                                    </div>
                                </div>
                                <div className="message-box">
                                    <label htmlFor="message">Message</label>
                                    <textarea value={form.message} onChange={handleChange} name="message" id='message'/>
                                </div>
                                <button type="submit" className="btn btn-blue">Send Message</button>
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