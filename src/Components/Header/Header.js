import React from 'react';
import './Header.css'

const Header = ({buttons, displayCards}) => {

  const handleClick = (button) => {
    button.active = true;
    displayCards(button.name);
  }


  const clickButtons = buttons.map((button, index) => {
    return (
      <button
        className= {button.active ? 'active' : ''}
        key={index}
        onClick={() => {handleClick(button)}}
      >
        {button.name}
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