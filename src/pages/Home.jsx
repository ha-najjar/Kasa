import React, { useState, useEffect } from "react";
import "../styles/Home.scss";
import logementsData from "../logements.json";
import Card from "../components/Card";
import Banner from "../components/Banner";
import background from "../assets/home-background.png";

function Home() {
  document.title = "Accueil";
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

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
