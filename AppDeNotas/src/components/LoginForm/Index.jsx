import { useState } from "react";
import loginUserService from "../../services/loginUserService";
import { useTokenContext } from "../../contexts/TokenContext";

const LoginForm = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useTokenContext();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await loginUserService({ email, password });

      if (response.status !== "ok") {
        throw new Error(response.message);
      }
      setToken(response.data.token);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error.message);
    } finally {
      setShowModal(false);
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
