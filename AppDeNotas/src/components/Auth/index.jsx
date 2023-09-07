import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import RegisterForm from "../RegisterForm/Index";

export const Auth = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const user = false;

  if (user) {
    return (
      <nav>
        <link>cerrar sesión</link>
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
            <Button handleOnClick={() => {}} text={"Acceso"} />
          </li>
        </ul>
      </nav>

      {showRegisterModal && (
        <Modal setShowModal={setShowRegisterModal}>
          {" "}
          <RegisterForm />{" "}
        </Modal>
      )}
    </>
  );
};
export default Auth;
