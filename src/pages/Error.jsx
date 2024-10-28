import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.scss";

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
