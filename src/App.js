import React, { Component } from 'react';
import Scroll from './Scroll';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots'; //commented out because using fetch to get real data instead of hardcoded 
import './App.css';

class App extends Component {

  // Adding state
  constructor() {
    super();
    this.state = {
      // robots: robots, //commented out because using fetch 
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));

  }

  onSearchChange = (event) => {

    this.setState({ searchField: event.target.value });
    
  }

  render() {

    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    });
    // console.log(filteredRobots);

    return (
      <div className="tc">
        <div>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;