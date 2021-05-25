import React from 'react';

import {
  Link,
  useHistory,
} from 'react-router-dom';

import {
  DASHBOARD_CONSUMER_LOAN_APPLICATION_URL,
  DASHBOARD_SME_LOAN_APPLICATION_URL,
  DASHBOARD_URL,
} from '../../routes/paths';
import DashboardContainer from './DashboardContainer';

const LoanApplication = () => {
    document.title = "Loan Application"
    const handleMouseOver = e => {
        e.target.classList.add("active")
    }
    const handleMouseOut = e => {
        e.target.classList.remove("active")
    }
    const history = useHistory()
    return (
        <DashboardContainer page={'Loan Applications'}>
            <div className="main__middle">
                <span onClick={() => history.push(DASHBOARD_URL)} style={{cursor: "pointer"}} className="go-back">&lt; Go Back</span>
                <h2 className="h2-db">Apply For Loan</h2>
                <p className="p2-db">Select a loan type from the options below to continue</p>
            </div>
            <div className="main__loan-overview">
                <div className="loan-types">
                    <Link onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}
                          to={DASHBOARD_CONSUMER_LOAN_APPLICATION_URL} className="loan-type consumer-loan">
                        <div>
                            <h3 className="h3-db">Consumer Loans</h3>
                            <p>Are you a salary earner? This is for you. Click here</p>
                        </div>
                    </Link>
                    <Link onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}
                          to={DASHBOARD_SME_LOAN_APPLICATION_URL} className="loan-type sme-loan">
                        <div>
                            <h3 className="h3-db">SME Loans</h3>
                            <p>Business expansion or Contract financing ? Click here</p>
                        </div>
                    </Link>
                </div>
            </div>
        </DashboardContainer>
    )
}

export default LoanApplication;