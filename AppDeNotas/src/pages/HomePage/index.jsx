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
    return (
      <main className="no-logged-main">
        <header className="welcoming-header">
          <h1>¡Bienvenido!</h1>
        </header>
        <p className="welcoming-p">¡Regístrate para empezar a crear!</p>
        <section className="copyright"><p>© Hecho por <a href="https://github.com/zabdielrojas" >Zabdiel</a> y <a href="https://github.com/Aridey08" >Arianna</a></p></section>
      </main>
    );
  }
  return (
    <>
      {loading && <p>Cargando</p>}
      {!loading && (
        <main className="logged-main">
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
          <section className="list-notes-section">{notes.length > 0 ? <ListNotes notes={notes} /> : <h2 className="no-notes-h2">No hay notas</h2>}</section>
          <section className="copyright"><p>© Hecho por <a href="https://github.com/zabdielrojas" >Zabdiel</a> y <a href="https://github.com/Aridey08" >Arianna</a></p></section>
        </main>
      )}
    </>
  );
};
export default HomePage;
