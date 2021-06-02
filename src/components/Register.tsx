import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup';
import {} from '@chakra-ui/react'
import { LOGIN_URL } from '../routes/paths';
import { Spinner, useToast} from '@chakra-ui/react'
import { URL } from '../helpers/url';
import { IReturn } from '../helpers/ApiReturnType';

// validation Schema
const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('This field is required'),
  firstname: yup.string().required('This field is required'),
  lastname: yup.string().required('This field is required'),
  phone: yup.string().required('This field is required').min(11, 'Minimium of 11 numbers').max(11, 'Maximium of 11 number'),
  password: yup.string().required('This field is required').min(3, 'Minimium of 3 characters'),
  referralcode: yup.string(),
})

const Register = () => {
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      password: '',
      referralcode: '',
    },
    onSubmit: () => {},
    validationSchema,
  })

  React.useEffect(() => {
    window.scrollTo(0,0);
  })

  const submit = async () => {
    if (!formik.dirty) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form to continue',
        position: 'top',
        status: 'error',
        isClosable: true
      });
    }
    if (!formik.isValid) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form correctly',
        position: 'top',
        status: 'error',
        isClosable: true
      });
    }else {
      setLoading(true);
      // make request
      const request = await fetch(`${URL}/auth/register`,{
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formik.values),
      });

      const json = await request.json() as IReturn;

      if (json.statusCode === 200) {
        setLoading(false);
        toast({
          title: 'Success',
          description: 'Your account has been created successfully',
          position: 'top',
          status: 'success',
          isClosable: true
        })
        history.push('/login');
      }else {
        setLoading(false);
        toast({
          title: 'Error',
          description: `${json.errorMessage}`,
          position: 'top',
          status: 'error',
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
                        <h2 className="h-2">Create Account</h2>
                        <p className="pt-14">Access SME and Consumer Loans On The Go</p>
                        <div >
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input  id="email" type="email" name="email"
                                       placeholder="johndoe@eazycred.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('email', true, true)} className="email" required/>
                                {formik.errors.email && <p className="mt-6 text-xl text-red-500">{formik.errors.email}</p>}

                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Phone Number</label>
                                <input id="phone" type="text"
                                       placeholder="080 *** *** ***" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('phone', true, true)} className="phone" required/>
                                {formik.errors.phone && <p className="mt-6 text-xl text-red-500">{formik.errors.phone}</p>}

                            </div>
                            <div className="input-groups">
                                <div className="input-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input
                                           id="firstname" type="text" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('firstname', true, true)} placeholder="John" className="first_name"
                                           required/>
                                    {formik.errors.firstname && <p className="mt-6 text-xl text-red-500">{formik.errors.firstname}</p>}

                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input id="lastname" name="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('lastname', true, true)}
                                           type="text" placeholder="Doe" className="last_name" required/>
                                    {formik.errors.lastname && <p className="mt-6 text-xl text-red-500">{formik.errors.lastname}</p>}
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password"
                                value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('password', true, true)}
                                       type="password" className="password" required/>
                                {formik.errors.password && <p className="mt-6 text-xl text-red-500">{formik.errors.password}</p>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="code">Referral Code</label>
                                <input id="code" type="text"
                                name="referralcode" value={formik.values.referralcode} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('referralcode', true, true)}
                                       className="phone"/>
                              {formik.errors.referralcode && <p className="mt-6 text-xl text-red-500">{formik.errors.referralcode}</p>}
                            </div>
                            <p className="blue">Enter the referral code if you have one.</p>

                            <button onClick={submit} className="xl:w-full lg:w-full md:w-full sm:w-full h-16 rounded-lg bg-customGreen text-white">
                              {loading && <Spinner color="white" size="md" />}
                              <span className="ml-6">Submit</span>
                              </button>
                            <p className="mt-6">Already Have An Account? <Link to={LOGIN_URL} className="primary-color">Log In</Link></p>
                        </div>
                    </div>
                </div>
                <div className="account__image register__image"/>
            </div>
        </div>
    )
}

export default Register
