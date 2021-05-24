import React from 'react';

const FormStep2 = ({nextStep, prevStep, handleChange, field}) => {
    return (
        <React.Fragment>
            <span>Step 2 / 4</span>
            <h3>Location</h3>
            <p>Information about where you are located</p>
            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="home_address">Home Address</label>
                    <input value={field.home_address} onChange={handleChange}  type="text" id="home_address" name="home_address" placeholder="enter your home address"/>
                </div>
                <div className="input-group">
                    <label htmlFor="LGA_of_residence">Local Government Area</label>
                    <input value={field.LGA_of_residence} onChange={handleChange}  type="text" name="LGA_of_residence" id="LGA_of_residence" placeholder="Enter your residence's local government area" />
                </div>
                <div className="input-group">
                    <label htmlFor="state">State Of Residence</label>
                    <input value={field.state} onChange={handleChange}  type="text" id="state" name="state" placeholder="" />
                </div>
                <div className="input-group">
                    <label htmlFor="landmark">Landmark</label>
                    <input value={field.landmark} onChange={handleChange}  type="text" id="landmark" name="landmark" placeholder="Closest Landmark To Your Residence" />
                </div>
                {/*<div className="input-group">*/}
                {/*    <label htmlFor={'state'}>State</label>*/}
                {/*    <input value={field.state} name={"state"} id="state" onChange={handleChange}  type="text" placeholder="Enter your state of origin"/>*/}
                {/*</div>*/}
                <div className="input-group">
                    <label htmlFor='length_of_time_at_current_address'>How Long Have You Lived Here ?</label>
                    <select value={field.length_of_time_at_current_address} onChange={handleChange}  name="length_of_time_at_current_address" id="length_of_time_at_current_address">
                        <option>Select Duration</option>
                        <option value={0}>Less than a year</option>
                        <option value={1}>more than a Year</option>
                        <option value={2}>more than 2 Years</option>
                        <option value={3}>more than 3 Years</option>
                        <option value={4}>more than 4 Years</option>
                        <option value={5}>more than 5 Years</option>
                    </select>
                </div>
            </div>
            <div className="form-btns">
                <input onClick={() => prevStep()} type="button" className="btn btn-blue btn-transparent" value="Back" />
                <input onClick={() => nextStep()} type="button" className="btn btn-blue" value="Continue" />
            </div>
        </React.Fragment>

    );
}

export default FormStep2;