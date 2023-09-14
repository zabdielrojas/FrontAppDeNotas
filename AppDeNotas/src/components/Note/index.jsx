import Button from "../Button";
import { useState} from "react";
import { useTokenContext } from "../../contexts/TokenContext";
import { useLocation } from "react-router-dom";

export const Note = ({ note }) => {
  const { token } = useTokenContext();
  const { id, title, text, image, is_public } = note;
  const [isPublicNote, setIsPublicNote] = useState(is_public);
  const location = useLocation();

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
 
  return (
    <article className="note-article">
      <header className="note-header">
        <h2>{title}</h2>

        {location.pathname === `/notes/${id}` && (
          <button
            onClick={()=>{
              toggleIsPublic()
            }}
          >{isPublicNote ? "Pública" : "Privada"}</button>
        )}
        {isPublicNote === true && (
          <li>
            <Button text={"Compartir"} />
          </li>
        )}
      </header>
      <section className="note-section">
        {image && <img src={`http://localhost:8000/${image}`} />}
        {text && <p className="note-p">{text}</p>}
      </section>
    </article>
  );
};
