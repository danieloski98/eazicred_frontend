import React from 'react';
import { Link } from 'react-router-dom';
import {
  ABOUT_URL,
  DASHBOARD_URL,
  FAQS_URL,
  PRIVACY_URL,
  REGISTER_URL,
  SUPPORT_URL,
  TERMS_URL,
} from '../../routes/paths';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__col--1">
                        <Link to={DASHBOARD_URL} className="footer__logo">EaziCred</Link>
                        <p>Loans as EAZI as A,B,C</p>
                        <div className="social">
                            <a href="https://www.facebook.com/eazicred.ng">
                                <i className="fab fa-facebook-f"/>
                            </a>
                            <a href="https://www.twitter.com/home">
                                <i className="fab fa-twitter"/>
                            </a>
                            <a href="https://www.instagram.com/eazicred">
                                <i className="fab fa-instagram"/>
                            </a>
                        </div>
                    </div>


                    <div className="footer__col--2">
                        <h6 className="footer__heading">Menu</h6>
                        <ul>
                            <li>
                                <Link to={REGISTER_URL} className="footer__link">Create Account</Link>
                            </li>
                            <li>
                                <Link to={SUPPORT_URL} className="footer__link">Support</Link>
                            </li>
                            <li>
                                <Link to={FAQS_URL} className="footer__link">FAQs</Link>
                            </li>
                            <li>
                                <Link to={ABOUT_URL} className="footer__link">About Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col--3">
                        <h6 className="footer__heading">Legal</h6>
                        <ul>
                            <li>
                                <Link to={PRIVACY_URL} className="footer__link">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={TERMS_URL} className="footer__link">Terms Of Service</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col--4">
                        <h6 className="footer__heading">Contacts</h6>
                        <p>Get in touch with us via phone call, whatsapp or an email through the below channels.</p>
                        <ul>
                            <li>
                                <a href="tel:+2348020740286" className="footer__link">+234 802 074 0286</a>
                            </li>
                            <li>
                                <a href="mailto:contact@eazicred.com" className="footer__link">contact@eazicred.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

