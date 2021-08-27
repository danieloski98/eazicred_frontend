import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'

export default function FilesneededPopup() {
    const [opened, setOpened] = React.useState(true);
    return (
        <Modal isOpen={opened} isCentered={true} onClose={() => setOpened(false)} closeOnEsc={true} closeOnOverlayClick={false} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div>
                        <h1 className="font-bold text-3xl">Requirements</h1>
                        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Before you start your loan application make sure you have the following documents saved on your mobile/desktop for uploads</h2>
                    </div>

                    <ol className="list-decimal list-inside mt-10 text-xl">
                        <li>6 Months Banks Statement </li>
                        <li>Utility Bill</li>
                        <li>Passport</li>
                        <li>Government Issued ID</li>
                        <li>Company ID</li>
                    </ol>
                    <div className="w-full h-12 bg-customGreen cursor-pointer text-center flex items-center justify-center mt-6 text-white rounded" onClick={() => setOpened(false)}>
                        Close
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
