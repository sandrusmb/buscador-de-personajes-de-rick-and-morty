import React from "react";
import "../stylesheets/Card.scss";
//QUITAR LA FOTO DE PRUEBA DE BILL MURRAY
import example from "../images/example.jpg";

function Card(props) {
  console.log(props);
  return (
    <li className="card">
      <img className="card__photo" src={props.photo} alt="foto del personaje" />
      <h2 className="card__name">{props.name}</h2>
      <p className="card__type">{props.type}</p>
    </li>
  );
}

export default Card;
