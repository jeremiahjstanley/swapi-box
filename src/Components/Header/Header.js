import React from 'react';
import './Header.css'

const Header = ({buttons, displayCards}) => {

  const handleClick = (type) => {
    displayCards(type);
  }


  const clickButtons = buttons.map((button, index) => {
    return (
      <button
        key={index}
        onClick={() => {handleClick(button.name)}}
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