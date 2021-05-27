import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Loader from '../../Common/Loader';
import MessageAlert from '../../Common/MessageAlert';
import { uploadFiles } from '../../redux/actions/loanThunk';
import { DASHBOARD_LOAN_APPLICATION_URL } from '../../routes/paths';
import DashboardContainer from './DashboardContainer';
import FilesLoanModal from './FilesLoanModal';

const SendPaydayFiles = ({history}) => {
    const uploaded = useSelector(state => state["applyLoan"].uploaded)
    const uploading = useSelector(state => state["applyLoan"].uploading)

    const error = useSelector(state => state["applyLoan"].payday.error)
    const dispatch = useDispatch()
    const [field, setField] = React.useState({
        passport: null,
        government_ID: null,
        company_id: null,
        letter_of_employment: null,
        utility_bill: null,
    })

    const handleChange = e => {
        const {name, files} = e.target
        setField({...field, [name]: files[0]})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(uploadFiles(field, history))
    }

    return (uploading ? <Loader/> :
        <DashboardContainer page={"Upload files"}>
            <div className="main__middle">
                <span onClick={() => history.push(DASHBOARD_LOAN_APPLICATION_URL)} style={{cursor: "pointer"}}
                      className="go-back">&lt; Go Back</span>
                <h2 className="h2-db">Payday / Emergency Loan</h2>
                <p className="p2-db">Prove yourself by completing the form below</p>
            </div>
            <div className="main__loan">
                <div className="main__loan--steps">
                    <div>
                        <div className={'main__loan--step active'}>
                            <div>
                                <h5>Documents</h5>
                                <p>Upload your documents</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{__html: ".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}"}}/>
                                    </defs>
                                    <g transform="translate(4 2.5)">
                                        <circle className="a" cx="4.778" cy="4.778" r="4.778"
                                                transform="translate(2.801 0)"/>
                                        <path className="a"
                                              d="M0,3.016a2.215,2.215,0,0,1,.22-.97A4.042,4.042,0,0,1,3.039.426,16.787,16.787,0,0,1,5.382.1,25.053,25.053,0,0,1,9.767.1a16.979,16.979,0,0,1,2.343.33c1.071.22,2.362.659,2.819,1.62a2.27,2.27,0,0,1,0,1.95c-.458.961-1.748,1.4-2.819,1.611a15.716,15.716,0,0,1-2.343.339A25.822,25.822,0,0,1,6.2,6a4.066,4.066,0,0,1-.815-.055,15.423,15.423,0,0,1-2.334-.339C1.968,5.4.687,4.957.22,4A2.279,2.279,0,0,1,0,3.016Z"
                                              transform="translate(0 13.185)"/>
                                    </g>
                                </svg>
                            </div>                            </div>
                    </div>
                </div>
                <div className="main__loan--data">
                    <form onSubmit={handleSubmit}>
                        <span>Step 5 / 5</span>
                        <h3>Upload required files</h3>
                        <p>Update your existing loan and upload required files</p>
                        <div className="input-groups">
                            <div className="input-group">
                                <label htmlFor="passport">Passport</label>
                                <input onChange={handleChange} name={"passport"} type="file"
                                       id="passport"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="government_ID">Government ID</label>
                                <input onChange={handleChange} name={'government_ID'} type="file"
                                       id="government_ID"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="company_id">Company ID</label>
                                <input onChange={handleChange} name={"company_id"} type="file"
                                       id="company_id"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="letter_of_employment">Letter of Employment</label>
                                <input onChange={handleChange} name={"letter_of_employment"} type="file"
                                       id="letter_of_employment"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="utility_bill">Utility Bill</label>
                                <input onChange={handleChange} name={"utility_bill"} type="file"
                                       id="utility_bill"/>
                            </div>
                        </div>
                        <div className="form-btns">
                            <input type="submit" className="btn btn-blue" value="Submit"/>
                        </div>
                        {!!error && <MessageAlert/>}
                    </form>
                    {uploaded && <FilesLoanModal/>}
                </div>
            </div>
        </DashboardContainer>
    );
}

export default SendPaydayFiles