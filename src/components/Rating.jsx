import React from "react";
import "../styles/Rating.scss"; // Importer les styles pour les étoiles

function Rating({ rating, maxRating = 5 }) {
  return (
    <div className="rating">
      {/* crée un tableau de `maxRating` éléments,Chaque élément est une étoile, indexée par `index` */}
      {Array.from({ length: maxRating }, (_, index) => (
        // Si l'index est inférieur à `rating`, on ajoute la classe `filled` pour marquer l'étoile comme remplie
        <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
