import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react"
import { FiX } from 'react-icons/fi'
import { ISMELoans } from '../../../../helpers/SMEloans'

interface IProps {
  loan: ISMELoans;
  isOpen: boolean;
  onClose: Function;
}


export default function SMEModal(props: IProps) {


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

          <div className="w-full flex justify-between mt-16 text-left">
            <div className="flex-1">
                <h3 className="font-bold">Loan Status</h3>
                <p>{status(props.loan.status)}</p>
            </div>
            <div className="flex-1 flex flex-col items-end text-left">
                <h3 className="font-bold">Draft</h3>
                <p>{props.loan.draft ? 'YES':'NO'}</p>
            </div>
          </div>


        </ModalBody>

     </ModalContent>

   </Modal>
  )
}
