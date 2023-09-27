import "./style.css";
import { ListNotes } from "../../components/ListNotes";
import { Button } from "../../components/Button";
import { useGetNotes } from "../../hooks/useGetNotes";
import { useEffect, useState } from "react";
import { useTokenContext } from "../../contexts/TokenContext";
export const HomePage = () => {
  const { token } = useTokenContext();
  const { notes, error, loading, setSearchParams } = useGetNotes();
  const [category, setCategory] = useState("Todas");
  if (!token) {
    return;
  }
  <></>; // To do: rellenar con algo.
  return (
    <>
      {loading && <p>Cargando</p>}
      {!loading && (
        <main>
          <header>
            <div className="new-note-category">
              <select
                id="new-note-category"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                  setSearchParams({ category: event.target.value });
                }}
              >
                <option value={""}>Todas</option>
                <option value={"Otras"}>Otras</option>
                <option value={"importantes"}>Importantes</option>
                <option value={"emergencia"}>Emergencia</option>
                <option value={"citas"}>Citas</option>
              </select>
            </div>
          </header>
          {notes.length > 0 ? <ListNotes notes={notes} /> : <p>No hay notas</p>}
        </main>
      )}
    </>
  );
};
export default HomePage;
