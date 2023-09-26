import { useState } from "react";
import { useTokenContext } from "../../contexts/TokenContext";
import { toast } from "react-toastify";
import "./style.css"
import editUserService from "../../services/editUserService";
const EditUserForm = ({ setShowModal,setCurrentUsername }) => {
  const [username, setUsername] = useState("");
 const [email, setEmail] = useState("")
 const {token}= useTokenContext()
  const handleSubmit = async (event) => {
    try {
      // Esto evita el  comportamiento por defecto del evento submit.
      event.preventDefault();
      // Hacemos la petición  al backend y guardamos la respuesta en una variable.
      const response = await editUserService({ email,username }, token);

      // Si la respuesta no es ok lanzamos un error.
      if (response.status !== "ok") {
        throw new Error(response.message);
      }
      // Si lo es reseteamos los campos y cerramos la modal.
      setEmail("");
      setCurrentUsername(username)
      setUsername("")
      setShowModal(false);
    } catch (error) {
      toast.error(error.message);
    } 
  };

  return (
    <form className="edit-user-form" onSubmit={handleSubmit}>
      <label hidden htmlFor="edit-user-email" className="edit-user-email">
        Email
      </label>
      <input
        id="edit-user-email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="email@email.com"
      />

      <label hidden htmlFor="edit-user-username" className="edit-user-username">
        Username
      </label>
      <input
        id="edit-user-username"
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="Usuario"
      />
      <button>Editar</button>
    </form>
  );
};
export default EditUserForm;
