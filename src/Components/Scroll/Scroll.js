import React from 'react';
import './Scroll.css'

const Scroll = ({scroll}) => {
  return (
    <div>
      <p>{scroll.scrollText}</p>
      <p className='scroll-title'>{scroll.title}</p>
      <p>{scroll.releaseDate}</p>
    </div>
  );
}

export default Scroll