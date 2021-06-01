import React from 'react';
import { useHistory } from 'react-router-dom'
import useUser from '../../../hooks/useUser';
import PaydayloanHistory from '../Components/Paydayloan/History';
import SMEloanHistory from '../Components/smeloan/History';
import { Badge } from '@chakra-ui/react'

const ACTIVE = "xl:flex-1 lg:flex-1 md:flex-0 sm:flex-0 xl:w-0 lg:w-0 md:w-40 sm:w-40 border-b-4 border-customGreen h-24 text-center flex items-center justify-center mx-16 cursor-pointer hover:bg-gray-100 text-xl font-bold";

const INACTIVE = "xl:flex-1 lg:flex-1 md:flex-0 sm:flex-0 xl:w-0 lg:w-0 md:w-64 sm:w-64 border-b-4 border-gray-100 h-24 text-center flex items-center justify-center mx-16 cursor-pointer hover:bg-gray-100 text-xl font-bold";


const History = () => {
  document.title = "EaziCred - Loan History"
  const history = useHistory();
  const [page, setPage] = React.useState(1);
  const { user } = useUser()

  const changePage = (pg: number) => {
    setPage(pg);
  }

  return (
           <div className="w-full h-full flex flex-col ">

              <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:justify-between lg:justify-between xl:items-center lg:items-center">
                  <div className="xl:text-left lg:text-left md:text-center sm:text-center">
                    <h2 className="text-4xl font-bold text-black">Transaction History</h2>
                    <p className="text-xl mt-6 text-gray-600">Here's a summary of all your transactions</p>
                  </div>
                  <div>
                    <button onClick={() => history.push('/dashboard/application')} className="xl:w-56 lg:w-56 md:w-full sm:w-full xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 h-16 rounded-lg bg-customGreen text-white">Apply for Loan</button>
                  </div>
              </div>

              <div className="w-full h-full border-2 border-gray-200 rounded-lg mb-16 mt-16 px-14 flex flex-col overflow-auto">
                <div className="w-full h-24 border-b-2 border-gray-100 flex items-center flex-nowrap">
                  <div className={page === 1 ? ACTIVE:INACTIVE} onClick={() => changePage(1)}>Payday Loans <Badge colorScheme="blue" variant="subtle" > <span className="text-xl">{user.paydayloans.length}</span> </Badge></div>
                  <div className={page ===2 ? ACTIVE:INACTIVE} onClick={() => changePage(2)}>SME Loans <Badge colorScheme="blue" variant="subtle" > <span className="text-xl">{user.SMEloans.length}</span> </Badge></div>
                </div>
                <div className="flex-1 py-6">
                  {
                    page === 1 ?
                    <PaydayloanHistory />
                    :
                    <SMEloanHistory />
                  }
                </div>
              </div>
           </div>
    );
}

export default History;
