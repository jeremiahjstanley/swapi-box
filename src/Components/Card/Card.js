import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({card, addToFavorites, removeFromFavorites}) => {

  const handleClick = (card) => {
    card.favorite = !card.favorite;
    card.favorite ? addToFavorites(card) : removeFromFavorites(card.name);
  }

  if (card.model) {
    return (
      <div className="card">
        <p>{card.name}</p>
        <p>{card.model}</p>
        <p>{card.vehicleClass}</p>
        <p>{card.numberOfPassengers}</p>
        <button onClick={() => {handleClick(card)}}>
          Star
        </button>
      </div>
    )  
  }

  if (card.terrain) {
    return (
      <div className="card">
        <p>{card.name}</p>
        <p>{card.terrain}</p>
        <p>{card.population}</p>
        <p>{card.climate}</p>
        <p>{card.residents.join(", ")}</p>
        <button onClick={() => {handleClick(card)}}>
          Star
        </button>
      </div>
    )  
  }

  if (card.homeworld) {
    return (
      <div className="card">
        <p>{card.name}</p>
        <p>{card.homeworld}</p>
        <p>{card.species}</p>
        <p>{card.population}</p>
        <button onClick={() => {handleClick(card)}}>
          Star
        </button>
      </div>
    )  
  }
  
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
}

export default Card;


  