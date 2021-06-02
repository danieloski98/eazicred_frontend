import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Divider
} from "@chakra-ui/react"
import { FiX } from 'react-icons/fi'

interface IProps {
  loan: any;
  isOpen: boolean;
  onClose: Function;
}


export default function PaydayModal(props: IProps) {


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

  return (
   <Modal isOpen={props.isOpen} onClose={() => props.onClose()} blockScrollOnMount closeOnOverlayClick={false} closeOnEsc={true} isCentered size="2xl">
     <ModalOverlay />

     <ModalContent className="w-96" >

        <ModalBody className="p-10">

          <div className="w-full flex justify-between">
            <h3 className="font-bold text-2xl">Payday Loan Details</h3>
            <div className="p-3 rounded-full bg-gray-100 cursor-pointer" onClick={() => props.onClose()}>
              <FiX color="gray" size={20} />
            </div>
          </div>

          <div className="w-full flex justify-between text-left mt-10">
            <div className="flex-1">
                <h3 className="font-bold">Loan id</h3>
                <p>#{props.loan.id}</p>
            </div>
            <div className="flex-1 flex flex-col items-end text-left">
                <h3 className="font-bold">date</h3>
                <p>{new Date(props.loan.created_at).toDateString()}</p>
            </div>
          </div>

          <div className="w-full flex justify-between mt-10 text-left">
            <div className="flex-1">
                <h3 className="font-bold">Loan Status</h3>
                <p>{status(props.loan.status)}</p>
            </div>
            <div className="flex-1 flex flex-col items-end text-left">
                <h3 className="font-bold">Loan Amount</h3>
                <p>{props.loan.loan_amount}</p>
            </div>
          </div>

          <div className="w-full flex justify-between mt-10 text-left">
            <div className="flex-1">
                <h3 className="font-bold">Loan Tenure</h3>
                <p>{props.loan.loan_tenure} Month(s)</p>
            </div>
            <div className="flex-1 flex flex-col items-end text-left">
                <h3 className="font-bold">Draft</h3>
                <p>{props.loan.draft ? 'YES':'NO'}</p>
            </div>
          </div>

          <Divider orientation="horizontal" className="mt-16" />

          <div className="w-full flex justify-between mt-10 text-left">
            <div className="flex-1">
                <h3 className="font-bold">Interest</h3>
                <p>{props.loan.loan_tenure * 4000}</p>
            </div>
            <div className="flex-1 flex flex-col items-end text-left">
                <h3 className="font-bold">Monthly Payment</h3>
                <p>N{props.loan.loan_amount / props.loan.loan_tenure}</p>
            </div>
          </div>

          <div className="w-full flex justify-between mt-10 text-left">
            <div className="flex-1">
                <h3 className="font-bold">Total Payment</h3>

            </div>
            <div className="flex-1 flex flex-col items-end text-left">
                <p>N{props.loan.loan_tenure * 4000 + props.loan.loan_amount / props.loan.loan_tenure}</p>
            </div>
          </div>

        </ModalBody>

     </ModalContent>

   </Modal>
  )
}
