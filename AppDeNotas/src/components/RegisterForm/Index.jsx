import "./style.css";
import { useState } from "react";

import registerUserService from "../../services/registerUserService";

const RegisterForm = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    try {
      // Esto evita la acción por defecto del evento submit.
      event.preventDefault();

      // Hacemos la petición al back con los datos del formulario.
      const response = await registerUserService({ username, email, password });

      // Si la petición no fue exitosa lanzamos un error.
      if (response.status !== "ok") {
        throw new Error(response.message);
      } else {
        // Si no reseteamos los campos y cerramos la modal.
        setUsername("");
        setEmail("");
        setPassword("");
        setShowModal(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <label hidden htmlFor="register-username" className="register-username">
        Username
      </label>
      <input
        id="register-username"
        type="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="juan"
      />

      <label hidden htmlFor="register-email" className="register-email">
        Email
      </label>
      <input
        id="register-email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="email@email.com"
      />

      <label hidden htmlFor="register-password" className="register-password">
        Password
      </label>
      <input
        id="register-password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="*******"
      />

      <button>Registrate</button>
    </form>
  );
};
export default RegisterForm;
