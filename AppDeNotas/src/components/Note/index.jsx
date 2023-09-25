import "./style.css";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useTokenContext } from "../../contexts/TokenContext";
import { useLocation } from "react-router-dom";

export const Note = ({ note, className }) => {
  const { token } = useTokenContext();
  const { id, title, text, image, is_public } = note;
  console.log(is_public);
  const [isPublicNote, setIsPublicNote] = useState(is_public);
  const location = useLocation();

  useEffect(()=>{setIsPublicNote(is_public)},[is_public])
  const toggleIsPublic = async (event) => {
    const res = await fetch(`http://localhost:8000/notes/${id}`, {
      method: "PUT",
      headers: { Authorization: token },
    });

    const body = await res.json();

    if (!res.ok) {
      throw new Error(body.message);
    }
    setIsPublicNote(body.data.is_public);
  };

  if (location.pathname === `/notes/${id}`) {
    console.log(isPublicNote);
    return (
      <article className={`note-article ${className}`}>
        <header className="note-header">
          <h2>{title}</h2>
          <button
            onClick={() => {
              toggleIsPublic();
            }}
          >
            {isPublicNote ? "Pública" : "Privada"}
          </button>
          {isPublicNote && <Button text={"Compartir"} />}
        </header>
        <section className="note-section">
          {text && <p className="note-p">{text}</p>}
          {image && <img src={`http://localhost:8000/${image}`} />}
        </section>
      </article>
    );
  }

  return (
    <article className={`note-article ${className}`}>
      <header className="note-header">
        <h2>{title}</h2>
      </header>
      <section className="note-section">
        {image && <img src={`http://localhost:8000/${image}`} />}
      </section>
    </article>
  );
};
