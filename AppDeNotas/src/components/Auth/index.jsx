import "./style.css";
import { useState } from "react";
import { useTokenContext } from "../../contexts/TokenContext";

import Button from "../Button";
import Modal from "../Modal";
import RegisterForm from "../RegisterForm/Index";
import LoginForm from "../LoginForm/Index";

export const Auth = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { token, setToken } = useTokenContext();

  // Si existe el token y por lo tanto el usuario está loggeado mostramos este componente.
  if (token) {
    return (
      <nav className="auth-nav logged">
        <Button
          handleOnClick={() => {
            setToken("");
          }}
          text={"Cerrar Sesión"}
        />
      </nav>
    );
  }

  // Si el usuario no está loggeado se muestra este otro.
  return (
    <>
      <nav className="auth-nav">
        <ul className="auth-ul">
          <li className="auth-li">
            <Button
              handleOnClick={() => {
                setShowRegisterModal(true);
              }}
              text={"Registro"}
            />
          </li>
          <li className="auth-li">
            <Button
              handleOnClick={() => {
                setShowLoginModal(true);
              }}
              text={"Acceso"}
            />
          </li>
        </ul>
      </nav>

      {showRegisterModal && (
        <Modal setShowModal={setShowRegisterModal}>
          <RegisterForm setShowModal={setShowRegisterModal} />
        </Modal>
      )}

      {showLoginModal && (
        <Modal setShowModal={setShowLoginModal}>
          <LoginForm setShowModal={setShowLoginModal} />
        </Modal>
      )}
    </>
  );
};
export default Auth;
