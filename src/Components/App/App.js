import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import { scroll, people, planets, vehicles } from './helper.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      scroll: {},
      cards: [],
      favorites: [],
      buttons: [{name: 'people', active: false},
                {name: 'planets', active: false},
                {name: 'vehicles', active: false}]
    };
  };

  displayCards = async (type) => {
    const url = `https://swapi.co/api/${type}/`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({cards: this.fetchData(type, data)})
  }

  fetchData = (type, parsedData) => {
        switch (type) {
      case 'people':
         return people(parsedData)
        break;
      case 'planets':
          return planets(parsedData)
        break;
      case 'vehicles':
          return vehicles(parsedData)
        break;
      default:
        console.log('error');
    }
  }

  async componentDidMount() {
    const url = 'https://swapi.co/api/films/'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ scroll: scroll(data)})
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
