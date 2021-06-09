import React from 'react';
import {
  Link,
  useHistory
} from 'react-router-dom';

// formik and yup
import * as yup from 'yup'
import { useFormik } from 'formik'
import { LoginController } from '../../controllers/Login/Index';
import useUser from '../../hooks/useUser';
import { Spinner, useToast } from '@chakra-ui/react'
import { URL } from '../../helpers/url';
import { IReturn } from '../../helpers/ApiReturnType';

// validation schema
const validationSchema = yup.object({
  email: yup.string().required('This field is required').email('Invalid Email'),
})


const ForgotPassword = () => {
    document.title = "Eazicred - Login to eazicred"
    const {setUser, setToken} = useUser();
    const toast = useToast();
    const [loading, setLoading] = React.useState(false);
    const location = useHistory();


    // formik
    const formik = useFormik({
      initialValues: {email: ''},
      onSubmit: () => {},
      validationSchema,
    })

    // submit function
    const submit = async() => {
      if (!formik.touched) {
        alert('You have to login to continue');
      }else if (!formik.isValid) {
        alert('Please fill in the form correctly');
      }else {
        setLoading(true);
        const request = await fetch(`${URL}/auth/forgotpassword/${formik.values.email}`, {
          method: 'post',
        });

        const json = await request.json() as IReturn;
        setLoading(false);
        if (json.statusCode === 200) {
          toast({
            title: 'Success',
            description: json.successMessage,
            status: 'success',
            position: 'top',
            isClosable: true
          })
        }else {
          toast({
            title: 'Error',
            description: json.errorMessage,
            status: 'error',
            position: 'top',
            isClosable: true
          })
        }

      }
    }

  return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="font-bold text-4xl mb-3">Request Link</h2>
                        <p className="mb-5 text-md">Enter your email address</p>
                        <div className="form">
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    value={formik.values.email} name="email" id="email" type="email"
                                    placeholder="example@eazycred.com" onChange={formik.handleChange} onFocus={() => formik.setFieldTouched('email', true, true)} onBlur={formik.handleBlur} className="email"
                                />
                                {formik.errors.email && <div className="text-sm text-red-500 mt-3">{formik.errors.email}</div>}
                            </div>
                            <button className="btn btn-blue w-full h-20" onClick={submit} disabled={loading}>
                              {
                                loading ?
                                <Spinner color="white" size="md" />
                                :
                                <span>Login</span>
                              }
                            </button>
                            <p className="text-center mt-5">Already Have An Account?
                                <Link to='/login' className="primary-color">
                                    submit
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="account__image login__image"/>
            </div>
        </div>
    )
}


export default ForgotPassword;
