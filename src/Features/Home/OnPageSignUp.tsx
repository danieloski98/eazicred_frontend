import React from 'react';
import { Link } from 'react-router-dom';

const OnPageSignUp = () => {
    return (
        <section className="signup signup-abt">
            <div className="container">
                <h2 className="h-2"> Sign Up & Apply For A Loan Today</h2>
                <p className="pt-20">You're one step away from financial freedom. Apply for a loan today, payback and access more
                    loans
                </p>
                <Link to='/register'><span>Get Started</span><i
                    className="fas fa-arrow-right"/></Link>
            </div>
        </section>
    )
}

export default OnPageSignUp
