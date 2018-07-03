import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
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
                favorite: false }],
      scroll: {}
    }
  }

  componentDidMount() {
    this.setState({scroll: {title: 'A New Hope',
                            releaseDate: '1977-05-25',
                            scrollText: 'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire\'s\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire\'s\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....' }
                 })
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-header">SWAPI-Box</h1>
        <Scroll scroll={this.state.scroll}/>
        <Header/>
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
