import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo'
import NewTask from './NewTask'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return <div>
      <NewTask />
    </div>
  }
}

export default App;
