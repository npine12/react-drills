import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      favorites: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }
  render() {
    return <div>
      <input type='text' onChange={event => this.setState({ search: event.target.value })} />
      {this.state.favorites.filter(
        (food, i) => food.includes(this.state.search)
      ).map((food, i) => <h2 key={i}>{food}</h2>)}
    </div>
  }
}

export default App;
