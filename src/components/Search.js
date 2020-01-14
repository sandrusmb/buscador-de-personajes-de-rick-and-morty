import React from "react";
import "../stylesheets/Search.scss";

function Search(props) {
  function handleSearch(ev) {
    // ev.preventDefault();
    console.log(ev.target.value);
    props.handleSearch({ value: ev.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        onChange={handleSearch}
        value={props.value}
      ></input>
    </form>
  );
}

export default Search;
