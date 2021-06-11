import React from 'react';
import OnPageSignUp from './OnPageSignUp';
import { URL } from '../../helpers/url';
import { useToast, Spinner } from '@chakra-ui/react'
import { IReturn } from '../../helpers/ApiReturnType';
import { FiPhone, FiMail } from 'react-icons/fi'
import * as yup from 'yup';
import { useFormik } from 'formik'

// validation
const validationSchema = yup.object({
  name: yup.string().required('This field is required'),
  email: yup.string().email('Invalid email').required('This field is required'),
  message: yup.string(),
});

const Support = () => {
    document.title = 'Eazicred - Support'
    const [loading, setLoading] = React.useState(false);
    const toast = useToast();

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        message: '',
      },
      onSubmit: () => {},
      validationSchema
    })


    const  handleSubmit = async() => {
      if (!formik.dirty) {
        toast({
          title: 'Error',
          description: `Fill the form to be able to submit`,
          status: 'warning',
          position: 'top',
          isClosable: true,
        })
      }else if (!formik.isValid) {
        toast({
          title: 'Error',
          description: `Fill in the form correctly to be able to submit`,
          status: 'error',
          position: 'top',
          isClosable: true,
        })
      }else {
        setLoading(true);
        const request = await fetch(`${URL}/admin/support`, {
          method: 'Post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formik.values),
        })

        const json = await request.json() as IReturn;
        setLoading(false);
        if (json.statusCode === 200) {
          toast({
            title: 'Success',
            description: `${json.successMessage}`,
            status: 'success',
            position: 'top',
            isClosable: true,
          })
        }else {
          toast({
            title: 'Error',
            description: `${json.errorMessage}`,
            status: 'error',
            position: 'top',
            isClosable: true,
          })
        }
      }

    }

    React.useEffect(() => {
      window.scrollTo(0,0);
    })

    return (
        <React.Fragment>
            <header>
                <div className="hero-support">
                    <div className="sm:px-12">


                    <div className="xl:w-400px lg:w-300px md:w-full sm:w-full xl:h-auto lg:h-auto md:h-auto sm:h-auto rounded-lg bg-white p-10 flex flex-col xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 sm:mx-10 md:mx-12 xl:mx-0 lg:mx-0">

                      <h2 className="text-3xl font-bold">Support</h2>
                      <p className="pt-0 text-xl mt-4">Get in touch and a representative will respond shortly</p>

                      <div className="flex items-center justify-between mt-4">

                        <div className="">
                          <h3 className="h-3 text-2xl">Lagos</h3>
                            <p className=" pt-4 mt-4 text-xl">5 Adebisi Ladejobi street, Ilupeju<br/>
                                +234 802 074 0286<br/>
                                contact@eazicred.com
                            </p>
                        </div>

                        <div className="h-full flex flex-col justify-end">
                          <a href="tel:+2349016888927">
                            <FiPhone  color="lightgrey" size={30} />
                          </a>
                          <a href="mailto:contact@eazicred.com" className="mt-2">
                            <FiMail color="lightgrey" size={30} />
                          </a>
                        </div>

                      </div>

                      <div className="w-full flex-col flex mt-10">

                        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col w-full">

                          <div className="flex-col flex w-full flex-1 xl:mr-2 lg:mr-2 sm:mb-6">
                            <label> Name</label>
                            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('name', true, true)} id="" className="w-full border-2 border-gray-300 rounded-lg h-20 px-4" />
                            {formik.touched.name && formik.errors.name && <p className="mt-2 text-red-500">{formik.errors.name}</p>}
                          </div>

                          <div className="flex-col flex w-full flex-1 xl:ml-2 lg:ml-2">
                            <label> Email</label>
                            <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('email', true, true)} id="" className="w-full border-2 border-gray-300 rounded-lg h-20 px-4" />
                            {formik.touched.email && formik.errors.email && <p className="mt-2 text-red-500">{formik.errors.email}</p>}
                          </div>


                        </div>

                        <div className="flex-col flex w-full xl:ml-2 sm:mt-6">
                            <label> Message</label>
                            <textarea name="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('message', true, true)}  className="w-full rounded-lg border-2 border-gray-300 h-40 p-4" />
                            {/* {formik.touched.message && formik.errors.message && <p className="mt-2 text-red-500">{formik.errors.message}</p>} */}
                        </div>

                        <div className="flex-col flex w-full xl:ml-2 sm:mt-6">
                            <button onClick={handleSubmit} className="w-full rounded-lg bg-customGreen text-white h-20">
                              {loading && <Spinner color="white" size="md" />}
                              Submit
                            </button>
                        </div>

                      </div>

                    </div>


                    </div>
                </div>
            </header>
            <OnPageSignUp/>
        </React.Fragment>
    );
}

export default Support;

