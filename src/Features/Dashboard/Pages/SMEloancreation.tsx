import React from 'react'
import { useHistory } from 'react-router-dom'
import { FiUser, FiBriefcase } from 'react-icons/fi'
import SMELoanForm from '../Components/smeloan/form';

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


export default function SMEloancreation() {
  const [stage, setStage] = React.useState(1);

  const history = useHistory();

  const changeStage = (st: number) => {
    setStage(st)
  }

  return (
    <div className="w-full h-full flex flex-col">
           <div>
                <span onClick={() => history.goBack()}  className="text-xl font-semibold text-black cursor-pointer">&lt; Go Back</span>
                <h2 className="mt-6 font-bold text-4xl text-black">SME Loan Application</h2>
                <p className="mt-6 font-normal text-xl">Fill in the forms to complete your loan application</p>
            </div>

            <div className="w-full h-full border-t-2 border-gray-200 mt-16 flex mb-10">

              <div className="w-1/4 h-full border-r-2 border-gray-200 xl:flex lg:flex md:hidden sm:hidden flex-col justify-center">
                  {/* <div className="flex items-center justify-between px-6 cursor-pointer" onClick={() => changeStage(1)}>
                    <div className="w-56 text-right">
                      <p className={stage === 1 ? ACTIVE_TEXT:INACTIVE_TEXT}>Personal Info</p>
                      <p className={stage === 1 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Enter your personal information</p>
                    </div>

                    <div className={stage === 1 ? ACTIVE_BGB:INACTIVE_BGB}>
                        <FiUser color="white" size={20} />
                    </div>
                    <div className={stage === 1 ? ACTIVE_BGS:INACTIVE_BGS}></div>
                  </div> */}

                  <div className="flex items-center justify-between px-6 cursor-pointer mt-0" onClick={() => changeStage(1)}>
                    <div className="w-56 text-right">
                      <p className={stage === 1 ? ACTIVE_TEXT:INACTIVE_TEXT}>Business Info</p>
                      <p className={stage === 1 ? ACTIVE_TEXTs:INACTIVE_TEXTs}>Enter your business information</p>
                    </div>

                    <div className={stage === 1 ? ACTIVE_BGB:INACTIVE_BGB}>
                      <FiBriefcase color="white" size={20} />
                    </div>
                    <div className={stage === 1 ? ACTIVE_BGS:INACTIVE_BGS}></div>
                  </div>
              </div>


              <div className="flex-1 xl:p-10 lg:p-10 md:p-0 sm:p-0 xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 flex flex-col">

                <div>
                  <p className="text-xl">Step {stage}/1</p>
                  <p className="font-bold text-3xl mt-6">{stage === 2 ? 'Personal Information': 'Business Information'}</p>
                  <p className="text-xl mt-4">{stage === 2 ? 'Tell us about yourself by completing the form below':'Tell us about business by completing the form below'}</p>
                </div>

                <div className="flex-1 my-6 py-6">
                  <SMELoanForm />
                </div>



              </div>

            </div>
    </div>
  )
}
