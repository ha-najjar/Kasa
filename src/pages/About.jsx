import React from "react";
import background from "../assets/about-background.png";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
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
        <Dropdown
          title="Fiabilité"
          content="Le contenu de la section Fiabilité"
        />
        <Dropdown title="Respect" content="Le contenu de la section Respect" />
        <Dropdown title="Service" content="Le contenu de la section Service" />
        <Dropdown
          title="Sécurité"
          content="Le contenu de la section Sécurité"
        />
      </div>
    </main>
  );
};

export default About;
