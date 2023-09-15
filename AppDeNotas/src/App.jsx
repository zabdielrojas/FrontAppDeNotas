import "./App.css";
import "./index.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { NotePage } from "./pages/NotePage";
import NotFoundPage from "./pages/NotFoundPage";
import Modal from "./components/Modal";
import NewNoteForm from "./components/NewNoteForm";
import Button from "./components/Button";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer>
        {showModal && (
          <Modal setShowModal={setShowModal}>
            <NewNoteForm setShowModal={setShowModal} />
          </Modal>
        )}
        <Button
          text={"Nueva nota"}
          handleOnClick={() => {
            setShowModal(true);
          }}
        />
      </footer>
    </>
  );
}

export default App;
