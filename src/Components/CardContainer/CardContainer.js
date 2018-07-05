import React from 'react';
import './CardContainer.css'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const CardContainer = ({cards, error, addToFavorites, removeFromFavorites}) => {

  const containerCards = cards.map((card, index, array) => {
    return (
      <Card
        card={card}
        key={index}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    )
  })

  if (cards.length) {
    return (
      <div className="card-container">
        {containerCards}
      </div>
    )
  }

  if (error) {
    return (
      <div className="card-container">
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    )
  }

  else 
    return (
      <div className="card-container">
        <p>Click a button</p>
      </div>
    )
}

CardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  error: PropTypes.object,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
}

export default CardContainer;