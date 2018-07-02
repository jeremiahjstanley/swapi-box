import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [{ name: 'Alderaan',
                terrain: 'grasslands, mountains',
                population: '2000000000',
                climate: 'temperate',
                residents: [ 'Leia Organa' ],
                favorite: false }]
              }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
