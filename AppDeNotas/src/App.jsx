import "./index.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { NotePage } from "./pages/NotePage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer>Por Zabdiel y Ari</footer>
    </>
  );
}

export default App;
