import React from 'react';
import './Header.css'

const Header = ({buttons, displayCards}) => {

  handleClick = () => {
    displayCards();
  }


  const clickButtons = buttons.map((button, index) => {
    return (
      <button
        key='index'
        onClick={() => handleClick}
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