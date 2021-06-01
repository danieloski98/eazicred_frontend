import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { Select } from '@chakra-ui/react'
import useUser from '../../../../hooks/useUser';
import { useRecoilState } from 'recoil'
import { paydayloanAtom } from '../../../../States/paydayloanstate';
import { useToast } from '@chakra-ui/react'

interface IProps {
  move: Function;
}

// validation schema
const validationSchema = yup.object({
  firstname: yup.string().required('This field is required'),
  lastname: yup.string().required('This field is required'),
  DOB: yup.date().required('This field is required'),
  BVN: yup.string().required('This field is required'),
  Means_of_ID: yup.string().required('This field is required'),
  date_issued: yup.date().required('This field is required'),
  ID_number: yup.string().required('This field is required'),
  expiry_date: yup.date().required('This field is required'),
  phone: yup.string().required('This field is required'),
  alt_number: yup.string().required("This field is required"),
  marital_status: yup.number().required('This field is required'),
  next_of_kin_surname: yup.string().required('This field is required'),
  next_of_kin_firstname: yup.string().required('This field is required'),
  next_of_kin_relationship: yup.string().required('This field is required'),
  next_of_kin_phone: yup.string().required('This field is required'),
  next_of_kin_address: yup.string().required('This field is required')
});

export default function PaydayloanForm1(props: IProps) {
  const { user } = useUser();
  const [loan, setLoan] = useRecoilState(paydayloanAtom);
  const toast = useToast();

  // formik
  const formik = useFormik({
    initialValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      DOB: '',
      BVN: '',
      Means_of_ID: '',
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
    },
    onSubmit: () => {},
    validationSchema
  })

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
   if (!formik.isValid) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form correctly to continue',
        position: 'top',
        status: 'error',
        isClosable: true
      })
      return;
   }else {
     setLoan({...loan, ...formik.values});
     console.log(loan);
     props.move(2);
   }
  }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>First name</label>
            <input type="text" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_name', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.firstname && <p className="text-sm text-red-500 mt-3">{formik.errors.firstname}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Lastname</label>
            <input type="text" name="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_address', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.lastname && <p className="text-sm text-red-500 mt-3">{formik.errors.lastname}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Date of Birth</label>
            <input  type="date" name="DOB" value={formik.values.DOB} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('DOB', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.DOB && <p className="text-sm text-red-500 mt-3">{formik.errors.DOB}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>BVN</label>
            <input  type="text" name="BVN" value={formik.values.BVN} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('BVN', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.BVN && <p className="text-sm text-red-500 mt-3">{formik.errors.BVN}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Means of ID</label>
            <input type="text" name="Means_of_ID" value={formik.values.Means_of_ID} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('Means_of_ID', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.Means_of_ID && <p className="text-sm text-red-500 mt-3">{formik.errors.Means_of_ID}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>ID number</label>
            <input type="text" name="ID_number" value={formik.values.ID_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('ID_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.ID_number && <p className="text-sm text-red-500 mt-3">{formik.errors.ID_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Date issued</label>
            <input type="date" name="date_issued" value={formik.values.date_issued} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('date_issued', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.date_issued && <p className="text-sm text-red-500 mt-3">{formik.errors.date_issued}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>expiry date</label>
            <input type="date" name="expiry_date" value={formik.values.expiry_date} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('expiry_date', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.expiry_date && <p className="text-sm text-red-500 mt-3">{formik.errors.expiry_date}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Phone number</label>
            <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('phone', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.phone && <p className="text-sm text-red-500 mt-3">{formik.errors.phone}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Alt number</label>
            <input type="text" name="alt_number" value={formik.values.alt_number} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('alt_number', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.alt_number && <p className="text-sm text-red-500 mt-3">{formik.errors.alt_number}</p>
            }
        </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Marital Status</label>
            <select name="marital_status" value={formik.values.marital_status} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('marital_status', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
              <option value={2}>Married</option>
              <option value={1}>Single</option>
              <option value={3}>Divored</option>
              <option value={4}>Seperated</option>
              <option value={5}>Widowed</option>
            </select>

            {/* <input type="text" name="business_up_time" value={formik.values.business_up_time} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/> */}
            {
              formik.errors.marital_status && <p className="text-sm text-red-500 mt-3">{formik.errors.marital_status}</p>
            }
        </div>



      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Next of Kin Surname</label>
            <input type="text" name="next_of_kin_surname" value={formik.values.next_of_kin_surname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('next_of_kin_surname', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.next_of_kin_surname && <p className="text-sm text-red-500 mt-3">{formik.errors.next_of_kin_surname}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Next of Kin Firstname</label>
            <input type="text" name="next_of_kin_firstname" value={formik.values.next_of_kin_firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('next_of_kin_firstname', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.next_of_kin_firstname && <p className="text-sm text-red-500 mt-3">{formik.errors.next_of_kin_firstname}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Next of Kin Relationship</label>
            <input type="text" name="next_of_kin_relationship" value={formik.values.next_of_kin_relationship} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('next_of_kin_relationship', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.next_of_kin_relationship && <p className="text-sm text-red-500 mt-3">{formik.errors.next_of_kin_relationship}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Next of Kin Phone</label>
            <input type="text" name="next_of_kin_phone" value={formik.values.next_of_kin_phone} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('next_of_kin_phone', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.next_of_kin_phone && <p className="text-sm text-red-500 mt-3">{formik.errors.next_of_kin_phone}</p>
            }
        </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Next of Kin Address</label>
            <input type="drop" name="next_of_kin_address" value={formik.values.next_of_kin_address} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('next_of_kin_address', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.next_of_kin_address && <p className="text-sm text-red-500 mt-3">{formik.errors.next_of_kin_address}</p>
            }
        </div>

      </div>

      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
