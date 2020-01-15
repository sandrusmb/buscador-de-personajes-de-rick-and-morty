import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import getData from "../api/data.js";
import Detail from "./Detail";
import { Route, Switch } from "react-router-dom";
import Radio from "./Radio";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "",
      search: "",
      characters: []
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

  //fetch
  componentDidMount() {
    getData().then(characters => {
      this.setState({ characters: characters });
    });
  }

  //handles

  handleSearch(data) {
    this.setState({
      search: data.value
    });
  }

  handleStatus(data) {
    this.setState({
      status: data.value
    });
  }

  //router detail
  renderCharacterDetail = props => {
    const routeId = props.match.params.id;
    const character = this.state.characters.find(item => {
      return item.id === parseInt(routeId);
    });
    if (character !== undefined) {
      return <Detail character={character} />;
    } else {
      return <p className="notfound">Personaje no encontrado</p>;
    }
  };

  render() {
    const genderSelected = this.state.genderSelected;
    let filteredCharacters = this.state.characters

      .filter(character => {
        return character.status.includes(this.state.status);
      })
      .filter(character => {
        return character.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      });

    return (
      <React.Fragment>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/">
              <Search
                handleSearch={this.handleSearch}
                value={this.state.search}
              />
              <Radio
                handleStatus={this.handleStatus}
                status={this.state.status}
              />
              <List characters={filteredCharacters} />
            </Route>
            <Route
              path="/character/:id/"
              render={this.renderCharacterDetail}
            ></Route>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
