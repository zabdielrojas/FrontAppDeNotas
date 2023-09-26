import "./style.css";
import { useState , useEffect} from "react";
import { useTokenContext } from "../../contexts/TokenContext";

import Button from "../Button";
import Modal from "../Modal";
import RegisterForm from "../RegisterForm/Index";
import LoginForm from "../LoginForm/Index";
import EditUserForm from "../EditUserForm";
import { toast } from "react-toastify";
export const Auth = ({currentUsername,setCurrentUsername}) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showEditUserModal,setShowEditUserModal] = useState(false);
  const { token, setToken, loggedUser } = useTokenContext();
 
  // Si existe el token y por lo tanto el usuario está loggeado mostramos este componente.
  if (token) {
    return (<>
      <nav className="auth-nav logged">
        {currentUsername&&<Button
          handleOnClick={(event) => {
            setShowEditUserModal(true)
          }}
          text={currentUsername}
        />}
        <Button
          handleOnClick={() => {
            setToken("");
          }}
          text={"Cerrar Sesión"}
        />
      </nav>    {showEditUserModal && (
        <Modal setShowModal={setShowEditUserModal}>
          <EditUserForm setCurrentUsername={setCurrentUsername} setShowModal={setShowEditUserModal} />
        </Modal>
      )}</>
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
