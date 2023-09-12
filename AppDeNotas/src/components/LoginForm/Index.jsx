import { useState } from "react";

import loginUserService from "../../services/loginUserService";
import { useTokenContext } from "../../contexts/TokenContext";

const LoginForm = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useTokenContext();

  const handleSubmit = async (event) => {
    try {
      // Esto evita el  comportamiento por defecto del evento submit.
      event.preventDefault();
      // Hacemos la petición  al backend y guardamos la respuesta en una variable.
      const response = await loginUserService({ email, password });

      // Si la respuesta no es ok lanzamos un error.
      if (response.status !== "ok") {
        throw new Error(response.message);
      }
      // Si no guardamos el token en local storage y reseteamos los campos y cerramos la modal.
      setToken(response.data.token);
      setEmail("");
      setPassword("");
      setShowModal(false);
    } catch (error) {
      console.error(error.message);
    } 
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label hidden htmlFor="login-email" className="login-email">
        Email
      </label>
      <input
        id="login-email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="email@email.com"
      />

      <label hidden htmlFor="login-password" className="login-password">
        {" "}
        Password
      </label>
      <input
        id="login-password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="*******"
      />

      <button>Accede</button>
    </form>
  );
};
export default LoginForm;
