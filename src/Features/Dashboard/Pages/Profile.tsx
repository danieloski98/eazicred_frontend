import React from 'react';
import useUser from '../../../hooks/useUser';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Spinner, useToast } from '@chakra-ui/react'
import { queryclient } from '../../../index'
import { URL } from '../../../helpers/url';
import { IReturn } from '../../../helpers/ApiReturnType';

// validationschema
const validationSchema = yup.object({
  firstname: yup.string(),
  lastname: yup.string(),
  phone: yup.string(),
})

const Profile = () => {
  const {user, token} = useUser();
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone
    },
    onSubmit: () => {},
    validationSchema
  })

  const submit = async() => {
    if (!formik.dirty) {
      return;
    }else {
      setLoading(true);
      // make request
      const request = await fetch(`${URL}/user`, {
        method: 'put',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formik.values),
      });

    const json = await request.json() as IReturn;
    setLoading(false);

    if (json.statusCode === 200) {

      toast({
        title: 'Success',
        description: `${json.successMessage}`,
        status: 'success',
        position: 'top',
        isClosable: true
      });
      const validate = await queryclient.invalidateQueries();
    }else {
      toast({
        title: 'Error',
        description: `${json.errorMessage}`,
        status: 'error',
        position: 'top',
        isClosable: true
      });
    }
    }
  }

    return (
        <>
            <div className="main__middle">
                <h2 className="h2-db text-3xl font-bold">Profile</h2>
                <p className="p2-db text-xl font-semibold mt-6">Manage your Eazicred Profile</p>
            </div>
            {/* {showMsg && <MessageAlert/>} */}
            <div className="main__form flex xl:flex-row-reverse lg:flex-row-reverse md:flex-col sm:flex-col mt-10">


              <div className="flex-1 w-full">
                <div className="input-group flex flex-col">
                    <label htmlFor={'newpassword'}>First name</label>
                    <input  name="firstname" id={'newpassword'} type="text" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('firstname', true, true)} className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              </div>
              </div>

              <div className="input-groups flex-1 xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
                <div className="input-group flex flex-col">
                    <label htmlFor={'oldpassword'}>Last name</label>
                    <input name="lastname" id={'oldpassword'} type="text" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('lastname', true, true)} className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3" />
                </div>
                <div className="input-group mt-10 flex flex-col">
                    <label htmlFor={'newpassword'}>Phone</label>
                    <input  name="phone" id={'newpassword'} type="text" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('phone', true, true)} className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3" />
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

export default Profile;
