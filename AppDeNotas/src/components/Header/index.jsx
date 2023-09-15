import "./style.css";
import { Link } from "react-router-dom";
import Auth from "../Auth";

export const Header = () => {
  return (
    <header className="main-header">
      <h1>
        <Link className="home-link" to={"/"}>
          APP DE NOTAS
        </Link>
      </h1>

      <Auth />
    </header>
  );
};
export default Header;
