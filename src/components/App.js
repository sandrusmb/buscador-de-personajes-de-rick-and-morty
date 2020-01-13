import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import apiData from "../api/data.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    apiData().then(characters => {
      this.setState({ characters: characters });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <List />
      </div>
    );
  }
}

export default App;
