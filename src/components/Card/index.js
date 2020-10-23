import React from "react";
import "./Card.css";

function Card({ icon, title,children }) {
  return (
    <div className="card-container">
      <div className="row">
        <div className="card-icon center">{icon}</div>
        <div className="card-title ">{title}</div>
      </div>
      {children}
    </div>
  );
}

export default Card;
