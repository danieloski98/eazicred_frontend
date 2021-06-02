import React from 'react'
import {
 Modal,
 ModalOverlay,
 ModalContent,
 ModalBody,
} from "@chakra-ui/react"

interface IProps {
  isOpen: boolean;
  onClose: Function;
}

export default function SMEDialog(props: IProps) {
  const [, setIsOpen] = React.useState(true)
  const onClose = () => setIsOpen(false);

  return (
      <Modal
        isOpen={props.isOpen}
        onClose={onClose}
        isCentered={true}
        closeOnEsc={false}
        closeOnOverlayClick={true}
        size="lg"
      >
        <ModalOverlay>
          <ModalContent width={500} height={400}>

              <ModalBody >

                <div className="w-full flex flex-col justify-center items-center">
                  <h3 className="font-bold text-center text-2xl">Loan Application Sent</h3>
                  <p className="mt-6 text-center tex-xl">Your loan application has been sent successfully. An EaziCred agent would contact you soon</p>

                  <div className="flex">
                    <button onClick={() => props.onClose()} className="w-40 rounded-lg bg-customGreen mt-8 h-16 text-white">Okay</button>
                  </div>
                </div>

              </ModalBody>

          </ModalContent>
        </ModalOverlay>
      </Modal>
  )
}
