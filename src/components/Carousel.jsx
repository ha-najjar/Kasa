import React, { useState } from "react";
import "../styles/Carousel.scss";

const Carousel = ({ images }) => {
  // Déclaration d'un état pour suivre l'index de l'image courante affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour naviguer vers l'image précédente
  const goToPrevious = () => {
    // Vérifie si l'utilisateur est actuellement sur la première image
    const isFirstSlide = currentIndex === 0;
    // Si c'est la première image, revenir à la dernière; sinon, passer à l'image précédente
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex); // Mise à jour de l'index de l'image courante
  };

  // Fonction pour naviguer vers l'image suivante
  const goToNext = () => {
    // Vérifie si l'utilisateur est actuellement sur la dernière image
    const isLastSlide = currentIndex === images.length - 1;
    // Si c'est la dernière image, revenir à la première; sinon, passer à l'image suivante
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex); // Mise à jour de l'index de l'image courante
  };

  // Retourne le rendu JSX du carrousel
  return (
    <div className="carousel">
      {/* Conteneur pour l'image actuelle */}
      <div className="carousel__image-container">
        {/* Affiche l'image actuelle en fonction de l'index actuel */}
        <img
          className="carousel__image"
          src={images[currentIndex]} // Source de l'image selon l'index actuel
          alt={`Slide ${currentIndex}`} // Texte alternatif pour l'accessibilité
        />
      </div>

      {/* Boutons de navigation, affichés uniquement s'il y a plus d'une image */}
      {images.length > 1 && (
        <>
          {/* Bouton pour l'image précédente */}
          <button className="carousel__button prev" onClick={goToPrevious}>
            ❮
          </button>

          {/* Bouton pour l'image suivante */}
          <button className="carousel__button next" onClick={goToNext}>
            ❯
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel; // Export du composant pour utilisation dans d'autres fichiers
