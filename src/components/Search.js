import React from "react";
import "../stylesheets/Search.scss";

function Search(props) {
  function handleChange(ev) {
    props.handleChange({ value: ev.target.value });
  }
  return (
    <section className="search">
      <input
        className="search__input"
        type="text"
        onChange={handleChange}
      ></input>
    </section>
  );
}

export default Search;
