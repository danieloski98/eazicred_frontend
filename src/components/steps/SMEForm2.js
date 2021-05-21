import React from 'react';

const SmeForm2 = ({field, handleChange, prevStep}) => {
    return (
        <React.Fragment>
            <span>Step 2 / 2</span>
            <h3>Business Information</h3>
            <p style={{marginBottom: 25}}>Tell us about yourself by completing the form below</p>
            {/*<form>*/}
                <div className="input-groups">
                    <div className="input-group">
                        <label htmlFor="business_name">Business Name</label>
                        <input onChange={handleChange} value={field.business_name} name={"business_name"} type="text"
                               id='business_name' placeholder="Enter your business name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="business_address">Business Address</label>
                        <input onChange={handleChange} value={field.business_address} name={'business_address'}
                               type="text" id='business_address' placeholder="Enter your business address"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="RC_number">RC Number</label>
                        <input onChange={handleChange} type="text" id="RC_number" name={'RC_number'}
                               value={field.RC_number} placeholder="Enter your RC number"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="TIN_number">TIN</label>
                        <input onChange={handleChange} value={field.TIN_number} name={'TIN_number'} type="text"
                               id="TIN_number" placeholder="Enter your Tax Identification Number"/>
                    </div>
                    <div className="input-group input-group-tel">
                        <label htmlFor="telephone_number">Telephone Number</label>
                        <div className="tel">
                            <select onChange={handleChange}>
                                <option value="234">+234</option>
                            </select>
                            <input id="telephone_number" value={field.telephone_number} onChange={handleChange}
                                   name={'telephone_number'} type="text"/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="purpose_of_loan">Select Purpose Of Loan</label>
                        <select onChange={handleChange} value={field.purpose_of_loan} name="purpose_of_loan"
                                id="purpose_of_loan">
                            <option>Select Loan Purpose</option>
                            <option value="education">Education</option>
                            <option value="health">Health</option>
                            <option value="accomodation">Accomodation</option>
                        </select>
                    </div>
                </div>
                <input onClick={() => prevStep()} type="button" className="btn btn-dark" value="Back"/>
                <input type="submit" className="btn btn-dark btn-white" value="Submit"/>
            {/*</form>*/}
        </React.Fragment>
    );
}

export default SmeForm2;