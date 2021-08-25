import React from 'react'
import { useToast } from '@chakra-ui/react';


interface IProps {
  move: Function;
  values: any;
  handleChange: any;
  handleBlur: any;
  errors: any;
}


export default function PaydayloanForm3({ values, handleChange, handleBlur, errors, move}: IProps) {
  const toast = useToast();

  const submit = () => {
    if ( errors.employment_status ||
      errors.current_employer ||
      errors.current_employer_address ||
      errors.current_employer_landmark ||
      errors.current_employer_LGA ||
      errors.current_employer_state ||
      errors.current_employer_office_number ||
      errors.department ||
      errors.date_issued ||
      errors.job_title ) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form to continue',
        position: 'top',
        status: 'error',
        isClosable: true
      });
      return;
    } else {
      console.log(values);
      move(4, errors);
    }
   }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

      <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Employment Status</label>
            <select name="employment_status" value={values.employment_status} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
            <option selected disabled>Select Employment Status</option>
              <option value={1}>Partime</option>
              <option value={2}>Fulltime</option>
              <option value={3}>Retired</option>
              <option value={4}>Self Employed</option>
              <option value={5}>Temporary Contract</option>
              <option value={6}>Outsourced Contract</option>
            </select>


            {
              errors.employment_status && <p className="text-sm text-red-500 mt-3">{errors.employment_status}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current Employer</label>
            <input type="text" name="current_employer" value={values.current_employer} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.current_employer && <p className="text-sm text-red-500 mt-3">{errors.current_employer}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer Address</label>
            <input  type="text" name="current_employer_address" value={values.current_employer_address} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.current_employer_address && <p className="text-sm text-red-500 mt-3">{errors.current_employer_address}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current employer Landmark</label>
            <input  type="text" name="current_employer_landmark" value={values.current_employer_landmark} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.current_employer_landmark && <p className="text-sm text-red-500 mt-3">{errors.current_employer_landmark}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer LGA</label>
            <input  type="text" name="current_employer_LGA" value={values.current_employer_LGA} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.current_employer_LGA && <p className="text-sm text-red-500 mt-3">{errors.current_employer_LGA}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current employer State</label>
            <input  type="text" name="current_employer_state" value={values.current_employer_state} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.current_employer_state && <p className="text-sm text-red-500 mt-3">{errors.current_employer_state}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer Office Phone Number</label>
            <input  type="text" name="current_employer_office_number" value={values.current_employer_office_number} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.current_employer_office_number && <p className="text-sm text-red-500 mt-3">{errors.current_employer_office_number}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Staff ID Number </label>
            <input  type="number" name="staff_id" value={values.staff_id} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.staff_id && <p className="text-sm text-red-500 mt-3">{errors.staff_id}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

          <div className="flex-1 flex flex-col">
              <label htmlFor={'newpassword'}>Department</label>
              <input  type="text" name="department" value={values.department} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                errors.department && <p className="text-sm text-red-500 mt-3">{errors.department}</p>
              }
          </div>

          <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
              <label htmlFor={'newpassword'}>Job Title</label>
              <input  type="text" name="job_title" value={values.job_title} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                errors.job_title && <p className="text-sm text-red-500 mt-3">{errors.job_title}</p>
              }
          </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

          <div className="flex-1 flex flex-col">
              <label htmlFor={'newpassword'}>Date employed</label>
              <input  type="date" name="date_employed" value={values.date_employed} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                errors.date_employed && <p className="text-sm text-red-500 mt-3">{errors.date_employed}</p>
              }
          </div>

          <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
              <label htmlFor={'newpassword'}>Previous employer</label>
              <input  type="text" name="previous_employer" value={values.previous_employer} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                errors.previous_employer && <p className="text-sm text-red-500 mt-3">{errors.previous_employer}</p>
              }
          </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Previous employer address</label>
            <input  type="text" name="previous_employer_address" value={values.previous_employer_address} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.previous_employer_address && <p className="text-sm text-red-500 mt-3">{errors.previous_employer_address}</p>
            }
        </div>

        </div>

        <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

          <div className=" flex-1 flex flex-col">
              <label htmlFor={'newpassword'}> Jobs in the last 5 years </label>
              <input  type="number" name="jobs_in_past_5_years" value={values.jobs_in_past_5_years} onChange={handleChange} onBlur={handleBlur}  className="xl:w-2/5 lg:w-2/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                errors.jobs_in_past_5_years && <p className="text-sm text-red-500 mt-3">{errors.jobs_in_past_5_years}</p>
              }
          </div>

          {/* <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
              <label htmlFor={'newpassword'}>Current Pay date</label>
              <input  type="date" name="current_paydate" value={values.current_paydate} onChange={handleChange} onBlur={handleBlur} onFocus={() => formik.setFieldTouched('current_paydate', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                errors.current_paydate && <p className="text-sm text-red-500 mt-3">{errors.current_paydate}</p>
              }
          </div> */}

      </div>


      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
