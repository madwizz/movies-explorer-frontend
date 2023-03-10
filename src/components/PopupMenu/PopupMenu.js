import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import closeBtn from '../../images/closebtn.svg';

import './PopupMenu.css'

const PopupMenu = ({ handleHidePopup, showPopup }) => {
  return (
    <div className={`popup${showPopup ? ' show' : ''}`}>
      <button className='popup__close-button' onClick={handleHidePopup}>
        <img className='popup__close-img' src={closeBtn} alt='Popup close button'/>
      </button>
      <div className='popup__menu'>
        <Link to='/' onClick={handleHidePopup} className='popup__item'>Главная</Link>
        <Link to='/movies' onClick={handleHidePopup} className='popup__item'>Фильмы</Link>
        <Link to='/saved-movies' onClick={handleHidePopup} className='popup__item'>Сохранённые фильмы</Link>
      </div>
      <div className='popup__wrap'>
        <Link to='/profile' className='popup__text'>Аккаунт</Link>
        <Link to='/profile' className='popup__box'>
          <img className='popup__icon' src={profileIcon} alt='Profile icon link'/>
        </Link>
      </div>
    </div>
  );
}

export default PopupMenu;
