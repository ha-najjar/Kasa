import React, { useState } from "react";
import "../styles/Carousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel__image-container">
        <img
          className="carousel__image"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
      </div>
      <button className="carousel__button prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel__button next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
