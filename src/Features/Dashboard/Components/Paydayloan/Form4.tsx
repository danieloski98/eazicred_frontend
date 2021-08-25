import React from 'react'
//import * as yup from 'yup';
//import { useFormik } from 'formik'
import { useToast } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
// import useUser from '../../../../hooks/useUser';
import { paydayloanAtom } from '../../../../States/paydayloanstate';
import useForm from './useForm';

interface IProps {
  move: Function;
  values: any;
  handleChange: any;
  handleBlur: any;
  errors: any;
}


export default function PaydayloanForm4({ values, handleChange, handleBlur, errors, move}: IProps) {
  // const { user } = useUser();
  const [loan, setLoan] = useRecoilState(paydayloanAtom);
  const { formik } = useForm();
  const toast = useToast();


  React.useEffect(() => {}, [values.existing_loan]);


  const submit = () => {
    if (errors.current_paydate ||
      errors.existing_loan ||
      errors.loan_amount ||
      errors.loan_tenure ||
      errors.account_number ||
      errors.account_name ||
      errors.bank_name) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form properly to continue',
        position: 'top',
        status: 'error',
        isClosable: true
      });
      return;
    } else {
      console.log(values);
      move(5, errors);
    }
   }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Next Pay date</label>
            <input type="date" name="current_paydate" value={values.current_paydate} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.current_paydate && <p className="text-sm text-red-500 mt-3">{errors.current_paydate}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
            <label htmlFor={'newpassword'}>Do You Have An Existing Loan ?</label>
            <select name="existing_loan" value={values.existing_loan} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>

            {
              errors.existing_loan && <p className="text-sm text-red-500 mt-3">{errors.existing_loan}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

      <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Existing Loan type</label>
            <select name="existing_loan_type" value={values.existing_loan_type} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option selected disabled>Select existing loan type if any</option>
              <option value={0}>None</option>
              <option value={1}>Mortgage</option>
              <option value={2}>Over draft</option>
              <option value={3}>Car Loan</option>
              <option value={4}>Business Loan</option>
              <option value={5}>Credit card loan</option>
              <option value={6}>Personal Loan</option>
            </select>
            {
              errors.existing_loan_type && <p className="text-sm text-red-500 mt-3">{errors.existing_loan_type}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Loan amount applying for</label>
            <input  type="number" name="loan_amount" value={values.loan_amount} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.loan_amount && <p className="text-sm text-red-500 mt-3">{errors.loan_amount}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Loan tenure (Months)</label>
            <input  type="number" name="loan_tenure" value={values.loan_tenure} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.loan_tenure && <p className="text-sm text-red-500 mt-3">{errors.loan_tenure}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Account number</label>
            <input  type="text" name="account_number" value={values.account_number} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.account_number && <p className="text-sm text-red-500 mt-3">{errors.account_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Account Name</label>
            <input  type="text" name="account_name" value={values.account_name} onChange={handleChange} onBlur={handleBlur} onFocus={() => formik.setFieldTouched('account_name', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.account_name && <p className="text-sm text-red-500 mt-3">{errors.account_name}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Bank </label>
            <input  type="text" name="bank_name" value={values.bank_name} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.bank_name && <p className="text-sm text-red-500 mt-3">{errors.bank_name}</p>
            }
        </div>

      </div>


      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Hear abour us</label>
            <select name="hear_about_us" value={values.hear_about_us} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option selected disabled>How did you hear about us ?</option>
              <option value="Radio">Radio</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Flier">Flier</option>
              <option value="Tv">Tv</option>
              <option value="Others">Others</option>
            </select>
            {
              errors.hear_about_us && <p className="text-sm text-red-500 mt-3">{errors.hear_about_us}</p>
            }
        </div>


        </div>


      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
