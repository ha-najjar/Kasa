import React, { useState } from "react";
import "../styles/Collapse.scss";

// Déclaration du composant fonctionnel Collapse qui reçoit deux props : `title` (le titre de la section) et `content` (le contenu à afficher dans la section).
function Collapse({ title, content }) {
  // Déclare un état local `isOpen`, initialisé à `false` pour indiquer que la section est fermée par défaut.

  const [isOpen, setIsOpen] = useState(false);

  // Déclare une fonction `toggleCollapse` qui inverse l'état `isOpen` chaque fois qu'elle est appelée.
  // Cela permet d'ouvrir ou de fermer la section.
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    // Ajoute une classe CSS conditionnelle `collapse--open` si `isOpen` est vrai,

    <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      {/* En-tête de la section collapse, cliquable pour ouvrir ou fermer la section */}
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>

        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Contenu de la section, affiché uniquement si `isOpen` est vrai */}
      {isOpen && (
        <div className="collapse-content">
          {/* Vérifie si `content` est un tableau pour le traiter comme une liste d'éléments */}
          {Array.isArray(content) ? (
            // Affiche chaque élément du tableau `content` dans une balise <li> à l'intérieur d'une liste <ul>
            <ul>
              {content.map((element) => (
                // Chaque élément reçoit une clé unique (ici `element` lui-même, en supposant qu'il soit unique)
                <li className="collapse__element" key={element}>
                  {element}
                </li>
              ))}
            </ul>
          ) : (
            // Si `content` n'est pas un tableau, l'affiche directement dans un paragraphe <p>
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
