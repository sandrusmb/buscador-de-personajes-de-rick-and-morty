import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import data from "../api/data.js";
import Detail from "./Detail";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      data: []
    };
    this.renderDetail = this.renderDetail.bind(this);
  }

  componentDidMount() {
    data().then(data => {
      this.setState({ data: data });
    });
  }

  handleChange = data => {
    this.setState({ input: data.value });
  };

  renderDetail(props) {
    const routeId = props.match.params.id;
    console.log(this.state.data, props.match.params.id);
    this.state.data.find(element => {
      return element.id === parseInt(routeId);
    });
    if (data === undefined) {
      return <p>Personaje no encontrado</p>;
    } else {
      return <Detail data={data} />;
    }
  }

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
          <Route path="/character/:id" render={this.renderDetail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
