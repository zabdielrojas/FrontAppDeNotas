import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { NotePage } from "./pages/NotePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     <Footer/>
    </>
  );
}

export default App;
