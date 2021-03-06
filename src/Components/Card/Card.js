import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({card, addToFavorites, removeFromFavorites}) => {

  const handleClick = (card) => {
    card.favorite = !card.favorite;
    card.favorite ? addToFavorites(card) : removeFromFavorites(card.name);
  };

  switch (card.type) {
    case 'vehicle': 
      return (
        <div className="card vehicleCard">
          <button 
            onClick={() => { handleClick(card) }}
            className={card.favorite.toString()}
          >
            &#9734;  
          </button>
          <h3>{card.name}</h3>
          <p>{card.model}</p>
          <p>{card.vehicleClass}</p>
          <p>{card.numberOfPassengers}</p>
        </div>
      );
    case 'planet':
      return (
        <div className="card planetCard">
          <button 
            onClick={() => { handleClick(card) }}
            className={card.favorite.toString()}
          >
            &#9734;  
          </button>
          <h3>{card.name}</h3>
          <p>{card.terrain}</p>
          <p>{card.population}</p>
          <p>{card.climate}</p>
          <p>{card.residents.map(resident => resident.name + ', ')}</p>
        </div>
      );  
    case 'person':
      return (
        <div className="card characterCard">
          <button 
            onClick={() => { handleClick(card) }}
            className={card.favorite.toString()}
          >
            &#9734;
          </button>
          <h3>{card.name}</h3>
          <p>{card.homeworld}</p>
          <p>{card.species}</p>
          <p>{card.population}</p>
        </div>
      );
    default: 
      console.error('Error'); 
  }
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
};

export default Card;


  