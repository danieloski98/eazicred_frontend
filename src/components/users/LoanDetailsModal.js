import React, {
  useEffect,
  useState,
} from 'react';

import { currency } from './LoansList';

export const loanStatus = status => {
    switch (status) {
        case 1:
            return "Pending"
        case 2:
            return "Approved"
        case 3:
            return "Rejected"
        default:
            return "NOT ON (API)"
    }
}

const LoanDetailsModal = ({setOpen, loan, setLoan}) => {
    const [results, setResults] = useState({monthlyPayment: 0, interestRate: 7, totalInterest: 0});

    function getResults() {
        const {loan_amount, loan_tenure} = loan
        const principal = parseFloat(loan_amount);
        const interest = 7 / 100;
        const months = parseFloat(loan_tenure);
        const monthlyInterest = interest * principal;
        const totalInterest = monthlyInterest * months;
        const totalPayment = principal + totalInterest;
        const monthlyPayment =  parseInt((totalPayment / months).toFixed(2));
        setResults({interestRate: monthlyInterest, monthlyPayment, totalInterest})
    }

    const period = (period) => {
        if (period > 1) {
            return `${period} months`;
        } else {
            return `${period} month`;
        }
    }

    useEffect(() => {
        getResults()
    }, [])
    
    const handleClose = () => {
        setOpen(false)
        setLoan(null)
    }
    const {id, status} = loan
    return (
        <div className="modal">
            <div className="modal-inner">
                <div className="modal__top">
                    <h3>Loan Details</h3>
                    <button onClick={handleClose} className="close">x</button>
                </div>
                <div className="modal__middle">
                    <div>
                        <h5>Loan ID</h5>
                        <span>#{id}</span>
                    </div>
                    <div>
                        <h5>Duration</h5>
                        <span>{period(loan.loan_tenure)}</span>
                    </div>
                    <div>
                        <h5>Loan Status</h5>
                        <span>{loanStatus(status)}</span>
                    </div>
                    <div>
                        <h5>Over Due Date</h5>
                        <span>{new Date(loan.expiry_date).toDateString()}</span>
                    </div>
                </div>
                <div className="modal__bottom">
                    <div>
                        <span>Loan Amount</span>
                        <span>{currency.format(loan.loan_amount)}</span>
                    </div>
                    <div>
                        <span>Monthly Interest</span>
                        <span>{currency.format(results.interestRate)}</span>
                    </div>
                    <div>
                        <span>Total Interest</span>
                        <span>{currency.format(results.totalInterest)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanDetailsModal