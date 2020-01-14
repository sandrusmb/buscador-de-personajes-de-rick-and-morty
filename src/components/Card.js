import React from "react";
import "../stylesheets/Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  console.log(props.character.name);
  const { id, image, name, species } = props.character;

  return (
    <Link to={`/character/${id}`}>
      <li className="card">
        <img className="card__photo" src={image} alt={name} />
        <h2 className="card__name">{name}</h2>
        <p className="card__type">{species}</p>
      </li>
    </Link>
  );
}

export default Card;
