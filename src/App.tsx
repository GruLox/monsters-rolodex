import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

import  { Monster }  from './components/card-list/card-list.component';



interface AppState {
  monsters: Monster[];
  searchField: string;
}


class App extends Component <any, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  handleChange = (e: any) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; 
    const filteredMonsters: Monster[] = monsters.filter((monster: Monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users: any) => this.setState({ monsters: users }));
  }
}

export default App;
