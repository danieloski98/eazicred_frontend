import React from 'react'
import useUser from '../../../hooks/useUser'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const { user } = useUser()
  const history = useHistory();

  const navigate = () => {
    history.push('/dashboard/history');
  }
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden">
      <div className="flex">
        <h1 className="text-4xl font-bold text-black">Welcome</h1>
        <h1 className="text-4xl font-normal text-gray-600 ml-4">{user.firstname.toUpperCase()}</h1>
      </div>
      <p className="mt-3 text-xl">Here's a quick summary of what's happening</p>

      <div className="flex w-full justify-between mt-16 items-center">
        <p className="text-2xl">Loan History</p>
        <button onClick={navigate} className="w-40 h-16 rounded-lg border-2 border-customGreen">View All</button>
      </div>

      <div className="w-full h-full bg-gray-100 mb-20 mt-10 p-10 rounded-lg flex flex-col items-center overflow-auto">

        <div className="flex w-full h-16 border-gray-200 border-b-2 over flex-nowrap">
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">Date</p>
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">Transaction ID</p>
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">Loan Type</p>
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">Amount</p>
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">Action</p>
          <p></p>
        </div>

        <div className="flex justify-between w-full mt-16 h-16 border-b-2  border-gray-200 items-center pb-8 xl:mr-0 lg:mr-0 md:mr-10 sm:pr-10">
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">December 2 2021</p>
          <p className="ttext-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">#1</p>
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">Pay Day Loan</p>
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">N200,000.00</p>
          <div className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
            <button className="w-40 h-14 rounded-lg bg-customGreen text-white text-xl ">View Details</button>
          </div>
        </div>

        <div className="flex justify-between w-full mt-16 h-16 border-b-2  border-gray-200 items-center pb-8 xl:mr-0 lg:mr-0 md:mr-10 sm:pr-10">
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">December 2 2021</p>
          <p className="ttext-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">#5</p>
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">Pay Day Loan</p>
          <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">N200,000.00</p>
          <div className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
            <button className="w-40 h-14 rounded-lg bg-customGreen text-white text-xl ">View Details</button>
          </div>
        </div>

        {/* <div className="flex justify-between w-full mt-16 h-16 border-b-2  border-gray-200 items-center pb-8">
          <p className="text-xl font w-40 flex-1">December 2 2021</p>
          <p className="text-xl font w-40 flex-1">#5</p>
          <p className="text-xl font w-40 flex-1">SME Loan</p>
          <p className="text-xl font w-40 flex-1">N2,000,000.00</p>
          <div className="text-xl font w-40 flex-1">
            <button className="w-40 h-14 rounded-lg bg-customGreen text-white text-xl ">View Details</button>
          </div>
        </div> */}

      </div>

    </div>
  )
}
