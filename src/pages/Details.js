import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../logements.json";

function Details() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-details">
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <div className="gallery">
        {logement.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Details;
