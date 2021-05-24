import React from 'react';

import {
  connect,
  useDispatch,
  useSelector,
} from 'react-redux';

import FormStep1 from '../../components/steps/FormStep1';
import FormStep2 from '../../components/steps/FormStep2';
import FormStep3 from '../../components/steps/FormStep3';
import FormStep4 from '../../components/steps/FormStep4';
import Consumer from '../../components/users/Consumer';
import { applyPaydayLoan } from '../../redux/actions/loanThunk';

const ConsumerContainer = ({user}) => {
    const [field, setField] = React.useState({
        user_id: user.id,
        BVN: '',
        DOB: '',
        Means_of_ID: 'governmentid',
        date_issued: '',
        expiry_date: '',
        home_address: '',
        landmark: '',
        LGA_of_residence: '',
        // state: '',
        length_of_time_at_current_address: 2,
        marital_status: 1,
        employment_status: 1,
        current_employer: '',
        current_employer_address: '',
        current_employer_landmark: '',
        current_employer_LGA: '',
        current_employer_state: '',
        current_employer_office_number: '',
        department: '',
        ID_number: '',
        job_title: '',
        // jobs_in_last_5_years: 2,
        current_paydate: '',
        existing_loan: false,
        existing_loan_type: 1,
        next_of_kin_surname: '',
        next_of_kin_firstname: '',
        next_of_kin_relationship: '',
        next_of_kin_phone: '',
        next_of_kin_address: '',
        loan_amount: 250000,
        loan_tenure: '12',
        account_number: '',
        account_name: '',
        bank_name: '',
        hear_about_us: '',
        draft: false,
        type: 1
    })

    const [step, setStep] = React.useState(1)
    const nextStep = () => {
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
    }
    const handleKey = e => {
        if (e.target.value > 250000){
            e.target.value = 250000
        }
    }
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        switch(type){
            case "checkbox":
                setField({...field, [name]: checked})
                break
            default:
                setField({...field, [name]: value})
                break
        }
    }
    const showMsg = useSelector(state => state.notify.message.show)

    document.title = "Eazicred - Consumer Loan"
    const switchForm = () => {
        switch (step) {
            case 1:
                return <FormStep1 field={field} handleChange={handleChange} nextStep={nextStep}/>
            case 2:
                return <FormStep2 field={field} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>
            case 3:
                return <FormStep3 field={field} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>
            case 4:
                return <FormStep4 handleKey={handleKey}  field={field} handleChange={handleChange} showMsg={showMsg} prevStep={prevStep}/>
        }
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(applyPaydayLoan(field))
    }

    const showNotification = useSelector(state => state["notify"].show)

    return (
        <Consumer showNotification={showNotification} handleSubmit={handleSubmit} switchForm={switchForm} step={step}/>
    );
}


const mapState = (state) => {
    return {
        user: state.auth.user,
    }
}
export default connect(mapState)(ConsumerContainer);