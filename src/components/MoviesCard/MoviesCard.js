import React, { useState } from 'react';

import './MoviesCard.css';
import cardImg from '../../images/card.svg';
import saveImg from '../../images/save.svg';
import savedImg from '../../images/savedImg.svg';
import removeImg from '../../images/removeImg.svg';

const MoviesCard = () => {

  const [buttonImage, setButtonImage] = useState(saveImg);

  const handleButtonClick = () => {
    if (buttonImage === saveImg) {
      setButtonImage(savedImg);
      document.querySelector('card__button-img'.classList.add('saved'));
    } else {
      setButtonImage(saveImg);
    }
  };

  const handleButtonHover = () => {
    if (buttonImage === savedImg) {
      setButtonImage(removeImg);
    }
  };

  const handleButtonLeave = () => {
    if (buttonImage === removeImg) {
      setButtonImage(savedImg);
    }
  };

  return(
    <div className='card'>
      <div className='card__list'>
        <div className='card__face'>
          <div className='card__button-wrap'>
            <button 
              onClick={handleButtonClick}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              className='card__button'
              >
                <img className={`card__button-img ${buttonImage === savedImg ? 'saved' : ''} ${buttonImage === removeImg ? 'remove' : ''}`} 
                src={buttonImage} 
                alt='save movie button'/>
            </button>
          </div>
          <img className='card__image' src={cardImg} alt='Movie'/>
        </div>
        <div className='card__info'>
          <p className='card__title'>Киноальманах «100 лет дизайна»</p>
          <p className='card__length'>1ч 17м</p>
        </div>
      </div>
    </div>
  )
}

export default MoviesCard;