import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { useHistory } from 'react-router-dom'
import { FiUser, FiBriefcase, FiMapPin, FiDollarSign, FiFile } from 'react-icons/fi'
import {useRecoilState} from 'recoil'
import PaydayloanForm1 from '../Components/Paydayloan/Form1';
import PaydayloanForm2 from '../Components/Paydayloan/Form2';
import PaydayloanForm3 from '../Components/Paydayloan/Form3';
import PaydayloanForm4 from '../Components/Paydayloan/Form4';
import PaydayloanForm5 from '../Components/Paydayloan/Form5';
import { Formik } from 'formik';
import { VALUES } from '../../../helpers/paydayloanInitialValue';
import { UserState } from '../../../States/UserState';
import { validationSchema } from '../Components/Paydayloan/schema';
import FilesneededPopup from '../Components/Paydayloan/FilesneededPopup';

// classname

const ACTIVE_TEXT = 'text-2xl text-customGreen font-bold';
const INACTIVE_TEXT = 'text-2xl text-gray-400 font-bold';

// small text
const ACTIVE_TEXTs = 'text-lg text-gray-600 font-bold';
const INACTIVE_TEXTs = 'text-lg text-gray-300 font-bold';

// big circle
const ACTIVE_BGB = 'w-16 h-16 rounded-full bg-customGreen flex justify-center items-center';
const INACTIVE_BGB = 'w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center';

// small circle
const ACTIVE_BGS = 'w-4 h-4 rounded-full bg-customGreen';
const INACTIVE_BGS = 'w-4 h-4 rounded-full bg-gray-300';


