import React from "react";
import Card from "./Card";
import "../stylesheets/List.scss";

function List(props) {
  return (
    <main className="list">
      <ul className="list__ul">
        {props.data.map(element => {
          return (
            <Card
              key={element.id}
              photo={element.image}
              name={element.name}
              type={element.species}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default List;
