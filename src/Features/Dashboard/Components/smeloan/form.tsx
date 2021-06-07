import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { Spinner, useToast } from '@chakra-ui/react'
import { URL } from '../../../../helpers/url';
import useUser from '../../../../hooks/useUser';
import { IReturn } from '../../../../helpers/ApiReturnType';
import { queryclient } from '../../../../index'
import SMEDialog from './Success';

// validation schema
const validationSchema = yup.object({
  business_name: yup.string().required('This field is required'),
  business_address: yup.string().required('This field is required'),
  RC_number: yup.string().required('This field required'),
  TIN_number: yup.string().required('This field is required'),
  business_up_time: yup.string().required('This field is required'),
  purpose_of_loan: yup.string().required('This field is required'),
});

export default function SMELoanForm() {
  const toast = useToast();
  const { user, token } = useUser();
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

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

  const submit = async () => {
    if (!formik.dirty) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form to create an SME loan',
        status: 'warning',
        position: 'top',
        isClosable: true
      })
    }else if(!formik.isValid) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form correctly to create an SME loan',
        status: 'warning',
        position: 'top',
        isClosable: true
      })
    }else {
      // make request
      setLoading(true);
      const values = {...formik.values, user_id: user.id, draft: false, type: 2};

      console.log(values);

      const request = await fetch(`${URL}/user/createSMEloan`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(values)
      });

      const json = await request.json() as IReturn;
      setLoading(false);

      if (json.statusCode === 200) {
        setShowModal(true);
        await queryclient.invalidateQueries();
      }else {
        toast({
          title: 'Error',
          description: `${json.errorMessage}`,
          status: 'error',
          position: 'top',
          isClosable: true
        })
      }

    }
  }


  return (
    <div className="w-full flex flex-col">
      <SMEDialog isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Business name</label>
            <input type="text" name="business_name" value={formik.values.business_name} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_name', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_name && <p className="text-sm text-red-500 mt-3">{formik.errors.business_name}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Business Address</label>
            <input type="text" name="business_address" value={formik.values.business_address} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_address', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_address && <p className="text-sm text-red-500 mt-3">{formik.errors.business_address}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>RC number</label>
            <input  type="text" name="RC_number" value={formik.values.RC_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('RC_number', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.RC_number && <p className="text-sm text-red-500 mt-3">{formik.errors.RC_number}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>TIN number</label>
            <input  type="text" name="TIN_number" value={formik.values.TIN_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('TIN_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.TIN_number && <p className="text-sm text-red-500 mt-3">{formik.errors.TIN_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>How long as the business been in existence (in years)</label>
            <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.business_up_time && <p className="text-sm text-red-500 mt-3">{formik.errors.business_up_time}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Purpose of Loan</label>
            <textarea name="purpose_of_loan" value={formik.values.purpose_of_loan} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('purpose_of_loan', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-40 mt-3 p-3"/>
            {
              formik.errors.purpose_of_loan && <p className="text-sm text-red-500 mt-3">{formik.errors.purpose_of_loan}</p>
            }
        </div>

      </div>

      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>
          {loading && <Spinner color="white" size="md" />}
          <span className="ml-3">Continue</span>
        </button>
      </div>
    </div>
  )
}
