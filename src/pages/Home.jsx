import React, { useState, useEffect } from "react";
import "../styles/Home.scss";
import logementsData from "../logements.json";
import Card from "../components/Card";
import Banner from "../components/Banner";
import background from "../assets/home-background.png";

function Home() {
  document.title = "Accueil";
  // Déclaration de l'état local 'logements' et sa fonction de mise à jour 'setLogements'
  // Initialisé comme un tableau vide
  const [logements, setLogements] = useState([]);
  // Utilisation de useEffect pour charger les données de logements lors du montage du composant
  useEffect(() => {
    // Mise à jour de l'état 'logements' avec les données importées 'logementsData'
    setLogements(logementsData);
  }, []); // Le tableau vide [] indique que cet effet ne s'exécutera qu'une seule fois

  return (
    <div className="home">
      <Banner imageUrl={background} altText="Chez vous, partout et ailleurs" />
      <div className="logements-list">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
