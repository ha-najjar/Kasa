import "../styles/Header.scss";
import logo from "../assets/logo_header.png";
import { Link, useLocation } from "react-router-dom";

/**
 *
 * @returns création composant Header
 */
const Header = () => {
  const location = useLocation(); // Accès à la route actuelle
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="header" />
      </Link>
      <nav className="header__nav">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "header__nav__item header__nav__item--active"
              : "header__nav__item"
          }
          id="home"
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "header__nav__item header__nav__item--active"
              : "header__nav__item"
          }
          id="about"
        >
          À propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
