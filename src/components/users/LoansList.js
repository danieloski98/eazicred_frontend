import React, {
  useEffect,
  useState,
} from 'react';

import { connect } from 'react-redux';
import {
  useHistory,
  useLocation,
} from 'react-router-dom';

import Loader from '../../Common/Loader';
import { fetchAllUserLoans } from '../../redux/actions/loanThunk';
import { DASHBOARD_HISTORY_URL } from '../../routes/paths';
import EmptyLoanHistory from './EmptyLoanHistory';
import LoanDetailsModal from './LoanDetailsModal';

export const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'NGN', maximumFractionDigits:0});

const LoansList = ({loans, fetchAllLoans}) => {
    useEffect(() => {
        fetchAllLoans()
    }, []);

    const isLoading = () => {
        return loans.loading
    }

    const [open, setOpen] = useState(false)
    const [loan, setLoan] = useState(null)

    function formatDate(date) {
        return new Date(date).toDateString()
    }

    const history = useHistory()
    const showLoanDetails = (loan) => {
        setOpen(true)
        setLoan(loan)
    }
    const loanType = (type) => {
        switch (type) {
            case 1:
                return "Payday Loan"
            case 2:
                return "SME Loan"
        }
    }
    const location = useLocation()
    const loanData = [...loans.paydayLoans]
    return isLoading() ? <Loader/> : loanData.length > 0 ? (
        <div className="main__loan-history">
            <div className="main__loan-history--top">
                <h3 className="h3-db">Loan History</h3>
                {location.pathname !== DASHBOARD_HISTORY_URL &&
                <button onClick={() => history.push(DASHBOARD_HISTORY_URL)} className="view-history">View All</button>}
            </div>
            <div className="main__loan-history--box">
                <div className="loan__row loan__heading">
                    <span>Date</span>
                    <span>Transaction ID</span>
                    <span>Transaction Type</span>
                    <span>Amount</span>
                    <span>Action</span>
                </div>
                {loanData.map(loan => (
                    <div className="loan__row" key={loan.id}>
                        <span>{formatDate(loan.created_at)}</span>
                        <span>#{loan.id}</span>
                        <span>{loanType(loan.type)}</span>
                        <span>{loan.type === 1 && currency.format(loan.loan_amount)}</span>
                        <button onClick={() => showLoanDetails(loan)} className="view-details">View Detail</button>
                    </div>
                ))}
            </div>
            {open && <LoanDetailsModal loan={loan} setLoan={setLoan} setOpen={setOpen}/>}
        </div>
    ) : (
        <EmptyLoanHistory/>
    )
}

const mapState = (state) => {
    return {
        loans: state.userLoans,
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllLoans: () => dispatch(fetchAllUserLoans()),
    }
}

export default connect(mapState, mapDispatch)(LoansList);