import React from 'react'
import noImageAvailable from '../../img/noimageavailable.jpg';
import './Cards_style.css'

const Cards = ({ image, title, year }) => {
  return (
    <div className='card'>
        {image === 'N/A' ? (
            <img src={noImageAvailable} alt={title}/>
        ) : (
            <img src={image} alt={title}/>
        )}

        <div className='info_movie'>
            <span className='title_movie'>{title}</span>
            <span className='year_movie'>{year}</span>
        </div>
    </div>
  );
};

export default Cards