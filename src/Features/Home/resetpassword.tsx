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
  password: yup.string().min(8, 'Minimium of 8 characters').required('This field is required'),
  confirmpassword: yup.string().min(8, 'Minimium of 8 characters').required('This field is required'),
})


const ResetPassword = (props: any) => {
    const id = React.useRef(props.match.params.id);
    document.title = "Eazicred - Login to eazicred"
    const {setUser, setToken} = useUser();
    const toast = useToast();
    const [loading, setLoading] = React.useState(false);
    const location = useHistory();

    const loginController = new LoginController();

    // formik
    const formik = useFormik({
      initialValues: {password: '', confirmpassword: ''},
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
        const request = await fetch(`${URL}/auth/resetpassword/${props.match.params.id}`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formik.values),
        });
        const json = await request.json() as IReturn;
        setLoading(false);
        if (json.statusCode === 200) {
          toast({
            title: 'Success',
            description: 'Password changed',
            status: 'success',
            isClosable: true,
            position: 'top',
          })
        }else {
          toast({
            title: 'Error',
            description: json.errorMessage,
            status: 'error',
            isClosable: true,
            position: 'top',
          })
        }

      }
    }

  return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="font-bold text-4xl mb-3">Welcome</h2>
                        <p className="mb-5 text-md">Reset Your Password</p>
                        <div className="form">
                            <div className="input-group">
                                <label htmlFor="email">New Password</label>
                                <input
                                    value={formik.values.password} name="password" id="email" type="password"
                                     onChange={formik.handleChange} onFocus={() => formik.setFieldTouched('password', true, true)} onBlur={formik.handleBlur} className="email"
                                />
                                {formik.errors.password && <div className="text-sm text-red-500 mt-3">{formik.errors.password}</div>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input
                                    name="confirmpassword" value={formik.values.confirmpassword} id="password" type="password" required
                                    onChange={formik.handleChange} onFocus={() => formik.setFieldTouched('confrimpassword', true, true)} onBlur={formik.handleBlur} className="password"
                                />
                                {formik.errors.confirmpassword && <div className="text-sm text-red-500 mt-3">{formik.errors.confirmpassword}</div>}
                            </div>
                            <button className="btn btn-blue w-full h-20" onClick={submit} disabled={loading}>
                              {
                                loading ?
                                <Spinner color="white" size="md" />
                                :
                                <span>Submit</span>
                              }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="account__image login__image"/>
            </div>
        </div>
    )
}


export default ResetPassword;
