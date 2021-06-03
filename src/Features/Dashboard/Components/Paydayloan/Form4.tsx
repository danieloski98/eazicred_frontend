import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { useToast } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
// import useUser from '../../../../hooks/useUser';
import { paydayloanAtom } from '../../../../States/paydayloanstate';
import useForm from './useForm';

interface IProps {
  move: Function;
}

// validation schema
const validationSchema = yup.object({
  current_paydate: yup.date().required('This field is required'),
  existing_loan: yup.bool().required('This field is required'),
  existing_loan_type: yup.number(),
  loan_amount: yup.number().required('This field is required').max(250000, 'Cannot apply for an amount larger than NGN250000'),
  loan_tenure: yup.number().required('This field is required').max(4, 'Cannot be greater than 4 month'),
  account_number: yup.string().required('This field is required'),
  account_name: yup.string().required('This field is required'),
  bank_name: yup.string().required('This field is required'),
  hear_about_us: yup.string(),
});

export default function PaydayloanForm4(props: IProps) {
  // const { user } = useUser();
  const [loan, setLoan] = useRecoilState(paydayloanAtom);
  const { formik } = useForm();
  const toast = useToast();

  // formik
  // const formik = useFormik({
  //   initialValues: {
  //     current_paydate: '',
  //     existing_loan: 1,
  //     existing_loan_type: 1,
  //     loan_amount: 0,
  //     loan_tenure: 0,
  //     account_number: '',
  //     account_name: '',
  //     bank_name: '',
  //     hear_about_us: 'Radio',
  //   },
  //   onSubmit: () => {},
  //   validationSchema
  // });


  const submit = () => {
    if (!formik.dirty) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form to continue',
        position: 'top',
        status: 'error',
        isClosable: true
      });
      return;
    }
    // if (!formik.isValid) {
    //    toast({
    //      title: 'Attention',
    //      description: 'You have to fill in the form correctly to continue',
    //      position: 'top',
    //      status: 'error',
    //      isClosable: true
    //    })
    //    return;
    // }
    else {
      setLoan({...loan, ...formik.values});
      console.log(loan);
      props.move(5);
    }
   }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Next Pay date</label>
            <input type="date" name="current_paydate" value={formik.values.current_paydate} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('current_paydate', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.current_paydate && <p className="text-sm text-red-500 mt-3">{formik.errors.current_paydate}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
            <label htmlFor={'newpassword'}>Do You Have An Existing Loan ?</label>
            <select name="existing_loan" value={formik.values.existing_loan} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('existing_loan', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>

            {
              formik.errors.existing_loan && <p className="text-sm text-red-500 mt-3">{formik.errors.existing_loan}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

      <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Existing Loan type</label>
            <select name="existing_loan_type" value={formik.values.existing_loan_type} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('existing_loan_type', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option value={1}>Mortgage</option>
              <option value={2}>Over draft</option>
              <option value={3}>Car Loan</option>
              <option value={4}>Business Loan</option>
              <option value={5}>Credit card loan</option>
              <option value={6}>Personal Loan</option>
            </select>
            {
              formik.errors.existing_loan_type && <p className="text-sm text-red-500 mt-3">{formik.errors.existing_loan_type}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Loan amount applying for</label>
            <input  type="number" name="loan_amount" value={formik.values.loan_amount} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('loan_amount', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.loan_amount && <p className="text-sm text-red-500 mt-3">{formik.errors.loan_amount}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Loan tenure (Months)</label>
            <input  type="number" name="loan_tenure" value={formik.values.loan_tenure} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('loan_tenure', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.loan_tenure && <p className="text-sm text-red-500 mt-3">{formik.errors.loan_tenure}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Account number</label>
            <input  type="text" name="account_number" value={formik.values.account_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('account_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.account_number && <p className="text-sm text-red-500 mt-3">{formik.errors.account_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Account Name</label>
            <input  type="text" name="account_name" value={formik.values.account_name} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('account_name', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.account_name && <p className="text-sm text-red-500 mt-3">{formik.errors.account_name}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Bank </label>
            <input  type="text" name="bank_name" value={formik.values.bank_name} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('bank_name', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.bank_name && <p className="text-sm text-red-500 mt-3">{formik.errors.bank_name}</p>
            }
        </div>

      </div>


      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Hear abour us</label>
            <select name="hear_about_us" value={formik.values.hear_about_us} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('hear_about_us', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option value="Radio">Radio</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Flier">Flier</option>
              <option value="Tv">Tv</option>
              <option value="Others">Others</option>
            </select>
            {
              formik.errors.hear_about_us && <p className="text-sm text-red-500 mt-3">{formik.errors.hear_about_us}</p>
            }
        </div>


        </div>


      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
