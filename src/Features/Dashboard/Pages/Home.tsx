import React from 'react'
import useUser from '../../../hooks/useUser'
import { useHistory } from 'react-router-dom'
import PaydayModal from '../Components/Paydayloan/Modal';
import SMEModal from '../Components/smeloan/Modal';

export default function Home() {
  const { user } = useUser()
  const history = useHistory();
  const [ploans, setPLoans] = React.useState([] as Array<any>)
  const [loan, setLoan] = React.useState({} as any);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [p, setP] = React.useState(false);

  React.useMemo(() => {
    if (user.paydayloans.length < 1) {
      if (user.SMEloans.length < 1) {
        return;
      }else {
        if(user.SMEloans.length > 1) {
          setPLoans([user.SMEloans[0], user.SMEloans[1]])
        }else {
          setPLoans([user.SMEloans[0]])
        }
      }
    }else {
      if (user.paydayloans.length > 1) {
        setPLoans([user.paydayloans[0], user.paydayloans[1]]);
      }else {
        setPLoans([user.paydayloans[0]]);
      }

    }
  }, [user.SMEloans, user.paydayloans])

  const close = () => {
    setModalOpen(false);
    setLoan({});
  }

  const closep = () => {
    setP(false);
    setLoan({});
  }

  const open = (ln: any) => {
    setLoan(ln);
    setModalOpen(true);
  }

  const openp = (ln: any) => {
    setLoan(ln);
    setP(true);
  }

  const navigate = () => {
    history.push('/dashboard/history');
  }
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden">
      <PaydayModal loan={loan} onClose={closep} isOpen={p} />
      <SMEModal loan={loan} onClose={close} isOpen={modalOpen} />
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

        {
          ploans.length >= 1 ?
          ploans.map((item, index) => (
            <div key={index} className="flex justify-between w-full mt-16 h-16 border-b-2  border-gray-200 items-center pb-8 xl:mr-0 lg:mr-0 md:mr-10 sm:pr-10">
              <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">{new Date(item.created_at).toDateString()}</p>
              <p className="ttext-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">#{item.id}</p>
              <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">{item.type === 1 ? 'Payday loan':'SME loan'}</p>
              <p className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">N{item.type === 1 ? item.loan_amount: 'null'}</p>
              <div className="text-xl font xl:flex-1 lg:flex-1 sm:flex-none md:flex-none xl:w-0 lg:w-0 md:w-40 sm:w-40">
                <button onClick={() => item.type === 1 ? openp(item):open(item)} className="w-40 h-14 rounded-lg bg-customGreen text-white text-xl ">View Details</button>
              </div>
            </div>
          ))
          :
          <div className="w-full h-16 flex justify-center items-end">
            <p>No Payday loans or SME loans created</p>
          </div>

        }

      </div>

    </div>
  )
}
