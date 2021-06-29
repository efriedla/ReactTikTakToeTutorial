import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Game from './Game.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Game></Game>
      </div>
    );
  }
}

