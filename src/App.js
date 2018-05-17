import React, { Component } from 'react';
import Router from './components/Router/index.js';
import NavBar from './components/NavBar/index.js';
import './App.css';
import firebase from 'firebase';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router/>
      </div>
    );
  }
}

export default App;