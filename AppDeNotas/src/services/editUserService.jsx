 import { useTokenContext } from "../contexts/TokenContext";
  import { toast } from "react-toastify";
const editUserService = async (editUserData, token) => {
    const { email, username } = editUserData;

    try {
      // Hacemos la petición al backend.
      const res = await fetch(`http://localhost:8000/users/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({ email, username }),
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
      toast.error(error);
      return error;
    }
  };
  export default editUserService;
  