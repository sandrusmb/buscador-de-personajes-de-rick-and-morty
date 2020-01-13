import React from "react";
import "../stylesheets/Detail.scss";
import example from "../images/example.jpg";

function Detail() {
  return (
    <section className="detail">
      <p className="detail__title">&lt; Volver</p>
      <div className="detail__container">
        <img className="detail__container__photo" src={example} alt="name" />
        <div className="detail__container__aside">
          <h1 className="detail__container__aside-text">Nombre</h1>
          <p className="detail__container__aside-text">Estatus: Alive</p>
          <p className="detail__container__aside-text">Especie: Human</p>
          <p className="detail__container__aside-text">Planeta: Earth</p>
          <p className="detail__container__aside-text">Episodes: 31</p>
        </div>
      </div>
    </section>
  );
}

export default Detail;
