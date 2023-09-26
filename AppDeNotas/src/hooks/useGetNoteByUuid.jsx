import { useEffect, useState } from "react";
import { useTokenContext } from "../contexts/TokenContext";
import { useSearchParams } from "react-router-dom";


export const useGetNoteByUuid = (uuid) => {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const { token } = useTokenContext();

  useEffect(() => {
    setLoading(true);
    try {
      const getNoteByUuidService = async () => {
        // Hacemos la petición al backend.
        const res = await fetch(`http://localhost:8000/notes/public/${uuid}`
        ,{headers: { Authorization: token}});
        // Guardamos el body de la respuesta en una variable.
        const body = await res.json();
        // Si la respuesta no es ok lanzamos un error.
        if (res.status !== 200) {
          throw new Error();
        }
  
        // Devolvemos el body de la respuesta.
        setNote(body.data);
      };
      getNoteByUuidService();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [uuid, token]);
  return { loading, note, setNote, error, searchParams, setSearchParams };
};
