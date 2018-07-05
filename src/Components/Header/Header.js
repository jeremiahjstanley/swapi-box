import React from 'react';
import './Header.css'

const Header = ({buttons, displayCards, favorites}) => {

  const handleClick = (button) => {
    button.active = true;
    displayCards(button.name);
  }

  const determineButton = (button) => {
    if (button.name === 'favorites') {
      return favorites.length
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
        <p>
         {determineButton(button)}
        </p>
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