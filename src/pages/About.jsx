import React from "react";
import background from "../assets/about-background.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/About.scss";

/**
 *
 * @returns page About
 */
const About = () => {
  document.title = "À propos";
  return (
    <main>
      <Banner imageUrl={background} altText=" " />
      <div className="a-propos">
        <Collapse
          title="Fiabilité"
          content="Le contenu de la section Fiabilité"
        />
        <Collapse title="Respect" content="Le contenu de la section Respect" />
        <Collapse title="Service" content="Le contenu de la section Service" />
        <Collapse
          title="Sécurité"
          content="Le contenu de la section Sécurité"
        />
      </div>
    </main>
  );
};

export default About;
