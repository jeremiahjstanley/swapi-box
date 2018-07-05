import React from 'react';
import './CardContainer.css'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const CardContainer = ({cards, addToFavorites, removeFromFavorites}) => {

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

  if (cards.length) {
    return (
      <div className="card-container">
        {containerCards}
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
  cards: PropTypes.array.isRequired
}

export default CardContainer;