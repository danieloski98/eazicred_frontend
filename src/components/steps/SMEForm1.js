import React from 'react';

import MessageAlert from '../../Common/MessageAlert';

const SmeForm1 = ({showMsg, field, handleChange}) => {
    return (
        <React.Fragment>
            <span>Step 1 / 1</span>
            <h3>Business Information</h3>
            <p>Tell us about yourself by completing the form below</p>
            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="business_name">Business Name</label>
                    <input value={field.business_name} onChange={handleChange} type="text" name="business_name" id="business_name" placeholder="Enter your business name" />
                </div>
                <div className="input-group">
                    <label htmlFor="business_address">Business Address</label>
                    <input value={field.business_address} onChange={handleChange} type="text" name="business_address" id="business_address" placeholder="Enter your business address" />
                </div>
                <div className="input-group">
                    <label htmlFor="business_up_time">Business Uptime</label>
                    <input value={field.business_up_time} onChange={handleChange} type="text" name="business_up_time" id="business_up_time" placeholder="Enter your business up time" />
                </div>
                <div className="input-group">
                    <label htmlFor="RC_number">RC Number</label>
                    <input value={field.RC_number} onChange={handleChange} type="text" name="RC_number" id="RC_number" placeholder="Enter your RC number" />
                </div>
                <div className="input-group">
                    <label htmlFor="TIN_number">TIN</label>
                    <input value={field.TIN_number} onChange={handleChange} type="text" name="TIN_number" id="TIN_number" placeholder="Enter your Tax Identification Number" />
                </div>
                <div className="input-group">
                    <label htmlFor="purpose_of_loan">Select Purpose Of Loan</label>
                    <input value={field.purpose_of_loan} onChange={handleChange} type="text" name="purpose_of_loan" id="purpose_of_loan" placeholder="Purpose of Loan" />
                </div>
                <div className="input-group">
                    <label htmlFor="draft">Save as Draft?</label>
                    <input checked={field.draft} onChange={handleChange}  type="checkbox" name="draft" id="draft"/>
                </div>
            </div>
            {showMsg && <MessageAlert/>}
            {!showMsg && <input type="submit" className="btn btn-blue" value="Submit" />}
        </React.Fragment>
    );
}

export default SmeForm1;