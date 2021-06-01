import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik'
import useUser from '../../../../hooks/useUser';
import { useRecoilState } from 'recoil'
import { paydayloanAtom } from '../../../../States/paydayloanstate';
import { useToast } from '@chakra-ui/react'

interface IProps {
  move: Function;
}

// validation schema
const validationSchema = yup.object({
  state: yup.string().required('This field is required'),
  landmark: yup.string().required('This field is required'),
  LGA_of_residence: yup.string().required('This field is required'),
  home_address: yup.string().required(),
});

export default function PaydayloanForm2(props: IProps) {
  const { user } = useUser();
  const [loan, setLoan] = useRecoilState(paydayloanAtom);
  const toast = useToast();

  // formik
  const formik = useFormik({
    initialValues: {
     state: '',
     landmark: '',
     LGA_of_residence: '',
     home_address: ''
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
      props.move(3);
    }
   }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>LGA of residence</label>
            <input type="text" name="LGA_of_residence" value={formik.values.LGA_of_residence} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('LGA_of_residence', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.LGA_of_residence && <p className="text-sm text-red-500 mt-3">{formik.errors.LGA_of_residence}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>State</label>
            <input type="text" name="state" value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('state', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.state && <p className="text-sm text-red-500 mt-3">{formik.errors.state}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Landmark</label>
            <input  type="text" name="landmark" value={formik.values.landmark} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('landmark', true, true)}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.landmark && <p className="text-sm text-red-500 mt-3">{formik.errors.landmark}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Home Address</label>
            <input  type="text" name="home_address" value={formik.values.home_address} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('home_address', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              formik.errors.home_address && <p className="text-sm text-red-500 mt-3">{formik.errors.home_address}</p>
            }
        </div>

      </div>


      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
