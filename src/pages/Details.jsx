import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../logements.json";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";
import "../styles/Details.scss";

function Details() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-details">
      <Carousel images={logement.pictures} />
      <div className="log__item">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="host__item">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="collapse-container ">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Details;
