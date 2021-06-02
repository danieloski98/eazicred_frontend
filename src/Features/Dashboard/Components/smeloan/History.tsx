import React from 'react'
import { FiBox } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import useUser from '../../../../hooks/useUser';
import SMEModal from './Modal';

export default function SMEloanHistory() {
  const [loan, setLoan] = React.useState({} as any);
  const [modalOpen, setModalOpen] = React.useState(false);
  const history = useHistory();
  const {user} = useUser();

  const status = (num: number) => {
    switch(num) {
      case 1: {
        return <p className="mt-3 text-xl text-yellow-600 rouned-lg">Awaiting Approval</p>
      }
      case 2: {
        return <p className="mt-3 text-xl text-green-600 rouned-lg">Approved</p>
      }
      case 3: {
        return <p className="mt-3 text-xl text-grenn-600">Declined</p>
      }
    }
  }

  const close = () => {
    setModalOpen(false);
    setLoan({});
  }

  const open = (ln: any) => {
    setLoan(ln);
    setModalOpen(true);
  }

  return (
    <div className="w-full h-full">
      <SMEModal loan={loan} onClose={close} isOpen={modalOpen} />
      {
        user.SMEloans.length < 1 ?
        <div className="w-full h-full flex-col flex items-center justify-center">
          <FiBox size={100} className="text-customGreen" />
            <p className="text-2xl font-bold mt-6">No SME Loans yet.</p>
            <p className="mt-6">You don't have any approved loans for now. <span className="text-customGreen font-semibold cursor-pointer" onClick={() => history.push('/dashboard/application')}>Apply for one now</span> </p>
        </div>
        :
        user.SMEloans.map((item, index) => (
          <div key={index} className="flex justify-between w-full mt-16 h-16 border-b-2  border-gray-200 items-center pb-8 xl:mr-0 lg:mr-0 md:mr-10 sm:pr-10">
            <div className="flex flex-col text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
              <p className="font-bold">Date</p>
              <p className="mt-3">{new Date(item.created_at).toDateString()}</p>
            </div>
            <div className="flex flex-col text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
              <p className="font-bold">Business Name</p>
              <p className="mt-3">{item.business_name}</p>
            </div>
            <div className="flex flex-col text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
              <p className="font-bold">Loan ID</p>
              <p className="mt-3">#{item.id}</p>
            </div>
            <div className="flex flex-col text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
              <p className="font-bold">Status</p>
              {status(item.status)}
            </div>
            <div className="flex flex-col text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
              <p className="font-bold">Draft</p>
              <p className="mt-3">{item.draft ? 'Yes':'No'}</p>
            </div>

            <div className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
              <button onClick={() => open(item)} className="w-40 h-14 rounded-lg bg-customGreen text-white text-xl ">View Details</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
