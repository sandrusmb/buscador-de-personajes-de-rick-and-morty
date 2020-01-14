import React from "react";
import "../stylesheets/Detail.scss";
import { Link } from "react-router-dom";

function Detail(props) {
  const { image, name, status, species, location, episode } = props.character;
  return (
    <section className="detail">
      <Link to="/" className="detail__link">
        <p className="detail__link__title">&lt; Volver</p>
      </Link>
      <div className="detail__container">
        <img className="detail__container__photo" src={image} alt={name} />
        <div className="detail__container__aside">
          <h1 className="detail__container__aside-text">Nombre: {name}</h1>
          <p className="detail__container__aside-text">
            Estatus: {status === "Alive" ? "💃" : "👻"}
          </p>
          <p className="detail__container__aside-text">
            Especie: {species === "Human" ? "😎" : "👾"}
          </p>
          <p className="detail__container__aside-text">
            Planeta: {location.name}
          </p>
          <p className="detail__container__aside-text">
            Episodes: {episode.length}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Detail;
