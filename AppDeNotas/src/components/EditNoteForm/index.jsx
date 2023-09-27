import { useState, useRef } from "react";
import "./style.css";
import { useTokenContext } from "../../contexts/TokenContext";
import { toast } from "react-toastify";

export const EditNoteForm = ({ id,setShowModal, setNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [noteCategory, setNoteCategory] = useState("");

  const { token } = useTokenContext();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();

      formData.set("title", noteTitle);
      formData.set("text", noteText);
      formData.set("category", noteCategory);

      if (noteCategory === "Categoría") {
        toast.warning("¡Selecciona una categoría!");
        return;
      }
      const res = await fetch(`http://localhost:8000/notes/${id}/edit`, {
        method: "PUT",
        headers: { Authorization: token },
        body: formData,
      });

      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.message);
      }

      setNote({...body.data});
      setNoteTitle("");
      setNoteText("");
      setNoteCategory("");
      setShowModal(false);
      toast.success("¡Nota editada con éxito!");

      setShowModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form className="new-note-form" onSubmit={handleSubmit}>
      <label hidden htmlFor="new-note-title" className="new-note-title">
        Título
      </label>
      <input
        id="new-note-title"
        type="text"
        value={noteTitle}
        onChange={(event) => {
          setNoteTitle(event.target.value);
        }}
        placeholder="Título"
      />
      <label hidden htmlFor="new-note-text" className="new-note-text">
        Texto
      </label>
      <input
        id="new-note-text"
        type="text"
        value={noteText}
        onChange={(event) => {
          setNoteText(event.target.value);
        }}
        placeholder="¿En que piensas?"
      />
      <label className="new-note-category" htmlFor="new-note-category">
        <select
          id="new-note-category"
          value={noteCategory}
          onChange={(event) => {
            setNoteCategory(event.target.value);
          }}
        >
          <option value={""}>Categoría</option>
          <option value={"Otras"}>Otras</option>
          <option value={"importantes"}>Importantes</option>
          <option value={"emergencia"}>Emergencia</option>
          <option value={"citas"}>Citas</option>
        </select>
      </label>

      <button>Editar</button>
    </form>
  );
};

