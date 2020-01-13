import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import data from "../api/data.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    data().then(data => {
      this.setState({ data: data });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
