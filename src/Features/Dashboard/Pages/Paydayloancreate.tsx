import React from 'react'
import { useHistory } from 'react-router-dom'
import { FiUser, FiBriefcase, FiMapPin, FiDollarSign, FiFile } from 'react-icons/fi'
//import SMELoanForm from '../Components/smeloan/form';
import PaydayloanForm1 from '../Components/Paydayloan/Form1';
import PaydayloanForm2 from '../Components/Paydayloan/Form2';
import PaydayloanForm3 from '../Components/Paydayloan/Form3';
import PaydayloanForm4 from '../Components/Paydayloan/Form4';
import PaydayloanForm5 from '../Components/Paydayloan/Form5';

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

  const history = useHistory();

  const changeStage = (st: number) => {
    setStage(st);
    window.scrollTo(0,0);
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

  const form = () => {
    switch(stage) {
      case 1:{
        return <PaydayloanForm1 move={changeStage} />
      }
      case 2: {
        return <PaydayloanForm2 move={changeStage} />
      }
      case 3: {
        return <PaydayloanForm3 move={changeStage} />
      }
      case 4: {
        return <PaydayloanForm4 move={changeStage}  />
      }
      case 5: {
        return <PaydayloanForm5 move={changeStage} />
      }
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
           <div>
                <span onClick={() => history.goBack()}  className="text-xl font-semibold text-black cursor-pointer">&lt; Go Back</span>
                <h2 className="mt-6 font-bold text-4xl text-black">Payday / Emergency Loan Application</h2>
                <p className="mt-6 font-normal text-xl">Fill in the forms to complete your loan application</p>
            </div>

            <div className="w-full h-full border-t-2 border-gray-200 mt-16 flex mb-10">

              <div className="w-1/4 h-full border-r-2 border-gray-200 xl:flex lg:flex md:hidden sm:hidden flex-col justify-center">
                  <div onClick={() => changeStage(1)} className="flex items-center justify-between px-6 cursor-pointer">
                    <div className="w-56 text-right">
                      <p className={stage === 1 ? ACTIVE_TEXT:INACTIVE_TEXT}>Personal Info</p>
                      <p className={stage === 1 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Enter your personal information</p>
                    </div>

                    <div className={stage === 1 ? ACTIVE_BGB:INACTIVE_BGB}>
                        <FiUser color="white" size={20} />
                    </div>
                    <div className={stage === 1 ? ACTIVE_BGS:INACTIVE_BGS}></div>
                  </div>

                  <div onClick={() => changeStage(2)} className="flex items-center justify-between px-6 cursor-pointer mt-16">
                    <div className="w-56 text-right">
                      <p className={stage === 2 ? ACTIVE_TEXT:INACTIVE_TEXT}>Location</p>
                      <p className={stage === 2 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Information about where you are located</p>
                    </div>

                    <div className={stage === 2 ? ACTIVE_BGB:INACTIVE_BGB}>
                      <FiMapPin color="white" size={20} />
                    </div>
                    <div className={stage === 2 ? ACTIVE_BGS:INACTIVE_BGS}></div>
                  </div>

                  <div onClick={() => changeStage(3)} className="flex items-center justify-between px-6 cursor-pointer mt-16">
                    <div className="w-56 text-right">
                      <p className={stage === 3 ? ACTIVE_TEXT:INACTIVE_TEXT}>Employment</p>
                      <p className={stage === 3 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Information about your employment</p>
                    </div>

                    <div className={stage === 3 ? ACTIVE_BGB:INACTIVE_BGB}>
                      <FiBriefcase color="white" size={20} />
                    </div>
                    <div className={stage === 3 ? ACTIVE_BGS:INACTIVE_BGS}></div>
                  </div>

                  <div onClick={() => changeStage(4)} className="flex items-center justify-between px-6 cursor-pointer mt-16">
                    <div className="w-56 text-right">
                      <p className={stage === 4 ? ACTIVE_TEXT:INACTIVE_TEXT}>Loan Details</p>
                      <p className={stage === 4 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Information about the loan application</p>
                    </div>

                    <div className={stage === 4 ? ACTIVE_BGB:INACTIVE_BGB}>
                      <FiDollarSign color="white" size={20} />
                    </div>
                    <div className={stage === 4 ? ACTIVE_BGS:INACTIVE_BGS}></div>
                  </div>

                  <div onClick={() => changeStage(5)} className="flex items-center justify-between px-6 cursor-pointer mt-16">
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
                  {form()}
                  {stage > 1 && <div className="w-full xl:hidden lg:hidden sm:block md:block">
                    <button onClick={prev} className="bg-gray-500 w-full h-16 text-white rounded-lg">Previous</button>
                  </div>}
                </div>

              </div>

            </div>
    </div>
  )
}
