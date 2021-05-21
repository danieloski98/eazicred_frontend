import React from 'react';

import DashboardContainer from './DashboardContainer';
import LoansList from './LoansList';

const History = () => {
    document.title = "EaziCred - Loan History"
    return (
        <DashboardContainer page={'History'}>
            <div className="main__middle">
                <h2 className="h2-db">Transaction History</h2>
                <p className="p2-db">Here's a summary of all your transactions</p>
            </div>
            <LoansList/>
        </DashboardContainer>
    );
}

export default History;