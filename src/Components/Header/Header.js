import React from 'react';
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({buttons, displayCards, favorites}) => {

  const handleClick = (button) => {
    buttons.map(button => button.active = false)
    button.active = true;
    displayCards(button.name);
  }

  const determineButton = (button) => {
    if (button.name === 'favorites') {
      return (        
        <p>
         {favorites.length}
        </p>
      )
    }
  }

  const clickButtons = buttons.map((button, index) => {
    return (
      <button
        className={button.active ? 'button active' : 'button'}
        key={index}
        onClick={() => {handleClick(button)}}
      >
        {button.name}
        {determineButton(button)}
      </button>
    )
  })

return (
  <div>
    {clickButtons}
  </div>
  )
}

Header.propTypes = {
  buttons: PropTypes.array.isRequired,
  displayCards: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}


export default Header;