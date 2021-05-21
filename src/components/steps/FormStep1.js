import React from 'react';

const FormStep1 = ({nextStep, handleChange, field}) => {
    return (
        <React.Fragment>
            <span>Step 1 / 4</span>
            <h3>Personal Information</h3>
            <p>Tell us about yourself by completing the form below</p>
            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="DOB">Date Of Birth</label>
                    <input value={field.DOB} onChange={handleChange} type="date" id="DOB" name="DOB" placeholder="DD / MM / YYYY"/>
                </div>
                <div className="input-group">
                    <label htmlFor="marital_status">Marital Status</label>
                    <select  value={field.marital_status} onChange={handleChange}  name="marital_status" id="marital_status">
                        <option value={1}>SINGLE</option>
                        <option value={2}>MARRIED</option>
                        <option value={3}>DIVORCED</option>
                        <option value={4}>SEPARATED</option>
                        <option value={5}>WIDOWED</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor={'state'}>State Of origin</label>
                    <input value={field.state} name={"state"} id="state" onChange={handleChange}  type="text" placeholder="Enter your state of origin"/>
                </div>
                <div className="input-group">
                    <label htmlFor="home_address">Home Address</label>
                    <input value={field.home_address} onChange={handleChange}  type="text" id="home_address" name="home_address" placeholder="enter your home address"/>
                </div>
                <div className="input-group">
                    <label htmlFor="means_of_id">Means of ID</label>
                    <select name="Means_of_ID" id="means_of_id" value={field.Means_of_ID} onChange={handleChange}>
                        <option value="driverlicense">Driver License</option>
                        <option value="governmentid">Government ID</option>
                        <option value="passport">Passport</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="ID_number">ID Number</label>
                    <input value={field.ID_number} onChange={handleChange}  type="text" name="ID_number" id="ID_number" placeholder="ID Number"/>
                </div>
                <div className="input-group">
                    <label htmlFor="date_issued">Date Issued</label>
                    <input type="date" id="date_issued" name="date_issued" value={field.date_issued} onChange={handleChange}  placeholder="DD / MM / YYYY"/>
                </div>
                <div className="input-group">
                    <label htmlFor="expiry_date">Card Expiry Date</label>
                    <input  value={field.expiry_date} onChange={handleChange}  type="date" id="expiry_date" name="expiry_date" placeholder="DD / MM / YYYY"/>
                </div>
            </div>
            <input onClick={() => nextStep()} type="button" className="btn btn-blue" value="Continue"/>
        </React.Fragment>
    );
}

export default FormStep1;