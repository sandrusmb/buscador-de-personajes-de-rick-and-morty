import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import Search from "./Search";
import List from "./List";

class App extends React.Component {
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
