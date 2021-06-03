import React from 'react';

import OnPageSignUp from './OnPageSignUp';

const Terms = () => {
    document.title = 'Eazicred - Terms of Services'
    React.useEffect(() => {
      window.scrollTo(0,0);
    })
    return (
        <React.Fragment>
            <section className="terms">
                <div className="container">
                    <div className="terms__inner">
                        <h2 className="h-2">Terms Of Service</h2>
                        <p className="mt-16">
                            Eazicred maintains www.eazicred.com (the “Website”) to provide you with information about
                            products and services available through us. Please read these Terms and Conditions carefully
                            before accessing or using this Website.
                            By accessing or using the Website, you agree to these Terms and Conditions.
                        </p>
                        <p>
                            Eazicred reserves the right to change, modify, add or remove portions of the terms at any
                            time. Please check these terms periodically for changes.
                            If you do not wish to be bound by this agreement, do not access the Website. If you have any
                            questions about this Agreement, please contact us via email at contact@eazicred.com.
                        </p>
                        <h3 className="mb-6 text-2xl font-bold">No Warranty</h3>
                        <p>We created this Website for the use of our online visitors. The information (including text,
                            graphics and functionality) is presented “as is” and “as available” without express or
                            implied warranties including, but not limited to, implied warranties of non-infringement,
                            merchantability and fitness for a particular purpose. </p>
                        <p>We expressly disclaim any liability for errors and omissions regarding the information and
                            materials contained in the Website. Due to the nature of the Internet, we cannot guarantee
                            the accuracy or completeness of the information contained in this Website or its suitability
                            for any purpose.
                        </p>
                        <h3 className="mb-6 text-2xl font-bold">Viruses</h3>
                        <p>Due to the marked increase in the fabrication and proliferation of computer viruses affecting
                            the Internet, we want to warn you about infections or viral contamination on your system. It
                            is your responsibility to scan any and all downloaded materials received from the Internet.
                            We are not responsible or liable for any damage caused by such hazards.</p>
                        <h3 className="mb-6 text-2xl font-bold">Limitation of Liability</h3>
                        <p>Your use of the Website is at your own risk. Notwithstanding any other provision in this
                            terms and conditions, neither Eazicred LTD, its affiliates, officers, directors, employees,
                            attorneys or agents shall have any liability with respect to, and you hereby waive, release
                            and agree not to sue any of them upon, any claim for any special, indirect, incidental,
                            consequential damages suffered or incurred by you in connection with, arising out of, or in
                            any way related to, a breach of this terms and condition.</p>
                        <h3 className="mb-6 text-2xl font-bold">Remedies</h3>
                        <p>Each of the parties will be entitled to enforce its rights in the event of a breach of the
                            terms of this privacy policy, to recover damages caused by any breach of the provisions
                            herein and to exercise all other rights existing under law. </p>
                        <p>Any claim or dispute arising in relation to this privacy policy shall be subject to the
                            jurisdiction of the courts of the Federal Republic of Nigeria. We shall not be liable for
                            any breach where a claim in respect of such breach is not brought within one month of the
                            date that such breach arose.</p>
                    </div>
                </div>
            </section>
            <OnPageSignUp/>
        </React.Fragment>
    );
}

export default Terms;
