import { Note } from "../Note";
import { Link } from "react-router-dom";
export const ListNotes = ({ notes }) => {
  return (
    <ul className="ListNotes-ul">
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <Link to={`notes/${note.id}`}>
            <Note note={note} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
