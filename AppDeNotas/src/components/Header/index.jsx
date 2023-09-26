import "./style.css";
import { Link } from "react-router-dom";
import Auth from "../Auth";
import { useState } from "react";
export const Header = () => {
  const [currentUsername, setCurrentUsername] = useState();
  return (
    <header className="main-header">
      <h1>
        <Link className="home-link" to={"/"}>
          APP DE NOTAS
        </Link>
      </h1>

      <Auth currentUsername={currentUsername} setCurrentUsername={setCurrentUsername} />
    </header>
  );
};
export default Header;
