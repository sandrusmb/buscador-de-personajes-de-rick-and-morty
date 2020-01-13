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
    console.log(data);
  };

  render() {
    console.log(this.state);
    const filteredData = this.state.data.filter(character => {
      return character.name
        .toLowerCase()
        .includes(this.state.input.toLowerCase());
    });
    return (
      <div>
        <Header />
        <Search handleChange={this.handleChange} />
        <List data={filteredData} />
      </div>
    );
  }
}

export default App;
