import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import headerLogo from '../../images/logo.svg';
import profileIcon from '../../images/profileIcon.svg';
import menuIcon from '../../images/menuIcon.svg';

import './Header.css';

const Header = ({handleShowPopup}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className='header'>
      {isLoggedIn ? (
        <React.Fragment>
          <Link to='/#about-project' className='header__about-link'>
            <img className='header__logo' src={headerLogo} alt='Header logo'/>
          </Link>
          <ul className='header__nav'>
            <li className='header__item'>
              <Link to='/signup' className='header__link header__link_signup'>
                Регистрация
              </Link>
            </li>
            <li className='header__item'>
              <Link to='/signin' className='header__link header__link_signin'>
                Войти
              </Link>
            </li>
          </ul>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to='/#about-project' className='header__about-link'>
            <img className='header__logo' src={headerLogo} alt='Header logo'/>
          </Link>
          <ul className='header__routes'>
            <Link to='/movies' className='header__route header__route_first'>Фильмы</Link>
            <Link to='/saved-movies' className='header__route'>Сохранённые фильмы</Link>
          </ul>
          <ul className='header__profile-wrap'>
            <Link to='/profile' className='header__profile-wrap_text'>Аккаунт</Link>
            <Link to='/profile' className='header__profile_wrap_box'>
              <img className='header__profile_wrap_icon' src={profileIcon} alt='Profile icon link'/>
            </Link>
          </ul>
        </React.Fragment>
      )}
      <button className='header__menu-button' onClick={handleShowPopup}>
        <img className='header__menu-icon' src={menuIcon} alt='icon for a popup menu'/>
      </button>
    </header>
  );
};

export default Header;