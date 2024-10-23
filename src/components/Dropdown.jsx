import React, { useState } from "react";
import "../styles/Dropdown.scss";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
}

export default Dropdown;
