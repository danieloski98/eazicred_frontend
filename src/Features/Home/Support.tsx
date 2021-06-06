import React from 'react';
import phone from '../../assets/phone.svg';
import message from '../../assets/message.svg';
import emailjs from 'emailjs-com';
import OnPageSignUp from './OnPageSignUp';
import { URL } from '../../helpers/url';
import { useToast, Spinner } from '@chakra-ui/react'
import { IReturn } from '../../helpers/ApiReturnType';

const Support = () => {
    document.title = 'Eazicred - Support'
    const [loading, setLoading] = React.useState(false);
    const [form, setForm] = React.useState({name: '', email: '', message: ""});
    const toast = useToast();
    const handleChange = (e: any) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    async function handleSubmit(e: any) {
        setLoading(true);
        const request = await fetch(`${URL}/admin/support`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(form),
        })

        const json = await request.json() as IReturn;
        setLoading(false);
        if (json.statusCode === 200) {
          toast({
            title: 'Success',
            description: `${json.successMessage}`,
            status: 'success',
            position: 'top',
            isClosable: true,
          })
        }else {
          toast({
            title: 'Error',
            description: `${json.errorMessage}`,
            status: 'error',
            position: 'top',
            isClosable: true,
          })
        }
    }

    React.useEffect(() => {
      window.scrollTo(0,0);
    })

    return (
        <React.Fragment>
            <header>
                <div className="hero-support">
                    <div className="container">
                        <div className="support-box">
                            <h2 className="h-2">Support</h2>
                            <p className="pt-14">Get in touch and a representative will respond shortly</p>
                            <div className="support__inner">
                                <div className="support__col--1">
                                    <h3 className="h-3">Lagos</h3>
                                    <p className="address pt-5">5 Adebisi Ladejobi street, Ilupeju<br/>
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
                            <div className="support__form" onSubmit={handleSubmit}>
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
                                <button onClick={handleSubmit} type="submit" className="btn btn-blue">
                                  {loading && <Spinner size="md" color="white" />}
                                  Send Message
                                  </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OnPageSignUp/>
        </React.Fragment>
    );
}

export default Support;
