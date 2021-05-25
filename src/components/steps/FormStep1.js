import React from 'react';

const FormStep1 = ({nextStep, handleChange, field}) => {
    return (
        <React.Fragment>
            <span>Step 1 / 5</span>
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
                        <option value={1}>Single</option>
                        <option value={2}>Married</option>
                        <option value={3}>Divorced</option>
                        <option value={4}>Separated</option>
                        <option value={5}>Widowed</option>
                    </select>
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
                <div className="input-group">
                    <label htmlFor="bvn">BVN</label>
                    <input value={field.BVN} onChange={handleChange}  type="text" id="bvn" name="BVN" placeholder="Enter your BVN" />
                </div>

                <div className="input-group">
                    <label htmlFor="next_of_kin_surname">Surname of Next of Kin</label>
                    <input value={field.next_of_kin_surname} onChange={handleChange}  type="text" name="next_of_kin_surname" id="next_of_kin_surname" placeholder="Surname of next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_firstname">First Name of Next of Kin</label>
                    <input value={field.next_of_kin_firstname} onChange={handleChange}  type="text" name="next_of_kin_firstname" id="next_of_kin_firstname" placeholder="Firstname of next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_relationship">Relationship with Next of Kin</label>
                    <input value={field.next_of_kin_relationship} onChange={handleChange}  type="text" name="next_of_kin_relationship" id="next_of_kin_relationship" placeholder="State your relationship with next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_phone">Phone Number of Next of Kin</label>
                    <input value={field.next_of_kin_phone} onChange={handleChange}  type="text" name="next_of_kin_phone" id="next_of_kin_phone" placeholder="Phone number of next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_address">Address of Next of Kin</label>
                    <input value={field.next_of_kin_address} onChange={handleChange}  type="text" name="next_of_kin_address" id="next_of_kin_address" placeholder="Address of next of kin" />
                </div>
            </div>
            <input onClick={() => nextStep()} type="button" className="btn btn-blue" value="Continue"/>
        </React.Fragment>
    );
}

export default FormStep1;