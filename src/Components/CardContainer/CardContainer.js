import React from 'react';
import './CardContainer.css'
import PropTypes from 'prop-types'

const CardContainer = ({cards}) => {

  const containerCards = cards.map((card, index) => {
    return (
      <Card
        key={Date.now()}
        {...card}
      />
    )
  })

  return (
    <div className="card-container">
    {containerCards}
    </div>
  )
}

CardContainer.propTypes = {
  cards: PropTypes.array.isRequired
}

export default CardContainer;