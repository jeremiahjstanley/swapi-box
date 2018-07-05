import React from 'react';
import './Header.css'

const Header = ({buttons, displayCards, favorites}) => {

  const handleClick = (button) => {
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
        className= {button.active ? 'active' : ''}
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

export default Header;