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
// const validationSchema = yup.object({
//   employment_status: yup.number().required('This field is required'),
//   current_employer: yup.string().required('This field is required'),
//   current_employer_address: yup.string().required('This field is required'),
//   current_employer_landmark: yup.string().required('This  field is required'),
//   current_employer_LGA: yup.string().required('This field is required'),
//   current_employer_state: yup.string().required('This field is required'),
//   current_employer_office_number: yup.string().required('This field is requred'),
//   staff_id: yup.string(),
//   department: yup.string(),
//   job_title: yup.string(),
//   date_employed: yup.string(),
//   previous_employer: yup.string(),
//   previous_employer_address: yup.string(),
//   jobs_in_past_5_years: yup.number().required(),
// });

export default function PaydayloanForm3(props: IProps) {
  // const { user } = useUser();
  const [loan, setLoan] = useRecoilState(paydayloanAtom);
  const { formik } = useForm();
  const toast = useToast();
  const detailsRef = React.useRef(null as any);

  // formik
  // const formik = useFormik({
  //   initialValues: {
  //    employment_status: 1,
  //    current_employer: '',
  //    current_employer_address: '',
  //    current_employer_landmark: '',
  //    current_employer_LGA: '',
  //    current_employer_state: '',
  //    current_employer_office_number: '',
  //    staff_id: '',
  //    department: '',
  //    job_title: '',
  //    date_employed: '',
  //    previous_employer: '',
  //    previous_employer_address: '',
  //    jobs_in_past_5_years: 0,
  //   },
  //   onSubmit: () => {},
  //   validationSchema
  // })

  // effect

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
      detailsRef.current = formik.values;
      props.move(4);
    }
   }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

      <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Employment Status</label>
            <select name="employment_status" value={formik.values.employment_status} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('employment_status', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
            <option selected disabled>Select Employment Status</option>
              <option value={1}>Partime</option>
              <option value={2}>Fulltime</option>
              <option value={3}>Retired</option>
              <option value={4}>Self Employed</option>
              <option value={5}>Temporary Contract</option>
              <option value={6}>Outsourced Contract</option>
            </select>


            {
              formik.errors.employment_status && <p className="text-sm text-red-500 mt-3">{formik.errors.employment_status}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current Employer</label>
            <input type="text" name="current_employer" value={formik.values.current_employer} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('current_employer', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.current_employer && <p className="text-sm text-red-500 mt-3">{formik.errors.current_employer}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer Address</label>
            <input  type="text" name="current_employer_address" value={formik.values.current_employer_address} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('current_employer_address', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.current_employer_address && <p className="text-sm text-red-500 mt-3">{formik.errors.current_employer_address}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current employer Landmark</label>
            <input  type="text" name="current_employer_landmark" value={formik.values.current_employer_landmark} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('current_employer_landmark', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.current_employer_landmark && <p className="text-sm text-red-500 mt-3">{formik.errors.current_employer_landmark}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer LGA</label>
            <input  type="text" name="current_employer_LGA" value={formik.values.current_employer_LGA} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('current_employer_LGA', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.current_employer_LGA && <p className="text-sm text-red-500 mt-3">{formik.errors.current_employer_LGA}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current employer State</label>
            <input  type="text" name="current_employer_state" value={formik.values.current_employer_state} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('current_employer_state', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.current_employer_state && <p className="text-sm text-red-500 mt-3">{formik.errors.current_employer_state}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer Office Phone Number</label>
            <input  type="text" name="current_employer_office_number" value={formik.values.current_employer_office_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('current_employer_office_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.current_employer_office_number && <p className="text-sm text-red-500 mt-3">{formik.errors.current_employer_office_number}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Staff ID </label>
            <input  type="text" name="staff_id" value={formik.values.staff_id} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('staff_id', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.staff_id && <p className="text-sm text-red-500 mt-3">{formik.errors.staff_id}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

          <div className="flex-1 flex flex-col">
              <label htmlFor={'newpassword'}>Department</label>
              <input  type="text" name="department" value={formik.values.department} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('department', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.department && <p className="text-sm text-red-500 mt-3">{formik.errors.department}</p>
              }
          </div>

          <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
              <label htmlFor={'newpassword'}>Job Title</label>
              <input  type="text" name="job_title" value={formik.values.job_title} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('job_title', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.job_title && <p className="text-sm text-red-500 mt-3">{formik.errors.job_title}</p>
              }
          </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

          <div className="flex-1 flex flex-col">
              <label htmlFor={'newpassword'}>Date employed</label>
              <input  type="date" name="date_employed" value={formik.values.date_employed} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('date_employed', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.date_employed && <p className="text-sm text-red-500 mt-3">{formik.errors.date_employed}</p>
              }
          </div>

          <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
              <label htmlFor={'newpassword'}>Previous employer</label>
              <input  type="text" name="previous_employer" value={formik.values.previous_employer} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('previous_employer', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.previous_employer && <p className="text-sm text-red-500 mt-3">{formik.errors.previous_employer}</p>
              }
          </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Previous employer address</label>
            <input  type="text" name="previous_employer_address" value={formik.values.previous_employer_address} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('previous_employer_address', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.previous_employer_address && <p className="text-sm text-red-500 mt-3">{formik.errors.previous_employer_address}</p>
            }
        </div>

        </div>

        <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

          <div className=" flex-1 flex flex-col">
              <label htmlFor={'newpassword'}> Jobs in the last 5 years </label>
              <input  type="number" name="jobs_in_past_5_years" value={formik.values.jobs_in_past_5_years} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('jobs_in_past_5_years', true, true)}  className="xl:w-2/5 lg:w-2/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.jobs_in_past_5_years && <p className="text-sm text-red-500 mt-3">{formik.errors.jobs_in_past_5_years}</p>
              }
          </div>

          {/* <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
              <label htmlFor={'newpassword'}>Current Pay date</label>
              <input  type="date" name="current_paydate" value={formik.values.current_paydate} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('current_paydate', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.current_paydate && <p className="text-sm text-red-500 mt-3">{formik.errors.current_paydate}</p>
              }
          </div> */}

      </div>


      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
