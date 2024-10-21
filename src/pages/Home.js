import React, { useState, useEffect } from "react";
import logementsData from "../logements.json";
import Card from "../components/Card";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <div className="home">
      <h1>Nos logements</h1>
      <div className="logements-list">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
