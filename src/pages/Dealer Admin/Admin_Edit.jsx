import { EditIcon } from "@chakra-ui/icons";
import {
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import Editfrom from "../../components/Submit form for Second hand car/Editfrom";

function Admin_Edit({post_Id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <EditIcon
        onClick={onOpen}
        // style={{
        //   marginLeft: "20px",
        //   marginBottom: "30px",
        //   marginTop: "20px",
        // }}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Second hand Car Specifications Edit form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editfrom post_Id={post_Id}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Admin_Edit;
