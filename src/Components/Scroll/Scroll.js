import React from 'react';
import '../../reset.css'
import './Scroll.css'

const Scroll = ({scroll}) => {
  return (
    <div className='scroll'>
      <p className='scroll-text'>{scroll.scrollText}</p>
      <p className='scroll-title'>{scroll.title}</p>
      <p className='scroll-date'>{scroll.releaseDate}</p>
    </div>
  );
}

export default Scroll