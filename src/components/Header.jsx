import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
