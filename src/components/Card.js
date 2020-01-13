import React from "react";
import "../stylesheets/Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/character/${props.id}`}>
      <li className="card">
        <img
          className="card__photo"
          src={props.photo}
          alt="foto del personaje"
        />
        <h2 className="card__name">{props.name}</h2>
        <p className="card__type">{props.type}</p>
      </li>
    </Link>
  );
}

export default Card;
