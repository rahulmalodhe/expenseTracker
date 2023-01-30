import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./success.css";

const SucessModal = ({openModal, setOpenModal}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71CCCA",
      borderradius: "12px",
    },
  };
  return (
    <>
      <Modal isOpen={openModal} style={customStyles}>
        <div className="modalInner">
          <label>Expense Added Successfully</label>
          <img
            src={require("../../expense-images/success.png")}
            className="addimage"
            alt="Success!!"
          />
          <Link to="/">
            <div className="takeHome">
              <i className="fi fi-rr-home"></i>
              Home
            </div>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default SucessModal;
