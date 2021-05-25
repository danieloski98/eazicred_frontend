/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { hideNotification } from '../../redux/actions/actions';
import { DASHBOARD_CONSUMER_LOAN_UPLOAD_URL } from '../../routes/paths';

const LoanModal = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    React.useEffect(() => {
        setTimeout(() => {
            dispatch(hideNotification())
            history.push(DASHBOARD_CONSUMER_LOAN_UPLOAD_URL)
        }, 5000)
    }, [])
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Loan Application Sent</h3>
                <p>Your loan application has been sent successfully and it's pending. please complete your loan application by providing
                additional documents else your application will be rejected. </p>
                <button onClick={() => history.push(DASHBOARD_CONSUMER_LOAN_UPLOAD_URL)} className="btn btn-blue">
                    Upload Documents</button>
            </div>
        </div>
    );
}

export default LoanModal;