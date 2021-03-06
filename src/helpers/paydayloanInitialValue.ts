import { IUser } from "./UserType"

export const VALUES = (user: IUser) => {
    return {
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        DOB: '',
        BVN: '',
        Means_of_ID: 'Drivers Lincence',
        date_issued: '',
        ID_number: '',
        expiry_date: '',
        alt_number: '',
        marital_status: 1,
        next_of_kin_surname: '',
        next_of_kin_firstname: '',
        next_of_kin_relationship: '',
        next_of_kin_phone: '',
        next_of_kin_address: '',
        state: '',
        landmark: '',
        LGA_of_residence: '',
        home_address: '',
        employment_status: 1,
        current_employer: '',
        current_employer_address: '',
        current_employer_landmark: '',
        current_employer_LGA: '',
        current_employer_state: '',
        current_employer_office_number: '',
        staff_id: '',
        department: '',
        job_title: '',
        date_employed: '',
        previous_employer: '',
        previous_employer_address: '',
        jobs_in_past_5_years: 0,
        current_paydate: '',
        existing_loan: 1,
        existing_loan_type: 1,
        loan_amount: 0,
        loan_tenure: 0,
        account_number: '',
        account_name: '',
        bank_name: '',
        hear_about_us: 'Radio',
    }
}