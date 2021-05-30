import React from 'react';

import {
  useHistory,
} from 'react-router-dom';

const ACTIVE_CLASS = 'xl:w-2/6 lg:w-2/4 md:full sm:w-full h-64 rounded-lg border-2 border-customGreen flex justify-center items-start flex-col p-10 xl:ml-6 lg:ml-6 md:ml-0 sm:ml-0 xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 cursor-pointer';

const INACTIVE_CLASS = 'xl:w-2/6 lg:w-2/4 md:full sm:w-full h-64 rounded-lg border-2 border-gray-200 flex justify-center items-start flex-col p-10 xl:ml-6 lg:ml-6 md:ml-0 sm:ml-0 xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 cursor-pointer'

const ACTIVE_CLASS2 = 'xl:w-2/6 lg:w-2/4 md:full sm:w-full h-64 rounded-lg border-2 border-customGreen flex justify-center items-start flex-col p-10 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 cursor-pointer';

const INACTIVE_CLASS2 = 'xl:w-2/6 lg:w-2/4 md:full sm:w-full h-64 rounded-lg border-2 border-gray-200 flex justify-center items-start flex-col p-10 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 cursor-pointer'


const LoanApplication = () => {
    document.title = "Loan Application";
    const history = useHistory()
    const [selected, setSelected] = React.useState(0);


    const select = (num: number) => {
      setSelected(num);
    }

    const navigate = () => {
      if(selected === 1) {
        history.push('/dashboard/createpaydayloan');
      }else {
        history.push('/dashboard/createsmeloan');
      }
    }
    return (
        <>

            <div>
                <span onClick={() => history.goBack()}  className="text-xl font-semibold text-black cursor-pointer">&lt; Go Back</span>
                <h2 className="mt-6 font-bold text-4xl text-black">Apply For Loan</h2>
                <p className="mt-6 font-normal text-xl">Select a loan type from the options below to continue</p>
            </div>

            <div className="flex w-full flex-col">
                <div className="flex w-full xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-16">

                        <div className={selected === 1 ? ACTIVE_CLASS2: INACTIVE_CLASS2} onClick={() => select(1)}>
                            <h3 className="text-3xl font-bold ">Consumer Loans</h3>
                            <p className="mt-6 text-xl text-gray-600">Are you a salary earner? This is for you. Click here</p>
                        </div>

                        <div className={selected === 2 ? ACTIVE_CLASS: INACTIVE_CLASS} onClick={() => select(2)}>
                            <h3 className="text-3xl font-bold ">SME Loans</h3>
                            <p className="mt-6 text-xl text-gray-600">Business expansion or Contract financing ? Click here</p>
                        </div>

                </div>

              {selected > 0 && <button onClick={navigate} className="xl:w-72 lg:w-72 md:w-full sm:w-full h-16 rounded-lg bg-customGreen text-white mt-14">Start My Application</button>}
            </div>

        </>
    )
}

export default LoanApplication;
