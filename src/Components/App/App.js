import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import { scroll } from './helper.js'
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
                favorite: false },
                type: 'people'],
      scroll: {},
      buttons: [{name: 'people'},
                {name: 'planets'},
                {name: 'vehicles'}]
    };
  };

  displayCards = () => {
    console.log('hi')
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(data => data.json())
      .then(parsedData => {
        this.setState({ scroll: scroll(parsedData)})
      })
      .catch(error => console.error('Error:', error))
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-header">SWAPI-Box</h1>
        <Scroll scroll={this.state.scroll}/>
        <Header 
          buttons={this.state.buttons}
          displayCards={this.displayCards}
        />
      </div>
    );
  }
}

export default App;
