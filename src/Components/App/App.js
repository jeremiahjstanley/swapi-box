import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import { getOpeningScroll, fetchData } from './api-calls'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      scroll: {},
      favorites: [],
      vehicles: [],
      people: [],
      planets: [],
      buttons: [{name: 'people', active: false},
                {name: 'planets', active: false},
                {name: 'vehicles', active: false},
                {name: 'favorites', active: false}],
      error: {},
      cardType: 'people',
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
    if (!this.state[type].length && type !== 'favorites') {
      try {
      this.setState({[type]: await fetchData(type),
                      cardType: type})
    } catch (error) {
      this.setState({error})
      }
    } else if (type === 'favorites') {
      this.setState({cards: this.state.favorites,
                     cardType: type})
    } else {
      this.setState({cardType: type})
    }
  }

  async componentDidMount() {
    const scroll = await getOpeningScroll()
    this.setState({scroll})
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-header">STAR WARS</h1>
        <Scroll scroll={this.state.scroll}/>
        <Header 
          buttons={this.state.buttons}
          displayCards={this.displayCards}
          favorites={this.state.favorites}
        />
        <CardContainer
          addToFavorites={this.addToFavorites}
          cardType={this.state.cardType}
          state={this.state}
          error={this.state.error}
          removeFromFavorites={this.removeFromFavorites}
        />
      </div>
    );
  }
}

export default App;
