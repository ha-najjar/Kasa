import React from "react";
import "../styles/Rating.scss"; // Importer les styles pour les étoiles

function Rating({ rating, maxRating = 5 }) {
  return (
    <div className="rating">
      {Array.from({ length: maxRating }, (_, index) => (
        <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
