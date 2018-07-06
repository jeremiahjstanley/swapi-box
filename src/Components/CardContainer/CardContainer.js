import React from 'react';
import './CardContainer.css'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const CardContainer = ({cards, displayFavorites, error, addToFavorites, removeFromFavorites}) => {

  const containerCards = cards.map((card, index) => {
    return (
      <Card
        card={card}
        key={index}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    )
  })

  if (error.name) {
    return (
      <div className='card-container'>
        <h2 className='error-header'>{error.name}</h2>
        <p className='error-message'>{error.message}</p>
      </div>
    )
  }

  if (cards.length) {
    return (
      <div className="card-container">
        {containerCards}
      </div>
    )
  }

  if (displayFavorites) {
    return (
      <div className='card-container'>
        <p className='favorites-error'>
        You currently have no favorites
        </p>
      </div>
    )
  }

  else 
    return (
      <div className='card-container'>
        <p className='instructions'>Click a button</p>
      </div>
    )
}

CardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  displayFavorites: PropTypes.bool.isRequired,
  error: PropTypes.object,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
}

export default CardContainer;