import React from "react";
import Card from "./Card";
import "../stylesheets/List.scss";

function List() {
  return (
    <main className="list">
      <ul className="list__ul">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </main>
  );
}

export default List;
