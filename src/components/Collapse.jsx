import React, { useState } from "react";
import "../styles/Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen ? (
        Array.isArray(content) ? (
          content.map((element) => (
            <li className="collapse__element" key={element}>
              {element}
            </li>
          ))
        ) : (
          <div className="collapse-content">{content}</div>
        )
      ) : null}
    </div>
  );
}

export default Collapse;
