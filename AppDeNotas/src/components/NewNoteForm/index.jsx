import { useState, useRef } from "react";
import "./style.css";
import uploadIcon from "../../assets/24px.svg";
import { useNavigate } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import { toast } from "react-toastify";

const NewNoteForm = ({ setShowModal }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [noteCategory, setNoteCategory] = useState("Categoría");
  const [uploadImageText, setUploadImageText] = useState("¡Sube una foto!");
  const { token } = useTokenContext();

  const noteImageRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const noteImageData = noteImageRef.current?.files;

      const formData = new FormData();

      formData.set("title", noteTitle);
      formData.set("text", noteText);
      formData.set("category", noteCategory);

      if (noteImageData.length) {
        for (const image of noteImageData) {
          formData.set("image", image);
        }
      }
      if(noteCategory === "Categoría"){
        toast.warning("¡Selecciona una categoría!")
        return
      }
      const res = await fetch(`http://localhost:8000/notes`, {
        method: "POST",
        headers: { Authorization: token },
        body: formData,
      });

      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.message);
      }
      setNoteTitle("");
      setNoteText("");
      setNoteCategory("");
      setShowModal(false);
      toast.success("Nota creada")
      navigate(`/notes/${body.data.id}`);
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

      <label className="new-note-image" htmlFor="new-note-image">
        <p className="new-note-image-p">
          {uploadImageText.length <= 30
            ? uploadImageText
            : uploadImageText.substring(0, 30) + "..."}
        </p>
        <img className="new-note-image-icon" src={uploadIcon} />
      </label>

      <input
        hidden
        id="new-note-image"
        onChange={(event) => {
          setUploadImageText(event.target.value);
        }}
        type="file"
        accept="image/*"
        ref={noteImageRef}
      />

      <label className="new-note-category" htmlFor="new-note-category">
        <select
          id="new-note-category"
          value={noteCategory}
          onChange={(event) => {
            setNoteCategory(event.target.value);
          }}
        >
          <option value={"Categoría"}>Categoría</option>
          <option value={"Otras"}>Otras</option>
          <option value={"importantes"}>Importantes</option>
          <option value={"emergencia"}>Emergencia</option>
          <option value={"citas"}>Citas</option>
        </select>
      </label>

      <button>Crear</button>
    </form>
  );
};

export default NewNoteForm;
