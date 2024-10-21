import React from "react";

function Banner({ imageUrl, altText }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>{altText}</h1>
    </div>
  );
}

export default Banner;
