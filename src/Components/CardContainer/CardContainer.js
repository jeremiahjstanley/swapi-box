import React from 'react';
import './CardContainer.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardContainer = ({state, cardType, addToFavorites, removeFromFavorites}) => {

  const containerCards = state[cardType].map((card, index) => {
    return (
      <Card
        card={card}
        key={index}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    );
  });

  if (state.error.name) {
    return (
      <div className='card-container'>
        <h2 className='error-header'>{state.error.name}</h2>
        <p className='error-message'>{state.error.message}</p>
      </div>
    );
  }

  if (state[cardType].length) {
    return (
      <div className='card-container full'>
        {containerCards}
      </div>
    );
  }

  if (cardType === 'favorites') {
    return (
      <div className='card-container'>
        <p className='favorites-error'>
        You currently have no favorites
        </p>
      </div>
    );
  }

  else 
    return (
      <div className='card-container'>
        <p className='instructions'>Click a button</p>
      </div>
    );
};

CardContainer.propTypes = {
  state: PropTypes.object.isRequired,
  cardType: PropTypes.string.isRequired,
  error: PropTypes.object,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
};

export default CardContainer;