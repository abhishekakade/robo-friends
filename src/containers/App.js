import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
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

    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    });
    // console.log(filteredRobots);

    if(!robots.length) {
      return <h2>LOADING...</h2>
    }
    else {
      return (
        <div className="tc">
          <div>
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;