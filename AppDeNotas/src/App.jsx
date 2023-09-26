import "./App.css";
import "./index.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { NotePage } from "./pages/NotePage";
import { PublicNotePage } from "./pages/PublicNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NotePage />} />
        <Route path="/notes/public/:uuid" element={<PublicNotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     <ToastContainer position="top-center" pauseOnHover theme="light" />
     <Footer/>
    </>
  );
}

export default App;
