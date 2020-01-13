import React from "react";
import "../stylesheets/Card.scss";
//QUITAR LA FOTO DE PRUEBA DE BILL MURRAY
import murray from "../images/131x131.jpg";

function Card() {
  return (
    <li className="card">
      <img className="card__photo" src={murray} alt="foto del personaje" />
      <div className="card__container">
        <h3 className="card__container__name">Nombre</h3>
        <p className="card__container__type">Especie</p>
      </div>
    </li>
  );
}

export default Card;
