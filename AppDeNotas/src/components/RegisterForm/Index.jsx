import { useState } from "react";
import Button from "../Button";
import registerUserService from "../../services/registerUserService";

const RegisterForm = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await registerUserService({ username, email, password });
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error.message);
    }
    setShowModal(false);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <label hidden htmlFor="username" className="username">
        Username
      </label>
      <input
        id="username"
        type="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="juan"
      />

      <label hidden htmlFor="email" className="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="email@email.com"
      />

      <label hidden htmlFor="password" className="password">
        {" "}
        Password
      </label>
      <input
        id="password"
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
