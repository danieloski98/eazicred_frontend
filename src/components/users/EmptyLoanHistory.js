import React from 'react';

import { Link } from 'react-router-dom';
import empty from "../../assets/empty.svg"
import { DASHBOARD_LOAN_APPLICATION_URL } from '../../routes/paths';

const EmptyLoanHistory = () => {
    return (
        <div className="main__loan-nohistory">
            <div>
                <img src={empty} alt="empty box"/>
                <h3 className="h3-db">Loan History</h3>
                <p>You haven't taken any loans yet.
                    <Link to={DASHBOARD_LOAN_APPLICATION_URL}>
                    Apply for one now
                    </Link></p>
            </div>
        </div>
    );
}

export default EmptyLoanHistory;