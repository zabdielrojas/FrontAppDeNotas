import "./style.css";
import Modal from "../Modal/index.jsx";
import NewNoteForm from "../NewNoteForm";
import { useState } from "react";
import Button from "../Button";
import { useTokenContext } from "../../contexts/TokenContext";
import { toast } from "react-toastify";

export const Footer = () => {
  const { token } = useTokenContext();
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="main-footer">
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <NewNoteForm setShowModal={setShowModal} />
        </Modal>
      )}
      <Button
        text={"Nueva nota"}
        handleOnClick={() => {
          if (token) {
            setShowModal(true);
          } else {
            toast.warning("¡Regístrate para crear una Nota!");
          }
        }}
      />
    </footer>
  );
};
