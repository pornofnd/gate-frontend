import React from "react";
import "./appCreateModal.scss";
import Modal from "react-modal";
import AppInputForm from "../AppInputForm";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: " #292929",
    border: "none",
    padding: "0px",
    borderRadius: "10px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};
export default function AppCreateModal({
  modalIsOpen,
  setIsOpen,
}: {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <section className="AppCreateModal">
        <h1 className="AppCreateModalTitle">Create new store</h1>
        <AppInputForm setIsOpen={setIsOpen} />
      </section>
    </Modal>
  );
}
