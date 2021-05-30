import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { Select } from '@chakra-ui/react'

// validation schema
const validationSchema = yup.object({
  business_name: yup.string().required('This field is required'),
  business_address: yup.string().required('This field is required'),
  RC_number: yup.string().required('This field required'),
  TIN_number: yup.string().required('This field is required'),
  business_up_time: yup.string().required('This field is required'),
  purpose_of_loan: yup.string().required('This field is required'),
});

export default function PaydayloanForm1() {

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
            <label htmlFor={'newpassword'}>First name</label>
            <input type="text" name="business_name" value={formik.values.business_name} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_name', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_name && <p className="text-sm text-red-500 mt-3">{formik.errors.business_name}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Lastname</label>
            <input type="text" name="business_address" value={formik.values.business_address} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_address', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_address && <p className="text-sm text-red-500 mt-3">{formik.errors.business_address}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Date of Birth</label>
            <input  type="date" name="RC_number" value={formik.values.RC_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('RC_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.RC_number && <p className="text-sm text-red-500 mt-3">{formik.errors.RC_number}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>BVN</label>
            <input  type="text" name="TIN_number" value={formik.values.TIN_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('TIN_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.TIN_number && <p className="text-sm text-red-500 mt-3">{formik.errors.TIN_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Means of ID</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>ID number</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Date issued</label>
            <input type="date" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>expiry date</label>
            <input type="date" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Phone number</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Alt number</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Marital Status</label>
            <select name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option value={2}>Married</option>
              <option value={1}>Single</option>
              <option value={3}>Divored</option>
              <option value={4}>Seperated</option>
              <option value={5}>Widowed</option>
            </select>

            {/* <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/> */}
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>



      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Next of Kin Surname</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Next of Kin Firstname</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Next of Kin Relationship</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Next of Kin Phone</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Next of Kin Address</label>
            <input type="drop" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

        {/* <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>State</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div> */}

      </div>

      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
