/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useDispatch } from 'react-redux';

import { hideNotification } from '../../redux/actions/actions';

const FilesLoanModal = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        setTimeout(() => dispatch(hideNotification()), 5000)
    }, [])
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Loan Application Sent</h3>
                <p>Your loan application has been sent successfully. An EaziCred agent would contact you soon</p>
                <button type={"button"} onClick={() => dispatch(hideNotification())} id="close"
                        className="btn btn-blue">Okay
                </button>
            </div>
        </div>
    );
}

export default FilesLoanModal;