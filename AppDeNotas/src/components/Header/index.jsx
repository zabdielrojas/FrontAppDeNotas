import Auth from "../Auth";

export const Header = () => {
  return (
    <header>
      <h1>App de notas</h1>
      <nav className="categories">
        <ul>
          <li>Importante</li>
          <li>Otras</li>
          <li>Otras más</li>
        </ul>
      </nav>
      <Auth />
    </header>
  );
};
export default Header;
