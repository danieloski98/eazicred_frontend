import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { useToast, Spinner } from '@chakra-ui/react';
import useUser from '../../../../hooks/useUser';
import { URL } from '../../../../helpers/url';
import { IReturn } from '../../../../helpers/ApiReturnType';
import SMEDialog from '../smeloan/Success';
import { useHistory } from 'react-router-dom';
import useForm from './useForm';


interface IProps {
  move: Function;
  isValid: boolean;
  values: any;
}

// validation schema
const validationSchema = yup.object({
  passport: yup.mixed(),
  government_ID: yup.mixed(),
  letter_of_employment: yup.mixed(),
  HR_letter_of_confirmation: yup.mixed(),
  utility_bill: yup.mixed(),
  company_id: yup.mixed(),
});


export default function PaydayloanForm5(props: IProps) {
  const { user, token } = useUser();
  const history = useHistory();
  const toast = useToast();
  const [draft, ] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { formik:data } = useForm();

  // formik
  const formik = useFormik({
    initialValues: {
      passport: null as any,
      government_ID: null as any,
      letter_of_employment: null as any,
      HR_letter_of_confirmation: null as any,
      utility_bill: null as any,
      company_id: null as any
    },
    onSubmit: () => {},
    validationSchema
  })

  const submit = async () => {
    if (!formik.values.HR_letter_of_confirmation === null || formik.values.company_id === null || formik.values.government_ID === null || formik.values.letter_of_employment === null || formik.values.passport === null || formik.values.utility_bill === null) {
       toast({
         title: 'Attention',
         description: 'You have to pick the required files to continue',
         position: 'top',
         status: 'error',
         isClosable: true
       })
       return;
    }
    if(!props.isValid) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form correctly to continue',
        position: 'top',
        status: 'error',
        isClosable: true
      })
      return;
    }
    else {

      setLoading(true);

      const existing_loan = props.values['existing_loan'] === 1 ?true:false


      const existing_loan_type = parseInt(props.values['existing_loan_type']);

      const date = new Date().toISOString();

      const request1 = await fetch(`${URL}/user/createpaydayloan`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({...props.values, type: 1, status:1, draft, user_id: user.id, existing_loan, existing_loan_type, created_at: new Date(date).toDateString()}),
      })

      const json1 = await request1.json() as IReturn;
      console.log(json1);
      if (json1.statusCode === 200) {
        localStorage.removeItem('formdata');
        // data.resetForm();
        // make second request
        const formdata = new FormData();
        formdata.append('HR_letter_of_confirmation', formik.values.HR_letter_of_confirmation);
        formdata.append('company_id', formik.values.company_id);
        formdata.append('government_ID', formik.values.government_ID);
        formdata.append('letter_of_employment', formik.values.letter_of_employment);
        formdata.append('passport', formik.values.passport);
        formdata.append('utility_bill', formik.values.utility_bill);


        const request2 = await fetch(`${URL}/user/uploadpaydayloanfiles/${json1.data.id}`, {
          method: 'post',
          headers: {
            authorization: `Bearer ${token}`
          },
          body: formdata,
        })

        const json2 = await request2.json() as IReturn;

        if (json2.statusCode === 200) {
          setLoading(false);
          setSuccess(true);
          localStorage.removeItem('formdata');
          data.resetForm();
        }else {
          toast({
            title: 'Attention',
            description: `${json2.errorMessage}`,
            position: 'top',
            status: 'error',
            isClosable: true
          })
        }

      }else {
        setLoading(false);
        toast({
          title: 'Attention',
          description: `${json1.errorMessage}`,
          position: 'top',
          status: 'error',
          isClosable: true
        })
      }

    }
   }

   const close = () => {
     setSuccess(false);
     history.push('/dashboard/history')
   }

  return (
    <div className="w-full flex flex-col">
      <SMEDialog isOpen={success} onClose={close} />

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Passport Photograph</label>
            <input type="file" name="passport" onBlur={formik.handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3" onChange={(e) => {
              const f = e.target.files as any;
              formik.setFieldValue('passport', f[0], true);
              formik.setFieldTouched('passport', true, true)
            } }/>
            {
              formik.errors.passport && <p className="text-sm text-red-500 mt-3">{formik.errors.passport}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Government ID</label>
            <input type="file" name="government_ID" onBlur={formik.handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"
              onChange={(e) => {
                const f = e.target.files as any;
                formik.setFieldValue('government_ID', f[0], true);
                formik.setFieldTouched('government_ID', true, true)
              } }
            />
            {
              formik.errors.government_ID && <p className="text-sm text-red-500 mt-3">{formik.errors.government_ID}</p>
            }
        </div>

      </div>


      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>6 Months Bank Statement</label>
            <input  type="file" name="HR_letter_of_confirmation" onBlur={formik.handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"
              onChange={(e) => {
                const f = e.target.files as any;
                formik.setFieldValue('HR_letter_of_confirmation', f[0], true);
                formik.setFieldTouched('HR_letter_of_confirmation', true, true)
                formik.setFieldValue('letter_of_employment', f[0], true);
                formik.setFieldTouched('letter_of_employment', true, true)
              } }
            />
            {
              formik.errors.HR_letter_of_confirmation && <p className="text-sm text-red-500 mt-3">{formik.errors.HR_letter_of_confirmation}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Utility Bill</label>
            <input  type="file" name="utility_bill" onBlur={formik.handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"
              onChange={(e) => {
                const f = e.target.files as any;
                formik.setFieldValue('utility_bill', f[0], true);
                formik.setFieldTouched('utility_bill', true, true)
              } }
            />
            {
              formik.errors.utility_bill && <p className="text-sm text-red-500 mt-3">{formik.errors.utility_bill}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

      <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Company ID</label>
            <input type="file" name="company_id" onBlur={formik.handleBlur} className="xl:w-2/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"
              onChange={(e) => {
                const f = e.target.files as any;
                formik.setFieldValue('company_id', f[0], true);
                formik.setFieldTouched('company_id', true, true)
              } }
            />
            {
              formik.errors.company_id && <p className="text-sm text-red-500 mt-3">{formik.errors.company_id}</p>
            }
        </div>

        {/* <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Letter of Employment</label>
            <input  type="file" name="letter_of_employment" onBlur={formik.handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3" onChange={(e) => {
              const f = e.target.files as any;
              formik.setFieldValue('letter_of_employment', f[0], true);
              formik.setFieldTouched('letter_of_employment', true, true)
            } }/>
            {
              formik.errors.letter_of_employment && <p className="text-sm text-red-500 mt-3">{formik.errors.letter_of_employment}</p>
            }
        </div> */}

      </div>


      {/* <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-row mt-14">

       <Switch size="lg" onChange={() => setDraft(prev => !prev)}/>
       <p>Save as draft </p>

        </div> */}


      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-6 mb-6">
        <button disabled={loading} className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>
          {loading && <Spinner color="white" size="md" />}
          Submit
        </button>
      </div>
    </div>
  )
}
