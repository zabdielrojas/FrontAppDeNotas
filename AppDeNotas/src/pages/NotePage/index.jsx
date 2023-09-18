import "./style.css"
import { Note } from "../../components/Note"
import { useParams } from "react-router-dom";
import { useGetNoteById } from "../../hooks/useGetNoteById";

export const NotePage = ()=>{
    const {id} = useParams();
    const {note, loading, error} = useGetNoteById(id);
    return(<>{loading? (<p>Cargando...</p>) : (<section className="note-page-section"><Note className={"note-page"} note={note}/></section>)}</>)}