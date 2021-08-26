import React from 'react'
import { useToast } from '@chakra-ui/react'


interface IProps {
  move: Function;
  values: any;
  handleChange: any;
  handleBlur: any;
  errors: any;
}

export default function PaydayloanForm1({ values, handleChange, handleBlur, errors, move}: IProps) {
  const toast = useToast();


  const submit = async () => {
   if (errors.firstname ||
    errors.lastname ||
    errors.DOB ||
    errors.BVN ||
    errors.Means_of_ID ||
    errors.ID_number ||
    errors.expiry_date ||
    errors.phone ||
    errors.date_issued ||
    errors.marital_status ||
    errors.next_of_kin_surname ||
    errors.next_of_kin_firstname ||
    errors.next_of_kin_relationship ||
    errors.next_of_kin_phone ||
    errors.next_of_kin_address) {
     toast({
       title: 'Attention',
       description: 'YYou have to fill in the form properly to continue',
       position: 'top',
       status: 'error',
       isClosable: true
     });
     return;
   } else {
     console.log(values);
    move(2, errors);
   }
  }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>First name</label>
            <input type="text" name="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.firstname && <p className="text-sm text-red-500 mt-3">{errors.firstname}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Lastname</label>
            <input name="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.lastname && <p className="text-sm text-red-500 mt-3">{errors.lastname}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Date of Birth</label>
            <input  type="date" name="DOB" value={values.DOB} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.DOB && <p className="text-sm text-red-500 mt-3">{errors.DOB}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>BVN</label>
            <input  type="text" name="BVN" value={values.BVN} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.BVN && <p className="text-sm text-red-500 mt-3">{errors.BVN}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Means of ID</label>
            <select name="Means_of_ID" value={values.Means_of_ID} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
            <option selected disabled>Select document</option>
              <option value="Drivers Licence">Drivers Licence</option>
              <option value="NIN Card">NIN Card</option>
              <option value="Passport">Passport</option>
              <option value="Voters Card">Voters Card</option>
              <option value="National Card">National Card</option>
            </select>
            {
              errors.Means_of_ID && <p className="text-sm text-red-500 mt-3">{errors.Means_of_ID}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>ID number</label>
            <input type="text" name="ID_number" value={values.ID_number} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.ID_number && <p className="text-sm text-red-500 mt-3">{errors.ID_number}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Date issued</label>
            <input type="date" name="date_issued" value={values.date_issued} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.date_issued && <p className="text-sm text-red-500 mt-3">{errors.date_issued}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>expiry date</label>
            <input type="date" name="expiry_date" value={values.expiry_date} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.expiry_date && <p className="text-sm text-red-500 mt-3">{errors.expiry_date}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Phone number</label>
            <input type="number" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.phone && <p className="text-sm text-red-500 mt-3">{errors.phone}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Alt number</label>
            <input type="number" name="alt_number" value={values.alt_number} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.alt_number && <p className="text-sm text-red-500 mt-3">{errors.alt_number}</p>
            }
        </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Marital Status</label>
            <select name="marital_status" value={values.marital_status} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3">
            <option selected disabled>Select Marriage status</option>
              <option value={2}>Married</option>
              <option value={1}>Single</option>
              <option value={3}>Divorced</option>
              <option value={4}>Seperated</option>
              <option value={5}>Widowed</option>
            </select>

            {/* <input type="text" name="business_up_time" value={values.business_up_time} onChange={handleChange} onBlur={handleBlur} onFocus={() => formik.setFieldTouched('business_up_time', true, true)} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/> */}
            {
              errors.marital_status && <p className="text-sm text-red-500 mt-3">{errors.marital_status}</p>
            }
        </div>



      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label>Next of Kin Surname</label>
            <input type="text" name="next_of_kin_surname" value={values.next_of_kin_surname} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.next_of_kin_surname && <p className="text-sm text-red-500 mt-3">{errors.next_of_kin_surname}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label>Next of Kin Firstname</label>
            <input type="text" name="next_of_kin_firstname" value={values.next_of_kin_firstname} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.next_of_kin_firstname && <p className="text-sm text-red-500 mt-3">{errors.next_of_kin_firstname}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Next of Kin Relationship</label>
            <input type="text" name="next_of_kin_relationship" value={values.next_of_kin_relationship} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.next_of_kin_relationship && <p className="text-sm text-red-500 mt-3">{errors.next_of_kin_relationship}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label htmlFor={'newpassword'}>Next of Kin Phone number</label>
            <input type="text" name="next_of_kin_phone" value={values.next_of_kin_phone} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.next_of_kin_phone && <p className="text-sm text-red-500 mt-3">{errors.next_of_kin_phone}</p>
            }
        </div>

      </div>

      <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label htmlFor={'newpassword'}>Next of Kin Address</label>
            <input type="drop" name="next_of_kin_address" value={values.next_of_kin_address} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.next_of_kin_address && <p className="text-sm text-red-500 mt-3">{errors.next_of_kin_address}</p>
            }
        </div>

      </div>

      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>
    </div>
  )
}
