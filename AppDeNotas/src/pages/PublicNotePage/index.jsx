import "./style.css"
import { Note } from "../../components/Note"
import { useParams } from "react-router-dom";
 import { useGetNoteByUuid } from "../../hooks/useGetNoteByUuid";

export const PublicNotePage = ()=>{
    const {uuid} = useParams();
    const {note, loading, error} = useGetNoteByUuid(uuid);
    return(<>{loading? (<p>Cargando...</p>) : (<section className="note-page-section"><Note className={"note-page"} note={note}/></section>)}</>)}