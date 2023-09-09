import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import RegisterForm from "../RegisterForm/Index";
import LoginForm from "../LoginForm/Index";
import { useTokenContext } from "../../contexts/TokenContext";

export const Auth = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { token, setToken } = useTokenContext();

  if (token) {
    return (
      <nav>
        <Button
          handleOnClick={() => {
            setToken("");
          }}
          text={"Cerrar Sesión"}
        />
      </nav>
    );
  }

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
