import { Note } from "../Note";
export const ListNotes = ({ notes }) => {
  return (
    <ul className="ListNotes-ul">
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <Note note={note} />
          </li>
        );
      })}
    </ul>
  );
};
