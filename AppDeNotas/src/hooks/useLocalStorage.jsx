import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  // Comprueba si existe la propiedad en localStorage y si no le proporciona el valor que le demos.
  const initialValue = JSON.parse(localStorage.getItem(key)) || defaultValue;

  // Crea un estado con el valor que obtuvimos antes.
  const [data, setData] = useState(initialValue);

  // Cuando cambie el estado de data, se guardará en localStorage.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);
  
  // Devolvemos un array con el estado y el setter del estado.
  return [data, setData];
};
export default useLocalStorage;
