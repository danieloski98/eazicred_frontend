import React from 'react';

import { useHistory } from 'react-router-dom';

import { DASHBOARD_LOAN_APPLICATION_URL } from '../../routes/paths';
import DashboardContainer from './DashboardContainer';
import FilesLoanModal from "./FilesLoanModal";
import MessageAlert from "../../Common/MessageAlert";

const SmeLoan = ({showNotification, showMsg, field, handleChange, handleSubmit}) => {
    document.title = "Eazicred - SME Loan"
    const history = useHistory()
    return (
        <DashboardContainer page={'SME Loan'}>
            <div className="main__middle">
                <span  onClick={() => history.push(DASHBOARD_LOAN_APPLICATION_URL)} style={{cursor: "pointer"}} className="go-back">&lt; Go Back</span>
                <h2 className="h2-db">SME Loan Application</h2>
                <p className="p2-db">Fill in the forms to complete your loan application</p>
            </div>

            <div className="main__loan">
                <div className="main__loan--steps">
                    <div>
                        <div className={"main__loan--step active"}>
                            <div>
                                <h5>Business Info</h5>
                                <p>Enter your business information</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><defs><style dangerouslySetInnerHTML={{__html: ".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}" }} /></defs><g transform="translate(4 2.5)"><circle className="a" cx="4.778" cy="4.778" r="4.778" transform="translate(2.801 0)" /><path className="a" d="M0,3.016a2.215,2.215,0,0,1,.22-.97A4.042,4.042,0,0,1,3.039.426,16.787,16.787,0,0,1,5.382.1,25.053,25.053,0,0,1,9.767.1a16.979,16.979,0,0,1,2.343.33c1.071.22,2.362.659,2.819,1.62a2.27,2.27,0,0,1,0,1.95c-.458.961-1.748,1.4-2.819,1.611a15.716,15.716,0,0,1-2.343.339A25.822,25.822,0,0,1,6.2,6a4.066,4.066,0,0,1-.815-.055,15.423,15.423,0,0,1-2.334-.339C1.968,5.4.687,4.957.22,4A2.279,2.279,0,0,1,0,3.016Z" transform="translate(0 13.185)" /></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__loan--data">
                    <form onSubmit={handleSubmit}>
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
                    </form>
                    {showNotification && <FilesLoanModal/>}
                </div>
            </div>
        </DashboardContainer>
    );
}

export default SmeLoan;