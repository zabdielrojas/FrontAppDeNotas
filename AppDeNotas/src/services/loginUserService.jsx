import { toast } from "react-toastify";
const loginUserService = async (loginData) => {
  const { email, password } = loginData;

  try {
    // Hacemos la petición al backend.
    const res = await fetch(`http://localhost:8000/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
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
export default loginUserService;
