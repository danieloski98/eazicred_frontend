import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'

// validation schema
const validationSchema = yup.object({
  business_name: yup.string().required('This field is required'),
  business_address: yup.string().required('This field is required'),
  RC_number: yup.string().required('This field required'),
  TIN_number: yup.string().required('This field is required'),
  business_up_time: yup.string().required('This field is required'),
  purpose_of_loan: yup.string().required('This field is required'),
});

export default function PaydayloanForm3() {

  // formik
  const formik = useFormik({
    initialValues: {
      business_name: '',
      business_address: '',
      RC_number: '',
      TIN_number: '',
      business_up_time: '',
      purpose_of_loan: '',
    },
    onSubmit: () => {},
    validationSchema
  })

  const submit = () => {
    console.log(formik.values);
  }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

      <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Employment Status</label>
            <select name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option value={2}>Partime</option>
              <option value={1}>Fulltime</option>
              <option value={3}>Retired</option>
              <option value={4}>Self Employed</option>
              <option value={5}>Temporary Contract</option>
              <option value={6}>Outsourced Contract</option>
            </select>

            {/* <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/> */}
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current Employer</label>
            <input type="text" name="business_address" value={formik.values.business_address} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_address', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_address && <p className="text-sm text-red-500 mt-3">{formik.errors.business_address}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer Address</label>
            <input  type="text" name="RC_number" value={formik.values.RC_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('RC_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.RC_number && <p className="text-sm text-red-500 mt-3">{formik.errors.RC_number}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current employer Landmark</label>
            <input  type="text" name="TIN_number" value={formik.values.TIN_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('TIN_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.TIN_number && <p className="text-sm text-red-500 mt-3">{formik.errors.TIN_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer LGA</label>
            <input  type="text" name="RC_number" value={formik.values.RC_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('RC_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.RC_number && <p className="text-sm text-red-500 mt-3">{formik.errors.RC_number}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current employer State</label>
            <input  type="text" name="TIN_number" value={formik.values.TIN_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('TIN_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.TIN_number && <p className="text-sm text-red-500 mt-3">{formik.errors.TIN_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Current Employer Office Number</label>
            <input  type="text" name="RC_number" value={formik.values.RC_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('RC_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.RC_number && <p className="text-sm text-red-500 mt-3">{formik.errors.RC_number}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Staff ID </label>
            <input  type="text" name="TIN_number" value={formik.values.TIN_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('TIN_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.TIN_number && <p className="text-sm text-red-500 mt-3">{formik.errors.TIN_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

          <div className="flex-1 flex flex-col">
              <label htmlFor={'newpassword'}>Department</label>
              <input  type="text" name="RC_number" value={formik.values.RC_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('RC_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.RC_number && <p className="text-sm text-red-500 mt-3">{formik.errors.RC_number}</p>
              }
          </div>

          <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
              <label htmlFor={'newpassword'}>Job Title</label>
              <input  type="text" name="TIN_number" value={formik.values.TIN_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('TIN_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.TIN_number && <p className="text-sm text-red-500 mt-3">{formik.errors.TIN_number}</p>
              }
          </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

          <div className="flex-1 flex flex-col">
              <label htmlFor={'newpassword'}>Date employed</label>
              <input  type="date" name="RC_number" value={formik.values.RC_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('RC_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.RC_number && <p className="text-sm text-red-500 mt-3">{formik.errors.RC_number}</p>
              }
          </div>

          <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
              <label htmlFor={'newpassword'}>Previous employer</label>
              <input  type="text" name="TIN_number" value={formik.values.TIN_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('TIN_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              {
                formik.errors.TIN_number && <p className="text-sm text-red-500 mt-3">{formik.errors.TIN_number}</p>
              }
          </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Previous employer address</label>
            <input  type="text" name="RC_number" value={formik.values.RC_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('RC_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.RC_number && <p className="text-sm text-red-500 mt-3">{formik.errors.RC_number}</p>
            }
        </div>

        {/* <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Current employer Landmark</label>
            <input  type="text" name="TIN_number" value={formik.values.TIN_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('TIN_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.TIN_number && <p className="text-sm text-red-500 mt-3">{formik.errors.TIN_number}</p>
            }
        </div> */}

        </div>


      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
