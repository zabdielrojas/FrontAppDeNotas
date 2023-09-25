import "./style.css";
import { Note } from "../Note";
import { Link } from "react-router-dom";
export const ListNotes = ({ notes }) => {
  console.log(notes);
  return (
    <ul className="list-notes-ul">
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <Link className="list-notes-link" to={`notes/${note.id}`}>
              <Note is_public={note.is_public} note={note} />
            </Link> 
          </li>
        );
      })}
    </ul>
  );
};
