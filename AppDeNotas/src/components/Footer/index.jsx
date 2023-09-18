import "./style.css"
import Modal from "../Modal/index.jsx"
import NewNoteForm from "../NewNoteForm"
import { useState } from "react"
import Button from "../Button"

export const Footer = ()=>{
    const [showModal, setShowModal] = useState(false)
    return(
<footer className="main-footer">
{showModal && (
  <Modal setShowModal={setShowModal}>
    <NewNoteForm setShowModal={setShowModal} />
  </Modal>
)}
<Button
  text={"Nueva nota"}
  handleOnClick={() => {
    setShowModal(true);
  }}
/>
</footer>)}