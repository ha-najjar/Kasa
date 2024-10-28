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
    <main>
      <div className="logement-details">
        <Carousel images={logement.pictures} />
        <div className="log__item">
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <p>{logement.tags}</p>
          </div>
          <div className="host__item">
            <div>
              <p>{logement.host.name}</p>
              <Rating rating={logement.rating} />
            </div>
            <img src={logement.host.picture} />
          </div>
        </div>
        <div className="collapse-container ">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </main>
  );
}

export default Details;
