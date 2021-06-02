import React from 'react';

import eazicred_team from '../../assets/eazicred-team.jpg';
import OnPageSignUp from './OnPageSignUp';

const About = () => {
    document.title = "EaziCred - About Us"
    React.useEffect(() => {
      window.scrollTo(0,0);
    })
    return (
        <React.Fragment>
            <header>
                <div className="hero-abt">
                    <img src={eazicred_team} alt="eazicred team thumbnail"/>
                </div>
            </header>
            <section className="about">
                <div className="container">
                    <div className="about__inner">
                        <h2 className="h-2">About Us</h2>
                        <p className="pt-14">Eazicred is a leading financial services company established in 2020 with a simple mission to
                            simplify the consumer loan process.</p>

                        <p>We offer up to N250,000 consumer loans, and up to N2,000,000 SME loans. We offer the best
                            rates out there. Because we know that no two situations are alike. Our team of professionals
                            are always on hand to guide you through the loan application process tailored to your
                            particular needs. Start your journey with us today.</p>

                        <h2 className="h-2">Our Mission</h2>
                        <p className="pt-14">To simplify the consumer loan process by providing quick and affordable loans using tech
                            innovations.</p>

                        <h2 className="h-2">Our Vision</h2>
                        <p className="pt-14">To become the number one fintech company in Africa.</p>
                    </div>
                </div>
            </section>
            <OnPageSignUp/>
        </React.Fragment>
    )
}
export default About
