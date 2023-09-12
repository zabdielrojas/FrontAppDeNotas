import { useTokenContext } from "../contexts/TokenContext";

export const getNotesService = async(token)=>{

   let requestUrl = `http://localhost:8000/notes`
    try {
      // Hacemos la petición al backend.
      const res = await fetch(requestUrl, {
        method: "GET",
        headers: { "Authorization":token }
      });
      
      // Guardamos el body de la respuesta en una variable.
      const body = await res.json();
  
      // Si la respuesta no es ok lanzamos un error.
      if (!res.ok) {
        throw new Error(body.message);
      }
      // Devolvemos el body de la respuesta.
      return body;

    } catch (error) {
      console.error(error);
      return error;
    }
  };

