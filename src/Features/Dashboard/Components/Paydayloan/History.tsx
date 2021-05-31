import React from 'react'
import { FiBox } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

export default function PaydayloanHistory() {
  const [loans, setLoans] = React.useState([] as Array<any>);
  const history = useHistory();

  return (
    <div className="w-full h-full">
      {
        loans.length < 1 ?
        <div className="w-full h-full flex-col flex items-center justify-center">
          <FiBox size={100} className="text-customGreen" />
            <p className="text-2xl font-bold mt-6">No Payday Loans yet.</p>
            <p className="mt-6">You don't have any approved loans for now. <span className="text-customGreen font-semibold cursor-pointer" onClick={() => history.push('/dashboard/application')}>Apply for one now</span> </p>
        </div>
        :
        <div></div>
      }
    </div>
  )
}
