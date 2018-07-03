import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({card}) => {
  return (
    <div className="card">
      Card
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card;