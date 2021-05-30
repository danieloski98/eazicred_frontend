import React from 'react';

import { connect } from 'react-redux';
import {
  Link,
  Redirect,
  useHistory
} from 'react-router-dom';

import MessageAlert from '../Common/MessageAlert';
import { loginUser } from '../redux/actions/authThunks';
import {
  DASHBOARD_URL,
  REGISTER_URL,
} from '../routes/paths';

// formik and yup
import * as yup from 'yup'
import { useFormik } from 'formik'
import { LoginController } from '../controllers/Login/Index';
import useUser from '../hooks/useUser';

// validation schema
const validationSchema = yup.object({
  email: yup.string().required('This field is required').email('Invalid Email'),
  password: yup.string().min(8, 'Minimium of 8 characters').required('This field is required'),
})


const Login = () => {
    document.title = "Eazicred - Login to eazicred"
    const {setUser, user, token, setToken} = useUser();
    const [loading, setLoading] = React.useState(false);
    const location = useHistory();

    const loginController = new LoginController();

    // formik
    const formik = useFormik({
      initialValues: {email: '', password: ''},
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
        const data = await loginController.login(formik.values);
        const tok = data.data['token'];
        const user = data.data['user'];
        // const obj = {token:token, ...user};
        setUser(() => ({...user}));
        setToken(() => tok);
        setTimeout(() => { console.log(user, token)}, 3000);
        setLoading(false);
        location.push('dashboard');
      }
    }

  return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="font-bold text-4xl mb-3">Welcome Back</h2>
                        <p className="mb-5 text-md">Enter your credentials to continue</p>
                        <div className="form">
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    value={formik.values.email} name="email" id="email" type="email"
                                    placeholder="example@eazycred.com" onChange={formik.handleChange} onFocus={() => formik.setFieldTouched('email', true, true)} onBlur={formik.handleBlur} className="email"
                                />
                                {formik.errors.email && <div className="text-sm text-red-500 mt-3">{formik.errors.email}</div>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password" value={formik.values.password} id="password" type="password" required
                                    onChange={formik.handleChange} onFocus={() => formik.setFieldTouched('password', true, true)} onBlur={formik.handleBlur} className="password"
                                />
                                {formik.errors.password && <div className="text-sm text-red-500 mt-3">{formik.errors.password}</div>}
                            </div>
                            <button className="btn btn-blue w-full h-20" onClick={submit} disabled={loading}>
                              {
                                loading ?
                                <span>Login...</span>
                                :
                                <span>Login</span>
                              }
                            </button>
                            <p className="text-center mt-5">Don't Have An Account?
                                <Link to={REGISTER_URL} className="primary-color">
                                    Register
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


export default Login;
