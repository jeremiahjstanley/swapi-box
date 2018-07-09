import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({card, addToFavorites, removeFromFavorites}) => {

  const handleClick = (card) => {
    card.favorite = !card.favorite;
    card.favorite ? addToFavorites(card) : removeFromFavorites(card.name);
  }

  switch(card.type) {
    case 'vehicle': 
      return (
        <div className="card vehicleCard">
          <p>{card.name}</p>
          <p>{card.model}</p>
          <p>{card.vehicleClass}</p>
          <p>{card.numberOfPassengers}</p>
          <button onClick={() => {handleClick(card)}}>
            Star
          </button>
        </div>
      )
  case 'planet':
    return (
      <div className="card planetCard">
        <p>{card.name}</p>
        <p>{card.terrain}</p>
        <p>{card.population}</p>
        <p>{card.climate}</p>
        <p>{card.residents.map(resident => resident.name + ', ')}</p>
        <button onClick={() => {handleClick(card)}}>
          Star
        </button>
      </div>
    )  
  case 'person':
    return (
      <div className="card characterCard">
        <p>{card.name}</p>
        <p>{card.homeworld}</p>
        <p>{card.species}</p>
        <p>{card.population}</p>
        <button onClick={() => {handleClick(card)}}>
          Star
        </button>
      </div>
    )
  default: 
    return console.error()  
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
}

export default Card;


  