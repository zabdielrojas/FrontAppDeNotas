import { ListNotes } from "../../components/ListNotes";
import {Button} from "../../components/Button"
import { useGetNotes } from "../../hooks/useGetNotes";
import { useEffect } from "react";
import { useTokenContext } from "../../contexts/TokenContext";
export const HomePage = () => {
  const {token} = useTokenContext()
 const {notes, error, loading} = useGetNotes()
 if(!token){return}<></> // To do: rellenar con algo.
  return (<>
    {loading&&<p>Cargando</p>}
    {!loading&&<main>
      {notes.length > 0 ? (<ListNotes notes={notes} />) : (<p>No hay notas</p>)}
    </main>}
    </> );
};
export default HomePage;
