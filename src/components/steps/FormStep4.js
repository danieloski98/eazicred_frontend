import React from 'react';

import MessageAlert from '../../Common/MessageAlert';

const FormStep4 = ({showMsg, prevStep, handleChange, handleKey, field}) => {
    return (
        <React.Fragment>
            <span>Step 4 / 4</span>
            <h3>Loan &amp; Verification</h3>
            <p>Fill in the required information and upload documents</p>
            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="existing_loan">Do you have any existing loan?</label>
                    <input checked={field.existing_loan} onChange={handleChange}  type="checkbox" name="existing_loan" id="existing_loan" placeholder="Yes or No" />
                </div>
                <div className="input-group">
                    <label htmlFor="existing_loan_type">What is your existing loan type?</label>
                    <select  value={field.existing_loan_type} onChange={handleChange}  name="existing_loan_type" id="existing_loan_type">
                        <option value={''}>None</option>
                        <option value={'mortage'}>Mortage</option>
                        <option value={'overdraft'}>Over Draft</option>
                        <option value={'carloan'}>Car Loan</option>
                        <option value={'businessloan'}>Business Loan</option>
                        <option value={'creditcardloan'}>Credit Card Loan</option>
                        <option value={'personalloan'}> Personal Loan</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="loan_amount">Loan Amount</label>
                    <input onInput={handleKey} value={field.loan_amount} onChange={handleChange} max={250000} type="number" name="loan_amount" id="loan_amount" placeholder="₦" />
                </div>
                <div className="input-group">
                    <label htmlFor="existing_loan_type">Loan Duration</label>
                    <select value={field.loan_tenure} onChange={handleChange} name="loan_tenure" id="loan_tenure">
                        <option value={1}>1 Month</option>
                        <option value={2}>2 Months</option>
                        <option value={3}>3 Months</option>
                        <option value={4}>4 Months</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="account_number">Account Number</label>
                    <input value={field.account_number} onChange={handleChange}  type="text" name="account_number" id="account_number" placeholder="Account number" />
                </div>
                <div className="input-group">
                    <label htmlFor="account_name">Account Name</label>
                    <input value={field.account_name} onChange={handleChange}  type="text" name="account_name" id="account_name" placeholder="Account Name" />
                </div>
                <div className="input-group">
                    <label htmlFor="bank_name">Bank Name</label>
                    <input value={field.bank_name} onChange={handleChange}  type="text" name="bank_name" id="bank_name" placeholder="Bank Name" />
                </div>
                <div className="input-group">
                    <label htmlFor="hear_about_us">How did you hear about us?</label>
                    <input value={field.hear_about_us} onChange={handleChange}  type="text" name="hear_about_us" id="hear_about_us" placeholder="How did you hear about us?" />
                </div>
                <div className="input-group">
                    <label htmlFor="draft">Save as Draft?</label>
                    <input checked={field.draft} onChange={handleChange}  type="checkbox" name="draft" id="draft"/>
                </div>
            </div>
            {!showMsg && (
                <div className="form-btns">
                    <input onClick={() => prevStep()} type="button" className="btn btn-blue btn-transparent" value="Back" />
                    <input type="submit" className="btn btn-blue" value="Submit" />
                </div>
            )}
            {showMsg && <MessageAlert/>}
        </React.Fragment>
    );
}

export default FormStep4;