export default function Paydayloancreation() {

  
  const [stage, setStage] = React.useState(1);
  const [user,] = useRecoilState(UserState);

  const history = useHistory();

  const changeStage = async (st: number, errors: any, dirty: boolean) => {
   switch (stage) {
     case 1: {
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
         alert('Please fillin your personal information');
         return;
       } else {
        setStage(st);
        window.scrollTo(0,0);
        return;
       }
     }
     case 2: {
      if (errors.state || errors.landmark || errors.LGA_of_residence || errors.home_address) {
        alert('Please fillin your location information');
        return;
      } else {
       setStage(st);
       window.scrollTo(0,0);
       return;
      }
     }
     case 3: {
      if (errors.employment_status ||
        errors.current_employer ||
        errors.current_employer_address ||
        errors.current_employer_landmark ||
        errors.current_employer_LGA ||
        errors.current_employer_state ||
        errors.current_employer_office_number ||
        errors.department ||
        errors.date_issued ||
        errors.job_title ) {
        alert('Please fillin your employment information');
        return;
      } else {
       setStage(st);
       window.scrollTo(0,0);
       return;
      }
     }
     case 4: {
      if ( errors.current_paydate ||
        errors.existing_loan ||
        errors.loan_amount ||
        errors.loan_tenure ||
        errors.account_number ||
        errors.account_name ||
        errors.bank_name) {
        alert('Please fillin your loan information');
        return;
      } else {
       setStage(st);
       window.scrollTo(0,0);
       return;
      }
     }
     case 5: {
      setStage(st);
      window.scrollTo(0,0);
      return;
     }
   }
  }

  const prev = () => {
    if(stage === 1) {
      return;
    }else {
      setStage(prev => prev-1);
    }
  }

  const title = (num: number) => {
    switch(num) {
      case 1: {
        return 'Personal Information';
      }
      case 2: {
        return 'Location Information';
      }
      case 3: {
        return 'Employment Information'
      }
      case 4: {
        return 'Loan Details'
      }
      case 5: {
        return 'Upload files'
      }
    }
  }

  const body = (num: number) => {
    switch(num) {
      case 1: {
        return 'Tell us about yourself by completing the form below';
      }
      case 2: {
        return 'Tell us about your location by completing the form below';
      }
      case 3: {
        return 'Tell us about your employment history by completing the form below'
      }
      case 4: {
        return 'Tell us about the loan you want to apply for'
      }
      case 5: {
        return 'Upload your neccessary documents'
      }
    }
  }

  const form = (values: any, handleChange: ChangeEventHandler<HTMLInputElement>, handleBlur: FocusEventHandler<HTMLInputElement>, errors: any, isValid: boolean) => {
    switch(stage) {
      case 1:{
        return <PaydayloanForm1 move={changeStage} values={values} handleBlur={handleBlur} handleChange={handleChange} errors={errors} />
      }
      case 2: {
        return <PaydayloanForm2 move={changeStage} values={values} handleBlur={handleBlur} handleChange={handleChange} errors={errors} />
      }
      case 3: {
        return <PaydayloanForm3 move={changeStage} values={values} handleBlur={handleBlur} handleChange={handleChange} errors={errors} />
      }
      case 4: {
        return <PaydayloanForm4 move={changeStage} values={values} handleBlur={handleBlur} handleChange={handleChange} errors={errors} />
      }
      case 5: {
        return <PaydayloanForm5 move={changeStage} values={values} isValid={isValid} />
      }
    }
  }

  return (
    <Formik
      initialValues={VALUES(user)}
      validationSchema={validationSchema}
      onSubmit={() =>{}}
    >
      {({ values, handleChange, handleBlur, touched, errors, isValid, dirty }) => (
        <div className="w-full h-full flex flex-col">
          <FilesneededPopup />
        <div>
             <span onClick={() => history.goBack()}  className="text-xl font-semibold text-black cursor-pointer">&lt; Go Back</span>
             <h2 className="mt-6 font-bold text-4xl text-black">Payday / Emergency Loan Application</h2>
             <p className="mt-6 font-normal text-xl">Fill in the forms to complete your loan application</p>
         </div>

         <div className="w-full h-full border-t-2 border-gray-200 mt-16 flex mb-0">

           <div className="w-1/4 h-full border-r-2 border-gray-200 xl:flex lg:flex md:hidden sm:hidden flex-col justify-center">
               <div onClick={() => changeStage(1, errors, dirty)} className="flex items-center justify-between px-6 cursor-pointer">
                 <div className="w-56 text-right">
                   <p className={stage === 1 ? ACTIVE_TEXT:INACTIVE_TEXT}>Personal Info</p>
                   <p className={stage === 1 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Enter your personal information</p>
                 </div>

                 <div className={stage === 1 ? ACTIVE_BGB:INACTIVE_BGB}>
                     <FiUser color="white" size={20} />
                 </div>
                 <div className={stage === 1 ? ACTIVE_BGS:INACTIVE_BGS}></div>
               </div>

               <div onClick={() => changeStage(2, errors, dirty)} className="flex items-center justify-between px-6 cursor-pointer mt-16">
                 <div className="w-56 text-right">
                   <p className={stage === 2 ? ACTIVE_TEXT:INACTIVE_TEXT}>Location</p>
                   <p className={stage === 2 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Information about where you are located</p>
                 </div>

                 <div className={stage === 2 ? ACTIVE_BGB:INACTIVE_BGB}>
                   <FiMapPin color="white" size={20} />
                 </div>
                 <div className={stage === 2 ? ACTIVE_BGS:INACTIVE_BGS}></div>
               </div>

               <div onClick={() => changeStage(3, errors, dirty)} className="flex items-center justify-between px-6 cursor-pointer mt-16">
                 <div className="w-56 text-right">
                   <p className={stage === 3 ? ACTIVE_TEXT:INACTIVE_TEXT}>Employment</p>
                   <p className={stage === 3 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Information about your employment</p>
                 </div>

                 <div className={stage === 3 ? ACTIVE_BGB:INACTIVE_BGB}>
                   <FiBriefcase color="white" size={20} />
                 </div>
                 <div className={stage === 3 ? ACTIVE_BGS:INACTIVE_BGS}></div>
               </div>

               <div onClick={() => changeStage(4, errors, dirty)} className="flex items-center justify-between px-6 cursor-pointer mt-16">
                 <div className="w-56 text-right">
                   <p className={stage === 4 ? ACTIVE_TEXT:INACTIVE_TEXT}>Loan Details</p>
                   <p className={stage === 4 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Information about the loan application</p>
                 </div>

                 <div className={stage === 4 ? ACTIVE_BGB:INACTIVE_BGB}>
                   <FiDollarSign color="white" size={20} />
                 </div>
                 <div className={stage === 4 ? ACTIVE_BGS:INACTIVE_BGS}></div>
               </div>

               <div onClick={() => changeStage(5, errors, dirty)} className="flex items-center justify-between px-6 cursor-pointer mt-16">
                 <div className="w-56 text-right">
                   <p className={stage === 5 ? ACTIVE_TEXT:INACTIVE_TEXT}>Upload files</p>
                   <p className={stage === 5 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Upload the neccessary documents</p>
                 </div>

                 <div className={stage === 5 ? ACTIVE_BGB:INACTIVE_BGB}>
                   <FiFile color="white" size={20} />
                 </div>
                 <div className={stage === 5 ? ACTIVE_BGS:INACTIVE_BGS}></div>
               </div>

           </div>


           <div className="flex-1 xl:p-10 lg:p-10 md:p-0 sm:p-0 xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 flex flex-col">

             <div>
               <p className="text-xl">Step {stage}/5</p>
               <p className="font-bold text-3xl mt-6">{title(stage)}</p>
               <p className="text-xl mt-4">{body(stage)}</p>
             </div>

             <div className="flex-1 my-6 py-6">
               {form(values, handleChange, handleBlur, errors, isValid)}
               {stage > 1 && <div className="w-full xl:hidden lg:hidden sm:block md:block">
                 <button onClick={prev} className="bg-gray-500 w-full h-16 text-white rounded-lg">Previous</button>
               </div>}
             </div>

           </div>

         </div>
 </div>
      )}
    </Formik>
  )
}
