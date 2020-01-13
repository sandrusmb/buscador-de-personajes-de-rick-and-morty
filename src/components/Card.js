import React from "react";
import "../stylesheets/Card.scss";

function Card(props) {
  return (
    <li className="card">
      <img className="card__photo" src={props.photo} alt="foto del personaje" />
      <h2 className="card__name">{props.name}</h2>
      <p className="card__type">{props.type}</p>
    </li>
  );
}

export default Card;
