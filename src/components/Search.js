import React from "react";
import "../stylesheets/Search.scss";

function Search(props) {
  function handleSearch(ev) {
    console.log(ev.target.value);
    props.handleSearch({ value: ev.target.value });
  }

  return (
    <form className="search">
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
