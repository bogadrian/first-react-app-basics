import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card/card-list.component';
import { SearchBox } from './components/search-box/search-box.componenet';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => this.setState({ monsters: data }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filtredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filtredMonsters} />
      </div>
    );
  }
}

export default App;
