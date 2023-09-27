import "./style.css";
import { Note } from "../../components/Note";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetNoteById } from "../../hooks/useGetNoteById";
import { Modal } from "../../components/Modal";
 import {EditNoteForm} from "../../components/EditNoteForm"
import Button from "../../components/Button";

export const NotePage = () => {
  const [showEditNoteModal, setShowEditNoteModal] = useState();
  const { id } = useParams();
  const { note, loading, error, setNote } = useGetNoteById(id);
  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section className="note-page-section">
         <Note className={"note-page"} note={note} />
          {showEditNoteModal && (
            <Modal setShowModal={setShowEditNoteModal}><EditNoteForm  id={note.id} setNote={setNote} setShowModal={setShowEditNoteModal} /></Modal>
          )}
        <Button text={"Editar"} handleOnClick={()=>{setShowEditNoteModal(true)}} />     
        </section> )}
    </>
  );
};
