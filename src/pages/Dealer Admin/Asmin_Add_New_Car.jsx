import React from 'react'
import SecondHandCarSubmitform from '../../components/Submit form for Second hand car/SecondHandCarSubmitform';
import {
    ModalOverlay,
    useDisclosure,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
  } from "@chakra-ui/react";
function Asmin_Add_New_Car() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
        <Button onClick={onOpen} colorScheme='whatsapp' p={5} mb={10}> + Add New Car</Button>

       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Second hand Car Specifications form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SecondHandCarSubmitform close={onClose}/>
          </ModalBody>

      
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Asmin_Add_New_Car
