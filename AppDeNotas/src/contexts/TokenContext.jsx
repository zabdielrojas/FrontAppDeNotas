import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

// Creamos un contexto para hacer el token accesible a todos los componentes de la App.
export const TokenContext = createContext();

export const TokenContextProvider = ({ children }) => {
  // Establecemos el estado del token usando el hook useLocalStorage para que lo obtenga de localStorage.
  const [token, setToken] = useLocalStorage("token", "");

  // Creamos un estado donde se guardarán los datos del usuario loggeado.
  const [loggedUser, setLoggedUser] = useState({});

  const navigate = useNavigate();

   const {REACT_APP_BACKEND_PORT} = import.meta.env

  // useEffect para ejecutar despues del primer render y cada vez que cambia el token.
  useEffect(() => {
    //Si el token no existe, cambiamos loggedUser a un objeto vacio y cortamos la funcion.
    if (!token) {
      setLoggedUser({});
      return;
    }

    // Si el token existe recogemos la información de la API y colocamos los datos recogidos en el estado "loggedUser".
    const fetchUserProfile = async () => {
      try {
        const res = await fetch(
          `http://localhost:${REACT_APP_BACKEND_PORT}/users`,
          {
            headers: { Authorization: token },
          }
        );

        // Obtenemos la información del body de la respuesta.
        const body = await res.json();

        //Si la peticion no va bien lanzamos un error.
        if (!res.ok) {
          throw new Error(body.message);
        }

        // Guardamos la información del usuario en una variable.
        setLoggedUser({ ...body.data.user });
      } catch (error) {
        //si hay algun error cargando los datos del usuario logueado lanzamos una alerta.
        console.error(error);
        setToken("");
        navigate("/");
      }
    };

    fetchUserProfile();
  }, [token, navigate, setToken,REACT_APP_BACKEND_PORT]);

  return (
    <TokenContext.Provider
      value={{ token, setToken, loggedUser, setLoggedUser }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  return useContext(TokenContext);
};
