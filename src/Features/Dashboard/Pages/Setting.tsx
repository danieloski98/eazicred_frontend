import React from 'react';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Spinner, useToast } from '@chakra-ui/react'
import useUser from '../../../hooks/useUser';
import { URL } from '../../../helpers/url';
import { IReturn } from '../../../helpers/ApiReturnType';

// validation schema
const validationSchema = yup.object({
  oldpassword: yup.string(),
  password: yup.string(),
  newpassword: yup.string(),
});


const Setting = () => {
  const [loading, setLoading] = React.useState(false);
  const { token, user } = useUser();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      oldpassword: '',
      password: '',
      newpassword: ''
    },
    onSubmit: () => {},
    validationSchema
  })

  const submit = async() => {
    if (!formik.dirty) {
      return;
    }
    if (formik.dirty) {
      // values
      if (formik.values.oldpassword === '') {
        toast({
          title: 'Attention',
          description: 'You need your old password to continue',
          status: 'warning',
          isClosable: true,
          position: 'top'
        })
      }
      if (formik.values.password === '') {
        toast({
          title: 'Attention',
          description: 'You need your new password to continue',
          status: 'warning',
          isClosable: true,
          position: 'top'
        })
      }
      if (formik.values.password !== formik.values.newpassword) {
        toast({
          title: 'Attention',
          description: 'Passwords do not match',
          status: 'warning',
          isClosable: true,
          position: 'top'
        })
      }else {
        // make request
        setLoading(true);
        const request = await fetch(`${URL}/auth/changepassword/${user.id}`, {
          method: 'post',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
          },
          body: JSON.stringify({oldpassword: formik.values.oldpassword, newpassword: formik.values.newpassword})
        })
        const json = await request.json() as IReturn;
        setLoading(false);
        if (json.statusCode === 200) {
          toast({
            title: 'Success',
            description: `${json.successMessage}`,
            isClosable: true,
            status: 'success',
            position: 'top',
          })
        }else {
          toast({
            title: 'Error',
            description: `${json.errorMessage}`,
            isClosable: true,
            status: 'error',
            position: 'top',
          })
        }
      }

    }
  }
    return (
        <>
            <div className="main__middle">
                <h2 className="h2-db text-3xl font-bold">Account Settings</h2>
                <p className="p2-db mt-6 text-xl font-semibold">Change basic setting in your account</p>
            </div>
            {/* {showMsg && <MessageAlert/>} */}
            <div className="main__form flex xl:flex-row-reverse lg:flex-row-reverse  md:flex-col sm:flex-col mt-10">


                  <div className="flex-1 w-full">
                    <div className="input-group flex flex-col">
                        <label htmlFor={'newpassword'}>New Password</label>
                        <input id={'newpassword'} value={formik.values.password} name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('password', true, true)} type="password" placeholder="**********" className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
                  </div>
                </div>

                <div className="input-groups flex-1 xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
                    <div className="input-group flex flex-col">
                        <label htmlFor={'oldpassword'}>Old Password</label>
                        <input id={'oldpassword'} type="password" value={formik.values.oldpassword} name="oldpassword" onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('oldpassword', true, true)}  placeholder="**********" className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3" />
                    </div>
                    <div className="input-group mt-10 flex flex-col">
                        <label htmlFor={'newpassword'}>Confirm Password</label>
                        <input id={'newpassword'} type="password" value={formik.values.newpassword} name="newpassword" onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('newpassword', true, true)} placeholder="**********" className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3" />
                    </div>
                </div>

            </div>

            <div className="xl:w-4/5 lg:w-4/5 mt-10 flex justify-end">
              <button onClick={submit} className="xl:w-56 lg:w-56 md:w-full sm:w-full h-20 rounded-lg bg-customGreen text-white">
                {loading && <Spinner color="white" size="md" />}
                <span className="ml-2">Update</span>
                </button>
            </div>
        </>
    );
}

export default Setting;
