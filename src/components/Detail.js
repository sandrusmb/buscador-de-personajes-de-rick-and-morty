import React from "react";
import "../stylesheets/Detail.scss";
import { Link } from "react-router-dom";

function Detail(props) {
  console.log(props.character);
  const { image, name, status, species, location, episode } = props.character;
  return (
    <section className="detail">
      <Link to="/">
        <p className="detail__title">&lt; Volver</p>
      </Link>
      <div className="detail__container">
        <img className="detail__container__photo" src={image} alt={name} />
        <div className="detail__container__aside">
          <h1 className="detail__container__aside-text">Nombre: {name}</h1>
          <p className="detail__container__aside-text">Estatus: {status}</p>
          <p className="detail__container__aside-text">Especie: {species}</p>
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
