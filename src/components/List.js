import React from "react";
import Card from "./Card";
import "../stylesheets/List.scss";

/* function List(props) {
  console.log(props.characters);
  return (
    <main className="list">
      <ul className="list__ul">
        {props.characters.map(character => {
          console.log(character.id);
          return <Card key={character.id} character={character} />;
        })}
      </ul>
    </main>
  );
}

export default List; */

function List(props) {
  console.log(props.characters);
  if (props.characters.length === 0) {
    return <p className="notfound">Personaje no encontrado</p>;
  } else {
    return (
      <main className="list">
        <ul className="list__ul">
          {props.characters.map(character => {
            return <Card key={character.id} character={character} />;
          })}
        </ul>
      </main>
    );
  }
}

export default List;
