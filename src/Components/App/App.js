import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import { getOpeningScroll, people, planets, vehicles } from './helper.js'
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
                {name: 'vehicles', active: false},
                {name: 'favorites', active: false}],
      error: {},
      displayFavorites: false,
    };
  };

  addToFavorites = (card) => {
    const favorites = this.state.favorites
    this.setState({favorites: [...favorites, card]})
  }

  removeFromFavorites = (name) => {
    let favorites = this.state.favorites
    favorites = favorites.filter(favorite => favorite.name !== name)
    this.setState({favorites})
  }

  displayCards = async (type) => {
    if (type !== 'favorites')
    try {
      const url = `https://swapi.co/api/${type}/`
      const response = await fetch(url);
      const data = await response.json();
      this.setState({cards: await this.fetchData(type, data)})
    } catch (error) {
      this.setState({error})
    }
    else 
      this.setState({cards: this.state.favorites,
                     displayFavorites: true})
  }

  fetchData = (type, parsedData) => {
        switch (type) {
      case 'people':
         return people(parsedData)
      case 'planets':
          return planets(parsedData)
      case 'vehicles':
          return vehicles(parsedData)
      default: 
          return console.error()
    }
  }

  async componentDidMount() {
    const scroll = await getOpeningScroll()
    this.setState({scroll})
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-header">SWAPI-Box</h1>
        <Scroll scroll={this.state.scroll}/>
        <Header 
          buttons={this.state.buttons}
          displayCards={this.displayCards}
          favorites={this.state.favorites}
        />
        <CardContainer
          addToFavorites={this.addToFavorites}
          cards={this.state.cards}
          displayFavorites={this.state.displayFavorites}
          error={this.state.error}
          removeFromFavorites={this.removeFromFavorites}
        />
      </div>
    );
  }
}

export default App;
