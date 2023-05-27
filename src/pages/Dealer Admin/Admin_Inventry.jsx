import React from "react";
import "./Admin.css";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import Editfrom from "../../components/Submit form for Second hand car/Editfrom";
import Admin_Edit from "./Admin_Edit";

function Admin_Inventry({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handle_delete_car = async () => {
    try {
      const res = await axios.delete(
        `https://serverside-qga2.vercel.app/dealers/${data?._id}`
      );
      alert("Car post has been deleted.");
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      onClose();
    }, 100);
  };
  return (
    <div id="secondcarInventrys">
      <div className="edit_delete">
       

        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<Admin_Edit post_Id={data?._id} />}
        />

        <IconButton
          variant="outline"
          colorScheme="pink"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<DeleteIcon onClick={onOpen}  />}
        />
      </div>
      <img
        src={data?.img}
        alt=""
        style={{
          margin: "auto",
          width: "90%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginBottom: "20px",
          marginLeft: "50px",
          marginTop: "20px",
        }}
      >
        <p className="text">
          {" "}
          <b> Model Name - {data?.model_name} </b>
        </p>
        <p className="text">
          {" "}
          <b> Year Model - {data?.year_model} </b>
        </p>
        <p className="text">
          {" "}
          <b> Original Paint - {data?.original_paint} </b>
        </p>
        <p className="text">
          {" "}
          <b> KMs on Odometer - {data?.km_run} </b>
        </p>
        <p className="text">
          {" "}
          <b> Major Scratches - {data?.major_scratches} </b>
        </p>
        <p className="text">
          {" "}
          <b>
            {" "}
            Number of accidents reported - {
              data?.number_of_accidents_reported
            }{" "}
          </b>
        </p>
        <p className="text">
          {" "}
          <b> Number of previous buyers - {data?.number_of_previous_buyers} </b>
        </p>
        <p className="text">
          {" "}
          <b> Registration Place - {data?.registration_place} </b>
        </p>
        <p className="text">
          {" "}
          <b> Mileage - {data?.mileage} </b>
        </p>
        <p className="text">
          {" "}
          <b> Price - {data?.price} </b>
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginBottom: "20px",
          marginLeft: "50px",
          marginTop: "20px",
        }}
      >
        <p className="text">
          <b> Car Description </b>
        </p>

        {data?.description?.split(".").map((item, index) => {
          if (item === "") {
            return;
          }
          return (
            <li className="text" key={index}>
              {item}
            </li>
          );
        })}
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <p>
              {" "}
              <b> Are you sure you want to delete your post. </b>
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={handle_delete_car}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Admin_Inventry;
