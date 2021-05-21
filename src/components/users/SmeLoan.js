import React from 'react';

import { useHistory } from 'react-router-dom';

import { DASHBOARD_LOAN_APPLICATION_URL } from '../../routes/paths';
import DashboardContainer from './DashboardContainer';
import LoanModal from './LoanModal';

const SmeLoan = ({showNotification, step, switchForm, handleSubmit}) => {
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
                        <div className={step === 1 ? 'main__loan--step active' : "main__loan--step"}>
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
                        {switchForm()}
                    </form>
                    {showNotification && <LoanModal/>}
                </div>
            </div>
        </DashboardContainer>
    );
}

export default SmeLoan;