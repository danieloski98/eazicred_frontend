import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { gettingStarted } from '../redux/actions/actions';
import {
  ABOUT_URL,
  DASHBOARD_LOAN_APPLICATION_URL,
  REGISTER_URL,
  TERMS_URL,
} from '../routes/paths';
import LoanCalculator from './LoanCalculator';
import OnPageSignUp from './OnPageSignUp';

const Home = ({history}) => {
    document.title = "EaziCred - Better Loan Offers"
    React.useEffect(() => {
        window.$('.stats__inner-mobile').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            prevArrow: false,
            nextArrow: false
        });

        window.$('.loans__inner-mobile').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            prevArrow: false,
            nextArrow: false
        });
    }, [])
    const [form, setForm] = React.useState('')

    const dispatch = useDispatch()

    const getStarted = () => {
        dispatch(gettingStarted(form))
        history.push(REGISTER_URL)
    }

    return (
        <React.Fragment>
            <header>
                <div className="hero">
                    <div className="hero__inner">
                        <div className="hero__text-box">
                            <h1 className="h-1">Loans For Everyone</h1>
                            <p className="p-1">Apply &amp; Get Credited</p>

                            <form>
                                <input value={form} onChange={(e) => setForm(e.target.value)} type="email" className="email" placeholder="Type your e-mail"/>
                                    <button onClick={getStarted} className="btn btn-blue">Get Started</button>
                            </form>

                            <p>{"By clicking \"Get Started\" you confirming that you agree with our following "}
                                <Link to={TERMS_URL}>Terms and Conditions</Link>
                            </p>
                        </div>
                        <div className="hero__image">
                            <img src={"assets/hero-image.png"} alt="a woman smiling"/>
                        </div>
                    </div>
                </div>
            </header>
            <section className="stats stats-pc">
                <div className="container-sm">
                    <div className="stats__inner">
                        <div className="stats__customers">
                            <h5 className="h-5">800+</h5>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stats__sme">
                            <h5 className="h-5">500+</h5>
                            <p>SMEs Loans Disbursed</p>
                        </div>
                        <div className="stats__consumer">
                            <h5 className="h-5">500+</h5>
                            <p>Consumer Loans Disbursed</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="stats stats-mobile">
                <div className="container-sm">
                    <div className="stats__inner-mobile">
                        <div>
                            <h5 className="h-5">1000+</h5>
                            <p>Happy Customers</p>
                        </div>
                        <div>
                            <h5 className="h-5">500+</h5>
                            <p>SMEs Loans Disbursed</p>
                        </div>
                        <div>
                            <h5 className="h-5">500+</h5>
                            <p>Consumer Loans Disbursed</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choice">
                <div className="container">
                    <div className="choice__inner">
                        <div className="choice__text-box">
                            <h2 className="h-2">Why EaziCred Is The Best</h2>
                            <p className="p-2">Choice For You</p>

                            <p className="p">Life happens, emergencies happens. Eazicred is your trusted partner to fill
                                in those financial gaps till you get back on your feet. From the application process to
                                the disbursement of funds, we make it an EAZI experience for you</p>

                            <div>
                                <Link to={DASHBOARD_LOAN_APPLICATION_URL} className="btn btn-blue">Apply For A Loan</Link>
                                <Link to={ABOUT_URL} className="btn btn-dark">Learn More</Link>
                            </div>
                        </div>
                        <div className="choice__image-box">
                            <img src={"assets/choice-img.png"} alt="a guy who is surprised"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="loans loans-pc">
                <div className="container">
                    <div className="loans__inner-pc">
                        <div>
                            <h3 className="h-3">Eazi SME Support</h3>
                            <p>Are you a small or medium enterprise seeking IPO financing, working capital financing, or
                                contract financing? We have got you covered. Get up to 2 million naira with repayment
                                duration of 1-6months with a flexible monthly interest rate</p>
                        </div>

                        <div>
                            <h3 className="h-3">Eazi 30/31</h3>
                            <p>Perfect loan for salary earners. Get between N50,000 – N250,000 with a repayment duration
                                of 3 months. Perfect for emergencies and consumer items.</p>
                        </div>

                        <div>
                            <h3 className="h-3">Emergency Loans</h3>
                            <p>Emergencies happen. Eazicred is your trusted partner to fill in those financial gaps till
                                you get back on your feet.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="loans loans-mobile">
                <div className="container">
                    <div className="loans__inner-mobile">
                        <div>
                            <h3 className="h-3">Eazi SME Support</h3>
                            <p>Are you a small or medium enterprise seeking IPO financing, working capital financing, or
                                contract financing? We have got you covered. Get up to 2 million naira with repayment
                                duration of 1-6months with a flexible monthly interest rate</p>
                        </div>

                        <div>
                            <h3 className="h-3">Eazi 30/31</h3>
                            <p>Perfect loan for salary earners. Get between N50,000 – N200,000 with a repayment duration
                                of 3 months. Perfect for emergencies and consumer items.</p>
                        </div>

                        <div>
                            <h3 className="h-3">Emergency Loans</h3>
                            <p>Emergencies happen. Eazicred is your trusted partner to fill in those financial gaps till
                                you get back on your feet.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="eligibility">
                <div className="container">
                    <div className="eligibility__inner">
                        <div className="eligibility__image-box">
                            <img src={"assets/eligibility-img.png"} alt="a woman laughing"/>
                        </div>
                        <div className="eligibility__text-box">
                            <h2 className="h-2">Check If You Are Eligible</h2>
                            <p className="p-2">For An EaziCred Loan</p>
                            <p className="p">To be eligible for an Eazicred loan:</p>
                            <ul>
                                <li>You must be between 22 – 58 years old</li>
                                <li>You must be a resident of Lagos State</li>
                                <li>You must be a salary earner or own a small or medium enterprise (duly registered with CAC)</li>
                                <li>You must have bank statement dating back to the last 6months</li>
                                <li>You must have a valid government issued ID card</li>
                                <li>You must have a guarantor (conditional)</li>
                                <li>You must have proof of residence (Utility bill)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <div className="container">
                    <h2 className="h-2">What People Are Saying</h2>
                    <p className="p-2">About Us</p>
                    <div className="testimonials__inner">
                        <div className="testimonials__list">

                            <div className="testimonial">
                                <div className="testimonial__user-profile">
                                    <img src={"assets/george.png"} alt="George Anderson"/>
                                        <div>
                                            <h6 className="h-6">George Anderson</h6>
                                            <p>CEO Johnson LTD</p>
                                        </div>
                                </div>
                                <div className="testimonial__text">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                    <div className="rating">
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="far fa-star"/>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial">
                                <div className="testimonial__user-profile">
                                    <img src={"assets/george.png"} alt="George Anderson"/>
                                        <div>
                                            <h6 className="h-6">George Anderson</h6>
                                            <p>CEO Johnson LTD</p>
                                        </div>
                                </div>
                                <div className="testimonial__text">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                    <div className="rating">
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="far fa-star"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="testimonials__overview">
                            <div className="arrow-btns">
                                <button><i className="fas fa-chevron-right"/></button>
                                <button><i className="fas fa-chevron-left"/></button>
                            </div>
                            <div className="testimonials__details">
                                <h3 className="h-3">Our customers have amazing reviews<br/> about our service</h3>
                                <div className="quote">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                                <div className="user-profile">
                                    <img src={"assets/christian.png"} alt="George Anderson"/>
                                        <div>
                                            <h6 className="h-6">George Anderson</h6>
                                            <p>CEO Johnson LTD</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LoanCalculator/>
            <OnPageSignUp/>
        </React.Fragment>
    )
}
export default Home