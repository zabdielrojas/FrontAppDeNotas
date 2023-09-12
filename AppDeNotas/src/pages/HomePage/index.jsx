import { Note } from "../../components/Note";
import {Button} from "../../components/Button"
import { useNotes } from "../../hooks/useNotes";
import { useEffect } from "react";
export const HomePage = () => {
 const {notes, error, loading} = useNotes()
  return (<>
    {loading&&<p>Cargando</p>}
    {!loading&&<main>
      {notes.length>0&&<Note note={notes} />}
    </main>}
    </> );
};
export default HomePage;
