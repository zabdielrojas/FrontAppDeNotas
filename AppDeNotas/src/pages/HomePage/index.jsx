import { ListNotes } from "../../components/ListNotes";
import {Button} from "../../components/Button"
import { useNotes } from "../../hooks/useNotes";
import { useEffect } from "react";
import { useTokenContext } from "../../contexts/TokenContext";
export const HomePage = () => {
  const {token} = useTokenContext()
 const {notes, error, loading} = useNotes()
 if(!token){return}<></> // To do: rellenar con algo.
  return (<>
    {loading&&<p>Cargando</p>}
    {!loading&&<main>
      {notes.length > 0 ? (<ListNotes notes={notes} />) : (<p>No hay notas</p>)}
    </main>}
    </> );
};
export default HomePage;
