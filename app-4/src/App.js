import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      pass: ''
    }
  }
  render() {
    return <div>
      <input onChange={event => this.setState({ user: event.target.value })} type='text' />
      <input onChange={event => this.setState({ pass: event.target.value })} type='text' />
      <button onClick={event => alert(`username: ${this.state.user} password: ${this.state.pass}`)}>Login</button>
    </div>
  }
}
export default App;
