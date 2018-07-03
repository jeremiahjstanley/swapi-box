import React from 'react';

const CardContainer = ({cards}) => {

  const containerCards = cards.map((card, index) => {
    return (
      <Card
        key={Date.now()}
        {...card}
      />;
    )
  })

  return (
    <div className="card-container">
    {containerCards}
    </div>
  )
}

export default CardContainer;