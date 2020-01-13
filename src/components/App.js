import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import data from "../api/data.js";
import Detail from "./Detail";
import { Link, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      data: []
    };
  }

  componentDidMount() {
    data().then(data => {
      this.setState({ data: data });
    });
  }

  handleChange = data => {
    this.setState({ input: data.value });
  };

  render() {
    const filteredData = this.state.data.filter(character => {
      return character.name
        .toLowerCase()
        .includes(this.state.input.toLowerCase());
    });
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Search handleChange={this.handleChange} />
            <List data={filteredData} />
          </Route>
          <Route path="/character/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
