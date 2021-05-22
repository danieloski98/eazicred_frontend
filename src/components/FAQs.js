import React from 'react';

import OnPageSignUp from './OnPageSignUp';

const Faqs = () => {
    document.title = "EaziCred - FAQs"
    return (
        <div>
            <header>
                <div className="hero-faq container-lg">
                    <div className="hero-faq__text-box">
                        <h2 className="h-2">FAQs</h2>
                        <div className="faq">
                            <h6 className="h-6">Q: How do I apply?</h6>
                            <p>A: Apply on this website or call us on +234 802 074 0286</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: Minimum/Maximum amount of loan I can apply for</h6>
                            <p>A: N50,000/N250,000 for Salary earners; N500,000/N2,000,000 for SMEs</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: What is your interest rate on loans?</h6>
                            <p>A: Our interest rates vary according to risk, and the economic environment.</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: What is your repayment period?</h6>
                            <p>A: Between 1 – 6 months</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: Requirements for loans</h6>
                            <p>A: Valid Government Issued ID card, BVN, Proof of Residence, 6 months Bank statement for
                                salary account (Consumer loan), 6 months Business bank statement for Business account
                                (SMES), CAC Documentation (SMES), Staff ID card (Consumer loan), Letter of employment
                                and confirmation of employment (Consumer loan)</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: How do I pay back my loan?</h6>
                            <p>A: Loans are primarily paid back via direct debit (Remita) or Nuban cheque</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: Do I need to come to the office to apply for a loan or repayment</h6>
                            <p>A: No. Everything you need for the loan and repayment process can be done online or over
                                the phone</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: How long does it take for loan to be disbursed?</h6>
                            <p>A: 24 hours or less after terms of the loan are agreed Q: Can I liquidate an existing
                                loan?</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: Can I change repayment date?</h6>
                            <p>A: Yes but with small fee</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: Can I request for additional loans while a loan is ongoing?</h6>
                            <p>A: No. A loan cycle has to be completed before starting another one. A new one can be
                                started immediately after the last repayment</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: How do I know if my loan has been approved?</h6>
                            <p>A. Via email and text message</p>
                        </div>
                        <div className="faq">
                            <h6 className="h-6">Q: Can I manually make a repayment?</h6>
                            <p>A: Yes but repayment can only be made to our EAZICRED bank account</p>
                        </div>
                        <div className="faq">
                            <p>Feel free to contact us if you have any question outside the scope of this FAQs.</p>
                        </div>
                    </div>
                    <div className="hero-faq__image">
                        <img src={"assets/faq-image.png"} alt="a woman sitting on the couch with a laptop"/>
                    </div>
                </div>
            </header>
            <OnPageSignUp/>
        </div>
    )
}
export default Faqs